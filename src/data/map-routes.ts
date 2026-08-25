/**
 * Curated routes for the Map Workspace.
 *
 * Every waypoint is a map marker id. Route data never copies coordinates or
 * guide facts; the marker and toolkit collections remain the source of truth.
 */
export type MapRouteType = 'Nearby Cleanup' | 'Goal Route' | 'Story / Quest Route';
export type MapRoutePurpose = 'Progression' | 'Power' | 'Completion' | 'Area Sweep';

export type MapRouteStepStatus = 'optional' | 'missable' | 'do-before-x' | 'version-changed';

export interface MapRouteWaypoint {
	markerId: string;
	note?: string;
	status?: MapRouteStepStatus;
	branch?: boolean;
}

export interface MapRoute {
	id: string;
	name: string;
	description: string;
	type: MapRouteType;
	purpose: MapRoutePurpose;
	region: string;
	goal: string;
	waypoints: readonly MapRouteWaypoint[];
	guide?: string;
	plannerHref?: string;
	requirements?: string;
	optional?: boolean;
}

/** Canonical first-class Route Workspace URL for a curated map route. */
export function mapRouteHref(routeId: string): string {
	return `/mortal-shell-ii/routes/${routeId}/`;
}

/**
 * These are editorial sequences, not claims of mathematically shortest travel.
 * Keep the list small until more marker coordinates and relationships are
 * verified in the map research package.
 */
