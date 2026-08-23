import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JOBS_ROOT = path.join(PROJECT_ROOT, 'content-jobs');
const PROMPT_FILE = path.join(PROJECT_ROOT, 'scripts', 'prompts', 'game-guide-writer.md');
const DEFAULT_TIMEOUT_MS = 60_000;
const MAX_TOKENS = 6_000;

function relativePath(filePath) {
	return path.relative(PROJECT_ROOT, filePath) || '.';
}

function fail(message) {
	throw new Error(message);
}

function parseArgs(argv) {
	const dryRun = argv.includes('--dry-run');
	const positional = argv.filter((arg) => !arg.startsWith('--'));

	if (positional.length !== 1) {
		fail('Usage: npm run article -- <slug> [--dry-run]');
	}

	const [slug] = positional;
	if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(slug)) {
		fail(`Invalid slug "${slug}". Use lowercase letters, numbers, hyphens, or underscores.`);
	}

	return { dryRun, slug };
}

function firstEnv(names) {
	for (const name of names) {
		const value = process.env[name]?.trim();
		if (value) return { name, value };
	}
	return null;
}

function parseTimeout(value) {
	if (!value) return DEFAULT_TIMEOUT_MS;
	const timeout = Number(value);
	if (!Number.isInteger(timeout) || timeout < 1_000) {
		fail('APIMART_TIMEOUT_MS must be an integer of at least 1000 milliseconds.');
	}
	return timeout;
}

function isApimartUrl(value) {
	try {
		const url = new URL(value);
		return /(^|\.)apimart\.ai$/i.test(url.hostname);
	} catch {
		return false;
	}
}

function resolveConfig({ requireComplete }) {
	const apiKey = firstEnv(['APIMART_API_KEY', 'ANTHROPIC_AUTH_TOKEN', 'ANTHROPIC_API_KEY']);
	const baseUrl = firstEnv(['APIMART_BASE_URL', 'ANTHROPIC_BASE_URL']);
	const model = firstEnv(['APIMART_MODEL', 'ANTHROPIC_MODEL', 'ANTHROPIC_DEFAULT_SONNET_MODEL']);
	const timeoutMs = parseTimeout(process.env.APIMART_TIMEOUT_MS);

	if (!requireComplete) {
		if (baseUrl) {
			try {
				new URL(baseUrl.value);
			} catch {
				fail(`${baseUrl.name} must be an absolute URL.`);
			}
		}
		return { apiKey, baseUrl, model, timeoutMs };
	}

	const missing = [];
	if (!apiKey) missing.push('APIMART_API_KEY (or ANTHROPIC_AUTH_TOKEN / ANTHROPIC_API_KEY)');
	if (!baseUrl) missing.push('APIMART_BASE_URL (or APIMART-configured ANTHROPIC_BASE_URL)');
	if (!model) missing.push('APIMART_MODEL (or ANTHROPIC_MODEL / ANTHROPIC_DEFAULT_SONNET_MODEL)');
	if (missing.length > 0) {
		fail(`Missing APIMart configuration: ${missing.join(', ')}.`);
	}
	if (!isApimartUrl(baseUrl.value)) {
		fail(`${baseUrl.name} does not point to an APIMart host. Refusing to send this job to another provider.`);
	}

	return { apiKey, baseUrl, model, timeoutMs };
}

function chatCompletionsUrl(baseUrl) {
	const url = new URL(baseUrl);
	if (!/^https?:$/.test(url.protocol)) {
		fail('APIMART_BASE_URL must use http or https.');
	}

	const pathname = url.pathname.replace(/\/+$/, '');
	if (pathname.endsWith('/chat/completions')) return url.toString();
	url.pathname = pathname.endsWith('/v1')
		? `${pathname}/chat/completions`
		: `${pathname}/v1/chat/completions`;
	return url.toString();
}

function extractText(payload) {
	const candidates = [
		payload?.data?.content,
		payload?.content,
		payload?.data?.choices?.[0]?.message?.content,
		payload?.choices?.[0]?.message?.content,
	];

	for (const content of candidates) {
		if (typeof content === 'string' && content.trim()) return content.trim();
		if (Array.isArray(content)) {
			const text = content
				.filter((part) => part && part.type === 'text' && typeof part.text === 'string')
				.map((part) => part.text)
				.join('')
				.trim();
			if (text) return text;
		}
	}

	return '';
}

