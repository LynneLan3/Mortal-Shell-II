import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JOBS_ROOT = path.join(PROJECT_ROOT, 'content-jobs');
const PROMPT_FILE = path.join(PROJECT_ROOT, 'scripts', 'prompts', 'game-guide-writer.md');
const DEFAULT_APIMART_BASE_URL = 'https://api.apimart.ai/v1';
const DEFAULT_TIMEOUT_MS = 60_000;
const MAX_TOKENS = 8_000;

function relativePath(filePath) {
	return path.relative(PROJECT_ROOT, filePath) || '.';
}

function fail(message) {
	throw new Error(message);
}

function parseArgs(argv) {
	const dryRun = argv.includes('--dry-run');
	const formatArg = argv.find((arg) => arg.startsWith('--format='));
	const format = formatArg ? formatArg.slice('--format='.length) : 'article';
	const positional = argv.filter((arg) => !arg.startsWith('--'));

	if (positional.length !== 1) {
		fail('Usage: npm run article -- <slug> [--dry-run] [--format=page-package]');
	}
	if (!['article', 'page-package'].includes(format)) {
		fail(`Invalid format "${format}". Use article or page-package.`);
	}

	const [slug] = positional;
	if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(slug)) {
		fail(`Invalid slug "${slug}". Use lowercase letters, numbers, hyphens, or underscores.`);
	}

	return { dryRun, format, slug };
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

function resolveConfig({ requireComplete }) {
	const apiKey = firstEnv(['APIMART_API_KEY']);
	const baseUrl = firstEnv(['APIMART_BASE_URL']) || {
		name: 'APIMART_BASE_URL (default)',
		value: DEFAULT_APIMART_BASE_URL,
	};
	const model = firstEnv(['APIMART_MODEL']);
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
	if (!apiKey) missing.push('APIMART_API_KEY');
	if (!model) missing.push('APIMART_MODEL');
	if (missing.length > 0) {
		fail(`Missing APIMart configuration: ${missing.join(', ')}.`);
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

function parsePagePackage(text) {
	const normalized = text
		.trim()
		.replace(/^```(?:json)?\s*/i, '')
		.replace(/\s*```$/i, '')
		.trim();
	let value;
	try {
		value = JSON.parse(normalized);
	} catch {
		fail('APIMart page package was not valid JSON.');
	}
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		fail('APIMart page package must be a JSON object.');
	}
	for (const field of ['title', 'description', 'quickAnswer', 'articleMarkdown']) {
		if (typeof value[field] !== 'string' || !value[field].trim()) {
			fail(`APIMart page package is missing a non-empty ${field}.`);
		}
	}
	if (!Array.isArray(value.faq) || value.faq.some((item) =>
		!item || typeof item.question !== 'string' || !item.question.trim()
		|| typeof item.answer !== 'string' || !item.answer.trim())) {
		fail('APIMart page package faq must be an array of question/answer objects.');
	}
	return value;
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
	const { dryRun, format, slug } = parseArgs(process.argv.slice(2));
	const jobDir = path.join(JOBS_ROOT, slug);
	const researchFile = path.join(jobDir, 'research.md');
	const articleFile = path.join(jobDir, 'article.md');
	const packageFile = path.join(jobDir, 'page.json');

	const research = await readRequired(researchFile, 'Research file');
	const promptFile = format === 'page-package'
		? path.join(PROJECT_ROOT, 'scripts', 'prompts', 'game-guide-page-package.md')
		: PROMPT_FILE;
	const prompt = await readRequired(promptFile, 'Writer prompt');
	const config = resolveConfig({ requireComplete: !dryRun });

	if (dryRun) {
		console.log('dry-run: PASS');
		console.log(`input file: ${relativePath(researchFile)}`);
		console.log(`prompt file: ${relativePath(promptFile)}`);
		console.log(`format: ${format}`);
		console.log('API call: skipped');
		return;
	}

	const responseText = await requestArticle(config, prompt, research);
	const pagePackage = format === 'page-package' ? parsePagePackage(responseText) : null;
	const article = pagePackage?.articleMarkdown ?? responseText;
	await mkdir(jobDir, { recursive: true });
	const temporaryFile = `${articleFile}.tmp-${process.pid}`;
	try {
		await writeFile(temporaryFile, `${article}\n`, 'utf8');
		await rename(temporaryFile, articleFile);
		if (pagePackage) await writeFile(packageFile, `${JSON.stringify(pagePackage, null, 2)}\n`, 'utf8');
	} finally {
		await rm(temporaryFile, { force: true });
	}

	console.log(`model: ${config.model.value}`);
	console.log(`input file: ${relativePath(researchFile)}`);
	console.log(`output file: ${relativePath(articleFile)}`);
	if (pagePackage) console.log(`metadata file: ${relativePath(packageFile)}`);
	console.log(`output character count: ${article.length}`);
}

try {
	await main();
} catch (error) {
	console.error(`Error: ${error?.message || error}`);
	process.exitCode = 1;
}
