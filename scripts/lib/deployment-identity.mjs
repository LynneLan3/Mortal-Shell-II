/**
 * Vercel deployment helpers for hotword sites.
 *
 * Production creation is owned exclusively by Vercel Git Integration after
 * push/merge to main. This module never runs `vercel deploy --prod` (or
 * equivalent). `publish:production` waits for the matching Git SHA via
 * `waitForGitProductionDeployment`; `deploy:check` only validates identity.
 *
 * site-spec.yaml supplies org/project ids. Local `.vercel/project.json` is
 * rewritten from the spec when needed for read-only CLI inspect/list.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

/** Primary Vercel team for all new hotword site create / preview / production. */
export const PRIMARY_VERCEL_TEAM_SLUG = 'lynnelan3s-projects';
export const PRIMARY_VERCEL_ORG_ID = 'team_yAOizMTSVuT0RJATgFdAlQuG';

export const DEPLOYMENT_FIELDS = [
	'provider',
	'orgId',
	'projectId',
	'projectName',
	'productionUrl',
	'productionBranch',
];

export const SITE_SPEC_FILENAME = 'site-spec.yaml';
export const LOCAL_VERCEL_PROJECT = '.vercel/project.json';

function isRecord(value) {
	return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function asString(value) {
	if (value === undefined || value === null) return '';
	if (typeof value !== 'string') return '';
	return value.trim();
}

export function normalizePublicUrl(value) {
	const parsed = new URL(value);
	parsed.hash = '';
	parsed.search = '';
	if (parsed.pathname === '/' || parsed.pathname === '') {
		return `${parsed.protocol}//${parsed.host}`;
	}
	return parsed.href.replace(/\/+$/, '');
}

export function isBlockedProductionHostname(hostname) {
	const host = String(hostname || '').toLowerCase();
	if (host === 'localhost' || host.endsWith('.localhost') || host === '127.0.0.1' || host === '::1') {
		return true;
	}
	if (host === 'example' || host.endsWith('.example')) {
		return true;
	}
	if (host.endsWith('.vercel.app') && host.includes('-git-')) {
		return true;
	}
	return false;
}

function blockedReason(reason, extraLines = []) {
	return {
		ok: false,
		blockedReason: reason,
		extraLines,
	};
}

export function readSiteSpecDocument(rootDir) {
	const specPath = path.join(rootDir, SITE_SPEC_FILENAME);
	if (!existsSync(specPath)) {
		return { specPath, missing: true, document: null, parseError: null };
	}
	const raw = readFileSync(specPath, 'utf8');
	try {
		return { specPath, missing: false, document: parseYaml(raw), parseError: null };
	} catch (error) {
		return { specPath, missing: false, document: null, parseError: String(error) };
	}
}

export function readLocalVercelLink(rootDir) {
	const file = path.join(rootDir, LOCAL_VERCEL_PROJECT);
	if (!existsSync(file)) return null;
	try {
		const parsed = JSON.parse(readFileSync(file, 'utf8'));
		if (!isRecord(parsed)) return null;
		const orgId = asString(parsed.orgId);
		const projectId = asString(parsed.projectId);
		const projectName = asString(parsed.projectName);
		if (!orgId && !projectId) return null;
		return { orgId, projectId, projectName };
	} catch {
		return null;
	}
}

export function writeLocalVercelLink(rootDir, deployment) {
	const dir = path.join(rootDir, '.vercel');
	mkdirSync(dir, { recursive: true });
	const body = `${JSON.stringify(
		{
			orgId: deployment.orgId,
			projectId: deployment.projectId,
			projectName: deployment.projectName,
		},
		null,
		2,
	)}\n`;
	writeFileSync(path.join(dir, 'project.json'), body, 'utf8');
}

export function readCurrentGitBranch(rootDir) {
	const result = spawnSync('git', ['branch', '--show-current'], {
		cwd: rootDir,
		encoding: 'utf8',
		env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
	});
	if (result.status !== 0) {
		return { branch: '', error: (result.stderr || result.stdout || 'git branch --show-current failed').trim() };
	}
	return { branch: (result.stdout || '').trim(), error: null };
}

function extractDeployment(document) {
	if (!isRecord(document) || !isRecord(document.deployment)) {
		return {
			present: Boolean(isRecord(document) && document.deployment !== undefined),
			fields: Object.fromEntries(DEPLOYMENT_FIELDS.map((field) => [field, ''])),
		};
	}
	const raw = document.deployment;
	const orgId = asString(raw.orgId) || PRIMARY_VERCEL_ORG_ID;
	const provider = asString(raw.provider) || 'vercel';
	return {
		present: true,
		fields: {
			provider,
			orgId,
			projectId: asString(raw.projectId),
			projectName: asString(raw.projectName),
			productionUrl: asString(raw.productionUrl),
			productionBranch: asString(raw.productionBranch),
		},
	};
}

function localLinkStatus(localLink, deployment) {
	if (!localLink) return 'ABSENT';
	// projectName differences are ignored — only orgId + projectId matter.
	if (localLink.orgId === deployment.orgId && localLink.projectId === deployment.projectId) {
		return 'MATCH';
	}
	return 'MISMATCH';
}

/**
 * Minimal readiness check: site-spec exists, provider is vercel, projectId set.
 * Defaults empty orgId to the primary team. Does not gate on branch, URL, or projectName.
 */
export function checkDeploymentIdentity(options) {
	const rootDir = options.rootDir;
	const loaded = options.specFile ?? readSiteSpecDocument(rootDir);
	const currentBranch =
		options.currentBranch !== undefined
			? { branch: options.currentBranch, error: null }
			: options.readBranch
				? options.readBranch(rootDir)
				: readCurrentGitBranch(rootDir);
	const localLink =
		options.localLink !== undefined
			? options.localLink
			: options.readLink
				? options.readLink(rootDir)
				: readLocalVercelLink(rootDir);

	const base = {
		ok: false,
		blockedReason: null,
		extraLines: [],
		missingFields: [],
		siteName: '',
		siteUrl: '',
		deployment: null,
		currentBranch: currentBranch.branch || '',
		localLink,
		localLinkStatus: 'ABSENT',
		willRelink: false,
		checks: {
			specExists: 'FAIL',
			provider: 'FAIL',
			branch: 'SKIP',
			urlIdentity: 'SKIP',
			orgId: 'FAIL',
			projectId: 'FAIL',
			productionUrl: 'SKIP',
		},
	};

	if (loaded.missing) {
		return {
			...base,
			...blockedReason('site-spec.yaml not found'),
		};
	}
	if (loaded.parseError) {
		return {
			...base,
			...blockedReason('failed to parse site-spec.yaml'),
			extraLines: [loaded.parseError],
		};
	}

	base.checks.specExists = 'PASS';
	const document = loaded.document;
	const site = isRecord(document) && isRecord(document.site) ? document.site : {};
	const game = isRecord(document) && isRecord(document.game) ? document.game : {};
	base.siteName = asString(game.name) || asString(site.shortName) || asString(site.title);
	base.siteUrl = asString(site.siteUrl);

	const fields = extractDeployment(document).fields;
	base.deployment = fields;

	if (fields.provider !== 'vercel') {
		return {
			...base,
			...blockedReason('unsupported deployment provider'),
			extraLines: [`provider: ${fields.provider}`],
			checks: { ...base.checks, specExists: 'PASS', provider: 'FAIL' },
		};
	}
	base.checks.provider = 'PASS';
	base.checks.orgId = fields.orgId ? 'PASS' : 'FAIL';

	if (!fields.projectId) {
		return {
			...base,
			...blockedReason('incomplete deployment identity'),
			extraLines: ['Missing: projectId'],
			missingFields: ['projectId'],
			checks: {
				...base.checks,
				specExists: 'PASS',
				provider: 'PASS',
				orgId: base.checks.orgId,
				projectId: 'FAIL',
			},
		};
	}

	if (!fields.projectId.startsWith('prj_')) {
		return {
			...base,
			...blockedReason('invalid Vercel project id'),
			extraLines: ['projectId must start with prj_'],
			checks: {
				...base.checks,
				specExists: 'PASS',
				provider: 'PASS',
				orgId: 'PASS',
				projectId: 'FAIL',
			},
		};
	}

	const linkStatus = localLinkStatus(localLink, fields);
	return {
		...base,
		ok: true,
		blockedReason: null,
		extraLines: [],
		missingFields: [],
		localLinkStatus: linkStatus,
		willRelink: linkStatus !== 'MATCH',
		checks: {
			specExists: 'PASS',
			provider: 'PASS',
			branch: 'SKIP',
			urlIdentity: 'SKIP',
			orgId: 'PASS',
			projectId: 'PASS',
			productionUrl: 'SKIP',
		},
	};
}

export function formatBlocked(result) {
	const lines = ['DEPLOY BLOCKED'];
	if (result.extraLines.length > 0) {
		lines.push('');
		lines.push(...result.extraLines);
		lines.push('');
	}
	lines.push(`Reason: ${result.blockedReason}`);
	return lines.join('\n');
}

export function formatCheckReport(result) {
	const linkLabel =
		result.localLinkStatus === 'MATCH'
			? 'MATCH'
			: result.localLinkStatus === 'MISMATCH'
				? 'MISMATCH'
				: 'ABSENT';
	const lines = [
		'DEPLOYMENT IDENTITY CHECK',
		'',
		`site-spec: ${result.checks.specExists}`,
		`provider: ${result.checks.provider}`,
		`orgId: ${result.checks.orgId}`,
		`projectId: ${result.checks.projectId}`,
		`primary team: ${PRIMARY_VERCEL_TEAM_SLUG}`,
		`local .vercel link: ${linkLabel}`,
	];

	if (result.ok && result.localLinkStatus === 'MISMATCH') {
		lines.push('Will rewrite .vercel/project.json from site-spec.yaml when publishing.');
	} else if (result.ok && result.localLinkStatus === 'ABSENT') {
		lines.push('Will write .vercel/project.json from site-spec.yaml when publishing.');
	}

	if (result.deployment) {
		lines.push(
			'',
			'TARGET',
			'',
			'Project:',
			result.deployment.projectName || '(optional)',
			'',
			'Project ID:',
			result.deployment.projectId || '(missing)',
			'',
			'Org:',
			result.deployment.orgId || '(missing)',
			'',
			'Production:',
			result.deployment.productionUrl || '(optional)',
		);
	}

	lines.push('', 'RESULT:');
	if (result.ok) {
		lines.push('IDENTITY OK');
	} else {
		lines.push(formatBlocked(result));
	}
	return lines.join('\n');
}

export function formatTargetSummary(result) {
	return [
		'========================================',
		'PRODUCTION DEPLOY TARGET',
		'',
		'Site:',
		result.siteName,
		'',
		'Vercel Team:',
		PRIMARY_VERCEL_TEAM_SLUG,
		'',
		'Vercel Org:',
		result.deployment.orgId,
		'',
		'Vercel Project:',
		result.deployment.projectName || '(unnamed)',
		'',
		'Project ID:',
		result.deployment.projectId,
		'',
		'Production URL:',
		result.deployment.productionUrl || '(unset)',
		'========================================',
	].join('\n');
}

export function createVercelDeployEnv(deployment, baseEnv = process.env) {
	return {
		...baseEnv,
		VERCEL_ORG_ID: deployment.orgId || PRIMARY_VERCEL_ORG_ID,
		VERCEL_PROJECT_ID: deployment.projectId,
	};
}

/**
 * Read-only deployment identity check. Never creates a Vercel deployment.
 */
export async function runDeploymentIdentityCheck(options) {
	const result = checkDeploymentIdentity(options);
	const log = options.log ?? console.log;
	log(formatCheckReport(result));
	return { code: result.ok ? 0 : 1, result, deployed: false, relinked: false, deployCalls: [] };
}

/** @deprecated Alias of runDeploymentIdentityCheck — never deploys. */
export async function runDeployCli(options) {
	return runDeploymentIdentityCheck({ ...options, checkOnly: true });
}

/** Blocker when Git Integration never yields a matching READY Production deployment. */
export const GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED = 'GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED';

export const DEFAULT_GIT_PRODUCTION_WAIT_MS = 10 * 60 * 1000;
export const DEFAULT_GIT_PRODUCTION_POLL_MS = 5 * 1000;

const TERMINAL_FAILURE_STATES = new Set(['ERROR', 'CANCELED', 'CANCELLED', 'FAILED']);
const READY_STATES = new Set(['READY']);

function deploymentCommitSha(deployment) {
	if (!isRecord(deployment)) return '';
	const meta = isRecord(deployment.meta) ? deployment.meta : {};
	return (
		asString(meta.githubCommitSha)
		|| asString(meta.gitlabCommitSha)
		|| asString(meta.bitbucketCommitSha)
		|| asString(deployment.gitSource?.sha)
		|| asString(deployment.commitSha)
	);
}

function deploymentReadyState(deployment) {
	return asString(deployment?.readyState || deployment?.state).toUpperCase();
}

function deploymentUrlFromRecord(deployment, fallback = '') {
	const url = asString(deployment?.url) || asString(deployment?.urlHost) || asString(deployment?.inspectorUrl);
	if (!url) return asString(fallback);
	if (/^https?:\/\//i.test(url)) return url.replace(/[.,]+$/, '');
	return `https://${url.replace(/^\/+/, '')}`.replace(/[.,]+$/, '');
}

function deploymentSource(deployment) {
	return asString(deployment?.source || deployment?.meta?.githubDeployment || deployment?.meta?.deployHookId).toLowerCase();
}

function isGitTriggeredDeployment(deployment) {
	const source = deploymentSource(deployment);
	if (source === 'git' || source === '1' || source === 'github') return true;
	if (source === 'cli' || source === 'redeploy' || source === 'import') return false;
	const meta = isRecord(deployment?.meta) ? deployment.meta : {};
	if (asString(meta.gitDirty)) return false;
	return Boolean(deploymentCommitSha(deployment));
}

export function parseVercelListJson(output) {
	const text = String(output || '').trim();
	if (!text) return [];
	try {
		const parsed = JSON.parse(text);
		if (Array.isArray(parsed)) return parsed;
		if (Array.isArray(parsed?.deployments)) return parsed.deployments;
		return [];
	} catch {
		return [];
	}
}

/**
 * Rank Production deployments for a commit: READY git-triggered first, then any READY.
 */
export function selectProductionDeploymentForCommit(deployments, commitSha) {
	const sha = asString(commitSha).toLowerCase();
	if (!sha) return { match: null, failed: null, pending: null };
	const matches = (Array.isArray(deployments) ? deployments : [])
		.filter((item) => deploymentCommitSha(item).toLowerCase() === sha)
		.filter((item) => {
			const target = asString(item?.target || item?.environment).toLowerCase();
			return !target || target === 'production';
		});

	const readyGit = matches.find((item) => READY_STATES.has(deploymentReadyState(item)) && isGitTriggeredDeployment(item));
	const readyAny = matches.find((item) => READY_STATES.has(deploymentReadyState(item)));
	const pending = matches.find((item) => {
		const state = deploymentReadyState(item);
		return state && !READY_STATES.has(state) && !TERMINAL_FAILURE_STATES.has(state);
	});
	const failed = matches.find((item) => TERMINAL_FAILURE_STATES.has(deploymentReadyState(item)));
	return {
		match: readyGit || readyAny || null,
		failed: failed || null,
		pending: pending || null,
		matches,
	};
}

/**
 * List Production deployments for a commit via `vercel list` (read-only; never deploys).
 */
export function listVercelProductionDeploymentsForCommit(rootDir, deployment, commitSha, options = {}) {
	const sha = asString(commitSha);
	const args = [
		'list',
		'--format', 'json',
		'--environment', 'production',
		'-m', `githubCommitSha=${sha}`,
		'--scope', PRIMARY_VERCEL_TEAM_SLUG,
		'--yes',
	];
	if (asString(deployment?.projectName)) args.push(asString(deployment.projectName));
	const result = spawnSync('vercel', args, {
		cwd: rootDir,
		encoding: 'utf8',
		env: createVercelDeployEnv(deployment, { ...process.env, ...(options.env || {}) }),
	});
	const output = `${result.stdout || ''}\n${result.stderr || ''}`.trim();
	if ((result.status ?? 1) !== 0) {
		return { ok: false, deployments: [], output, code: result.status ?? 1 };
	}
	return { ok: true, deployments: parseVercelListJson(result.stdout || output), output, code: 0 };
}

export function ensureLocalVercelLink(rootDir, identityResult, options = {}) {
	const log = options.log ?? (() => {});
	if (!identityResult?.ok || !identityResult.deployment) {
		return { ok: false, relinked: false, reason: identityResult?.blockedReason || 'deployment identity not ready' };
	}
	if (identityResult.localLinkStatus === 'MATCH') {
		log('Local Vercel link: MATCH');
		return { ok: true, relinked: false };
	}
	log(
		identityResult.localLinkStatus === 'MISMATCH'
			? 'Local Vercel link: MISMATCH — rewriting .vercel/project.json from site-spec.yaml.'
			: 'Local Vercel link: ABSENT — writing .vercel/project.json from site-spec.yaml.',
	);
	writeLocalVercelLink(rootDir, identityResult.deployment);
	const after = readLocalVercelLink(rootDir);
	if (!after || after.orgId !== identityResult.deployment.orgId || after.projectId !== identityResult.deployment.projectId) {
		return { ok: false, relinked: true, reason: 'failed to bind local Vercel link to site-spec project' };
	}
	return { ok: true, relinked: true };
}

/**
 * Wait for an existing Git-owned Production deployment matching commitSha.
 * Never creates a deployment (no vercel --prod / deploy --prod).
 */
export async function waitForGitProductionDeployment(options = {}) {
	const commitSha = asString(options.commitSha);
	const rootDir = options.rootDir;
	const deployment = options.deployment;
	if (!commitSha) {
		return {
			ok: false,
			reused: false,
			code: GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED,
			error: `${GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED}: commit SHA is required`,
		};
	}
	const listDeployments = options.listDeployments
		?? ((dir, dep, sha) => listVercelProductionDeploymentsForCommit(dir, dep, sha));
	const sleep = options.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
	const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : DEFAULT_GIT_PRODUCTION_WAIT_MS;
	const pollMs = Number.isFinite(options.pollMs) ? options.pollMs : DEFAULT_GIT_PRODUCTION_POLL_MS;
	const startedAt = typeof options.now === 'function' ? options.now() : Date.now();
	let attempts = 0;
	let sawMatch = false;

	while (true) {
		attempts += 1;
		const listed = await listDeployments(rootDir, deployment, commitSha, options);
		const deployments = Array.isArray(listed?.deployments) ? listed.deployments : [];
		const selected = selectProductionDeploymentForCommit(deployments, commitSha);
		if (selected.match) {
			const reused = attempts === 1 && READY_STATES.has(deploymentReadyState(selected.match));
			return {
				ok: true,
				reused,
				code: 0,
				commitSha,
				deploymentId: asString(selected.match.uid || selected.match.id),
				deploymentUrl: deploymentUrlFromRecord(selected.match, deployment?.productionUrl),
				readyState: deploymentReadyState(selected.match),
				source: deploymentSource(selected.match) || 'git',
				attempts,
				deployments: selected.matches,
			};
		}
		if (selected.pending) sawMatch = true;
		if (selected.failed && !selected.pending) {
			return {
				ok: false,
				reused: false,
				code: GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED,
				error: `${GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED}: Production deployment for ${commitSha} is ${deploymentReadyState(selected.failed)}`,
				commitSha,
				deploymentId: asString(selected.failed.uid || selected.failed.id),
				readyState: deploymentReadyState(selected.failed),
				attempts,
			};
		}
		if (selected.matches?.length) sawMatch = true;

		const elapsed = (typeof options.now === 'function' ? options.now() : Date.now()) - startedAt;
		if (elapsed >= timeoutMs) {
			return {
				ok: false,
				reused: false,
				code: GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED,
				error: sawMatch
					? `${GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED}: timed out waiting for READY Production deployment for ${commitSha}`
					: `${GIT_PRODUCTION_DEPLOYMENT_MISSING_OR_FAILED}: no Git-triggered Production deployment for ${commitSha}`,
				commitSha,
				attempts,
			};
		}
		await sleep(pollMs);
	}
}
