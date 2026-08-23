/**
 * Interactive Map marker contract.
 *
 * Coordinates are percentages of the eventual world-map image (0–100), so a
 * future replacement of the source image does not require pixel migration.
 * Keep this collection empty until a repository source proves both the
 * location and its precise placement on a real map asset.
 */
export const MAP_MARKER_CATEGORIES = [
	'Shells',
	'Weapons',
	'Sidearms',
	'Beacons',
	'Bosses',
	'Keys',
	'Map Fragments',
	'Tarforge',
	'Dungeons',
	'NPCs',
	'Night Mode',
	'Corrupted Gates',
] as const;

export type MapMarkerCategory = (typeof MAP_MARKER_CATEGORIES)[number];

export interface MapMarker {
	id: string;
	name: string;
	category: MapMarkerCategory;
	region: string;
	x: number;
	y: number;
	description: string;
	guideUrl?: string;
	image?: string;
	source: string;
}

/** Verified markers only. Add entries when exact relative coordinates are supported. */
export const mapMarkers: readonly MapMarker[] = [];
