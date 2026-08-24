import type { MapMarker } from '../data/map-markers';
import type { MapRegionDefinition } from '../data/map-regions';

/**
 * Converts the data layer's top-left normalized coordinates to Leaflet's
 * CRS.Simple coordinate order: [y, x]. Leaflet still renders the image with
 * the same top-left origin, so no marker-specific transform is allowed.
 */
export function normalizedToLeaflet(marker: Pick<MapMarker, 'xNorm' | 'yNorm'>, width = 1, height = 1): [number, number] {
	return [marker.yNorm * height, marker.xNorm * width];
}

export function normalizedPointToLeaflet(xNorm: number, yNorm: number, width = 1, height = 1): [number, number] {
	return [yNorm * height, xNorm * width];
}

export function regionBoundsToLeaflet(region: Pick<MapRegionDefinition, 'xNorm' | 'yNorm' | 'widthNorm' | 'heightNorm'>, width = 1, height = 1) {
	return [
		normalizedPointToLeaflet(region.xNorm, region.yNorm, width, height),
		normalizedPointToLeaflet(region.xNorm + region.widthNorm, region.yNorm + region.heightNorm, width, height),
	] as [[number, number], [number, number]];
}

export function assertNormalizedCoordinate(value: number, label: string): number {
	if (!Number.isFinite(value) || value < 0 || value > 1) {
		throw new Error(`${label} must be normalized to the 0..1 range`);
	}
	return value;
}
