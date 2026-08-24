/**
 * Evidence-bounded player alerts for the Mortal Shell II homepage.
 *
 * Alert copy is reused from existing guide/config records. This model owns
 * classification, priority, destination, and source boundaries; it is not a
 * news feed and it does not infer patch or event status.
 */

export type AlertType = 'MISSABLE' | 'DO_BEFORE_X' | 'VERSION_CHANGED' | 'KNOWN_ISSUE' | 'LIMITED_TIME';

export interface AlertSource {
	label: string;
	href: string;
}

export interface GameAlert {
	id: string;
	type: AlertType;
	title: string;
	consequence: string;
	href: string;
	sources: readonly AlertSource[];
	priority: number;
	date?: string;
	version?: string;
	expiresAt?: string;
	active?: boolean;
}

export const playerAlerts: readonly GameAlert[] = [
	{
		id: 'balance-patch-1',
		type: 'VERSION_CHANGED',
		title: 'Balance Patch 1',
		version: 'Balance Patch 1',
		date: '2026-08-20',
		consequence: 'Patch 1 changes Glimpse refunds, Tarforge costs, enemy balance, weapon behavior, and launch stability.',
		href: '/mortal-shell-ii/balance-patch-1/',
		sources: [
			{ label: 'Official Balance Patch 1 notes', href: 'https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/' },
			{ label: 'Balance Patch 1 guide', href: '/mortal-shell-ii/balance-patch-1/' },
		],
		priority: 100,
	},
	{
		id: 'no-you-still-cant-win',
		type: 'MISSABLE',
		title: 'No, You Still Can’t Win',
		consequence: 'This is a Prologue missable tied to the Tar Golem encounter. If it was missed, NG+ does not restore the normal Prologue opportunity in this save.',
		href: '/mortal-shell-ii/tar-golem/',
		sources: [
			{ label: 'Tar Golem guide', href: '/mortal-shell-ii/tar-golem/' },
			{ label: 'Trophies guide', href: '/mortal-shell-ii/trophies/' },
		],
		priority: 100,
	},
	{
		id: 'mid-summer',
		type: 'MISSABLE',
		title: 'Mid Summer?',
		consequence: 'This is a Prologue missable. If you already missed it, cancelling Send Ova does not restore the normal opportunity in this save.',
		href: '/mortal-shell-ii/skip-prologue/',
		sources: [
			{ label: 'Skip Prologue guide', href: '/mortal-shell-ii/skip-prologue/' },
			{ label: 'Trophies guide', href: '/mortal-shell-ii/trophies/' },
		],
		priority: 95,
	},
	{
		id: 'peters-perfect-parry',
		type: 'DO_BEFORE_X',
		title: "Peter's Perfect Parry",
		consequence: 'Attempt the missable Nameless Captive trophy with the current combo and retry guidance.',
		href: '/mortal-shell-ii/peters-perfect-parry/',
		sources: [
			{ label: "Peter's Perfect Parry guide", href: '/mortal-shell-ii/peters-perfect-parry/' },
			{ label: 'Nameless Captive guide', href: '/mortal-shell-ii/nameless-captive/' },
		],
		priority: 90,
	},
	{
		id: 'send-ova-point-of-no-return',
		type: 'DO_BEFORE_X',
		title: 'Send Ova is the point of no return',
		consequence: 'Finish the current-cycle cleanup you care about, then treat selecting Send Ova at the Gloom Siphon as the start of NG+.',
		href: '/mortal-shell-ii/new-game-plus/',
		sources: [{ label: 'New Game Plus guide', href: '/mortal-shell-ii/new-game-plus/' }],
		priority: 80,
	},
];

function validateAlert(alert: GameAlert): void {
	if (!alert.id || !alert.title || !alert.consequence || !alert.href || alert.sources.length === 0) {
		throw new Error(`Invalid player alert: ${alert.id || 'missing id'}`);
	}
	if (alert.type === 'LIMITED_TIME' && !alert.expiresAt) {
		throw new Error(`LIMITED_TIME alert requires expiresAt: ${alert.id}`);
	}
	if (alert.type !== 'LIMITED_TIME' && alert.expiresAt) {
		throw new Error(`Non-time-limited alert cannot have expiresAt: ${alert.id}`);
	}
}

playerAlerts.forEach(validateAlert);

export function getLiveUpdateAlert(alerts: readonly GameAlert[] = playerAlerts): GameAlert | undefined {
	return alerts
		.filter((alert) => alert.active !== false && (alert.type === 'VERSION_CHANGED' || alert.type === 'KNOWN_ISSUE'))
		.sort((a, b) => b.priority - a.priority)[0];
}

export function getDontMissAlerts(alerts: readonly GameAlert[] = playerAlerts): GameAlert[] {
	return alerts
		.filter((alert) => alert.active !== false && (alert.type === 'MISSABLE' || alert.type === 'DO_BEFORE_X'))
		.sort((a, b) => b.priority - a.priority);
}
