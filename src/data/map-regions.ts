import type { MapMarker } from './map-markers';

export interface MapRegionDefinition {
	id: 'fainweald' | 'mammon';
	name: string;
	href: string;
	xNorm: number;
	yNorm: number;
	widthNorm: number;
	heightNorm: number;
	description: string;
}

/** Regions are limited to areas represented by the current verified marker set. */
export const mapRegions: readonly MapRegionDefinition[] = [
	{ id: 'fainweald', name: 'Fainweald', href: '/mortal-shell-ii/map/fainweald/', xNorm: 0.08, yNorm: 0.12, widthNorm: 0.56, heightNorm: 0.43, description: 'Verified Shell and map-fragment coverage in the Fainweald area.' },
	{ id: 'mammon', name: 'Ruins of Mammon', href: '/mortal-shell-ii/map/mammon/', xNorm: 0.25, yNorm: 0.48, widthNorm: 0.61, heightNorm: 0.43, description: 'Verified map-station coverage and curated objectives around Mammon.' },
] as const;

export function regionIdForMarker(marker: Pick<MapMarker, 'region'>): MapRegionDefinition['id'] {
	return marker.region.toLowerCase().includes('mammon') ? 'mammon' : 'fainweald';
}

export function getMapRegion(id: string) {
	return mapRegions.find((region) => region.id === id);
}