export const mapRoutes: readonly MapRoute[] = [
	{
		id: 'mammon-cleanup',
		name: 'Mammon Cleanup',
		description: 'Complete the mapped Shell and Map Fragment objectives in the Ruins of Mammon while you are already in the southern region.',
		type: 'Nearby Cleanup',
		purpose: 'Area Sweep',
		region: 'Ruins of Mammon',
		plannerHref: '/mortal-shell-ii/routes/world-progression/#map-route-mammon-cleanup',
		goal: 'Finish the currently mapped Mammon objectives as one curated area sweep.',
		optional: true,
		guide: '/mortal-shell-ii/map-fragments/',
		requirements: 'Use the route as a region checklist; it is not a fastest-path claim.',
		waypoints: [
			{ markerId: 'map-station-mammon-hub', note: 'Start from the northern Mammon map station.' },
			{ markerId: 'shell-genessa', note: 'Check the Genessa Shell route before moving deeper south.' },
			{ markerId: 'map-station-mammon-west' },
			{ markerId: 'shell-lazlo' },
			{ markerId: 'map-station-mammon-center' },
			{ markerId: 'shell-sariel' },
			{ markerId: 'map-station-mammon-southwest' },
		],
	},
	{
		id: 'fainweald-shells',
		name: 'Fainweald Shells',
		description: 'Work through the currently mapped Fainweald Shell markers in a clear west-to-east editorial sequence.',
		type: 'Goal Route',
		purpose: 'Completion',
		region: 'Fainweald',
		plannerHref: '/mortal-shell-ii/routes/world-progression/#map-route-fainweald-shells',
		goal: 'Complete the five mapped Fainweald Shell objectives.',
		guide: '/mortal-shell-ii/shells/',
		requirements: 'Open each linked Shell guide for its Memory or encounter requirement.',
		waypoints: [
			{ markerId: 'shell-smert' },
			{ markerId: 'shell-eredrim' },
			{ markerId: 'shell-proxima' },
			{ markerId: 'shell-tiel' },
			{ markerId: 'shell-gragu' },
		],
	},
	{
		id: 'smert-memory',
		name: 'Smert Memory',
		description: 'Follow the existing Smert guide as a focused story checkpoint at Prophet’s Rest.',
		type: 'Story / Quest Route',
		purpose: 'Power',
		region: 'Fainweald · Prophet’s Rest',
		plannerHref: '/mortal-shell-ii/routes/world-progression/#map-route-smert-memory',
		goal: 'Complete the mapped Smert Shell and Memory sequence.',
		guide: '/mortal-shell-ii/smert/',
		requirements: 'Use the guide for the three blood pools, The Convert, and the Hierarch encounter.',
		waypoints: [{ markerId: 'shell-smert', note: 'Complete the Shell pickup and linked Memory sequence.' }],
	},
	{
		id: 'fainweald-map-fragments',
		name: 'Fainweald Map Fragments',
		description: 'Use the verified Ruk map-station markers to complete the current Fainweald fragment coverage.',
		type: 'Goal Route',
		purpose: 'Completion',
		region: 'Fainweald',
		plannerHref: '/mortal-shell-ii/routes/world-progression/#map-route-fainweald-map-fragments',
		goal: 'Complete the five mapped Fainweald Map Fragment objectives.',
		optional: true,
		guide: '/mortal-shell-ii/map-fragments/',
		requirements: 'The route covers mapped stations only; unlocated checklist fragments remain outside Route Mode.',
		waypoints: [
			{ markerId: 'map-station-fainweald-west' },
			{ markerId: 'map-station-fainweald-lower-west' },
			{ markerId: 'map-station-fainweald-north' },
			{ markerId: 'map-station-fainweald-tiel' },
			{ markerId: 'map-station-fainweald-east' },
		],
	},
	{
		id: 'all-mapped-shells',
		name: 'All Mapped Shells',
		description: 'Complete the eight permanent Shell markers currently supported by verified map coordinates, moving from Fainweald into Mammon.',
		type: 'Goal Route',
		purpose: 'Completion',
		region: 'Fainweald + Ruins of Mammon',
		plannerHref: '/mortal-shell-ii/routes/',
		goal: 'Complete every mapped permanent Shell objective; Harros remains prologue-only and is not a map marker.',
		guide: '/mortal-shell-ii/shells/',
		requirements: 'Use each linked Shell guide for its Memory, boss, or handoff requirement. This is an editorial collection order, not a shortest-path claim.',
		waypoints: [
			{ markerId: 'shell-smert' },
			{ markerId: 'shell-eredrim' },
			{ markerId: 'shell-proxima' },
			{ markerId: 'shell-tiel' },
			{ markerId: 'shell-gragu' },
			{ markerId: 'shell-genessa' },
			{ markerId: 'shell-lazlo' },
			{ markerId: 'shell-sariel' },
		],
	},
	{
		id: 'all-mapped-map-fragments',
		name: 'All Mapped Map Fragments',
		description: 'Sweep the nine verified Ruk map-station markers currently attached to the world map across Fainweald and Mammon.',
		type: 'Goal Route',
		purpose: 'Completion',
		region: 'Fainweald + Ruins of Mammon',
		plannerHref: '/mortal-shell-ii/routes/',
		goal: 'Complete the currently mapped fragment stations while keeping the two coordinate-unverified checklist objectives outside Route Mode.',
		optional: true,
		guide: '/mortal-shell-ii/map-fragments/',
		requirements: 'This route intentionally covers mapped stations only; it does not claim that all eleven checklist fragments have verified coordinates.',
		waypoints: [
			{ markerId: 'map-station-fainweald-west' },
			{ markerId: 'map-station-fainweald-lower-west' },
			{ markerId: 'map-station-fainweald-north' },
			{ markerId: 'map-station-fainweald-tiel' },
			{ markerId: 'map-station-fainweald-east' },
			{ markerId: 'map-station-mammon-hub' },
			{ markerId: 'map-station-mammon-west' },
			{ markerId: 'map-station-mammon-center' },
			{ markerId: 'map-station-mammon-southwest' },
		],
	},
	{
		id: 'before-send-ova',
		name: 'Before Send Ova: Mapped Cleanup',
		description: 'Use the mapped Shell and Map Fragment objectives as a final current-cycle cleanup pass before the Send Ova decision.',
		type: 'Story / Quest Route',
		purpose: 'Progression',
		region: 'Fainweald + Ruins of Mammon',
		plannerHref: '/mortal-shell-ii/routes/',
		goal: 'Review mapped completion work before the endgame transition without pretending this route covers every NPC, trophy, or unlocated objective.',
		optional: true,
		guide: '/mortal-shell-ii/ova/',
		requirements: 'This is a map-linked checklist, not a complete missables guide. Finish separate NPC, trophy, and quest pages before sending Ova.',
		waypoints: [
			{ markerId: 'shell-smert' },
			{ markerId: 'shell-eredrim' },
			{ markerId: 'shell-proxima' },
			{ markerId: 'shell-tiel' },
			{ markerId: 'shell-gragu' },
			{ markerId: 'map-station-fainweald-west' },
			{ markerId: 'map-station-fainweald-lower-west' },
			{ markerId: 'map-station-fainweald-north' },
			{ markerId: 'map-station-fainweald-tiel' },
			{ markerId: 'map-station-fainweald-east' },
			{ markerId: 'shell-genessa' },
			{ markerId: 'shell-lazlo' },
			{ markerId: 'shell-sariel' },
			{ markerId: 'map-station-mammon-hub' },
			{ markerId: 'map-station-mammon-west' },
			{ markerId: 'map-station-mammon-center' },
			{ markerId: 'map-station-mammon-southwest' },
		],
	},
];

export const mapRouteById = new Map(mapRoutes.map((route) => [route.id, route]));
