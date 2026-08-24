import { TOOLKIT_CATEGORIES, type ToolkitCategory } from './toolkit-items';

export const READINESS_STORAGE_KEY = 'ms2-ngplus-readiness-v1';

export type ReadinessTier = 'critical' | 'recommended' | 'safe';
export type Recoverability = 'current-run' | 'ng-plus' | 'fresh-save-only' | 'not-applicable';
export type ReadinessResolver = 'informational' | 'manual' | 'toolkit-category';
export type ManualReadinessValue = 'unknown' | 'confirmed' | 'missing' | 'earned' | 'missed' | 'complete' | 'incomplete';

export interface ManualReadinessOption {
	value: ManualReadinessValue;
	label: string;
}

export interface NgPlusReadinessRule {
	id: string;
	title: string;
	tier: ReadinessTier;
	description: string;
	shortReason?: string;
	toolkitItemIds?: readonly string[];
	toolkitCategory?: ToolkitCategory;
	guideUrl?: string;
	mapMarkerIds?: readonly string[];
	patchSensitive?: boolean;
	recoverability: Recoverability;
	carryOver?: string;
	resetBehavior?: string;
	sourceNotes: readonly string[];
	statusResolver: ReadinessResolver;
	manualKey?: string;
	manualOptions?: readonly ManualReadinessOption[];
}

const unknownOption: ManualReadinessOption = { value: 'unknown', label: 'Unknown · check manually' };

export const criticalReadinessRules: readonly NgPlusReadinessRule[] = [
	{
		id: 'send-ova-point-of-no-return',
		title: 'Send Ova is the point of no return',
		tier: 'critical',
		description: 'Defeating Zmey is not the final irreversible action. Finish the current-cycle cleanup you care about, then treat selecting Send Ova at the Gloom Siphon as the start of NG+.',
		shortReason: 'Informational boundary · no checkbox',
		recoverability: 'current-run',
		sourceNotes: ['/mortal-shell-ii/new-game-plus/', 'https://allthings.how/mortal-shell-2-point-of-no-return-guide/'],
		statusResolver: 'informational',
	},
	{
		id: 'berserkers-stone',
		title: "Berserker's Stone / Temple of Vatra",
		tier: 'critical',
		description: 'Current-build warning: launch-build reports describe a possible Temple of Vatra lockout involving Berserker’s Stone and Stoned trophy progression. This is a patch-sensitive report, not a permanent game-design rule.',
		shortReason: 'Current-build warning · manual check',
		patchSensitive: true,
		recoverability: 'current-run',
		sourceNotes: ['Current launch-build research retained in the NG+ readiness brief; recheck this report after patches.'],
		statusResolver: 'manual',
		manualKey: 'berserkersStone',
		manualOptions: [unknownOption, { value: 'confirmed', label: 'Confirmed · safe for my goals' }, { value: 'missing', label: 'Missing · finish/check now' }],
	},
	{
		id: 'sester-genessa-bond',
		title: 'Sester Genessa Bond',
		tier: 'critical',
		description: 'Current-build reports indicate that NG+ can interfere with Genessa Bond progression. Prioritize this especially if you are pursuing trophies or full completion; it is not a mandatory step for every normal run.',
		shortReason: 'Completionist-oriented · manual check',
		patchSensitive: true,
		recoverability: 'current-run',
		guideUrl: '/mortal-shell-ii/sester-genessa/',
		sourceNotes: ['/mortal-shell-ii/sester-genessa/', 'Current launch-build research retained in the NG+ readiness brief; recheck this report after patches.'],
		statusResolver: 'manual',
		manualKey: 'genessa',
		manualOptions: [unknownOption, { value: 'complete', label: 'Complete for my goals' }, { value: 'incomplete', label: 'Incomplete · finish/check now' }],
	},
	{
		id: 'mid-summer',
		title: 'Mid Summer?',
		tier: 'critical',
		description: 'This is a Prologue missable. If you already missed it, cancelling Send Ova does not restore the normal opportunity in this save.',
		shortReason: 'Prologue missable · trophy status is manual',
		recoverability: 'fresh-save-only',
		guideUrl: '/mortal-shell-ii/skip-prologue/',
		sourceNotes: ['/mortal-shell-ii/skip-prologue/', '/mortal-shell-ii/trophies/'],
		statusResolver: 'manual',
		manualKey: 'midSummer',
		manualOptions: [unknownOption, { value: 'earned', label: 'Earned' }, { value: 'missed', label: 'Missed on this save' }],
	},
	{
		id: 'no-you-still-cant-win',
		title: 'No, You Still Can’t Win',
		tier: 'critical',
		description: 'This is a Prologue missable tied to the Tar Golem encounter. If it was missed, NG+ does not restore the normal Prologue opportunity in this save.',
		shortReason: 'Prologue missable · trophy status is manual',
		recoverability: 'fresh-save-only',
		toolkitItemIds: ['boss-tar-golem'],
		guideUrl: '/mortal-shell-ii/tar-golem/',
		sourceNotes: ['/mortal-shell-ii/tar-golem/', '/mortal-shell-ii/trophies/'],
		statusResolver: 'manual',
		manualKey: 'noYouStillCantWin',
		manualOptions: [unknownOption, { value: 'earned', label: 'Earned' }, { value: 'missed', label: 'Missed on this save' }],
	},
];

