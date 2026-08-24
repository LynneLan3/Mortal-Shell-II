import type { ToolkitCategory } from './toolkit-items';

export type AchievementCategory = 'Story' | 'Shells' | 'Weapons' | 'Sidearms' | 'Bosses' | 'Exploration' | 'Other';
export type AchievementProgressType = 'binary' | 'collection' | 'counter';

export interface AchievementDefinition {
	id: string;
	name: string;
	description: string;
	category: AchievementCategory;
	type: AchievementProgressType;
	objectiveIds?: readonly string[];
	manualTotal?: number;
	guideUrl?: string;
	routeId?: string;
	missable?: boolean;
	hidden?: boolean;
	platformAlias?: string;
}

const shellObjectives = [
	'shell-tiel', 'shell-proxima', 'shell-gragu', 'shell-eredrim',
	'shell-smert', 'shell-lazlo', 'shell-sariel', 'shell-genessa',
] as const;

const weaponObjectives = [
	'weapon-axe', 'weapon-dagger', 'weapon-great-martyrs-blade', 'weapon-black-needle',
	'weapon-clockwork-scythe', 'weapon-obsidian-hammer', 'weapon-axatana', 'weapon-veterans-battle-axe',
] as const;

const sidearmObjectives = [
	'sidearm-naylshotte', 'sidearm-forgotten-crossbow', 'sidearm-salvaged-trebuchaxe',
	'sidearm-troubadours-lute', 'sidearm-triarch-repeater', 'sidearm-ballistazooka',
	'sidearm-cursed-child', 'sidearm-caged-hystrix',
] as const;

const mapFragmentObjectives = [
	'map-fragment-fainweald-west', 'map-fragment-fainweald-lower-west', 'map-fragment-fainweald-north',
	'map-fragment-fainweald-tiel', 'map-fragment-fainweald-east', 'map-fragment-mammon-north',
	'map-fragment-mammon-west', 'map-fragment-mammon-center', 'map-fragment-mammon-southwest',
	'map-fragment-fainweald-blackridge', 'map-fragment-mammon-abbey',
] as const;

