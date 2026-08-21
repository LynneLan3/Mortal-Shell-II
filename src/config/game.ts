export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
	contentDir?: string;
}

export type UiLocale = 'en' | 'zh-CN';

export type ReleaseStatus = 'announced' | 'pre-release' | 'early-access' | 'released' | 'unknown';

export interface GameRoutePage {
	pageId: string;
	href: string;
	title: string;
	description: string;
	eyebrow?: string;
	image?: string;
}

export interface GameRouteFastAnswer {
	question: string;
	answer: string;
	pageId: string;
	href: string;
}

export interface GameRoute {
	id: string;
	eyebrow?: string;
	title: string;
	description: string;
	href: string;
	visual?: string;
	pages: readonly GameRoutePage[];
	fastAnswers?: readonly GameRouteFastAnswer[];
}

export interface GamePortalQuestion {
	label: string;
	href: string;
	context?: string;
}

export interface GamePortalCta {
	label: string;
	href: string;
}

export interface GameHubStartHereItem {
	title: string;
	description: string;
	href: string;
	image?: string;
	label?: string;
	badge?: string;
}

export interface GameHubStatusItem {
	label: string;
	value: string;
}

export interface GameHubEvidenceItem {
	image: string;
	alt: string;
	caption?: string;
	href?: string;
}

export interface GameHubEvidence {
	title?: string;
	description?: string;
	items: readonly GameHubEvidenceItem[];
}

export interface GameHubRecentUpdate {
	title: string;
	href: string;
	date: string;
	changeSummary?: string;
	tag?: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
	primaryCta?: GamePortalCta;
	secondaryCta?: GamePortalCta;
	statusItems?: readonly GameHubStatusItem[];
	startHere?: readonly GameHubStartHereItem[];
	evidence?: GameHubEvidence;
	recentUpdates?: readonly GameHubRecentUpdate[];
	featuredOrder?: readonly string[];
	featuredVisual?: GameHubEvidenceItem;
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
	title?: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	locale?: UiLocale;
	releaseStatus: ReleaseStatus;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	accentForeground?: string;
	heroImage?: string;
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	disclaimer?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
	routes?: readonly GameRoute[];
	pages?: readonly { slug: string; socialImage?: SocialImageRef }[];
	social?: GameSocialConfig;
	analytics?: GameAnalyticsConfig;
}

export interface SocialImageRef {
	asset: string;
	alt: string;
}

export interface GameSocialConfig {
	defaultImage?: SocialImageRef;
}

