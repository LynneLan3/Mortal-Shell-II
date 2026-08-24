import type { MapMarker } from './map-markers';

export interface MapRegionDefinition {
	id: 'fainweald' | 'mammon';
	name: string;
	href: string;
	left: number;
	top: number;
	width: number;
	height: number;
	description: string;
}

/** Regions are limited to areas represented by the current verified marker set. */
export const mapRegions: readonly MapRegionDefinition[] = [
	{ id: 'fainweald', name: 'Fainweald', href: '/mortal-shell-ii/map/fainweald/', left: 8, top: 12, width: 56, height: 43, description: 'Verified Shell and map-fragment coverage in the Fainweald area.' },
	{ id: 'mammon', name: 'Ruins of Mammon', href: '/mortal-shell-ii/map/mammon/', left: 25, top: 48, width: 61, height: 43, description: 'Verified map-station coverage and curated objectives around Mammon.' },
] as const;

export function regionIdForMarker(marker: Pick<MapMarker, 'region'>): MapRegionDefinition['id'] {
	return marker.region.toLowerCase().includes('mammon') ? 'mammon' : 'fainweald';
}

export function getMapRegion(id: string) {
	return mapRegions.find((region) => region.id === id);
}
