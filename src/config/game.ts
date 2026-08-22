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
	hotGuides?: readonly GameHubStartHereItem[];
	fieldNoteOrder?: readonly string[];
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
		'A source-led Mortal Shell II launch guide covering hot progression routes, weapons, Shell unlocks, endgame decisions, and current PC fixes.',
	tagline:
		'Mortal Shell II is out now. Find the launch guides players need for weapons, Tarstones, Shells, progression blockers, endings, and PC fixes.',
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
		primaryCta: { label: 'Browse hot guides', href: '#hot-guides' },
		secondaryCta: { label: 'Browse guides', href: '/mortal-shell-ii/guides/' },
		startHere: [
			{
				title: 'Start & Progression',
				description: 'Make first-run choices, understand the current progression gates, and plan the road to endgame.',
				href: '/mortal-shell-ii/routes/start-launch/',
				label: 'Goal 01',
			},
			{
				title: 'PC & Stability',
				description: 'Check requirements, apply Hotfix 2.0 guidance, and work through current crash symptoms.',
				href: '/mortal-shell-ii/routes/pc-stability/',
				label: 'Goal 02',
			},
			{
				title: 'Weapons & Resources',
				description: 'Find early weapons, upgrade Tarstones, activate Night Mode, and farm Gloom with realistic expectations.',
				href: '/mortal-shell-ii/routes/weapons-resources/',
				label: 'Goal 03',
				image: 'experience/route-weapons-resources.jpg',
			},
			{
				title: 'World & Progression',
				description: 'Open fast travel, find Shells and Ova, and choose the right path for secrets, endings, and NG+.',
				href: '/mortal-shell-ii/routes/world-progression/',
				label: 'Goal 04',
				image: 'experience/route-world-progression.jpg',
			},
		],
		hotGuides: [
			{
				title: 'Weapons Guide',
				description: 'Known weapons, launch-build locations, upgrade evidence, and the safest early routes.',
				href: '/mortal-shell-ii/weapons/',
				label: 'Priority 01',
				badge: 'Weapons',
			},
			{
				title: 'Tarstones Guide',
				description: 'How Tarforge upgrades, Tarcores, XP, and early Tarstone choices fit together.',
				href: '/mortal-shell-ii/tarstones/',
				label: 'Priority 02',
				badge: 'Progression',
			},
			{
				title: 'Ova Guide',
				description: 'Ova sources, the 168 requirement, Corrupted Gates, and the Send Ova point of no return.',
				href: '/mortal-shell-ii/ova/',
				label: 'Priority 03',
				badge: 'Progression',
			},
			{
				title: 'Beacons & Fast Travel',
				description: "Unlock Mether's Breath, track known Beacons, and avoid treating conflicting thresholds as fixed rules.",
				href: '/mortal-shell-ii/beacons-fast-travel/',
				label: 'Priority 04',
				badge: 'Exploration',
			},
			{
				title: 'Shells Guide',
				description: 'Known Shell routes, unlock context, and provisional use cases without an invented roster.',
				href: '/mortal-shell-ii/shells/',
				label: 'Priority 05',
				badge: 'Shells',
			},
			{
				title: 'New Game Plus',
				description: 'What carries over, what resets, and what to finish before starting another cycle.',
				href: '/mortal-shell-ii/new-game-plus/',
				label: 'Priority 06',
				badge: 'Endgame',
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
			{ label: 'How do Tarstones and Tarforge upgrades work?', href: '/mortal-shell-ii/tarstones/' },
			{ label: 'How do I get Ova, and when should I Send Ova?', href: '/mortal-shell-ii/ova/' },
			{ label: 'Where are the known weapons?', href: '/mortal-shell-ii/weapons/' },
			{ label: 'How do I unlock fast travel?', href: '/mortal-shell-ii/beacons-fast-travel/' },
			{ label: 'Where can I find and unlock Shells?', href: '/mortal-shell-ii/shells/' },
			{ label: 'What carries over in New Game Plus?', href: '/mortal-shell-ii/new-game-plus/' },
			{ label: 'How do Slayer Seal and Night Mode change difficulty?', href: '/mortal-shell-ii/slayer-seal-difficulty/' },
			{ label: 'Is Mortal Shell 2 still crashing on PC?', href: '/mortal-shell-ii/crashing-pc/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
		recentUpdates: [
			{
				title: 'Tarstones Guide',
				href: '/mortal-shell-ii/tarstones/',
				date: '2026-08-22',
				changeSummary: 'Tarforge, Tarcore, XP, and early upgrade choices.',
				tag: 'Progression',
			},
			{
				title: 'Ova Guide',
				href: '/mortal-shell-ii/ova/',
				date: '2026-08-22',
				changeSummary: '168 requirement, Corrupted Gates, and Send Ova boundary.',
				tag: 'Endgame',
			},
			{
				title: 'Endings Guide',
				href: '/mortal-shell-ii/endings/',
				date: '2026-08-22',
				changeSummary: 'Main ending and Baghead secret-ending route.',
				tag: 'Completion',
			},
			{
				title: 'New Game Plus',
				href: '/mortal-shell-ii/new-game-plus/',
				date: '2026-08-22',
				changeSummary: 'Carry-over, reset, and pre-NG+ checklist.',
				tag: 'Endgame',
			},
		],
		fieldNoteOrder: [
			'/mortal-shell-ii/endings/',
			'/mortal-shell-ii/peters-perfect-parry/',
			'/mortal-shell-ii/blackmarrow-keys/',
		],
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
			title: 'Start & Progression',
			description:
				'Make first-run choices, understand the current progression gates, and plan the road to endgame.',
			href: '/mortal-shell-ii/routes/start-launch/',
			visual: 'experience/route-start-launch.jpg',
			pages: [
				{
					pageId: 'gameplay',
					href: '/mortal-shell-ii/gameplay/',
					title: 'Gameplay Overview',
					description: 'Combat, Shells, weapons, exploration, and single-player scope.',
					eyebrow: 'Start',
				},
				{
					pageId: 'skip-prologue',
					href: '/mortal-shell-ii/skip-prologue/',
					title: 'Skip Prologue',
					description: 'How the Prologue skip works and what the choice does not prove.',
					eyebrow: 'Start',
				},
				{
					pageId: 'new-game-plus',
					href: '/mortal-shell-ii/new-game-plus/',
					title: 'New Game Plus',
					description: 'What carries over, what resets, and what to finish before another cycle.',
					eyebrow: 'Endgame',
				},
				{
					pageId: 'endings',
					href: '/mortal-shell-ii/endings/',
					title: 'Endings',
					description: 'Main ending and Baghead secret-ending context with spoiler boundaries.',
					eyebrow: 'Completion',
				},
				{
					pageId: 'release-date',
					href: '/mortal-shell-ii/release-date/',
					title: 'Release Context',
					description: 'Platform and edition timing retained as reference for launch questions.',
					eyebrow: 'Reference',
				},
				{
					pageId: 'beta-progress-carry-over',
					href: '/mortal-shell-ii/beta-progress-carry-over/',
					title: 'Beta Progress Carry Over',
					description: 'Historical beta reset and reward context for returning players.',
					eyebrow: 'Reference',
				},
				{
					pageId: 'open-beta',
					href: '/mortal-shell-ii/open-beta/',
					title: 'Open Beta',
					description: 'Preserved beta access and scope information for returning players.',
					eyebrow: 'Reference',
				},
			],
			fastAnswers: [
				{
					question: 'Where should I start?',
					answer: 'Start with the gameplay overview, decide whether to skip the Prologue, then use the progression guides when you reach their gates.',
					pageId: 'gameplay',
					href: '/mortal-shell-ii/gameplay/',
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
				'Find early weapons, upgrade Tarstones, activate Night Mode, and farm Gloom with realistic expectations.',
			href: '/mortal-shell-ii/routes/weapons-resources/',
			visual: 'experience/route-weapons-resources.jpg',
			pages: [
				{
					pageId: 'weapons',
					href: '/mortal-shell-ii/weapons/',
					title: 'Weapons Guide',
					description: 'Known weapons, launch-build locations, upgrade evidence, and practical early routes.',
					eyebrow: 'Weapons',
				},
				{
					pageId: 'tarstones',
					href: '/mortal-shell-ii/tarstones/',
					title: 'Tarstones Guide',
					description: 'Tarforge upgrades, Tarcores, XP, and early Tarstone choices.',
					eyebrow: 'Progression',
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
					pageId: 'gloombound-flame',
					href: '/mortal-shell-ii/gloombound-flame/',
					title: 'Gloombound Flame',
					description: 'Find the Flame and activate Night Mode through the supported Marrow Keep chain.',
					eyebrow: 'Night',
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
				'Open fast travel, find Shells and Ova, and choose the right path for secrets, endings, and NG+.',
			href: '/mortal-shell-ii/routes/world-progression/',
			visual: 'experience/route-world-progression.jpg',
			pages: [
				{
					pageId: 'ova',
					href: '/mortal-shell-ii/ova/',
					title: 'Ova Guide',
					description: 'Ova sources, the 168 requirement, Corrupted Gates, and the Send Ova boundary.',
					eyebrow: 'Progression',
				},
				{
					pageId: 'beacons-fast-travel',
					href: '/mortal-shell-ii/beacons-fast-travel/',
					title: 'Beacons & Fast Travel',
					description: "How Beacons, Mether's Breath, and fast travel work in the launch build.",
					eyebrow: 'Travel',
				},
				{
					pageId: 'shells',
					href: '/mortal-shell-ii/shells/',
					title: 'Shells Guide',
					description: 'Known Shell routes, unlock context, and provisional use cases.',
					eyebrow: 'Shells',
				},
				{
					pageId: 'sester-genessa',
					href: '/mortal-shell-ii/sester-genessa/',
					title: 'Sester Genessa',
					description: "How to find Genessa in Marrow Keep and complete the Shell unlock handoff.",
					eyebrow: 'Shell Unlock',
				},
				{
					pageId: 'eredrim',
					href: '/mortal-shell-ii/eredrim/',
					title: 'Eredrim',
					description: 'Reach The Warden through Citadel of Penance and inhabit Eredrim.',
					eyebrow: 'Shell Unlock',
				},
				{
					pageId: 'glimpses',
					href: '/mortal-shell-ii/glimpses/',
					title: 'Glimpses',
					description: 'Choose between Shell Bond upgrades and location information.',
					eyebrow: 'Resource',
				},
				{
					pageId: 'map-fragments',
					href: '/mortal-shell-ii/map-fragments/',
					title: 'Map Fragments',
					description: 'Find all 11 launch-window map fragments and reveal route-critical sections.',
					eyebrow: 'Map',
				},
				{
					pageId: 'blackmarrow-keys',
					href: '/mortal-shell-ii/blackmarrow-keys/',
					title: 'Blackmarrow Keys',
					description: 'Known key routes, Shell Shade chests, and the unresolved first-run count.',
					eyebrow: 'Secrets',
				},
				{
					pageId: 'proxima',
					href: '/mortal-shell-ii/proxima/',
					title: 'Proxima',
					description: "Route from Marrow Keep through Widow's Overlook and Blackridge Pass.",
					eyebrow: 'Shell',
				},
				{
					pageId: 'slayer-seal-difficulty',
					href: '/mortal-shell-ii/slayer-seal-difficulty/',
					title: 'Slayer Seal Difficulty',
					description: 'Choose the easier Slayer Seal path or harder Night Mode path with current caveats.',
					eyebrow: 'Difficulty',
				},
				{
					pageId: 'endings',
					href: '/mortal-shell-ii/endings/',
					title: 'Endings',
					description: 'Main ending and Baghead secret-ending route with spoiler boundaries.',
					eyebrow: 'Completion',
				},
				{
					pageId: 'new-game-plus',
					href: '/mortal-shell-ii/new-game-plus/',
					title: 'New Game Plus',
					description: 'What carries over, what resets, and what to finish before another cycle.',
					eyebrow: 'Endgame',
				},
				{
					pageId: 'magdalena',
					href: '/mortal-shell-ii/magdalena/',
					title: 'Magdalena',
					description: 'Preserved Open Beta encounter context with an explicit evidence boundary.',
					eyebrow: 'Encounter',
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
