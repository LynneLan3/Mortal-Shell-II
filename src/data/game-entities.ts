import { mapMarkers, type MapMarker } from './map-markers';
import { mapRoutes, type MapRoute } from './map-routes';
import { toolkitItems, type ToolkitCategory, type ToolkitItem } from './toolkit-items';

export type GameEntityKind = 'Shell' | 'Weapon' | 'Sidearm' | 'Boss' | 'Location' | 'Objective' | 'Route';

export interface GameEntity {
	id: string;
	kind: GameEntityKind;
	name: string;
	region?: string;
	description?: string;
	guideUrl?: string;
	mapMarkerId?: string;
	relatedRouteIds?: readonly string[];
}

function toolkitKind(category: ToolkitCategory): GameEntityKind {
	if (category === 'Shells') return 'Shell';
	if (category === 'Weapons') return 'Weapon';
	if (category === 'Sidearms') return 'Sidearm';
	if (category === 'Bosses') return 'Boss';
	return 'Objective';
}

function entityFromToolkit(item: ToolkitItem): GameEntity {
	return {
		id: item.id,
		kind: toolkitKind(item.category),
		name: item.name,
		region: item.region,
		description: item.description,
		guideUrl: item.guideUrl,
		mapMarkerId: item.mapMarkerId,
	};
}

export const shellEntities: readonly GameEntity[] = toolkitItems.filter((item) => item.category === 'Shells').map(entityFromToolkit);
export const weaponEntities: readonly GameEntity[] = toolkitItems.filter((item) => item.category === 'Weapons').map(entityFromToolkit);
export const sidearmEntities: readonly GameEntity[] = toolkitItems.filter((item) => item.category === 'Sidearms').map(entityFromToolkit);
export const bossEntityRefs: readonly GameEntity[] = toolkitItems.filter((item) => item.category === 'Bosses').map(entityFromToolkit);

export interface LocationObjectiveEntity extends GameEntity {
	kind: 'Location' | 'Objective';
	source: string;
}

export const locationObjectiveEntities: readonly LocationObjectiveEntity[] = mapMarkers.map((marker: MapMarker) => ({
	id: marker.id,
	kind: marker.category === 'Map Fragments' ? 'Objective' : 'Location',
	name: marker.name,
	region: marker.region,
	description: marker.description,
	guideUrl: marker.guideUrl,
	mapMarkerId: marker.id,
	source: marker.source,
}));

export interface RouteEntity extends GameEntity {
	kind: 'Route';
	mapRoute: MapRoute;
}

export const routeEntities: readonly RouteEntity[] = mapRoutes.map((route) => ({
	id: route.id,
	kind: 'Route',
	name: route.name,
	region: route.region,
	description: route.description,
	guideUrl: route.guide,
	mapRoute: route,
}));

export interface BossEntity extends GameEntity {
	kind: 'Boss';
	area: string;
	progressionGroup: 'Prologue' | 'Fainweald' | 'Mammon' | 'The Unfound Path' | 'Endgame / Zmey' | 'Optional / Other';
	progressionPosition: number;
	requiredStatus: 'Required' | 'Optional' | 'Boss-linked';
	reward: string;
	relatedRouteIds: readonly string[];
}

/**
 * Boss hub display data is kept here so the hub, toolkit references, and route
 * links share one entity vocabulary. Rewards remain conservative when the
 * current guide does not normalize a distinct item reward.
 */
