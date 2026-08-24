import { mapMarkers } from '../data/map-markers';
import {
	toolkitItems,
	toolkitItemByMapMarkerId,
	type ToolkitCategory,
} from '../data/toolkit-items';

export interface GuideMapTarget {
	itemId: string;
	name: string;
	mapMarkerId: string;
	category: ToolkitCategory;
	region?: string;
}

export interface GuideMapGroup {
	key: string;
	guideUrl: string;
	label: string;
	targets: readonly GuideMapTarget[];
}

const mapMarkerIds = new Set(mapMarkers.map((marker) => marker.id));

/** Normalize internal guide paths so equivalent slash forms resolve together. */
export function normalizeGuideUrl(guideUrl: string): string {
	const path = guideUrl.trim().split(/[?#]/, 1)[0] || '/';
	if (path === '/') return path;
	return `/${path.replace(/^\/+|\/+$/g, '')}/`;
}

/** Return a stable, URL-safe key for a guide's multi-target map state. */
export function getGuideMapKey(guideUrl: string): string {
	return normalizeGuideUrl(guideUrl).replace(/^\/+|\/+$/g, '').split('/').pop() || 'guide';
}

function guideLabel(guideUrl: string): string {
	return getGuideMapKey(guideUrl)
		.split('-')
		.filter(Boolean)
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(' ');
}

/**
 * Resolve only toolkit relations that point at an existing verified map marker.
 * guideUrl + mapMarkerId in toolkitItems remain the source of truth.
 */
export function getMapTargetsForGuideUrl(guideUrl: string): GuideMapTarget[] {
	const normalizedGuideUrl = normalizeGuideUrl(guideUrl);
	return toolkitItems
		.filter((item) => item.guideUrl && normalizeGuideUrl(item.guideUrl) === normalizedGuideUrl)
		.filter((item): item is typeof item & { mapMarkerId: string } => Boolean(item.mapMarkerId && mapMarkerIds.has(item.mapMarkerId)))
		.map((item) => ({
			itemId: item.id,
			name: item.name,
			mapMarkerId: item.mapMarkerId,
			category: item.category,
			region: item.region,
		}));
}

export function getMapGuideGroups(): GuideMapGroup[] {
	const guideUrls = [...new Set(toolkitItems.map((item) => item.guideUrl).filter(Boolean))] as string[];
	return guideUrls
		.map((guideUrl) => ({
			key: getGuideMapKey(guideUrl),
			guideUrl: normalizeGuideUrl(guideUrl),
			label: guideLabel(guideUrl),
			targets: getMapTargetsForGuideUrl(guideUrl),
		}))
		.filter((group) => group.targets.length > 0);
}

/** Use the toolkit guide relation for mapped markers, with the marker field as a legacy fallback. */
export function getCanonicalGuideUrlForMapMarker(markerId: string): string | undefined {
	return toolkitItemByMapMarkerId.get(markerId)?.guideUrl ?? mapMarkers.find((marker) => marker.id === markerId)?.guideUrl;
}
