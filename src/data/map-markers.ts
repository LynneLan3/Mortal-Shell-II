/**
 * Interactive Map marker contract.
 *
 * Coordinates are normalized against the basemap (0–1). The origin is the
 * image's top-left corner; the bottom-right corner is (1, 1). Keep marker
 * placement independent from the current raster dimensions.
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
	xNorm: number;
	yNorm: number;
	description: string;
	requirements?: string;
	usefulNote?: string;
	nearby?: readonly string[];
	sameArea?: string;
	sameStoryline?: string;
	missableWarning?: string;
	relatedAchievement?: string;
	guideUrl?: string;
	image?: string;
	source: string;
}

/** Temporary third-party basemap; provenance is disclosed in the map UI and research note. */
export const mapBasemap = {
	image: '/images/map/mortal-shell-ii-world.webp',
	width: 960,
	height: 960,
	sourceName: 'LootMap',
	sourceUrl: 'https://lootmap.gg/mortal-shell-ii/world/',
	status: 'temporary',
	replaceLater: true,
} as const;

/**
 * Curated, high-value markers only. Coordinates are normalized from the public
 * map links in each marker source against the current basemap canvas.
 * This is not a copy of LootMap's complete marker dataset.
 */
export const mapMarkers: readonly MapMarker[] = [
	{
		id: 'shell-smert', name: 'Smert', category: 'Shells', region: 'Fainweald · western pocket',
		xNorm: 0.3569, yNorm: 0.4277, description: 'Shell pickup at Prophet’s Rest; use the existing Smert route to complete the blood-pool and Memory sequence.',
		requirements: 'Activate the three blood pools, start The Convert, and defeat the Hierarch.',
		usefulNote: 'This marker combines a Shell pickup with the linked Memory sequence, so it is a strong first stop for the Fainweald Shell route.',
		nearby: ['map-station-fainweald-lower-west'], sameArea: 'Fainweald', sameStoryline: 'Smert Memory',
		guideUrl: '/mortal-shell-ii/smert/', image: '/images/ova/methers-breath-tutorial.webp',
		source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-70cc2730&x=2924&y=3504&z=5',
	},
	{
		id: 'shell-eredrim', name: 'Eredrim', category: 'Shells', region: 'Fainweald · northwestern forest',
		xNorm: 0.3878, yNorm: 0.3071, description: 'Shell pickup beside the northwestern Map Station and Healing Power Chalice route.',
		requirements: 'Reach the Citadel of Penance, defeat The Warden, and interact with Eredrim.',
		usefulNote: 'The nearby map station makes this a natural paired cleanup stop on the northwestern forest route.',
		nearby: ['map-station-fainweald-west', 'map-station-fainweald-north'], sameArea: 'Fainweald',
		guideUrl: '/mortal-shell-ii/eredrim/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-e72087e3&x=3177&y=2516&z=5',
	},
	{
		id: 'shell-proxima', name: 'Proxima', category: 'Shells', region: 'Fainweald · northern edge',
		xNorm: 0.519, yNorm: 0.2849, description: 'Northern Shell pickup near the Shattered Beacon and Veteran’s Battle Axe route.',
		requirements: 'Follow the Blackridge Pass and Shattered Beacon route described in the Proxima guide.',
		usefulNote: 'Use the northern map-station route to combine this Shell stop with nearby map coverage.',
		nearby: ['map-station-fainweald-north'], sameArea: 'Fainweald',
		guideUrl: '/mortal-shell-ii/proxima/', image: '/images/proxima/proxima-unlocked.png', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-e62fdde2&x=4252&y=2334&z=5',
	},
	{
		id: 'shell-tiel', name: 'Tiel', category: 'Shells', region: 'Fainweald · northeast of Marrow Keep',
		xNorm: 0.5464, yNorm: 0.396, description: 'Shell pickup near the northeastern dungeon entrance; follow the Tiel Memory route from Widow’s Overlook.',
		requirements: 'Find Tiel near Widow’s Overlook and complete the Rash Memory.',
		usefulNote: 'Pair this Shell with the northeast map station before continuing toward the eastern forest route.',
		nearby: ['map-station-fainweald-tiel'], sameArea: 'Fainweald',
		guideUrl: '/mortal-shell-ii/tiel/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-107e77c4&x=4476&y=3244&z=5',
	},
	{
		id: 'shell-gragu', name: 'Gragu', category: 'Shells', region: 'Fainweald · eastern end',
		xNorm: 0.639, yNorm: 0.36, description: 'Eastern Shell pickup beside the Troubadour’s Lute and One-Legged Wolf route.',
		requirements: 'Return the Heart of Vatra from the Temple of Vatra to Gragu.',
		usefulNote: 'This is the eastern endpoint of the curated Fainweald Shell sequence and shares the route with the eastern map station.',
		nearby: ['map-station-fainweald-east'], sameArea: 'Fainweald',
		guideUrl: '/mortal-shell-ii/gragu/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-72fd5dca&x=5235&y=2949&z=5',
	},
	{
		id: 'shell-genessa', name: 'Sester Genessa', category: 'Shells', region: 'Ruins of Mammon · southeast of Marrow Keep',
		xNorm: 0.5724, yNorm: 0.607, description: 'The Shell pickup the in-game map does not lead to; use the Sester Genessa route for the Censer boundary.',
		requirements: 'Defeat Sester Secundus, return the required item, and complete Genessa’s Memory.',
		usefulNote: 'This is the northern Shell stop in Mammon Cleanup and helps connect the map to the existing Sester Genessa guide.',
		nearby: ['map-station-mammon-hub', 'map-station-mammon-center'], sameArea: 'Ruins of Mammon',
		guideUrl: '/mortal-shell-ii/sester-genessa/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-3e7dbb22&x=4689&y=4973&z=5',
	},
	{
		id: 'shell-lazlo', name: 'Lazlo', category: 'Shells', region: 'Ruins of Mammon · southwest',
		xNorm: 0.2782, yNorm: 0.6226, description: 'Western southern Shell pickup; finish Vellen and Lazlo’s post-fight Memory sequence to unlock it.',
		requirements: 'Defeat Vellen, reach Lazlo’s remains, and complete the unlock Memory.',
		usefulNote: 'The western Mammon map station and Lazlo marker form a useful pair before the route crosses the central ruins.',
		nearby: ['map-station-mammon-west'], sameArea: 'Ruins of Mammon',
		guideUrl: '/mortal-shell-ii/vellen-lazlo/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-a5819b77&x=2279&y=5100&z=5',
	},
	{
		id: 'shell-sariel', name: 'Sariel', category: 'Shells', region: 'Ruins of Mammon · deep south',
		xNorm: 0.588, yNorm: 0.7933, description: 'Southernmost Shell pickup near the Secret Pipe and Caged Hystrix routes.',
		requirements: 'Destroy the revival markers, defeat Sariel permanently, and complete the nearby Memory.',
		usefulNote: 'This is the southern endpoint of the current Mammon Shell coverage and links directly to the Sariel guide.',
		nearby: ['map-station-mammon-southwest'], sameArea: 'Ruins of Mammon',
		guideUrl: '/mortal-shell-ii/sariel/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=shells%2Cshell-interactions&sel=shells-7ab895ac&x=4817&y=6499&z=5',
	},
	{
		id: 'map-station-fainweald-west', name: 'Map Station — Fainweald west', category: 'Map Fragments', region: 'Fainweald · western forest',
		xNorm: 0.3813, yNorm: 0.313, description: 'Ruk map station holding a Fainweald fragment, near the Eredrim pickup.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-887ad76a&x=3124&y=2564&z=5',
	},
	{
		id: 'map-station-fainweald-lower-west', name: 'Map Station — Fainweald lower west', category: 'Map Fragments', region: 'Fainweald · western route',
		xNorm: 0.3911, yNorm: 0.3992, description: 'Lower-western Ruk map station; use the named beacon and landmark route rather than a room-by-room shortcut.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-756fe4f7&x=3204&y=3270&z=5',
	},
	{
		id: 'map-station-fainweald-north', name: 'Map Station — Fainweald north', category: 'Map Fragments', region: 'Fainweald · north-central forest',
		xNorm: 0.4849, yNorm: 0.3076, description: 'North-central Ruk map station near the Forgotten Crossbow route and a nearby Beacon.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-88c99b9d&x=3972&y=2520&z=5',
	},
	{
		id: 'map-station-fainweald-tiel', name: 'Map Station — Fainweald Tiel route', category: 'Map Fragments', region: 'Fainweald · northeast route',
		xNorm: 0.53, yNorm: 0.3915, description: 'Ruk map station west of the Tiel pickup on the northeast forest route.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-665dcdfc&x=4342&y=3207&z=5',
	},
	{
		id: 'map-station-fainweald-east', name: 'Map Station — Fainweald east', category: 'Map Fragments', region: 'Fainweald · eastern route',
		xNorm: 0.6248, yNorm: 0.3353, description: 'Eastern Ruk map station with the Gragu and Troubadour’s Lute route to the southeast.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-d1cf818e&x=5118&y=2747&z=5',
	},
	{
		id: 'map-station-mammon-hub', name: 'Map Station — Mammon north', category: 'Map Fragments', region: 'Ruins of Mammon · north',
		xNorm: 0.463, yNorm: 0.5846, description: 'Northern Mammon Ruk map station on the route south from Marrow Keep.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-d0098746&x=3793&y=4789&z=5',
	},
	{
		id: 'map-station-mammon-west', name: 'Map Station — Mammon west', category: 'Map Fragments', region: 'Ruins of Mammon · west',
		xNorm: 0.4022, yNorm: 0.6509, description: 'Western Mammon Ruk map station near the Lazlo and Obsidian Hammer routes.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&x=3295&y=5332&z=4',
	},
	{
		id: 'map-station-mammon-center', name: 'Map Station — Mammon center', category: 'Map Fragments', region: 'Ruins of Mammon · central',
		xNorm: 0.5764, yNorm: 0.6702, description: 'Central Mammon Ruk map station near the city route and key checkpoints.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&sel=map-fragments-d0ec85a0&x=4722&y=5490&z=5',
	},
	{
		id: 'map-station-mammon-southwest', name: 'Map Station — Mammon southwest', category: 'Map Fragments', region: 'Ruins of Mammon · southwest',
		xNorm: 0.4944, yNorm: 0.7637, description: 'Deep-south Ruk map station on the long route toward the southern weapon and Shell coverage.',
		guideUrl: '/mortal-shell-ii/map-fragments/', source: 'https://lootmap.gg/mortal-shell-ii/world/?cat=map-fragments%2Cmap-stations&x=4050&y=6256&z=4',
	},
];

export const mapMarkerById = new Map(mapMarkers.map((marker) => [marker.id, marker]));