export const bossEntities: readonly BossEntity[] = [
	{ id: 'boss-tar-golem', kind: 'Boss', name: 'Tar Golem', area: "Disciple's Grotto · Prologue", region: 'Prologue', progressionGroup: 'Prologue', progressionPosition: 1, requiredStatus: 'Boss-linked', reward: 'No, You Still Can’t Win trophy opportunity', guideUrl: '/mortal-shell-ii/tar-golem/', description: 'Take the Prologue encounter to minimum health for the missable No, You Still Can’t Win trophy.', relatedRouteIds: ['/mortal-shell-ii/routes/start-launch/'] },
	{ id: 'boss-magdalena', kind: 'Boss', name: 'Magdalena, the Lady of the Woods', area: 'Sunken Village · Open Beta route', region: 'Fainweald', progressionGroup: 'Optional / Other', progressionPosition: 20, requiredStatus: 'Optional', reward: 'See the Open Beta route guide', guideUrl: '/mortal-shell-ii/magdalena/', description: 'Use the existing beta guide for the named encounter, route context, and the limits of what the preview confirms.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-lucian', kind: 'Boss', name: 'Lucian the Thirsting Knight', area: 'Hidden Keep · Stonebled Gate', region: 'Fainweald', progressionGroup: 'Fainweald', progressionPosition: 2, requiredStatus: 'Required', reward: 'Hidden Keep progression', guideUrl: '/mortal-shell-ii/lucian-thirsting-knight/', description: 'Follow the Hidden Keep route and prepare for Lucian’s invisible second phase.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-lost-child', kind: 'Boss', name: 'The Lost Child', area: 'Sanguine Caverns · Fainweald', region: 'Fainweald', progressionGroup: 'Fainweald', progressionPosition: 3, requiredStatus: 'Required', reward: 'Sanguine Caverns progression', guideUrl: '/mortal-shell-ii/lost-child/', description: 'Reach the arena from Sanguine Shoreline Beacon and manage Digest & Excrete and Belching Breath.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-sariel', kind: 'Boss', name: 'Sariel the Endless', area: 'Chamber of Becoming · Silent Steps · Mammon', region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 8, requiredStatus: 'Optional', reward: 'Sariel Shell unlock route', guideUrl: '/mortal-shell-ii/sariel/', description: 'Destroy all four revival tablets before completing the Sariel route and Shell unlock.', relatedRouteIds: ['/mortal-shell-ii/routes/mammon-cleanup/'] },
	{ id: 'boss-vrannic', kind: 'Boss', name: 'Vrannic the Grand Illusionist', area: 'Hall of Illusions · Mushroom Village Gate · Fainweald', region: 'Fainweald', progressionGroup: 'Fainweald', progressionPosition: 4, requiredStatus: 'Boss-linked', reward: 'Hall of Illusions progression', guideUrl: '/mortal-shell-ii/hall-of-illusions/', description: 'Solve the illusion-doorway route, find Vrannic above the room, and identify the real target.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-nameless-captive', kind: 'Boss', name: 'The Nameless Captive', area: "Captive's End · Prisoner's Domain · Fainweald", region: 'Fainweald', progressionGroup: 'Optional / Other', progressionPosition: 6, requiredStatus: 'Optional', reward: "Peter's Perfect Parry trophy opportunity", guideUrl: '/mortal-shell-ii/nameless-captive/', description: "Wait out the long sword strings, handle the second-phase attacks, and attempt Peter's Perfect Parry before killing the boss if you still need the seven-hit headspin challenge.", relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-droeg', kind: 'Boss', name: 'Droeg the Conqueror', area: 'Conquered Temple · Mammon', region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 7, requiredStatus: 'Required', reward: "Conqueror’s Reward; optional Frostshard Stone route", guideUrl: '/mortal-shell-ii/droeg-the-conqueror/', description: 'Reach Droeg through Ovate’s Chamber, survive the red-glow Frostfire barrage, and claim Conqueror’s Reward plus the optional Frostshard Stone route.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-hexapod', kind: 'Boss', name: 'Hexapod', area: 'Withered Shoals · Ruins of Mammon', region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 9, requiredStatus: 'Boss-linked', reward: 'Hexapod Core for Axatana', guideUrl: '/mortal-shell-ii/hexapod/', description: 'Reach the void below Ruk from Nameless Pass Beacon, read the red-warning tells, and claim Hexapod Core for Axatana.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-isaac', kind: 'Boss', name: 'Isaac the Scholar Prince', area: 'Faded Citadel · Ashen Sanctum', region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 10, requiredStatus: 'Boss-linked', reward: 'Scholar’s Wormstone', guideUrl: '/mortal-shell-ii/isaac-the-scholar-prince/', description: 'Use Citadel Atrium Beacon, let Isaac finish his strings, and handle the conditional Riposte transition before claiming Scholar’s Wormstone.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-orrem', kind: 'Boss', name: 'Orrem the Discarded Golem', area: 'Bridge of Procession · The Unfound Path', region: 'The Unfound Path', progressionGroup: 'The Unfound Path', progressionPosition: 12, requiredStatus: 'Required', reward: 'The Unfound Path progression', guideUrl: '/mortal-shell-ii/orrem-discarded-golem/', description: 'Cleanse the Bridge of Procession Beacon, save a heal for Reclaimed form, and survive the flaming-axe and tail phases.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-monolith', kind: 'Boss', name: 'The Monolith', area: 'Obsidian Vault · The Unfound Path', region: 'The Unfound Path', progressionGroup: 'The Unfound Path', progressionPosition: 13, requiredStatus: 'Required', reward: 'The Unfound Path progression', guideUrl: '/mortal-shell-ii/monolith/', description: 'Use the Obsidian Vault Beacon, punish the exposed center after each slam, and sever the red gland after the kill.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-malborn', kind: 'Boss', name: 'Malborn Offspring', area: "Faithful's Shelter · The Unfound Path", region: 'The Unfound Path', progressionGroup: 'The Unfound Path', progressionPosition: 14, requiredStatus: 'Required', reward: 'The Unfound Path progression', guideUrl: '/mortal-shell-ii/malborn-offspring/', description: 'Read the delayed cleaving strings, dodge red-circle attacks, and keep attacking through the slow resurrection before the lightning phase.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-zmey', kind: 'Boss', name: 'Zmey the Unbidden', area: 'Hidden Nave · The Unfound Path', region: 'The Unfound Path', progressionGroup: 'Endgame / Zmey', progressionPosition: 16, requiredStatus: 'Required', reward: 'Send Ova / ending decision', guideUrl: '/mortal-shell-ii/zmey/', description: 'Reach the final arena through the Hidden Nave Beacon, dodge Cosmic Flame tells, and treat the Send Ova choice as a consequential ending decision.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/', '/mortal-shell-ii/new-game-plus/'] },
	{ id: 'boss-vellen', kind: 'Boss', name: 'Vellen, High Lord of Mammon', area: "High Lord’s Courtyard · Outskirts of Mammon", region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 5, requiredStatus: 'Boss-linked', reward: 'Lazlo Shell unlock route', guideUrl: '/mortal-shell-ii/vellen-lazlo/', description: 'Reach the High Lord’s Courtyard, read Vellen’s arena tells, and interact with Lazlo’s remains after the fight to complete the unlock Memory.', relatedRouteIds: ['/mortal-shell-ii/routes/mammon-cleanup/'] },
	{ id: 'boss-warden', kind: 'Boss', name: 'The Warden', area: 'Citadel of Penance', region: 'Fainweald', progressionGroup: 'Fainweald', progressionPosition: 5, requiredStatus: 'Optional', reward: 'Eredrim Shell unlock route', guideUrl: '/mortal-shell-ii/eredrim/', description: 'Reach The Warden as part of Eredrim’s unlock route, then inhabit the Shell after the encounter.', relatedRouteIds: ['/mortal-shell-ii/routes/fainweald-shells/'] },
	{ id: 'boss-prophet', kind: 'Boss', name: 'Prophet of Profane Infinities', area: 'Obsidianite Mines · Mammon', region: 'Mammon', progressionGroup: 'Mammon', progressionPosition: 11, requiredStatus: 'Boss-linked', reward: 'Obsidian Hammer route', guideUrl: '/mortal-shell-ii/obsidian-hammer/', description: 'Reach the end of the Obsidianite Mines route to defeat the encounter tied to the Obsidian Hammer.', relatedRouteIds: ['/mortal-shell-ii/routes/world-progression/'] },
	{ id: 'boss-hierarch', kind: 'Boss', name: 'The Hierarch', area: "Prophet's Rest · Outskirts of Nochte · Fainweald", region: 'Fainweald', progressionGroup: 'Fainweald', progressionPosition: 7, requiredStatus: 'Optional', reward: 'Smert Shell unlock route', guideUrl: '/mortal-shell-ii/smert/', description: 'Complete the three-blood-pool ritual and The Convert Memory before the Hierarch encounter.', relatedRouteIds: ['/mortal-shell-ii/routes/smert-memory/'] },
];

export const gameEntities = {
	shells: shellEntities,
	weapons: weaponEntities,
	sidearms: sidearmEntities,
	bosses: bossEntities,
	locationsAndObjectives: locationObjectiveEntities,
	routes: routeEntities,
} as const;
