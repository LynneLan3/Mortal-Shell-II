/**
 * Deterministic opportunity -> product-surface decisions for MS2.
 *
 * This module consumes normalized signals from existing systems. It does not
 * fetch GSC/Hotword data, invent evidence, or generate editorial copy.
 */

export const OPPORTUNITY_ACTION_TYPES = [
	'CONTENT_NEW',
	'CONTENT_REFRESH',
	'CTR_OPTIMIZE',
	'HOMEPAGE_ALERT',
	'PLANNER_ROUTE',
	'MAP_MARKER',
	'REGION_UPDATE',
	'INTERNAL_LINK',
	'NO_ACTION',
] as const;

export type OpportunityActionType = (typeof OPPORTUNITY_ACTION_TYPES)[number];

export type OpportunitySignalSource =
	| 'gsc'
	| 'hotword-os'
	| 'research'
	| 'release-update'
	| 'content-inventory'
	| 'route-map-coverage';

export type OpportunityIntent =
	| 'informational'
	| 'location'
	| 'route'
	| 'update'
	| 'navigation'
	| 'ctr'
	| 'unknown';

export interface OpportunitySignal {
	source: OpportunitySignalSource;
	label?: string;
	metric?: string;
	value?: string | number;
	evidence?: string;
}

export interface OpportunityEvidence {
	label: string;
	href?: string;
	note?: string;
}

export interface PageInventoryEntry {
	url: string;
	title: string;
	kind?: 'guide' | 'hub' | 'route' | 'map' | 'region' | 'faq' | 'other';
	aliases?: readonly string[];
	active?: boolean;
}

export interface MarkerCoverageEntry {
	id: string;
	name: string;
	regionId: string;
	guideUrl?: string;
	aliases?: readonly string[];
}

export interface RouteCoverageEntry {
	id: string;
	name: string;
	regionId?: string;
	markerIds?: readonly string[];
	plannerUrl?: string;
}

export interface RegionCoverageEntry {
	id: string;
	name: string;
	url: string;
}

export interface OpportunityCoverage {
	markers?: readonly MarkerCoverageEntry[];
	routes?: readonly RouteCoverageEntry[];
	regions?: readonly RegionCoverageEntry[];
}

export interface OpportunityInput {
	id: string;
	query?: string;
	title?: string;
	summary?: string;
	intent?: OpportunityIntent;
	confidence?: number;
	pageUrl?: string;
	markerId?: string;
	routeId?: string;
	regionId?: string;
	clusterMarkerIds?: readonly string[];
	actionHint?: OpportunityActionType;
	signals: readonly OpportunitySignal[];
	evidence?: readonly OpportunityEvidence[];
}

export interface StructuredWritingBrief {
	provider: 'APIMart';
	objective: string;
	intent: OpportunityIntent;
	evidence: readonly OpportunityEvidence[];
	matchedExistingUrl?: string;
	constraints: readonly string[];
	output: 'article' | 'page-package' | 'metadata';
}

export interface OpportunityDecision {
	opportunityId: string;
	chosenActionType: OpportunityActionType;
	secondaryActionTypes: readonly OpportunityActionType[];
	matchedExistingUrl?: string;
	affectedUrl?: string;
	markerId?: string;
	routeId?: string;
	regionId?: string;
	reason: string;
	requiresApimart: boolean;
	apimartBrief?: StructuredWritingBrief;
}

export interface OpportunityActionLogEntry {
	schemaVersion: 1;
	recordedAt: string;
	opportunity: {
		id: string;
		query?: string;
		title?: string;
		summary?: string;
	};
	signals: readonly OpportunitySignal[];
	matchedExistingUrl?: string;
	chosenActionType: OpportunityActionType;
	secondaryActionTypes: readonly OpportunityActionType[];
	affected: {
		url?: string;
		markerId?: string;
		routeId?: string;
		regionId?: string;
	};
	reason: string;
	apimart: {
		required: boolean;
		status: 'not-needed' | 'brief-required';
		brief?: StructuredWritingBrief;
	};
	execution: {
		mode: 'unattended-safe';
		approvalRequired: false;
		status: 'classified';
		publishResult: 'not-run';
	};
}

const CONTENT_ACTIONS = new Set<OpportunityActionType>([
	'CONTENT_NEW',
	'CONTENT_REFRESH',
	'CTR_OPTIMIZE',
]);

