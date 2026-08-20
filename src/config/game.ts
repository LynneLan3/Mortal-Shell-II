export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
	contentDir?: string;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
	featuredOrder?: readonly string[];
	maxFeatured?: number;
}

export type AnalyticsProvider = 'ga4';

export interface GameAnalyticsConfig {
	enabled: true;
	provider: AnalyticsProvider;
	measurementId: string;
	trackOutbound: boolean;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
	analytics?: GameAnalyticsConfig;
}

export const game: GameConfig = {
	name: 'Mortal Shell II',
	shortName: 'Mortal Shell II',
	description:
		'A source-led guide to Mortal Shell II covering its confirmed release, gameplay, weapons, exploration, and PC requirements, with Open Beta rewards and carry-over context preserved for players who need it.',
	tagline:
		'Advanced Access is live now. Standard Edition unlocks August 20 at 1:00 PM UTC. Practical, source-checked launch guides.',
	siteUrl: 'https://mortal-shell-ii.vercel.app/',
	hubPath: '/mortal-shell-ii/',
	hubTitle: 'Mortal Shell II Guide & Wiki',
	releaseDate: '2026-08-20',
	developer: 'Cold Symmetry',
	publisher: 'Playstack',
	platforms: ['PC via Steam', 'PlayStation 5', 'Xbox Series X|S'],
	accentColor: '#7c3aed',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam artwork for Mortal Shell II',
	heroPosition: 'center',
	portal: {
		popularQuestions: [
			{ label: 'Mortal Shell 2 crashing? Hotfix 2.0 fixes', href: '/mortal-shell-ii/crashing-pc/' },
			{ label: 'When does Mortal Shell II release?', href: '/mortal-shell-ii/release-date/' },
			{ label: 'How do I skip the prologue?', href: '/mortal-shell-ii/skip-prologue/' },
			{ label: 'Where is the Gloombound Flame?', href: '/mortal-shell-ii/gloombound-flame/' },
			{ label: 'How do I get the Great Martyr’s Blade?', href: '/mortal-shell-ii/great-martyrs-blade/' },
			{ label: 'How do I get the Axatana early?', href: '/mortal-shell-ii/axatana/' },
			{ label: 'Where do I get the Axe & Dagger?', href: '/mortal-shell-ii/axe-dagger/' },
			{ label: 'How do I farm Gloom fast?', href: '/mortal-shell-ii/gloom-farm/' },
			{ label: 'Where are all the Map Fragments?', href: '/mortal-shell-ii/map-fragments/' },
			{ label: 'How do I change difficulty?', href: '/mortal-shell-ii/slayer-seal-difficulty/' },
			{ label: 'What are the PC requirements?', href: '/mortal-shell-ii/system-requirements/' },
			{ label: 'Does beta progress carry over?', href: '/mortal-shell-ii/beta-progress-carry-over/' },
			{ label: 'How do I play the Open Beta?', href: '/mortal-shell-ii/open-beta/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
		featuredOrder: [
			'mortal-shell-ii/crashing-pc',
			'mortal-shell-ii/skip-prologue',
			'mortal-shell-ii/gloombound-flame',
			'mortal-shell-ii/great-martyrs-blade',
			'mortal-shell-ii/axatana',
			'mortal-shell-ii/axe-dagger',
		],
		maxFeatured: 6,
	},
	analytics: {
		enabled: true,
		provider: 'ga4',
		measurementId: 'G-1D66T98097',
		trackOutbound: true,
	},
	categories: [
		{
			id: 'combat-exploration',
			label: 'Gameplay',
			description: 'Confirmed combat, Shell, weapon, exploration, dungeon, and Open Beta encounter information.',
			icon: 'puzzle',
			order: 1,
			contentDir: 'gameplay',
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Release date, platforms, Open Beta access, and developer/publisher context.',
			icon: 'information',
			order: 2,
		},
		{
			id: 'pc-requirements',
			label: 'PC Requirements',
			description: 'The minimum PC specifications currently listed by Steam.',
			icon: 'laptop',
			order: 3,
		},
	],
};
