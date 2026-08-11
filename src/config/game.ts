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
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
}

export const game: GameConfig = {
	name: 'Mortal Shell II',
	shortName: 'Mortal Shell II',
	description:
		'A source-led guide to Mortal Shell II covering its confirmed release, platforms, single-player positioning, gameplay, and PC requirements.',
	tagline: 'Confirmed release information and practical player guides for the standalone action-RPG sequel.',
	siteUrl: 'https://mortal-shell-ii.vercel.app/',
	hubPath: '/mortal-shell-ii/',
	hubTitle: 'Mortal Shell II Guide & Wiki',
	releaseDate: '2026-08-20',
	developer: 'Cold Symmetry',
	publisher: 'Playstack',
	platforms: ['PC via Steam', 'PlayStation 5', 'Xbox Series X|S'],
	accentColor: '#7c3aed',
	portal: {
		popularQuestions: [
			{ label: 'When does Mortal Shell II release?', href: '/mortal-shell-ii/release-date/' },
			{ label: 'What gameplay is confirmed?', href: '/mortal-shell-ii/gameplay/' },
			{ label: 'What are the PC requirements?', href: '/mortal-shell-ii/system-requirements/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: 'combat-exploration',
			label: 'Gameplay',
			description: 'Confirmed combat, Shell, weapon, exploration, and dungeon information.',
			icon: 'puzzle',
			order: 1,
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Release date, platforms, editions, and developer/publisher context.',
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
