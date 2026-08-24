/**
 * Curated routes for the Map Workspace.
 *
 * Every waypoint is a map marker id. Route data never copies coordinates or
 * guide facts; the marker and toolkit collections remain the source of truth.
 */
export type MapRouteType = 'Nearby Cleanup' | 'Goal Route' | 'Story / Quest Route';

export interface MapRouteWaypoint {
	markerId: string;
	note?: string;
}

export interface MapRoute {
	id: string;
	name: string;
	description: string;
	type: MapRouteType;
	region: string;
	goal: string;
	waypoints: readonly MapRouteWaypoint[];
	guide?: string;
	requirements?: string;
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
		region: 'Ruins of Mammon',
		goal: 'Finish the currently mapped Mammon objectives as one curated area sweep.',
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
		region: 'Fainweald',
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
		region: 'Fainweald · Prophet’s Rest',
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
		region: 'Fainweald',
		goal: 'Complete the five mapped Fainweald Map Fragment objectives.',
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
];

export const mapRouteById = new Map(mapRoutes.map((route) => [route.id, route]));