async function fetchWithTimeout(url, options, timeoutMs) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	try {
		return await fetch(url, { ...options, signal: controller.signal });
	} catch (error) {
		if (error?.name === 'AbortError') {
			fail(`APIMart request timed out after ${timeoutMs} ms.`);
		}
		fail(`APIMart request failed: ${error?.message || 'network error'}`);
	} finally {
		clearTimeout(timer);
	}
}

async function requestArticle(config, prompt, research) {
	const url = chatCompletionsUrl(config.baseUrl.value);
	const body = JSON.stringify({
		model: config.model.value,
		max_tokens: MAX_TOKENS,
		stream: false,
		messages: [
			{ role: 'system', content: prompt },
			{ role: 'user', content: research },
		],
	});
	const options = {
		method: 'POST',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${config.apiKey.value}`,
			'content-type': 'application/json',
		},
		body,
	};

	let lastError;
	for (let attempt = 0; attempt < 2; attempt += 1) {
		try {
			const response = await fetchWithTimeout(url, options, config.timeoutMs);
			const raw = await response.text();
			let payload;
			try {
				payload = JSON.parse(raw);
			} catch {
				fail(`APIMart returned malformed JSON (HTTP ${response.status}).`);
			}

			if (!response.ok) {
				const providerMessage = typeof payload?.error?.message === 'string'
					? payload.error.message
					: typeof payload?.message === 'string'
						? payload.message
						: `HTTP ${response.status}`;
				fail(`APIMart returned an HTTP error: ${providerMessage}`);
			}

			const article = extractText(payload);
			if (!article) fail('APIMart returned an empty article body.');
			return article;
		} catch (error) {
			lastError = error;
			const retryable = error?.message?.includes('HTTP 429')
				|| error?.message?.includes('HTTP 5')
				|| error?.message?.startsWith('APIMart request failed:');
			if (!retryable || attempt === 1) throw error;
		}
	}

	throw lastError || new Error('APIMart request failed.');
}

async function readRequired(filePath, label) {
	let value;
	try {
		value = await readFile(filePath, 'utf8');
	} catch (error) {
		if (error?.code === 'ENOENT') fail(`${label} not found: ${relativePath(filePath)}`);
		fail(`Could not read ${label} ${relativePath(filePath)}: ${error.message}`);
	}
	if (!value.trim()) fail(`${label} is empty: ${relativePath(filePath)}`);
	return value;
}

async function main() {
	const { dryRun, slug } = parseArgs(process.argv.slice(2));
	const jobDir = path.join(JOBS_ROOT, slug);
	const researchFile = path.join(jobDir, 'research.md');
	const articleFile = path.join(jobDir, 'article.md');

	const research = await readRequired(researchFile, 'Research file');
	const prompt = await readRequired(PROMPT_FILE, 'Writer prompt');
	const config = resolveConfig({ requireComplete: !dryRun });

	if (dryRun) {
		console.log('dry-run: PASS');
		console.log(`input file: ${relativePath(researchFile)}`);
		console.log(`prompt file: ${relativePath(PROMPT_FILE)}`);
		console.log('API call: skipped');
		return;
	}

	const article = await requestArticle(config, prompt, research);
	await mkdir(jobDir, { recursive: true });
	const temporaryFile = `${articleFile}.tmp-${process.pid}`;
	try {
		await writeFile(temporaryFile, `${article}\n`, 'utf8');
		await rename(temporaryFile, articleFile);
	} finally {
		await rm(temporaryFile, { force: true });
	}

	console.log(`model: ${config.model.value}`);
	console.log(`input file: ${relativePath(researchFile)}`);
	console.log(`output file: ${relativePath(articleFile)}`);
	console.log(`output character count: ${article.length}`);
}

try {
	await main();
} catch (error) {
	console.error(`Error: ${error?.message || error}`);
	process.exitCode = 1;
}
