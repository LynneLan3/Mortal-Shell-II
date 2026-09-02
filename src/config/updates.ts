/**
 * Updates pillar — version-awareness layer for patch-sensitive guide content.
 * Hub data only; detail pages live in the docs collection.
 */

export interface UpdatePlatformStatus {
	pc: 'live' | 'unconfirmed';
	ps5?: string;
	xbox?: string;
}

export interface UpdateGuideLink {
	label: string;
	href: string;
}

export interface GameUpdateEntry {
	id: string;
	title: string;
	href: string;
	date: string;
	platformStatus: UpdatePlatformStatus;
	impactTags: readonly string[];
	playerConsequence: string;
	summary: string;
	guideImpacts: readonly UpdateGuideLink[];
}

export interface AffectedGuideEntry {
	label: string;
	href: string;
	updateIds: readonly string[];
}

export const currentMajorUpdateId = 'week-1-update';

export const gameUpdates: readonly GameUpdateEntry[] = [
	{
		id: 'hotfix-3',
		title: 'Hotfix 3',
		href: '/mortal-shell-ii/crashing-pc/',
		date: '2026-09-01',
		platformStatus: { pc: 'live' },
		impactTags: ['Stability', 'Traversal', 'Visual', 'Combat'],
		playerConsequence:
			'Several targeted PC bugs are fixed, but crashes, freezes, and performance issues may still occur.',
		summary:
			'PC hotfix (Sept 1): Devout/Pre-Order Shell Shades visibility, FSR world-map issue, Citadel Annex giant-spider traversal, some enemies not reacting, collision fixes, and Minibeacon lens-flare visuals. Does not claim all crashes or performance problems are resolved.',
		guideImpacts: [
			{ label: 'PC Crashes & Stability', href: '/mortal-shell-ii/crashing-pc/' },
			{ label: 'Faded Citadel Route', href: '/mortal-shell-ii/faded-citadel/' },
		],
	},
	{
		id: 'week-1-update',
		title: 'Week 1 Update',
		href: '/mortal-shell-ii/updates/week-1-update/',
		date: '2026-08-29',
		platformStatus: {
			pc: 'live',
			ps5: 'Available (Sept 1, 2026)',
			xbox: 'Delayed — latest confirmed status as of Sept 2, 2026',
		},
		impactTags: ['Tarstones', 'Shell Respec', 'Economy', 'Exploration', 'Combat', 'Performance'],
		playerConsequence: 'Your launch-build resource planning is now outdated.',
		summary:
			'First major post-launch update: Glimpses and Tarcores are no longer finite, Mether\'s Severance enables Shell respec, Fragile Tarstones repeat, Merrick restocks progression items, Riposte scaling changed, and substantial crash fixes landed.',
		guideImpacts: [
			{ label: 'Tarstones Guide', href: '/mortal-shell-ii/tarstones/' },
			{ label: 'Glimpses & Resources', href: '/mortal-shell-ii/glimpses/' },
			{ label: 'Shells Guide', href: '/mortal-shell-ii/shells/' },
			{ label: 'Beacons & Fast Travel', href: '/mortal-shell-ii/beacons-fast-travel/' },
			{ label: 'PC Crashes & Stability', href: '/mortal-shell-ii/crashing-pc/' },
		],
	},
	{
		id: 'balance-patch-1',
		title: 'Balance Patch 1',
		href: '/mortal-shell-ii/updates/balance-patch-1/',
		date: '2026-08-20',
		platformStatus: {
			pc: 'live',
			ps5: 'Announced shortly after PC; current install unconfirmed in this record',
			xbox: 'Announced shortly after PC; current install unconfirmed in this record',
		},
		impactTags: ['Economy', 'Weapons', 'Tarstones', 'Bosses', 'Performance'],
		playerConsequence: 'Shell-map costs moved to Gloom, weapon balance shifted, and Tarforge smelting is much cheaper.',
		summary:
			'Shell-map reveals now cost Gloom with Glimpse refunds, Tarforge smelting costs 75% less Gloom, enemy Gold drops increased, several weapons and five Tarstones were buffed, and named bosses were nerfed.',
		guideImpacts: [
			{ label: 'Weapons Guide', href: '/mortal-shell-ii/weapons/' },
			{ label: 'Glimpses & Resources', href: '/mortal-shell-ii/glimpses/' },
			{ label: 'Tarstones Guide', href: '/mortal-shell-ii/tarstones/' },
			{ label: 'Tarforge Guide', href: '/mortal-shell-ii/tarforge/' },
			{ label: 'The Lost Child', href: '/mortal-shell-ii/lost-child/' },
		],
	},
];

/** Guides that changed because of one or more updates — used by the hub "What changed in your guides?" section. */
export const affectedGuides: readonly AffectedGuideEntry[] = [
	{
		label: 'Tarstones',
		href: '/mortal-shell-ii/tarstones/',
		updateIds: ['week-1-update', 'balance-patch-1'],
	},
	{
		label: 'Glimpses & Resources',
		href: '/mortal-shell-ii/glimpses/',
		updateIds: ['week-1-update', 'balance-patch-1'],
	},
	{
		label: 'Shells & Respec',
		href: '/mortal-shell-ii/shells/',
		updateIds: ['week-1-update', 'balance-patch-1'],
	},
	{
		label: 'Weapons',
		href: '/mortal-shell-ii/weapons/',
		updateIds: ['balance-patch-1'],
	},
	{
		label: 'Beacons & Fast Travel',
		href: '/mortal-shell-ii/beacons-fast-travel/',
		updateIds: ['week-1-update'],
	},
	{
		label: 'PC Crashes & Stability',
		href: '/mortal-shell-ii/crashing-pc/',
		updateIds: ['hotfix-3', 'week-1-update', 'balance-patch-1'],
	},
	{
		label: 'Tarforge Upgrades',
		href: '/mortal-shell-ii/tarforge/',
		updateIds: ['balance-patch-1'],
	},
];

export function getCurrentMajorUpdate(): GameUpdateEntry | undefined {
	return gameUpdates.find((entry) => entry.id === currentMajorUpdateId);
}

export function formatUpdatePlatformStatus(status: UpdatePlatformStatus): string {
	const parts = [`PC: ${status.pc}`];
	if (status.ps5) parts.push(`PS5: ${status.ps5}`);
	if (status.xbox) parts.push(`Xbox: ${status.xbox}`);
	return parts.join(' · ');
}
