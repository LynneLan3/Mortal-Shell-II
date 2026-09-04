import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADSTERRA_CONTAINER_ID,
	ADSTERRA_ENABLED,
	ADSTERRA_INVOKE_SRC,
	ADSTERRA_PLACEMENT,
	ADSTERRA_SLOT_NAME,
	isAdsterraEnabled,
	isAdsterraRuntimeEnabled,
} from '../../src/lib/adsterra';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('Adsterra soft-offline: switch off, config preserved, runtime gated', () => {
	assert.equal(ADSTERRA_ENABLED, false);
	assert.equal(isAdsterraEnabled(), false);
	assert.equal(isAdsterraRuntimeEnabled(), false);
	assert.equal(
		ADSTERRA_INVOKE_SRC,
		'https://pl31017060.profitableratecpmnetwork.com/c6910232957079784045cb952f04febc/invoke.js',
	);
	assert.equal(ADSTERRA_CONTAINER_ID, 'container-c6910232957079784045cb952f04febc');
	assert.equal(ADSTERRA_SLOT_NAME, 'adsterra-native-banner');
	assert.equal(ADSTERRA_PLACEMENT, 0.35);
});

test('Adsterra Zone/script IDs remain in lib and NativeAd wiring', () => {
	const lib = readFileSync(path.join(ROOT, 'src/lib/adsterra.ts'), 'utf8');
	const nativeAd = readFileSync(path.join(ROOT, 'src/components/ads/NativeAd.astro'), 'utf8');
	const markdown = readFileSync(
		path.join(ROOT, 'src/components/overrides/MarkdownContent.astro'),
		'utf8',
	);

	assert.match(lib, /ADSTERRA_ENABLED\s*=\s*false/);
	assert.match(
		lib,
		/https:\/\/pl31017060\.profitableratecpmnetwork\.com\/c6910232957079784045cb952f04febc\/invoke\.js/,
	);
	assert.match(lib, /container-c6910232957079784045cb952f04febc/);
	assert.match(lib, /adsterra-native-banner/);

	assert.match(nativeAd, /isAdsterraRuntimeEnabled/);
	assert.match(nativeAd, /ADSTERRA_INVOKE_SRC|adScript/);
	assert.match(nativeAd, /ADSTERRA_CONTAINER_ID|containerId/);
	assert.match(nativeAd, /enabled &&/);
	assert.doesNotMatch(nativeAd, /popunder|interstitial|aclib|runAutoTag/i);

	assert.match(markdown, /NativeAd/);
});

test('no separate Adsterra Social Bar / global invoke entry in this tree', () => {
	const lib = readFileSync(path.join(ROOT, 'src/lib/adsterra.ts'), 'utf8');
	assert.match(lib, /no Social Bar/i);
	assert.doesNotMatch(lib, /SOCIAL_BAR|social-bar/i);
});
