export const TOOLKIT_STORAGE_KEY = 'ms2-toolkit-progress-v1';

export const TOOLKIT_CATEGORIES = ['Shells', 'Map Fragments', 'Bosses', 'Weapons', 'Sidearms'] as const;

export type ToolkitCategory = (typeof TOOLKIT_CATEGORIES)[number];

export interface ToolkitItem {
	id: string;
	name: string;
	category: ToolkitCategory;
	region?: string;
	guideUrl?: string;
	mapMarkerId?: string;
	description?: string;
}

/**
 * The first Player Toolkit collection is intentionally finite and evidence-bounded.
 * mapMarkerId is optional: checklist items do not need verified coordinates to be trackable.
 */
export const toolkitItems: readonly ToolkitItem[] = [
	{
		id: 'shell-harros', name: 'Harros the Vassal', category: 'Shells', region: 'Prologue',
		guideUrl: '/mortal-shell-ii/shells/', description: 'The prologue Shell; available during the opening section and not a permanent unlock.',
	},
	{
		id: 'shell-tiel', name: 'Tiel the Acolyte', category: 'Shells', region: "Fainweald · Widow's Overlook",
		guideUrl: '/mortal-shell-ii/tiel/', mapMarkerId: 'shell-tiel', description: 'Complete the Rash Memory after finding Tiel near Widow’s Overlook.',
	},
	{
		id: 'shell-proxima', name: 'Proxima the Broodseeker', category: 'Shells', region: 'Fainweald · Shattered Beacon',
		guideUrl: '/mortal-shell-ii/proxima/', mapMarkerId: 'shell-proxima', description: 'Find the Unknown Shell near Blackridge Pass and complete the Memory sequence.',
	},
	{
		id: 'shell-gragu', name: 'Gragu the Insatiable', category: 'Shells', region: 'Fainweald · One-Legged Wolf Tavern',
		guideUrl: '/mortal-shell-ii/gragu/', mapMarkerId: 'shell-gragu', description: 'Return the Heart of Vatra from the Temple of Vatra to Gragu.',
	},
	{
		id: 'shell-eredrim', name: 'Eredrim the Venerable', category: 'Shells', region: 'Fainweald · Citadel of Penance',
		guideUrl: '/mortal-shell-ii/eredrim/', mapMarkerId: 'shell-eredrim', description: 'Reach the Citadel of Penance, defeat The Warden, and interact with Eredrim.',
	},
	{
		id: 'shell-smert', name: 'Smert the Apostate', category: 'Shells', region: "Fainweald · Prophet's Rest",
		guideUrl: '/mortal-shell-ii/smert/', mapMarkerId: 'shell-smert', description: 'Activate the three blood pools, start The Convert, and defeat the Hierarch.',
	},
	{
		id: 'shell-lazlo', name: 'Lazlo the Justiciar', category: 'Shells', region: "Mammon · High Lord's Courtyard",
		guideUrl: '/mortal-shell-ii/vellen-lazlo/', mapMarkerId: 'shell-lazlo', description: 'Defeat Vellen, reach Lazlo’s remains, and complete the unlock Memory.',
	},
	{
		id: 'shell-sariel', name: 'Sariel the Endless', category: 'Shells', region: 'Mammon · Chamber of Becoming',
		guideUrl: '/mortal-shell-ii/sariel/', mapMarkerId: 'shell-sariel', description: 'Destroy the revival markers, defeat Sariel permanently, and complete the nearby Memory.',
	},
	{
		id: 'shell-genessa', name: 'Genessa the Wayward', category: 'Shells', region: 'Marrow Keep · Sester Secundus route',
		guideUrl: '/mortal-shell-ii/sester-genessa/', mapMarkerId: 'shell-genessa', description: 'Defeat Sester Secundus, return the required item, and complete Genessa’s Memory.',
	},

	{
		id: 'map-fragment-fainweald-west', name: 'Map Fragment — Fainweald west', category: 'Map Fragments', region: 'Fainweald · western forest',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-fainweald-west', description: 'Ruk map station on the western forest route.',
	},
	{
		id: 'map-fragment-fainweald-lower-west', name: 'Map Fragment — Fainweald lower west', category: 'Map Fragments', region: 'Fainweald · western route',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-fainweald-lower-west', description: 'Lower-western Ruk map station near a named beacon route.',
	},
	{
		id: 'map-fragment-fainweald-north', name: 'Map Fragment — Fainweald north', category: 'Map Fragments', region: 'Fainweald · north-central forest',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-fainweald-north', description: 'North-central Ruk map station near the Forgotten Crossbow route.',
	},
	{
		id: 'map-fragment-fainweald-tiel', name: 'Map Fragment — Fainweald Tiel route', category: 'Map Fragments', region: 'Fainweald · northeast route',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-fainweald-tiel', description: 'Ruk map station west of the Tiel pickup on the northeast route.',
	},
	{
		id: 'map-fragment-fainweald-east', name: 'Map Fragment — Fainweald east', category: 'Map Fragments', region: 'Fainweald · eastern route',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-fainweald-east', description: 'Eastern Ruk map station on the Gragu and Troubadour’s Lute route.',
	},
	{
		id: 'map-fragment-mammon-north', name: 'Map Fragment — Mammon north', category: 'Map Fragments', region: 'Ruins of Mammon · north',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-mammon-hub', description: 'Northern Mammon Ruk map station south of Marrow Keep.',
	},
	{
		id: 'map-fragment-mammon-west', name: 'Map Fragment — Mammon west', category: 'Map Fragments', region: 'Ruins of Mammon · west',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-mammon-west', description: 'Western Mammon Ruk map station near the Lazlo and Obsidian Hammer routes.',
	},
	{
		id: 'map-fragment-mammon-center', name: 'Map Fragment — Mammon center', category: 'Map Fragments', region: 'Ruins of Mammon · central',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-mammon-center', description: 'Central Mammon Ruk map station near the city route.',
	},
	{
		id: 'map-fragment-mammon-southwest', name: 'Map Fragment — Mammon southwest', category: 'Map Fragments', region: 'Ruins of Mammon · southwest',
		guideUrl: '/mortal-shell-ii/map-fragments/', mapMarkerId: 'map-station-mammon-southwest', description: 'Deep-south Ruk map station toward the southern weapon and Shell routes.',
	},
	{
		id: 'map-fragment-fainweald-blackridge', name: 'Map Fragment — Blackridge Pass', category: 'Map Fragments', region: 'Fainweald · Blackridge Pass',
		guideUrl: '/mortal-shell-ii/map-fragments/', description: 'Checklist coverage for the rope-bridge branch near the Blackridge Pass trial altar; no current verified map coordinate is attached.',
	},
	{
		id: 'map-fragment-mammon-abbey', name: "Map Fragment — Sester's Abbey", category: 'Map Fragments', region: "Mammon · Sester's Abbey",
		guideUrl: '/mortal-shell-ii/map-fragments/', description: 'Checklist coverage for the southeast Abbey route; no current verified map coordinate is attached.',
	},

	{
		id: 'boss-tar-golem', name: 'Tar Golem', category: 'Bosses', region: "Disciple's Grotto · Prologue", guideUrl: '/mortal-shell-ii/tar-golem/', description: 'Prologue encounter tied to the missable No, You Still Can’t Win trophy.'
	},
	{
		id: 'boss-magdalena', name: 'Magdalena, the Lady of the Woods', category: 'Bosses', region: 'Sunken Village · Open Beta route', guideUrl: '/mortal-shell-ii/magdalena/'
	},
	{
		id: 'boss-lucian', name: 'Lucian the Thirsting Knight', category: 'Bosses', region: 'Hidden Keep · Stonebled Gate', guideUrl: '/mortal-shell-ii/lucian-thirsting-knight/'
	},
	{
		id: 'boss-lost-child', name: 'The Lost Child', category: 'Bosses', region: 'Sanguine Caverns · Fainweald', guideUrl: '/mortal-shell-ii/lost-child/'
	},
	{
		id: 'boss-sariel', name: 'Sariel the Endless', category: 'Bosses', region: 'Chamber of Becoming · Mammon', guideUrl: '/mortal-shell-ii/sariel/'
	},
	{
		id: 'boss-vrannic', name: 'Vrannic the Grand Illusionist', category: 'Bosses', region: 'Hall of Illusions · Fainweald', guideUrl: '/mortal-shell-ii/hall-of-illusions/'
	},
	{
		id: 'boss-nameless-captive', name: 'The Nameless Captive', category: 'Bosses', region: "Captive's End · Prisoner's Domain", guideUrl: '/mortal-shell-ii/nameless-captive/'
	},
	{
		id: 'boss-droeg', name: 'Droeg the Conqueror', category: 'Bosses', region: 'Conquered Temple · Mammon', guideUrl: '/mortal-shell-ii/droeg-the-conqueror/'
	},
	{
		id: 'boss-hexapod', name: 'Hexapod', category: 'Bosses', region: 'Withered Shoals · Ruins of Mammon', guideUrl: '/mortal-shell-ii/hexapod/'
	},
	{
		id: 'boss-isaac', name: 'Isaac the Scholar Prince', category: 'Bosses', region: 'Faded Citadel · Ashen Sanctum', guideUrl: '/mortal-shell-ii/isaac-the-scholar-prince/'
	},
	{
		id: 'boss-orrem', name: 'Orrem the Discarded Golem', category: 'Bosses', region: 'Bridge of Procession · The Unfound Path', guideUrl: '/mortal-shell-ii/orrem-discarded-golem/'
	},
	{
		id: 'boss-monolith', name: 'The Monolith', category: 'Bosses', region: 'Obsidian Vault · The Unfound Path', guideUrl: '/mortal-shell-ii/monolith/'
	},
	{
		id: 'boss-malborn', name: 'Malborn Offspring', category: 'Bosses', region: "Faithful's Shelter · The Unfound Path", guideUrl: '/mortal-shell-ii/malborn-offspring/'
	},
	{
		id: 'boss-zmey', name: 'Zmey the Unbidden', category: 'Bosses', region: 'Hidden Nave · The Unfound Path', guideUrl: '/mortal-shell-ii/zmey/'
	},
	{
		id: 'boss-vellen', name: 'Vellen, High Lord of Mammon', category: 'Bosses', region: "High Lord's Courtyard · Mammon", guideUrl: '/mortal-shell-ii/vellen-lazlo/'
	},
	{
		id: 'boss-warden', name: 'The Warden', category: 'Bosses', region: 'Citadel of Penance · Fainweald', guideUrl: '/mortal-shell-ii/eredrim/'
	},
	{
		id: 'boss-prophet', name: 'Prophet of Profane Infinities', category: 'Bosses', region: 'Obsidianite Mines · Mammon', guideUrl: '/mortal-shell-ii/obsidian-hammer/'
	},
	{
		id: 'boss-hierarch', name: 'The Hierarch', category: 'Bosses', region: "Prophet's Rest · Fainweald", guideUrl: '/mortal-shell-ii/smert/'
	},

	{
		id: 'weapon-axe', name: 'Axe', category: 'Weapons', region: 'Prologue', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-dagger', name: 'Dagger', category: 'Weapons', region: 'Prologue', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-great-martyrs-blade', name: "Great Martyr's Blade", category: 'Weapons', region: 'Current weapons route', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-black-needle', name: 'Black Needle', category: 'Weapons', region: 'Current weapons route', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-clockwork-scythe', name: 'Clockwork Scythe', category: 'Weapons', region: 'Current weapons route', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-obsidian-hammer', name: 'Obsidian Hammer', category: 'Weapons', region: 'Obsidianite Mines · Mammon', guideUrl: '/mortal-shell-ii/obsidian-hammer/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-axatana', name: 'Axatana', category: 'Weapons', region: 'Current weapons route', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},
	{
		id: 'weapon-veterans-battle-axe', name: "Veteran's Battle Axe", category: 'Weapons', region: 'Fainweald · northern route', guideUrl: '/mortal-shell-ii/weapons/', description: 'Weapon objective covered by the current weapons guide; no verified map marker is attached.'
	},

	{
		id: 'sidearm-naylshotte', name: 'Naylshotte', category: 'Sidearms', region: 'Prologue', guideUrl: '/mortal-shell-ii/sidearms/', description: 'Starter Sidearm acquired during the Prologue.'
	},
	{
		id: 'sidearm-forgotten-crossbow', name: 'Forgotten Crossbow', category: 'Sidearms', region: 'Flooded Village', guideUrl: '/mortal-shell-ii/forgotten-crossbow/'
	},
	{
		id: 'sidearm-salvaged-trebuchaxe', name: 'Salvaged Trebuchaxe', category: 'Sidearms', region: 'Ravaged Hideout', guideUrl: '/mortal-shell-ii/salvaged-trebuchaxe/'
	},
	{
		id: 'sidearm-troubadours-lute', name: "Troubadour's Lute", category: 'Sidearms', region: 'One-Legged Wolf Tavern', guideUrl: '/mortal-shell-ii/troubadours-lute/'
	},
	{
		id: 'sidearm-triarch-repeater', name: 'Triarch Repeater', category: 'Sidearms', region: 'Blackwell Cavern · Mammon', guideUrl: '/mortal-shell-ii/triarch-repeater/'
	},
	{
		id: 'sidearm-ballistazooka', name: 'Ballistazooka', category: 'Sidearms', region: "Sentry's Grave · Gate of Mammon", guideUrl: '/mortal-shell-ii/ballistazooka/'
	},
	{
		id: 'sidearm-cursed-child', name: 'Cursed Child', category: 'Sidearms', region: 'Revered Beacon route', guideUrl: '/mortal-shell-ii/cursed-child/'
	},
	{
		id: 'sidearm-caged-hystrix', name: 'Caged Hystrix', category: 'Sidearms', region: 'Chamber of Becoming', guideUrl: '/mortal-shell-ii/caged-hystrix/'
	},
];

export const toolkitItemById = new Map(toolkitItems.map((item) => [item.id, item]));
export const toolkitItemByMapMarkerId = new Map(
	toolkitItems.filter((item) => item.mapMarkerId).map((item) => [item.mapMarkerId as string, item]),
);
