import assert from 'node:assert/strict';
import test from 'node:test';
import {
	OPPORTUNITY_ACTION_TYPES,
	assertApimartContract,
	classifyAndLog,
	classifyOpportunity,
	requiresApimart,
	type OpportunityCoverage,
	type PageInventoryEntry,
} from '../src/lib/opportunity-flywheel';

const inventory: PageInventoryEntry[] = [
	{ url: '/mortal-shell-ii/skip-prologue/', title: 'Skip Prologue', kind: 'guide' },
	{ url: '/mortal-shell-ii/updates/balance-patch-1/', title: 'Balance Patch 1', kind: 'guide' },
	{ url: '/mortal-shell-ii/beginner-guide/', title: 'Mortal Shell 2 Beginner Guide', kind: 'guide' },
	{ url: '/mortal-shell-ii/shells/', title: 'Shells Guide', kind: 'guide' },
	{ url: '/mortal-shell-ii/map/fainweald/', title: 'Fainweald', kind: 'region' },
];

const coverage: OpportunityCoverage = {
	markers: [{ id: 'shell-smert', name: 'Smert', regionId: 'fainweald', guideUrl: '/mortal-shell-ii/smert/' }],
	routes: [{ id: 'fainweald-shells', name: 'Fainweald Shells', regionId: 'fainweald', markerIds: ['shell-smert'], plannerUrl: '/mortal-shell-ii/routes/world-progression/#map-route-fainweald-shells' }],
	regions: [{ id: 'fainweald', name: 'Fainweald', url: '/mortal-shell-ii/map/fainweald/' }],
};

const evidence = [{ label: 'GSC query export', note: 'provided by existing GSC signal' }];

test('supports the complete opportunity action taxonomy', () => {
	assert.deepEqual(OPPORTUNITY_ACTION_TYPES, [
		'CONTENT_NEW', 'CONTENT_REFRESH', 'CTR_OPTIMIZE', 'HOMEPAGE_ALERT', 'PLANNER_ROUTE',
		'MAP_MARKER', 'REGION_UPDATE', 'INTERNAL_LINK', 'NO_ACTION',
	]);
});

test('matches an existing page before considering a new guide', () => {
	const decision = classifyOpportunity({
		id: 'beginner-existing', query: 'mortal shell 2 beginner guide', intent: 'informational', confidence: 0.95,
		actionHint: 'CONTENT_NEW', signals: [{ source: 'hotword-os', label: 'beginner intent' }], evidence,
	}, inventory, coverage);
	assert.equal(decision.chosenActionType, 'CONTENT_REFRESH');
	assert.equal(decision.matchedExistingUrl, '/mortal-shell-ii/beginner-guide/');
	assert.equal(decision.requiresApimart, true);
});

test('classifies a distinct high-confidence intent as CONTENT_NEW with an APIMart brief', () => {
	const decision = classifyOpportunity({
		id: 'new-distinct-guide', query: 'mortal shell 2 first boss order', intent: 'informational', confidence: 0.9,
		signals: [{ source: 'gsc', metric: 'new-query' }], evidence,
	}, inventory, coverage);
	assert.equal(decision.chosenActionType, 'CONTENT_NEW');
	assert.equal(decision.matchedExistingUrl, undefined);
	assert.equal(decision.apimartBrief?.provider, 'APIMart');
	assert.doesNotThrow(() => assertApimartContract(decision));
});

test('routes release evidence to an alert plus existing-page refresh', () => {
	const decision = classifyOpportunity({
		id: 'patch-update', query: 'balance patch 1 changes', intent: 'update',
		signals: [{ source: 'release-update', metric: 'update' }], evidence,
	}, inventory, coverage);
	assert.equal(decision.chosenActionType, 'HOMEPAGE_ALERT');
	assert.deepEqual(decision.secondaryActionTypes, ['CONTENT_REFRESH']);
	assert.equal(decision.matchedExistingUrl, '/mortal-shell-ii/updates/balance-patch-1/');
});

test('classifies verified route and marker opportunities without writing content', () => {
	const route = classifyOpportunity({
		id: 'fainweald-cluster', query: 'Fainweald west objectives', intent: 'route', routeId: 'fainweald-shells',
		signals: [{ source: 'route-map-coverage', label: 'clustered markers' }], evidence,
	}, inventory, coverage);
	assert.equal(route.chosenActionType, 'PLANNER_ROUTE');
	assert.equal(route.routeId, 'fainweald-shells');
	assert.equal(route.requiresApimart, false);

	const marker = classifyOpportunity({
		id: 'smert-location', query: 'Smert location', intent: 'location', markerId: 'shell-smert',
		signals: [{ source: 'gsc', metric: 'location-query' }], evidence,
	}, inventory, coverage);
	assert.equal(marker.chosenActionType, 'MAP_MARKER');
	assert.equal(marker.markerId, 'shell-smert');
});

test('supports CTR, region, internal-link, and explicit no-action decisions', () => {
	const ctr = classifyOpportunity({
		id: 'skip-ctr', query: 'skip prologue', intent: 'ctr',
		signals: [{ source: 'gsc', metric: 'low-ctr' }], evidence,
	}, inventory, coverage);
	assert.equal(ctr.chosenActionType, 'CTR_OPTIMIZE');

	const region = classifyOpportunity({
		id: 'region-note', title: 'Fainweald update', intent: 'update', regionId: 'fainweald', actionHint: 'REGION_UPDATE',
		signals: [{ source: 'research', metric: 'verified-region-change' }], evidence,
	}, inventory, coverage);
	assert.equal(region.chosenActionType, 'REGION_UPDATE');
	assert.equal(region.regionId, 'fainweald');

	const internal = classifyOpportunity({
		id: 'link-gap', query: 'shells guide navigation', intent: 'navigation',
		signals: [{ source: 'content-inventory', metric: 'internal-link-gap' }], evidence,
	}, inventory, coverage);
	assert.equal(internal.chosenActionType, 'INTERNAL_LINK');

	const none = classifyOpportunity({
		id: 'watch-only', query: 'unclear future topic', intent: 'unknown', actionHint: 'NO_ACTION',
		signals: [{ source: 'hotword-os', label: 'low-confidence' }], evidence,
	}, inventory, coverage);
	assert.equal(none.chosenActionType, 'NO_ACTION');
});

test('creates traceable unattended action logs and preserves the APIMart boundary', () => {
	const entries = classifyAndLog([{
		id: 'log-check', query: 'mortal shell 2 beginner guide', intent: 'informational', confidence: 0.9,
		signals: [{ source: 'gsc', metric: 'new-query' }], evidence,
	}], inventory, coverage, new Date('2026-08-24T00:00:00.000Z'));
	assert.equal(entries.length, 1);
	assert.equal(entries[0].recordedAt, '2026-08-24T00:00:00.000Z');
	assert.equal(entries[0].execution.approvalRequired, false);
	assert.equal(entries[0].execution.publishResult, 'not-run');
	assert.equal(entries[0].apimart.status, 'brief-required');
	assert.equal(entries[0].apimart.brief?.provider, 'APIMart');
	assert.equal(requiresApimart(entries[0].chosenActionType), true);
	assert.throws(() => assertApimartContract({ chosenActionType: 'CONTENT_NEW', requiresApimart: false, apimartBrief: undefined }));
});
