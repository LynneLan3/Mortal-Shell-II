#!/usr/bin/env node
/**
 * Read-only Vercel deployment identity check.
 *
 * Never creates a Production (or Preview) deployment. Production is owned by
 * Vercel Git Integration after push/merge to main.
 *
 * Usage:
 *   npm run deploy:check
 *   npm run deploy:check -- --root <dir>
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runDeploymentIdentityCheck } from './lib/deployment-identity.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_ROOT = path.resolve(SCRIPT_DIR, '..');

function parseArgs(argv) {
	let root = DEFAULT_ROOT;
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === '--check') {
			// Accepted for backward compatibility with former deploy-production --check.
			continue;
		}
		if (arg === '--root') {
			root = path.resolve(argv[++i] ?? '');
			continue;
		}
		if (arg.startsWith('--root=')) {
			root = path.resolve(arg.slice('--root='.length));
			continue;
		}
		if (arg === '--help' || arg === '-h') {
			console.log('Usage: deploy:check [--root <dir>]');
			process.exit(0);
		}
		console.error(`Unknown argument: ${arg}`);
		process.exit(1);
	}
	return { root };
}

const options = parseArgs(process.argv.slice(2));
const { code } = await runDeploymentIdentityCheck({
	rootDir: options.root,
});
process.exit(code);
