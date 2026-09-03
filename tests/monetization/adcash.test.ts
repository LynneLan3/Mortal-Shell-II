import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADCASH_AUTOTAG_ZONE_ID,
	ADCASH_LIB_SRC,
	isAdcashAutotagEnabled,
} from '../../src/lib/adcash';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('Adcash Autotag zone and lib URL are fixed for this experiment', () => {
	assert.equal(ADCASH_AUTOTAG_ZONE_ID, 'dauo8wyodz');
	assert.equal(ADCASH_LIB_SRC, 'https://acscdn.com/script/aclib.js');
	assert.equal(isAdcashAutotagEnabled(), true);
});

test('Adcash Autotag mounts once in shared Head and GameShell (not Display zone 12101514)', () => {
	const head = readFileSync(path.join(ROOT, 'src/components/overrides/Head.astro'), 'utf8');
	const shell = readFileSync(path.join(ROOT, 'src/components/experience/GameShell.astro'), 'utf8');
	const autotag = readFileSync(path.join(ROOT, 'src/components/AdcashAutotag.astro'), 'utf8');
	const adcash = readFileSync(path.join(ROOT, 'src/lib/adcash.ts'), 'utf8');

	assert.match(head, /AdcashAutotag/);
	assert.match(shell, /AdcashAutotag/);
	assert.match(autotag, /id="aclib"/);
	assert.match(autotag, /runAutoTag/);
	assert.match(autotag, /ADCASH_AUTOTAG_ZONE_ID|zoneId/);
	assert.match(adcash, /dauo8wyodz/);
	assert.match(adcash, /acscdn\.com\/script\/aclib\.js/);
	assert.doesNotMatch(adcash, /12101514/);
	assert.doesNotMatch(adcash, /jjbjdferx|ds1eyc8hds|wt1bltyma/);
	assert.doesNotMatch(autotag, /runBanner/i);
});

test('fixed Adsterra native banner remains; no overlapping global Auto script present', () => {
	const nativeAd = readFileSync(path.join(ROOT, 'src/components/ads/NativeAd.astro'), 'utf8');
	assert.match(
		nativeAd,
		/src=\{adScript\}|https:\/\/pl31017060\.profitableratecpmnetwork\.com\/c6910232957079784045cb952f04febc\/invoke\.js/,
	);
	assert.match(nativeAd, /container-c6910232957079784045cb952f04febc|adsterra-native-banner/);
	assert.doesNotMatch(nativeAd, /popunder|interstitial|aclib|runAutoTag/i);
});