export const achievementDefinitions: readonly AchievementDefinition[] = [
	{ id: 'mid-summer', name: 'Mid Summer?', description: 'Enter the Festival during the opening sequence.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/skip-prologue/', missable: true },
	{ id: 'no-you-still-cant-win', name: "No, You Still Can't Win", description: 'Reduce the tutorial Tar Golem to its minimum or zero health.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/tar-golem/', missable: true },
	{ id: 'peters-perfect-parry', name: "Peter's Perfect Parry", description: "Perfect Guard the Nameless Captive's qualifying seven-hit headspin.", category: 'Other', type: 'binary', guideUrl: '/mortal-shell-ii/peters-perfect-parry/', missable: true },
	{ id: 'more-than-a-weapon', name: "You're More Than a Weapon", description: 'Claim your first Shell, Weapon, and Sidearm.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/gameplay/' },
	{ id: 'home-at-last', name: 'Home at Last', description: 'Reach Marrowkeep.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/gameplay/' },
	{ id: 'haunting-times', name: 'Haunting Times', description: 'Watch your first Shell Memory.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/shell-memories/' },
	{ id: 'deep-cuts', name: 'Deep Cuts', description: 'Unlock the Axe and Dagger.', category: 'Weapons', type: 'collection', objectiveIds: ['weapon-axe', 'weapon-dagger'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'big-boi', name: 'Big Boi', description: "Unlock the Great Martyr's Blade.", category: 'Weapons', type: 'binary', objectiveIds: ['weapon-great-martyrs-blade'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'just-the-tip', name: 'Just the Tip / Point Taken', description: 'Unlock the Black Needle.', category: 'Weapons', type: 'binary', objectiveIds: ['weapon-black-needle'], guideUrl: '/mortal-shell-ii/weapons/', platformAlias: 'Point Taken' },
	{ id: 'like-clockwork', name: 'Like Clockwork', description: 'Unlock the Clockwork Scythe.', category: 'Weapons', type: 'binary', objectiveIds: ['weapon-clockwork-scythe'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'stop-hammer-time', name: 'Stop - Hammer Time', description: 'Unlock the Obsidian Hammer.', category: 'Weapons', type: 'binary', objectiveIds: ['weapon-obsidian-hammer'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'dual-wielding', name: 'Dual Wielding', description: 'Unlock the Axatana.', category: 'Weapons', type: 'binary', objectiveIds: ['weapon-axatana'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'cut-you-down-to-size', name: 'Cut You Down to Size', description: "Unlock the Veteran's Battle Axe.", category: 'Weapons', type: 'binary', objectiveIds: ['weapon-veterans-battle-axe'], guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'lord-of-war', name: 'Lord of War', description: 'Unlock every weapon in the current platform list.', category: 'Weapons', type: 'collection', objectiveIds: weaponObjectives, guideUrl: '/mortal-shell-ii/weapons/' },
	{ id: 'spiked', name: 'Spiked', description: 'Unlock the Caged Hystrix.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-caged-hystrix'], guideUrl: '/mortal-shell-ii/caged-hystrix/' },
	{ id: 'old-painless', name: 'Old Painless', description: 'Unlock the Triarch Repeater.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-triarch-repeater'], guideUrl: '/mortal-shell-ii/triarch-repeater/' },
	{ id: 'beautiful-baby', name: 'Beautiful Baby', description: 'Unlock the Cursed Child.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-cursed-child'], guideUrl: '/mortal-shell-ii/cursed-child/' },
	{ id: 'speared', name: 'Speared', description: 'Unlock the Ballistazooka.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-ballistazooka'], guideUrl: '/mortal-shell-ii/ballistazooka/' },
	{ id: 'chop-chop', name: 'Chop Chop', description: 'Unlock the Salvaged Trebuchaxe.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-salvaged-trebuchaxe'], guideUrl: '/mortal-shell-ii/salvaged-trebuchaxe/' },
	{ id: 'old-school', name: 'Old School', description: 'Unlock the Forgotten Crossbow.', category: 'Sidearms', type: 'binary', objectiveIds: ['sidearm-forgotten-crossbow'], guideUrl: '/mortal-shell-ii/forgotten-crossbow/' },
	{ id: 'guns-lots-of-guns', name: 'Guns. Lots of Guns', description: 'Unlock all eight Sidearms.', category: 'Sidearms', type: 'collection', objectiveIds: sidearmObjectives, guideUrl: '/mortal-shell-ii/sidearms/' },
	{ id: 'over-9000', name: 'Over 9000', description: 'Max out a weapon at the Tarforge.', category: 'Weapons', type: 'binary', guideUrl: '/mortal-shell-ii/tarforge/' },
	{ id: 'sester', name: 'Sester', description: 'Unlock Sester Genessa.', category: 'Shells', type: 'binary', objectiveIds: ['shell-genessa'], guideUrl: '/mortal-shell-ii/sester-genessa/' },
	{ id: 'forever-alone', name: 'Forever Alone?', description: 'Unlock Tiel.', category: 'Shells', type: 'binary', objectiveIds: ['shell-tiel'], guideUrl: '/mortal-shell-ii/tiel/' },
	{ id: 'down-with-the-thickness', name: 'Down with the Thickness / Thickness', description: 'Unlock Lazlo.', category: 'Shells', type: 'binary', objectiveIds: ['shell-lazlo'], guideUrl: '/mortal-shell-ii/vellen-lazlo/', platformAlias: 'Thickness' },
	{ id: 'vengeance-is-mine', name: 'Vengeance is Mine', description: 'Unlock Eredrim.', category: 'Shells', type: 'binary', objectiveIds: ['shell-eredrim'], guideUrl: '/mortal-shell-ii/eredrim/' },
	{ id: 'the-alchemist', name: 'The Alchemist', description: 'Unlock Sariel.', category: 'Shells', type: 'binary', objectiveIds: ['shell-sariel'], guideUrl: '/mortal-shell-ii/sariel/' },
	{ id: 'arrival', name: 'Arrival', description: 'Unlock Proxima.', category: 'Shells', type: 'binary', objectiveIds: ['shell-proxima'], guideUrl: '/mortal-shell-ii/proxima/' },
	{ id: 'my-brether', name: 'My Brether', description: 'Unlock Smert.', category: 'Shells', type: 'binary', objectiveIds: ['shell-smert'], guideUrl: '/mortal-shell-ii/smert/' },
	{ id: 'heartless', name: 'Heartless', description: 'Unlock Gragu.', category: 'Shells', type: 'binary', objectiveIds: ['shell-gragu'], guideUrl: '/mortal-shell-ii/gragu/' },
	{ id: 'shell-seeker', name: 'Shell Seeker', description: 'Unlock all eight permanent Shells.', category: 'Shells', type: 'collection', objectiveIds: shellObjectives, routeId: 'fainweald-shells', guideUrl: '/mortal-shell-ii/shells/' },
	{ id: 'decked-out', name: 'Decked Out', description: 'Reach the maximum bonding tier for a Shell at the Shellkeeper.', category: 'Shells', type: 'binary', guideUrl: '/mortal-shell-ii/shells/' },
	{ id: 'seeking-the-past', name: 'Seeking the Past', description: 'Watch all Shell Memories.', category: 'Shells', type: 'counter', manualTotal: 40, guideUrl: '/mortal-shell-ii/shell-memories/' },
	{ id: 'bring-my-ova-back', name: 'Bring My Ova Back to Me', description: 'Collect all of the Ova.', category: 'Exploration', type: 'binary', guideUrl: '/mortal-shell-ii/ova/' },
	{ id: 'heavy-metal', name: 'Heavy Metal', description: 'Play all Lute Tracks in the Game.', category: 'Exploration', type: 'binary', objectiveIds: ['sidearm-troubadours-lute'], guideUrl: '/mortal-shell-ii/troubadours-lute/' },
	{ id: 'stoned', name: 'Stoned', description: 'Find all Tarstones.', category: 'Exploration', type: 'binary', guideUrl: '/mortal-shell-ii/tarstones/' },
	{ id: 'so-fresh-so-clean', name: 'So Fresh, So Clean', description: 'Cleanse all Beacons.', category: 'Exploration', type: 'binary', guideUrl: '/mortal-shell-ii/beacons-fast-travel/' },
	{ id: 'sat-nav', name: 'Sat Nav', description: 'Find all eleven Map Fragments.', category: 'Exploration', type: 'collection', objectiveIds: mapFragmentObjectives, routeId: 'fainweald-map-fragments', guideUrl: '/mortal-shell-ii/map-fragments/' },
	{ id: 'this-is-not-an-achievement', name: 'This is Not an Achievement', description: 'Complete Mortal Shell II.', category: 'Story', type: 'binary', guideUrl: '/mortal-shell-ii/endings/' },
	{ id: 'ultimate-karen', name: 'Ultimate Karen / Wheelie Good Time', description: 'Defeat Magdalena, the Lady of the Woods.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-magdalena'], guideUrl: '/mortal-shell-ii/magdalena/', platformAlias: 'Wheelie Good Time' },
	{ id: 'meats-back-on-the-menu', name: "Meat's Back on the Menu, Boys!", description: 'Defeat The Lost Child.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-lost-child'], guideUrl: '/mortal-shell-ii/lost-child/' },
	{ id: 'headcase', name: 'Headcase', description: 'Defeat The Nameless Captive.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-nameless-captive'], guideUrl: '/mortal-shell-ii/nameless-captive/' },
	{ id: 'nightmare-fuel', name: 'Nightmare Fuel', description: 'Defeat Isaac the Scholar Prince.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-isaac'], guideUrl: '/mortal-shell-ii/isaac-the-scholar-prince/' },
	{ id: 'something-in-the-deep', name: 'Something in the deep...', description: 'Defeat Hexapod.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-hexapod'], guideUrl: '/mortal-shell-ii/hexapod/' },
	{ id: 'praise-him', name: 'Praise him!', description: 'Defeat The Monolith.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-monolith'], guideUrl: '/mortal-shell-ii/monolith/' },
	{ id: 'it-burnssss', name: 'It burnssssssssss', description: 'Defeat Droeg the Conqueror.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-droeg'], guideUrl: '/mortal-shell-ii/droeg-the-conqueror/' },
	{ id: 'giga-chad', name: 'Giga Chad / Ultimate Gainz', description: 'Defeat Malborn Offspring.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-malborn'], guideUrl: '/mortal-shell-ii/malborn-offspring/', platformAlias: 'Ultimate Gainz' },
	{ id: 'lost-your-head', name: 'Lost Your Head', description: 'Defeat Orrem, the Reclaimed.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-orrem'], guideUrl: '/mortal-shell-ii/orrem-discarded-golem/' },
	{ id: 'its-over-now', name: "It's over now?", description: 'Defeat Zmey, the Unbidden.', category: 'Bosses', type: 'binary', objectiveIds: ['boss-zmey'], guideUrl: '/mortal-shell-ii/zmey/' },
	{ id: 'feed-me', name: 'Feed Me', description: 'Cause Egon to pass away; the checked sources disagree on the numeric Gloom threshold.', category: 'Other', type: 'binary', guideUrl: '/mortal-shell-ii/ova/' },
	{ id: 'ascension', name: 'Ascension', description: 'Discover the secret of the Mango.', category: 'Other', type: 'binary', guideUrl: '/mortal-shell-ii/ascension/', hidden: true },
	{ id: 'bag-holder', name: 'Bag Holder / Baghead', description: "Complete the platform's joke interaction; verify the exact trigger in-game.", category: 'Other', type: 'binary', guideUrl: '/mortal-shell-ii/endings/', hidden: true, platformAlias: 'Baghead' },
];

export const achievementById = new Map(achievementDefinitions.map((achievement) => [achievement.id, achievement]));
export const achievementCategories: readonly AchievementCategory[] = ['Story', 'Shells', 'Weapons', 'Sidearms', 'Bosses', 'Exploration', 'Other'];

export function achievementObjectiveCount(achievement: AchievementDefinition) {
	return achievement.objectiveIds?.length ?? achievement.manualTotal ?? 1;
}

export function achievementIsMapped(achievement: AchievementDefinition) {
	return Boolean(achievement.objectiveIds?.length);
}

export function categoryForToolkitCategory(category: ToolkitCategory): AchievementCategory {
	if (category === 'Map Fragments') return 'Exploration';
	return category;
}
