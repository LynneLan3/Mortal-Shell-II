import { mapMarkerById } from '../data/map-markers';
import { mapRegions, regionIdForMarker } from '../data/map-regions';
import { mapRoutes, type MapRoute } from '../data/map-routes';
import { toolkitItemByMapMarkerId } from '../data/toolkit-items';

function normalizePath(path: string): string {
	const value = path.trim().split(/[?#]/, 1)[0] || '/';
	return value === '/' ? value : `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

/** Pick the curated map route that best explains a planner marker target. */
export function getMapRouteForMarker(markerId: string, guideUrl = ''): MapRoute | undefined {
	const marker = mapMarkerById.get(markerId);
	if (!marker) return undefined;
	const regionId = regionIdForMarker(marker);
	const normalizedGuide = normalizePath(guideUrl || toolkitItemByMapMarkerId.get(markerId)?.guideUrl || marker.guideUrl || '');
	return mapRoutes
		.filter((route) => route.waypoints.some((waypoint) => waypoint.markerId === markerId))
		.map((route) => {
			let score = 0;
			if (route.guide && normalizePath(route.guide) === normalizedGuide) score += 4;
			if (regionId === 'mammon' ? route.region.toLowerCase().includes('mammon') : route.region.toLowerCase().includes('fainweald')) score += 2;
			return { route, score };
		})
		.sort((a, b) => b.score - a.score)[0]?.route;
}

/** Build the canonical Region Map URL for a planner or guide marker target. */
export function getMapHrefForMarker(markerId: string, guideUrl = ''): string | undefined {
	const marker = mapMarkerById.get(markerId);
	if (!marker) return undefined;
	const region = mapRegions.find((item) => item.id === regionIdForMarker(marker));
	if (!region) return undefined;
	const params = new URLSearchParams({ marker: markerId });
	const route = getMapRouteForMarker(markerId, guideUrl);
	if (route) params.set('route', route.id);
	return `${region.href}?${params.toString()}`;
}