const STOP_WORDS = new Set([
	'a', 'all', 'an', 'and', 'can', 'do', 'for', 'guide', 'how', 'i', 'ii',
	'is', 'mortal', 'my', 'of', 'shell', 'the', 'to', 'what', 'where', 'which',
	'with', '2',
]);

function normalizePath(value: string): string {
	const path = value.trim().split(/[?#]/, 1)[0] || '/';
	return path === '/' ? path : `/${path.replace(/^\/+|\/+$/g, '')}/`;
}

function normalizeText(value: string): string {
	return value
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

function meaningfulTokens(value: string): string[] {
	return normalizeText(value)
		.split(/\s+/)
		.filter((token) => token && !STOP_WORDS.has(token));
}

function hasSignal(input: OpportunityInput, source: OpportunitySignalSource, metric?: string): boolean {
	return input.signals.some((signal) => signal.source === source && (!metric || signal.metric === metric));
}

function hasUpdateSignal(input: OpportunityInput): boolean {
	return input.intent === 'update' || hasSignal(input, 'release-update') || input.signals.some((signal) => signal.metric === 'update');
}

function hasCtrSignal(input: OpportunityInput): boolean {
	return input.intent === 'ctr' || hasSignal(input, 'gsc', 'low-ctr') || input.signals.some((signal) => signal.metric === 'low-ctr');
}

function hasInternalLinkSignal(input: OpportunityInput): boolean {
	return input.intent === 'navigation' || hasSignal(input, 'content-inventory', 'internal-link-gap');
}

function findExistingPage(input: OpportunityInput, inventory: readonly PageInventoryEntry[]): PageInventoryEntry | undefined {
	if (input.pageUrl) {
		const requestedUrl = normalizePath(input.pageUrl);
		const exact = inventory.find((page) => normalizePath(page.url) === requestedUrl && page.active !== false);
		if (exact) return exact;
	}

	const query = meaningfulTokens([input.query, input.title].filter(Boolean).join(' '));
	if (query.length === 0) return undefined;
	const candidates = inventory
		.filter((page) => page.active !== false)
		.map((page) => {
			const pageTokens = new Set([
				...meaningfulTokens(page.title),
				...(page.aliases ?? []).flatMap(meaningfulTokens),
				...meaningfulTokens(page.url.replace(/^\/+|\/+$/g, '').replace(/[/-]/g, ' ')),
			]);
			const matched = query.filter((token) => pageTokens.has(token));
			const phraseMatch = normalizeText(input.query || '') &&
				normalizeText(input.query || '').includes(normalizeText(page.title));
			return { page, score: matched.length + (phraseMatch ? 3 : 0), matched: matched.length };
		})
		.filter((candidate) => candidate.matched >= Math.min(2, Math.max(1, query.length - 1)) || candidate.score >= 3)
		.sort((a, b) => b.score - a.score);
	return candidates[0]?.page;
}

function resolveMarker(input: OpportunityInput, coverage: OpportunityCoverage): MarkerCoverageEntry | undefined {
	const markers = coverage.markers ?? [];
	if (input.markerId) return markers.find((marker) => marker.id === input.markerId);
	const tokens = meaningfulTokens([input.query, input.title].filter(Boolean).join(' '));
	return markers
		.map((marker) => {
			const markerTokens = new Set([
				...meaningfulTokens(marker.name),
				...(marker.aliases ?? []).flatMap(meaningfulTokens),
			]);
			return { marker, score: tokens.filter((token) => markerTokens.has(token)).length };
		})
		.filter((candidate) => candidate.score > 0)
		.sort((a, b) => b.score - a.score)[0]?.marker;
}

function resolveRoute(input: OpportunityInput, coverage: OpportunityCoverage): RouteCoverageEntry | undefined {
	const routes = coverage.routes ?? [];
	if (input.routeId) return routes.find((route) => route.id === input.routeId);
	const tokens = meaningfulTokens([input.query, input.title].filter(Boolean).join(' '));
	return routes
		.map((route) => ({ route, score: tokens.filter((token) => meaningfulTokens(route.name).includes(token)).length }))
		.filter((candidate) => candidate.score > 0)
		.sort((a, b) => b.score - a.score)[0]?.route;
}

function resolveRegion(input: OpportunityInput, coverage: OpportunityCoverage): RegionCoverageEntry | undefined {
	const regions = coverage.regions ?? [];
	if (input.regionId) return regions.find((region) => region.id === input.regionId);
	const tokens = meaningfulTokens([input.query, input.title].filter(Boolean).join(' '));
	return regions
		.map((region) => ({ region, score: tokens.filter((token) => meaningfulTokens(region.name).includes(token)).length }))
		.filter((candidate) => candidate.score > 0)
		.sort((a, b) => b.score - a.score)[0]?.region;
}

function makeBrief(input: OpportunityInput, matchedExistingUrl: string | undefined, action: OpportunityActionType): StructuredWritingBrief | undefined {
	if (!CONTENT_ACTIONS.has(action)) return undefined;
	return {
		provider: 'APIMart',
		objective: action === 'CTR_OPTIMIZE'
			? 'Improve the matched page title, description, and search-facing answer without creating a competing URL.'
			: action === 'CONTENT_REFRESH'
				? 'Refresh the matched page from current evidence while preserving its canonical URL and verified facts.'
				: 'Create one new guide only when the evidence confirms a distinct unmet intent and no existing URL matches.',
		intent: input.intent ?? 'unknown',
		evidence: input.evidence ?? [],
		matchedExistingUrl,
		constraints: [
			'Use only supplied evidence and preserve unresolved conflicts.',
			'Do not create a duplicate guide, boss URL, wiki URL, or region page.',
			'Return a structured brief to APIMart before any editorial copy is generated.',
		],
		output: action === 'CTR_OPTIMIZE' ? 'metadata' : 'page-package',
	};
}

function chooseAction(
	input: OpportunityInput,
	matched: PageInventoryEntry | undefined,
	marker: MarkerCoverageEntry | undefined,
	route: RouteCoverageEntry | undefined,
	region: RegionCoverageEntry | undefined,
): { action: OpportunityActionType; secondary: OpportunityActionType[]; reason: string; affectedUrl?: string } {
	const hinted = input.actionHint;
	if (hinted === 'NO_ACTION') return { action: 'NO_ACTION', secondary: [], reason: 'The signal explicitly declines a site action.' };
	if (hinted === 'CONTENT_NEW' && matched) {
		return { action: hasCtrSignal(input) ? 'CTR_OPTIMIZE' : 'CONTENT_REFRESH', secondary: [], reason: `Existing URL matched; downgraded CONTENT_NEW to ${hasCtrSignal(input) ? 'CTR_OPTIMIZE' : 'CONTENT_REFRESH'} to prevent duplication.`, affectedUrl: matched.url };
	}
	if (hinted && hinted !== 'CONTENT_NEW') {
		return { action: hinted, secondary: hasUpdateSignal(input) && hinted !== 'HOMEPAGE_ALERT' ? ['HOMEPAGE_ALERT'] : [], reason: `Used the explicit ${hinted} surface hint after checking existing URL coverage.`, affectedUrl: matched?.url ?? region?.url ?? route?.plannerUrl ?? marker?.guideUrl };
	}
	if (hasCtrSignal(input) && matched) return { action: 'CTR_OPTIMIZE', secondary: [], reason: 'GSC indicates a click-through opportunity on an existing URL.', affectedUrl: matched.url };
	if (region && input.intent === 'update') return { action: 'REGION_UPDATE', secondary: [], reason: 'Verified region coverage exists and the input is an update to that region.', affectedUrl: region.url };
	if (hasUpdateSignal(input)) return { action: 'HOMEPAGE_ALERT', secondary: matched ? ['CONTENT_REFRESH'] : [], reason: matched ? 'Release/update evidence needs a homepage alert and a refresh of the matched page.' : 'Release/update evidence is best surfaced as a homepage alert before creating content.', affectedUrl: matched?.url };
	if (input.intent === 'route' && route) return { action: 'PLANNER_ROUTE', secondary: [], reason: 'Route intent matches verified route coverage.', affectedUrl: route.plannerUrl };
	if (input.intent === 'location' || input.markerId) return { action: 'MAP_MARKER', secondary: [], reason: marker ? 'Location intent matches verified marker coverage.' : 'Location intent needs a verified marker fact before a marker can be added.', affectedUrl: marker?.guideUrl ?? matched?.url };
	if (input.intent === 'navigation' && matched) return { action: 'INTERNAL_LINK', secondary: [], reason: 'The opportunity is a navigation gap between existing pages, not a new content need.', affectedUrl: matched.url };
	if (matched) return { action: 'CONTENT_REFRESH', secondary: [], reason: 'An existing page matches the intent; refresh it instead of creating a competing URL.', affectedUrl: matched.url };
	if ((input.intent === 'informational' || input.actionHint === 'CONTENT_NEW') && (input.confidence ?? 0) >= 0.6) return { action: 'CONTENT_NEW', secondary: [], reason: 'Distinct informational intent has sufficient confidence and no existing URL matched.' };
	return { action: 'NO_ACTION', secondary: [], reason: 'No verified surface or sufficiently distinct intent was found.' };
}

export function requiresApimart(action: OpportunityActionType): boolean {
	return CONTENT_ACTIONS.has(action);
}

export function assertApimartContract(decision: Pick<OpportunityDecision, 'chosenActionType' | 'requiresApimart' | 'apimartBrief'>): void {
	if (!requiresApimart(decision.chosenActionType)) return;
	const brief = decision.apimartBrief;
	if (!decision.requiresApimart || !brief || brief.provider !== 'APIMart' || !brief.objective || !brief.intent || brief.evidence.length === 0 || brief.constraints.length === 0) {
		throw new Error(`APIMart structured brief is required before ${decision.chosenActionType}.`);
	}
}

export function classifyOpportunity(
	input: OpportunityInput,
	inventory: readonly PageInventoryEntry[],
	coverage: OpportunityCoverage = {},
): OpportunityDecision {
	if (!input.id) throw new Error('Opportunity id is required.');
	const matched = findExistingPage(input, inventory);
	const marker = resolveMarker(input, coverage);
	const route = resolveRoute(input, coverage);
	const region = resolveRegion(input, coverage);
	const chosen = chooseAction(input, matched, marker, route, region);
	const action: OpportunityActionType = chosen.action;
	const brief = makeBrief(input, matched?.url, action);
	const decision: OpportunityDecision = {
		opportunityId: input.id,
		chosenActionType: action,
		secondaryActionTypes: chosen.secondary,
		matchedExistingUrl: matched?.url,
		affectedUrl: chosen.affectedUrl,
		markerId: marker?.id ?? input.markerId,
		routeId: route?.id ?? input.routeId,
		regionId: region?.id ?? input.regionId,
		reason: chosen.reason,
		requiresApimart: requiresApimart(action),
		apimartBrief: brief,
	};
	if (action === 'CONTENT_NEW' && decision.matchedExistingUrl) {
		throw new Error(`CONTENT_NEW cannot target an existing URL: ${decision.matchedExistingUrl}`);
	}
	if (decision.requiresApimart) assertApimartContract(decision);
	return decision;
}

export function createActionLogEntry(
	input: OpportunityInput,
	decision: OpportunityDecision,
	now = new Date(),
): OpportunityActionLogEntry {
	return {
		schemaVersion: 1,
		recordedAt: now.toISOString(),
		opportunity: { id: input.id, query: input.query, title: input.title, summary: input.summary },
		signals: input.signals,
		matchedExistingUrl: decision.matchedExistingUrl,
		chosenActionType: decision.chosenActionType,
		secondaryActionTypes: decision.secondaryActionTypes,
		affected: {
			url: decision.affectedUrl,
			markerId: decision.markerId,
			routeId: decision.routeId,
			regionId: decision.regionId,
		},
		reason: decision.reason,
		apimart: { required: decision.requiresApimart, status: decision.requiresApimart ? 'brief-required' : 'not-needed', brief: decision.apimartBrief },
		execution: { mode: 'unattended-safe', approvalRequired: false, status: 'classified', publishResult: 'not-run' },
	};
}

export function classifyAndLog(
	inputs: readonly OpportunityInput[],
	inventory: readonly PageInventoryEntry[],
	coverage: OpportunityCoverage = {},
	now = new Date(),
): OpportunityActionLogEntry[] {
	return inputs.map((input) => {
		const decision = classifyOpportunity(input, inventory, coverage);
		return createActionLogEntry(input, decision, now);
	});
}
