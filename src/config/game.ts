export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
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
}

export const game: GameConfig = {
	name: 'Mortal Shell II',
	shortName: 'Mortal Shell II',
	description:
		'A source-led guide to Mortal Shell II covering its confirmed release, Open Beta, platforms, gameplay, and PC requirements.',
	tagline: 'Confirmed release information and practical player guides for the standalone action-RPG sequel.',
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
			{ label: 'When does Mortal Shell II release?', href: '/mortal-shell-ii/release-date/' },
			{ label: 'How do I skip the prologue?', href: '/mortal-shell-ii/skip-prologue/' },
			{ label: 'How do I farm Gloom fast?', href: '/mortal-shell-ii/gloom-farm/' },
			{ label: 'How do I change difficulty?', href: '/mortal-shell-ii/slayer-seal-difficulty/' },
			{ label: 'How do I play the Open Beta?', href: '/mortal-shell-ii/open-beta/' },
			{ label: 'Does beta progress carry over?', href: '/mortal-shell-ii/beta-progress-carry-over/' },
			{ label: 'What are the PC requirements?', href: '/mortal-shell-ii/system-requirements/' },
			{ label: 'Why does Mortal Shell 2 keep crashing?', href: '/mortal-shell-ii/crashing-pc/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: 'combat-exploration',
			label: 'Gameplay',
			description: 'Confirmed combat, Shell, weapon, exploration, dungeon, and Open Beta encounter information.',
			icon: 'puzzle',
			order: 1,
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