export const game: GameConfig = {
	name: 'Mortal Shell II',
	shortName: 'Mortal Shell II',
	title: 'Mortal Shell II',
	description:
		'A source-led guide to Mortal Shell II covering its confirmed release, gameplay, weapons, exploration, and PC requirements, with Open Beta rewards and carry-over context preserved for players who need it.',
	tagline:
		'Advanced Access is live now. Standard Edition unlocks August 20 at 1:00 PM UTC. Practical, source-checked launch guides.',
	siteUrl: 'https://mortal-shell-ii.vercel.app/',
	hubPath: '/mortal-shell-ii/',
	hubTitle: 'Mortal Shell II Guide & Wiki',
	locale: 'en',
	releaseStatus: 'released',
	releaseDate: '2026-08-20',
	developer: 'Cold Symmetry',
	publisher: 'Playstack',
	platforms: ['PC via Steam', 'PlayStation 5', 'Xbox Series X|S'],
	accentColor: '#7c3aed',
	accentForeground: '#090914',
	heroImage: 'experience/hero-main.jpg',
	heroAlt: 'Official Steam artwork for Mortal Shell II',
	heroPosition: 'center',
	portal: {
		primaryCta: { label: 'Choose a route', href: '/mortal-shell-ii/routes/' },
		secondaryCta: { label: 'Browse guides', href: '/mortal-shell-ii/guides/' },
		startHere: [
			{
				title: 'Start & Launch',
				description: 'Release timing, beta carry-over, prologue decisions, and the core gameplay overview.',
				href: '/mortal-shell-ii/routes/start-launch/',
				label: 'Route 01',
			},
			{
				title: 'PC & Stability',
				description: 'System requirements, launch crashes, Hotfix 2.0, and stability triage.',
				href: '/mortal-shell-ii/routes/pc-stability/',
				label: 'Route 02',
			},
			{
				title: 'Weapons & Resources',
				description: 'Early weapons, Gloombound Flame, and Gloom farming paths.',
				href: '/mortal-shell-ii/routes/weapons-resources/',
				label: 'Route 03',
				image: 'experience/route-weapons-resources.jpg',
			},
			{
				title: 'World & Progression',
				description: 'Beacons, map fragments, Shells, bosses, and difficulty choices.',
				href: '/mortal-shell-ii/routes/world-progression/',
				label: 'Route 04',
				image: 'experience/route-world-progression.jpg',
			},
		],
		evidence: {
			title: 'See the Game in Action',
			description: 'Official screenshots showing combat, Shells, weapons, and exploration.',
			items: [
				{
					image: 'experience/gameplay-combat.jpg',
					alt: 'Official Mortal Shell II screenshot of a combat encounter in a red-lit arena.',
					caption: 'Combat: a launch-window fight in an arena route.',
					href: '/mortal-shell-ii/gameplay/',
				},
				{
					image: 'experience/gameplay-shell.jpg',
					alt: 'Official Mortal Shell II screenshot of an armored Shell standing in a dark wetland.',
					caption: 'Shell: armor, weapons, and enemy pressure in view.',
					href: '/mortal-shell-ii/gameplay/',
				},
				{
					image: 'experience/gameplay-world.jpg',
					alt: 'Official Mortal Shell II screenshot of a player exploring a misty forest path.',
					caption: 'World: exploration through a hostile route.',
					href: '/mortal-shell-ii/gameplay/',
				},
			],
		},
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
		featuredVisual: {
			image: 'experience/featured-launch.jpg',
			alt: 'Official Mortal Shell II key art with the Harbinger standing before a bright red opening.',
		},
		maxFeatured: 6,
	},
	routes: [
		{
			id: 'start-launch',
			eyebrow: 'Route 01',
			title: 'Start & Launch',
			description:
				'Confirm the launch state, decide how to handle the Prologue, and orient around the current gameplay baseline.',
			href: '/mortal-shell-ii/routes/start-launch/',
			visual: 'experience/route-start-launch.jpg',
			pages: [
				{
					pageId: 'release-date',
					href: '/mortal-shell-ii/release-date/',
					title: 'Release Date',
					description: 'Standard Edition unlock timing, Advanced Access status, and platform context.',
					eyebrow: 'Launch',
				},
				{
					pageId: 'skip-prologue',
					href: '/mortal-shell-ii/skip-prologue/',
					title: 'Skip Prologue',
					description: 'How the Prologue skip works and what the choice does not prove.',
					eyebrow: 'Start',
				},
				{
					pageId: 'beta-progress-carry-over',
					href: '/mortal-shell-ii/beta-progress-carry-over/',
					title: 'Beta Progress Carry Over',
					description: 'What resets, what rewards remain, and how beta progress relates to launch.',
					eyebrow: 'Beta',
				},
				{
					pageId: 'open-beta',
					href: '/mortal-shell-ii/open-beta/',
					title: 'Open Beta',
					description: 'Open Beta access, scope, and preserved context for players who still need it.',
					eyebrow: 'Beta',
				},
				{
					pageId: 'gameplay',
					href: '/mortal-shell-ii/gameplay/',
					title: 'Gameplay',
					description: 'Combat, Shells, weapons, exploration, and single-player scope.',
					eyebrow: 'Overview',
				},
			],
			fastAnswers: [
				{
					question: 'Where should I start?',
					answer: 'Confirm the release window, then choose whether to skip the Prologue before reading the broad gameplay overview.',
					pageId: 'release-date',
					href: '/mortal-shell-ii/release-date/',
				},
				{
					question: 'Does beta progress fully carry over?',
					answer: 'No. Use the carry-over guide for the current reset and reward boundaries.',
					pageId: 'beta-progress-carry-over',
					href: '/mortal-shell-ii/beta-progress-carry-over/',
				},
			],
		},
		{
			id: 'pc-stability',
			eyebrow: 'Route 02',
			title: 'PC & Stability',
			description:
				'Check the listed PC requirements, then work through the current Hotfix 2.0 crash and stability guidance.',
			href: '/mortal-shell-ii/routes/pc-stability/',
			visual: 'experience/route-pc-stability.jpg',
			pages: [
				{
					pageId: 'system-requirements',
					href: '/mortal-shell-ii/system-requirements/',
					title: 'System Requirements',
					description: 'Current Steam-listed minimum PC requirements and missing recommended values.',
					eyebrow: 'PC',
				},
				{
					pageId: 'crashing-pc',
					href: '/mortal-shell-ii/crashing-pc/',
					title: 'Crashing PC / Hotfix',
					description: 'Hotfix 2.0 fixes, Keyboard Bindings workaround, and remaining crash triage.',
					eyebrow: 'Hotfix',
				},
			],
			fastAnswers: [
				{
					question: 'What should I check first if the PC build crashes?',
					answer: 'Update to the current Steam build, confirm the PC requirements, then follow the Hotfix 2.0 crash guide.',
					pageId: 'crashing-pc',
					href: '/mortal-shell-ii/crashing-pc/',
				},
				{
					question: 'Does Hotfix 2.0 fix every crash?',
					answer: 'No. It includes crash, stability, and performance fixes, but the guide keeps remaining launch-window issues separate.',
					pageId: 'crashing-pc',
					href: '/mortal-shell-ii/crashing-pc/',
				},
			],
		},
		{
			id: 'weapons-resources',
			eyebrow: 'Route 03',
			title: 'Weapons & Resources',
			description:
				'Follow launch-supported weapon routes, unlock the Gloombound Flame, and choose practical Gloom farming loops.',
			href: '/mortal-shell-ii/routes/weapons-resources/',
			visual: 'experience/route-weapons-resources.jpg',
			pages: [
				{
					pageId: 'gloombound-flame',
					href: '/mortal-shell-ii/gloombound-flame/',
					title: 'Gloombound Flame',
					description: 'Find the Flame and activate Night Mode through the supported Marrow Keep chain.',
					eyebrow: 'Night',
				},
				{
					pageId: 'great-martyrs-blade',
					href: '/mortal-shell-ii/great-martyrs-blade/',
					title: "Great Martyr's Blade",
					description: "Route through Widow's Overlook, Holding Cells, and Martyr's Prison.",
					eyebrow: 'Weapon',
				},
				{
					pageId: 'axatana',
					href: '/mortal-shell-ii/axatana/',
					title: 'Axatana',
					description: 'Reach the Forgotten Tower through the Outskirts of Mammon route.',
					eyebrow: 'Weapon',
				},
				{
					pageId: 'axe-dagger',
					href: '/mortal-shell-ii/axe-dagger/',
					title: 'Axe & Dagger',
					description: 'Use the Chapel Key and Shrine of Trials route, not old beta location notes.',
					eyebrow: 'Weapon',
				},
				{
					pageId: 'gloom-farm',
					href: '/mortal-shell-ii/gloom-farm/',
					title: 'Gloom Farm',
					description: 'Early leveling loops and realistic launch-window Gloom returns.',
					eyebrow: 'Resource',
				},
			],
			fastAnswers: [
				{
					question: 'Which resource guide belongs with weapon routing?',
					answer: 'Use the Gloom Farm guide when a weapon route feels underleveled or too punishing.',
					pageId: 'gloom-farm',
					href: '/mortal-shell-ii/gloom-farm/',
				},
			],
		},
		{
			id: 'world-progression',
			eyebrow: 'Route 04',
			title: 'World & Progression',
			description:
				'Build map confidence with Beacons and fragments, then branch into Shell, boss, and difficulty decisions.',
			href: '/mortal-shell-ii/routes/world-progression/',
			visual: 'experience/route-world-progression.jpg',
			pages: [
				{
					pageId: 'beacons-fast-travel',
					href: '/mortal-shell-ii/beacons-fast-travel/',
					title: 'Beacons & Fast Travel',
					description: "How Beacons, Mether's Breath, and fast travel work in the launch build.",
					eyebrow: 'Travel',
				},
				{
					pageId: 'map-fragments',
					href: '/mortal-shell-ii/map-fragments/',
					title: 'Map Fragments',
					description: 'Find all 11 launch-window map fragments and reveal route-critical sections.',
					eyebrow: 'Map',
				},
				{
					pageId: 'proxima',
					href: '/mortal-shell-ii/proxima/',
					title: 'Proxima',
					description: "Route from Marrow Keep through Widow's Overlook and Blackridge Pass.",
					eyebrow: 'Shell',
				},
				{
					pageId: 'magdalena',
					href: '/mortal-shell-ii/magdalena/',
					title: 'Magdalena',
					description: 'Preserved Open Beta boss context and current evidence boundary.',
					eyebrow: 'Boss',
				},
				{
					pageId: 'slayer-seal-difficulty',
					href: '/mortal-shell-ii/slayer-seal-difficulty/',
					title: 'Slayer Seal Difficulty',
					description: 'Choose the easier Slayer Seal path or harder Night Mode path with current caveats.',
					eyebrow: 'Difficulty',
				},
			],
			fastAnswers: [
				{
					question: 'Is Route the same as Category?',
					answer: 'No. This path groups guides by player goal; the existing Gameplay, Game Info, and PC categories stay unchanged.',
					pageId: 'beacons-fast-travel',
					href: '/mortal-shell-ii/beacons-fast-travel/',
				},
			],
		},
	],
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