export const recommendedReadinessRules: readonly NgPlusReadinessRule[] = [
	{
		id: 'peters-perfect-parry',
		title: "Peter's Perfect Parry",
		tier: 'recommended',
		description: 'Recommended this run if it is still outstanding. The encounter is repeatable in NG+, but Nameless Captive must be fought again and the later attempt is harder.',
		shortReason: 'Repeatable, but harder in NG+',
		guideUrl: '/mortal-shell-ii/peters-perfect-parry/',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/peters-perfect-parry/'],
		statusResolver: 'manual',
		manualKey: 'petersPerfectParry',
		manualOptions: [unknownOption, { value: 'complete', label: 'Complete' }, { value: 'incomplete', label: 'Still outstanding' }],
	},
	{
		id: 'baghead-ending-cleanup',
		title: 'Baghead / ending cleanup',
		tier: 'recommended',
		description: 'Finish available ending-related cleanup this run if you want to preserve the current route and avoid repeating the setup in NG+. This is optional, not mandatory.',
		shortReason: 'Optional current-run cleanup',
		guideUrl: '/mortal-shell-ii/endings/',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/endings/'],
		statusResolver: 'informational',
	},
	{
		id: 'unfinished-current-cycle-quests',
		title: 'Unfinished current-cycle quests',
		tier: 'recommended',
		description: 'Quest progress resets in NG+. Finish quests now if you want to preserve the work already invested in this cycle; the quests are not permanently lost.',
		shortReason: 'Informational/manual recommendation',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/new-game-plus/'],
		statusResolver: 'informational',
	},
	{
		id: 'unfinished-tracked-bosses',
		title: 'Unfinished tracked Bosses',
		tier: 'recommended',
		description: 'Tracked Boss objectives are repeatable in NG+, but clearing the ones you care about now avoids repeating their routes.',
		toolkitCategory: 'Bosses',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/new-game-plus/'],
		statusResolver: 'toolkit-category',
	},
	{
		id: 'unfinished-tracked-shells',
		title: 'Unfinished tracked Shells',
		tier: 'recommended',
		description: 'Collect the Shells you want available before the transition. Acquired Shells carry over, and missing pickups are not treated as permanently lost.',
		toolkitCategory: 'Shells',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/new-game-plus/', '/mortal-shell-ii/shells/'],
		statusResolver: 'toolkit-category',
	},
	{
		id: 'unfinished-tracked-sidearms',
		title: 'Unfinished tracked Sidearms',
		tier: 'recommended',
		description: 'Collect the Sidearms you want in the first run if you are already near their routes. Missing Sidearms are not presented as permanently lost.',
		toolkitCategory: 'Sidearms',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/new-game-plus/', '/mortal-shell-ii/sidearms/'],
		statusResolver: 'toolkit-category',
	},
	{
		id: 'unfinished-map-fragments',
		title: 'Unfinished Map Fragments',
		tier: 'recommended',
		description: 'Clear the Map Fragment objectives that fit your current route. Each mapped target reuses the existing verified Guide ↔ Map relationship.',
		toolkitCategory: 'Map Fragments',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/map-fragments/', '/mortal-shell-ii/map/'],
		statusResolver: 'toolkit-category',
	},
	{
		id: 'main-build-healing-preparation',
		title: 'Main build / healing preparation',
		tier: 'recommended',
		description: 'Enter NG+ with your preferred Shell, weapon, and healing progression in a comfortable state. There is no readiness score to calculate.',
		shortReason: 'Informational preparation',
		guideUrl: '/mortal-shell-ii/healing-upgrades/',
		recoverability: 'ng-plus',
		sourceNotes: ['/mortal-shell-ii/healing-upgrades/', '/mortal-shell-ii/new-game-plus/'],
		statusResolver: 'informational',
	},
];

export const safeForNgPlusRules: readonly NgPlusReadinessRule[] = [
	{ id: 'safe-shells', title: 'Shells', tier: 'safe', description: 'Acquired Shells and their memories carry over.', carryOver: 'Acquired Shells carry over', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-weapons', title: 'Weapons', tier: 'safe', description: 'Acquired Weapons carry over; old pickups do not return as duplicate gear.', carryOver: 'Acquired Weapons carry over', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-sidearms', title: 'Sidearms', tier: 'safe', description: 'Acquired Sidearms carry over; missing gear is not framed as permanently lost.', carryOver: 'Acquired Sidearms carry over', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-upgrades', title: 'Upgrades and Tarstones', tier: 'safe', description: 'Relevant acquired upgrades, Tarstones, Tarforge progression, and healing progression carry over.', carryOver: 'Upgrades and progression carry over', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-character-currencies', title: 'Character and core currencies', tier: 'safe', description: 'Character progression and core currencies carry over into the next cycle.', carryOver: 'Character progression and currencies carry over', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-beacons', title: 'Beacons', tier: 'safe', description: 'Most Beacons reset and can be cleansed again in NG+.', resetBehavior: 'Reset in NG+ · can be cleansed again', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-world-encounters', title: 'Dungeons, Gates, and bosses', tier: 'safe', description: 'Dungeons, Corrupted Gates, and boss encounters reset for another run.', resetBehavior: 'Reset in NG+ · repeatable', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-quests-ova', title: 'NPC quests and Ova / world progression', tier: 'safe', description: 'NPC quest progression and Ova / world progression reset; the content can be replayed in NG+.', resetBehavior: 'Reset in NG+ · can be replayed', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
	{ id: 'safe-healing-rewards', title: 'Revered Glands and Synaptic Vessels', tier: 'safe', description: 'These healing upgrades are reported to return to their original locations and can be collected again.', resetBehavior: 'Reavailable / recollectible in NG+', recoverability: 'ng-plus', sourceNotes: ['/mortal-shell-ii/new-game-plus/'], statusResolver: 'informational' },
];

export const readinessRules = [...criticalReadinessRules, ...recommendedReadinessRules, ...safeForNgPlusRules] as const;

export const readinessCategories = TOOLKIT_CATEGORIES.filter((category) => ['Shells', 'Map Fragments', 'Bosses', 'Sidearms'].includes(category));
