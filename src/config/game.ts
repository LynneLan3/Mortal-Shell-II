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

export interface GameGuideTopicGroup {
	id: string;
	title: string;
	description: string;
	guideOrder: readonly string[];
}

export type GameGuideVisualIcon = 'book' | 'calendar' | 'gem' | 'map' | 'monitor' | 'refresh' | 'shield' | 'shell' | 'sword' | 'trophy';

export interface GameGuideVisual {
	image?: string;
	alt?: string;
	icon?: GameGuideVisualIcon;
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
	guideTopicGroups?: readonly GameGuideTopicGroup[];
	guideVisuals?: Readonly<Record<string, GameGuideVisual>>;
	categoryHotOrder?: Readonly<Record<string, readonly string[]>>;
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
	siteUrl: 'https://mortalshell2guide.com/',
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
				title: 'Tar Golem',
				description: "Take the Prologue Tar Golem to minimum health for No, You Still Can't Win before the missable encounter is gone.",
				href: '/mortal-shell-ii/tar-golem/',
				label: 'Priority 01',
				badge: 'Missable',
			},
			{
				title: 'Skip Prologue',
				description: 'Decide whether to skip, check beta eligibility, and avoid bypassing the two confirmed Prologue trophy opportunities.',
				href: '/mortal-shell-ii/skip-prologue/',
				label: 'Priority 02',
				badge: 'Launch',
			},
			{
				title: "Seedbearer's Scripture",
				description: 'Find all three quest Glands, enable Night Mode, and make the Forgotten Tower offering for Cosmic Disease mitigation.',
				href: '/mortal-shell-ii/seedbearers-scripture/',
				label: 'Priority 03',
				badge: 'Night Mode',
			},
			{
				title: 'Shrine of Sorrows',
				description: 'Find all three Sonatas, solve the frozen-head puzzle, reach the basement, and claim the Night Mode dungeon rewards.',
				href: '/mortal-shell-ii/shrine-of-sorrows/',
				label: 'Priority 04',
				badge: 'Night Mode',
			},
			{
				title: 'The Lost Child',
				description: 'Reach Sanguine Caverns, avoid Digest & Excrete and Belching Breath, and clear The Lost Child after its Patch 1 nerf.',
				href: '/mortal-shell-ii/lost-child/',
				label: 'Priority 05',
				badge: 'Boss',
			},
			{
				title: 'Blackmarrow Keys',
				description: 'Track eight Shade keys, five confirmed routes, and the matching cosmetic chests around Marrow Keep.',
				href: '/mortal-shell-ii/blackmarrow-keys/',
				label: 'Priority 06',
				badge: 'Exploration',
			},
			{
				title: 'Lucian',
				description: 'Clear the Hidden Keep, follow Lucian to higher ground, and survive his invisible phase at Stonebled Gate.',
				href: '/mortal-shell-ii/lucian-thirsting-knight/',
				label: 'Priority 07',
				badge: 'Boss',
			},
			{
				title: 'Forgotten Crossbow',
				description: 'Enter Flooded Village, find the Damp Key, and backtrack to unlock the Sidearm room.',
				href: '/mortal-shell-ii/forgotten-crossbow/',
				label: 'Priority 08',
				badge: 'Weapon',
			},
			{
				title: 'Cursed Child',
				description: 'Reach Revered Beacon, use cover against the golden light, and break its source to claim the Sidearm.',
				href: '/mortal-shell-ii/cursed-child/',
				label: 'Priority 09',
				badge: 'Weapon',
			},
			{
				title: 'Beta Progress Carry-Over',
				description: 'Check beta reset rules, Flayed Harbinger eligibility, and the Steam fix when launch rewards do not appear.',
				href: '/mortal-shell-ii/beta-progress-carry-over/',
				label: 'Priority 10',
				badge: 'Launch',
			},
			{
				title: 'Sariel',
				description: 'Reach the Chamber of Becoming, destroy all four revival markers, and complete Sariel\'s Shell Memory.',
				href: '/mortal-shell-ii/sariel/',
				label: 'Priority 11',
				badge: 'Shells',
			},
			{
				title: 'Clockwork Scythe',
				description: 'Follow the Sariel route from Silent Steps and claim the Clockwork Scythe after the final encounter.',
				href: '/mortal-shell-ii/clockwork-scythe/',
				label: 'Priority 12',
				badge: 'Weapon',
			},
			{
				title: 'Smert',
				description: 'Activate the three blood pools at Prophet\'s Rest, complete The Convert, and unlock Smert.',
				href: '/mortal-shell-ii/smert/',
				label: 'Priority 13',
				badge: 'Shells',
			},
			{
				title: 'Gragu',
				description: 'Take the Heart of Vatra from the Temple and return it to Gragu at One-Legged Wolf Tavern.',
				href: '/mortal-shell-ii/gragu/',
				label: 'Priority 14',
				badge: 'Shells',
			},
			{
				title: 'Caged Hystrix',
				description: 'Collect the separate Sidearm pickup near the Chamber of Becoming exit after Sariel.',
				href: '/mortal-shell-ii/caged-hystrix/',
				label: 'Priority 15',
				badge: 'Weapon',
			},
			{
				title: 'Balance Patch 1',
				description: 'Patch 1 changes Glimpse refunds, Tarforge costs, enemy balance, weapon behavior, and launch stability.',
				href: '/mortal-shell-ii/balance-patch-1/',
				label: 'Priority 16',
				badge: 'Patch Notes',
			},
			{
				title: 'Weapons Guide',
				description: 'Eight identified primary weapons, launch-build route coverage, pending entries, and the Tarforge upgrade handoff.',
				href: '/mortal-shell-ii/weapons/',
				label: 'Priority 17',
				badge: 'Weapons',
			},
			{
				title: 'Tiel',
				description: "Find Tiel southeast of Widow's Overlook and complete the Rash Memory to unlock the Shell.",
				href: '/mortal-shell-ii/tiel/',
				label: 'Priority 18',
				badge: 'Shells',
			},
			{
				title: 'Tarforge Guide',
				description: 'Find all five upgrade parts and unlock primary weapons, sidearms, Tarstones, smelting, and the Endless Core.',
				href: '/mortal-shell-ii/tarforge/',
				label: 'Priority 19',
				badge: 'Upgrades',
			},
			{
				title: "Veteran's Battle Axe",
				description: "Reach King's Crypt near Blackridge Pass and survive its trap-filled route to the final weapon pickup.",
				href: '/mortal-shell-ii/veterans-battle-axe/',
				label: 'Priority 20',
				badge: 'Weapon',
			},
			{
				title: 'Black Needle',
				description: "Solve Sester's Bastion five-bell walkway puzzle and complete the Sester encounter to claim the spear.",
				href: '/mortal-shell-ii/black-needle/',
				label: 'Priority 21',
				badge: 'Weapon',
			},
			{
				title: 'Tarstones Guide',
				description: 'How Tarforge upgrades, Tarcores, XP, and early Tarstone choices fit together.',
				href: '/mortal-shell-ii/tarstones/',
				label: 'Priority 22',
				badge: 'Progression',
			},
			{
				title: 'Shells Guide',
				description: 'Individual Shell routes, unlock context, and provisional use cases without an invented tier list.',
				href: '/mortal-shell-ii/shells/',
				label: 'Priority 23',
				badge: 'Shells',
			},
			{
				title: 'Beacons & Fast Travel',
				description: "Unlock Mether's Breath, track known Beacons, and avoid treating conflicting thresholds as fixed rules.",
				href: '/mortal-shell-ii/beacons-fast-travel/',
				label: 'Priority 24',
				badge: 'Exploration',
			},
			{
				title: 'Ova Guide',
				description: 'Ova sources, the 168 requirement, Corrupted Gates, and the Send Ova point of no return.',
				href: '/mortal-shell-ii/ova/',
				label: 'Priority 25',
				badge: 'Progression',
			},
			{
				title: 'New Game Plus',
				description: 'What carries over, what resets, and what to finish before starting another cycle.',
				href: '/mortal-shell-ii/new-game-plus/',
				label: 'Priority 26',
				badge: 'Endgame',
			},
		],
		guideTopicGroups: [
			{
				id: 'weapons-resources',
				title: 'Weapons & Resources',
				description: 'Find weapons, improve your damage, and manage the resources that shape an early run.',
				guideOrder: [
					'/mortal-shell-ii/balance-patch-1/',
					'/mortal-shell-ii/weapons/',
					'/mortal-shell-ii/veterans-battle-axe/',
					'/mortal-shell-ii/great-martyrs-blade/',
					'/mortal-shell-ii/axe-dagger/',
					'/mortal-shell-ii/obsidian-hammer/',
					'/mortal-shell-ii/axatana/',
					'/mortal-shell-ii/seedbearers-scripture/',
					'/mortal-shell-ii/black-needle/',
					'/mortal-shell-ii/clockwork-scythe/',
					'/mortal-shell-ii/sidearms/',
					'/mortal-shell-ii/forgotten-crossbow/',
					'/mortal-shell-ii/cursed-child/',
					'/mortal-shell-ii/caged-hystrix/',
					'/mortal-shell-ii/tarforge/',
					'/mortal-shell-ii/tarstones/',
					'/mortal-shell-ii/gloom-farm/',
					'/mortal-shell-ii/gloombound-flame/',
				],
			},
			{
				id: 'world-exploration',
				title: 'World & Exploration',
				description: 'Open routes, find Shells and key locations, and understand the world progression gates.',
				guideOrder: [
					'/mortal-shell-ii/beacons-fast-travel/',
					'/mortal-shell-ii/shrine-of-sorrows/',
					'/mortal-shell-ii/lost-child/',
					'/mortal-shell-ii/hall-of-illusions/',
					'/mortal-shell-ii/lucian-thirsting-knight/',
					'/mortal-shell-ii/shells/',
					'/mortal-shell-ii/tiel/',
					'/mortal-shell-ii/smert/',
					'/mortal-shell-ii/gragu/',
					'/mortal-shell-ii/sariel/',
					'/mortal-shell-ii/sester-genessa/',
					'/mortal-shell-ii/eredrim/',
					'/mortal-shell-ii/ova/',
					'/mortal-shell-ii/map-fragments/',
					'/mortal-shell-ii/blackmarrow-keys/',
					'/mortal-shell-ii/crypt-key-hall-of-echoes/',
					'/mortal-shell-ii/proxima/',
				],
			},
			{
				id: 'completion-endgame',
				title: 'Completion & Endgame',
				description: 'Plan endings, NG+, difficult encounters, and the missable completion goals.',
				guideOrder: [
					'/mortal-shell-ii/endings/',
					'/mortal-shell-ii/new-game-plus/',
					'/mortal-shell-ii/slayer-seal-difficulty/',
					'/mortal-shell-ii/tar-golem/',
					'/mortal-shell-ii/peters-perfect-parry/',
					'/mortal-shell-ii/glimpses/',
				],
			},
			{
				id: 'start-general',
				title: 'Start Here & General',
				description: 'Understand the basics, first-run choices, and retained launch or beta context.',
				guideOrder: [
					'/mortal-shell-ii/gameplay/',
					'/mortal-shell-ii/skip-prologue/',
					'/mortal-shell-ii/release-date/',
					'/mortal-shell-ii/beta-progress-carry-over/',
					'/mortal-shell-ii/open-beta/',
					'/mortal-shell-ii/magdalena/',
				],
			},
			{
				id: 'pc-fixes',
				title: 'PC Requirements & Fixes',
				description: 'Check the PC baseline and troubleshoot launch-window crashes and stability problems.',
				guideOrder: [
					'/mortal-shell-ii/system-requirements/',
					'/mortal-shell-ii/crashing-pc/',
				],
			},
		],
		guideVisuals: {
			'/mortal-shell-ii/shrine-of-sorrows/': { icon: 'map' },
			'/mortal-shell-ii/lost-child/': { icon: 'sword' },
			'/mortal-shell-ii/balance-patch-1/': { icon: 'refresh' },
			'/mortal-shell-ii/weapons/': { icon: 'sword' },
			'/mortal-shell-ii/great-martyrs-blade/': {
				image: '/images/great-martyrs-blade/great-martyrs-blade-acquired.png',
				alt: "Great Martyr's Blade acquired in Mortal Shell 2.",
			},
			'/mortal-shell-ii/axatana/': {
				image: '/images/axatana/axatana-new-weapon-acquired.webp',
				alt: 'Axatana acquired in Mortal Shell 2.',
			},
			'/mortal-shell-ii/tar-golem/': { icon: 'trophy' },
			'/mortal-shell-ii/seedbearers-scripture/': { icon: 'book' },
			'/mortal-shell-ii/axe-dagger/': { icon: 'sword' },
			'/mortal-shell-ii/veterans-battle-axe/': { icon: 'sword' },
			'/mortal-shell-ii/obsidian-hammer/': { icon: 'sword' },
			'/mortal-shell-ii/black-needle/': { icon: 'sword' },
			'/mortal-shell-ii/clockwork-scythe/': { icon: 'sword' },
			'/mortal-shell-ii/sidearms/': { icon: 'sword' },
			'/mortal-shell-ii/caged-hystrix/': { icon: 'sword' },
			'/mortal-shell-ii/tarforge/': { icon: 'sword' },
			'/mortal-shell-ii/tarstones/': { icon: 'gem' },
			'/mortal-shell-ii/gloom-farm/': { icon: 'gem' },
			'/mortal-shell-ii/gloombound-flame/': {
				image: '/images/gloombound-flame/gloombound-flame-location.webp',
				alt: 'Gloombound Flame pickup location in Mortal Shell 2.',
			},
			'/mortal-shell-ii/beacons-fast-travel/': { icon: 'map' },
			'/mortal-shell-ii/hall-of-illusions/': { icon: 'map' },
			'/mortal-shell-ii/lucian-thirsting-knight/': { icon: 'sword' },
			'/mortal-shell-ii/forgotten-crossbow/': { icon: 'sword' },
			'/mortal-shell-ii/cursed-child/': { icon: 'sword' },
			'/mortal-shell-ii/shells/': { icon: 'shell' },
			'/mortal-shell-ii/tiel/': { icon: 'shell' },
			'/mortal-shell-ii/smert/': { icon: 'shell' },
			'/mortal-shell-ii/gragu/': { icon: 'shell' },
			'/mortal-shell-ii/sariel/': { icon: 'shell' },
			'/mortal-shell-ii/sester-genessa/': { icon: 'shell' },
			'/mortal-shell-ii/eredrim/': { icon: 'shell' },
			'/mortal-shell-ii/ova/': { icon: 'gem' },
			'/mortal-shell-ii/map-fragments/': { icon: 'map' },
			'/mortal-shell-ii/blackmarrow-keys/': { icon: 'map' },
			'/mortal-shell-ii/crypt-key-hall-of-echoes/': { icon: 'map' },
			'/mortal-shell-ii/proxima/': { icon: 'shell' },
			'/mortal-shell-ii/endings/': { icon: 'trophy' },
			'/mortal-shell-ii/new-game-plus/': { icon: 'refresh' },
			'/mortal-shell-ii/slayer-seal-difficulty/': { icon: 'shield' },
			'/mortal-shell-ii/peters-perfect-parry/': { icon: 'trophy' },
			'/mortal-shell-ii/glimpses/': { icon: 'gem' },
			'/mortal-shell-ii/gameplay/': { icon: 'book' },
			'/mortal-shell-ii/skip-prologue/': { icon: 'book' },
			'/mortal-shell-ii/release-date/': { icon: 'calendar' },
			'/mortal-shell-ii/beta-progress-carry-over/': { icon: 'calendar' },
			'/mortal-shell-ii/open-beta/': { icon: 'book' },
			'/mortal-shell-ii/magdalena/': { icon: 'sword' },
			'/mortal-shell-ii/system-requirements/': { icon: 'monitor' },
			'/mortal-shell-ii/crashing-pc/': { icon: 'monitor' },
		},
		categoryHotOrder: {
			'combat-exploration': [
				'/mortal-shell-ii/tar-golem/',
				'/mortal-shell-ii/seedbearers-scripture/',
				'/mortal-shell-ii/shrine-of-sorrows/',
				'/mortal-shell-ii/lost-child/',
				'/mortal-shell-ii/blackmarrow-keys/',
				'/mortal-shell-ii/slayer-seal-difficulty/',
				'/mortal-shell-ii/hall-of-illusions/',
				'/mortal-shell-ii/lucian-thirsting-knight/',
				'/mortal-shell-ii/forgotten-crossbow/',
				'/mortal-shell-ii/cursed-child/',
				'/mortal-shell-ii/sidearms/',
				'/mortal-shell-ii/sariel/',
				'/mortal-shell-ii/clockwork-scythe/',
				'/mortal-shell-ii/smert/',
				'/mortal-shell-ii/gragu/',
				'/mortal-shell-ii/caged-hystrix/',
				'/mortal-shell-ii/balance-patch-1/',
				'/mortal-shell-ii/weapons/',
				'/mortal-shell-ii/tiel/',
				'/mortal-shell-ii/tarforge/',
				'/mortal-shell-ii/veterans-battle-axe/',
				'/mortal-shell-ii/black-needle/',
				'/mortal-shell-ii/obsidian-hammer/',
				'/mortal-shell-ii/tarstones/',
				'/mortal-shell-ii/ova/',
				'/mortal-shell-ii/beacons-fast-travel/',
				'/mortal-shell-ii/shells/',
				'/mortal-shell-ii/new-game-plus/',
				'/mortal-shell-ii/endings/',
				'/mortal-shell-ii/map-fragments/',
				'/mortal-shell-ii/gloombound-flame/',
				'/mortal-shell-ii/sester-genessa/',
				'/mortal-shell-ii/eredrim/',
				'/mortal-shell-ii/peters-perfect-parry/',
			],
			'pc-requirements': [
				'/mortal-shell-ii/crashing-pc/',
				'/mortal-shell-ii/system-requirements/',
			],
			'game-info': [
				'/mortal-shell-ii/skip-prologue/',
				'/mortal-shell-ii/beta-progress-carry-over/',
				'/mortal-shell-ii/release-date/',
				'/mortal-shell-ii/open-beta/',
			],
		},
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
			{ label: 'Where are all 8 Sidearms?', href: '/mortal-shell-ii/sidearms/' },
			{ label: 'How do I unlock fast travel?', href: '/mortal-shell-ii/beacons-fast-travel/' },
			{ label: 'Where can I find and unlock Shells?', href: '/mortal-shell-ii/shells/' },
			{ label: 'Why is my Flayed Harbinger or Prologue skip not showing?', href: '/mortal-shell-ii/beta-progress-carry-over/' },
			{ label: 'Does the Slayer Seal disable achievements?', href: '/mortal-shell-ii/slayer-seal-difficulty/' },
			{ label: 'Which trophies can I miss by skipping the Prologue?', href: '/mortal-shell-ii/skip-prologue/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
		recentUpdates: [
				{
					title: 'Tar Golem',
					href: '/mortal-shell-ii/tar-golem/',
					date: '2026-08-23',
					changeSummary: 'Minimum-health trophy objective, safe fight rules, and fresh-save retry boundary.',
					tag: 'Missable',
				},
				{
					title: 'Skip Prologue',
					href: '/mortal-shell-ii/skip-prologue/',
					date: '2026-08-23',
					changeSummary: 'Confirmed Mid Summer? and Tar Golem missables plus the updated skip recommendation.',
					tag: 'Launch',
				},
				{
					title: "Seedbearer's Scripture",
					href: '/mortal-shell-ii/seedbearers-scripture/',
					date: '2026-08-23',
					changeSummary: 'All three Gland locations, Night Mode Forgotten Tower offering, and Cosmic Disease mitigation.',
					tag: 'Night Mode',
				},
				{
					title: 'Shrine of Sorrows',
					href: '/mortal-shell-ii/shrine-of-sorrows/',
					date: '2026-08-23',
					changeSummary: 'Three Sonatas, the frozen-head puzzle, basement route, and Night Mode rewards.',
					tag: 'Night Mode',
				},
		],
		fieldNoteOrder: [
			'/mortal-shell-ii/endings/',
			'/mortal-shell-ii/peters-perfect-parry/',
			'/mortal-shell-ii/blackmarrow-keys/',
		],
		featuredOrder: [
			'mortal-shell-ii/balance-patch-1',
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
			title: 'Start Your Run',
			description:
				'Understand the basics, make first-run choices, and get oriented before committing to a longer route.',
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
					pageId: 'magdalena',
					href: '/mortal-shell-ii/magdalena/',
					title: 'Magdalena',
					description: 'Preserved Open Beta encounter context with an explicit evidence boundary.',
					eyebrow: 'Reference',
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
			title: 'Fix PC Problems',
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
			title: 'Get Stronger',
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
			title: 'Explore & Unlock',
			description:
				'Follow the recommended Prologue → Fainweald → Mammon → Unfound Path spine, while keeping gate order and Ova thresholds version-qualified.',
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
					pageId: 'crypt-key-hall-of-echoes',
					href: '/mortal-shell-ii/crypt-key-hall-of-echoes/',
					title: 'Crypt Key + Hall of Echoes',
					description: 'Find the Crypt Key at Desolate Peak and solve the Hall of Echoes route in eastern Fainweald.',
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
					pageId: 'magdalena',
					href: '/mortal-shell-ii/magdalena/',
					title: 'Magdalena',
					description: 'Recommended early Fainweald gate through Glutted Mire; the three gate order is flexible.',
					eyebrow: 'Fainweald Gate',
				},
				{
					pageId: 'lost-child',
					href: '/mortal-shell-ii/lost-child/',
					title: 'The Lost Child',
					description: 'Sanguine Caverns gate route and post-fight key cleanup context.',
					eyebrow: 'Fainweald Gate',
				},
				{
					pageId: 'nameless-captive',
					href: '/mortal-shell-ii/nameless-captive/',
					title: 'The Nameless Captive',
					description: "Prisoners' Domain gate with the Peter's Perfect Parry check before the kill.",
					eyebrow: 'Fainweald Gate',
				},
				{
					pageId: 'droeg-the-conqueror',
					href: '/mortal-shell-ii/droeg-the-conqueror/',
					title: 'Droeg the Conqueror',
					description: 'Conquered Temple gate and Ova reward route in Mammon.',
					eyebrow: 'Mammon Gate',
				},
				{
					pageId: 'hexapod',
					href: '/mortal-shell-ii/hexapod/',
					title: 'Hexapod',
					description: 'Withered Shoals gate route; use the guide for the void approach and Beacon follow-through.',
					eyebrow: 'Mammon Gate',
				},
				{
					pageId: 'isaac-the-scholar-prince',
					href: '/mortal-shell-ii/isaac-the-scholar-prince/',
					title: 'Isaac the Scholar Prince',
					description: 'Faded Citadel gate route and Scholar-Prince post-fight Beacon.',
					eyebrow: 'Mammon Gate',
				},
				{
					pageId: 'orrem-discarded-golem',
					href: '/mortal-shell-ii/orrem-discarded-golem/',
					title: 'Orrem',
					description: 'Bridge of Procession branch of the Unfound Path; a two-form guardian encounter.',
					eyebrow: 'Unfound Path',
				},
				{
					pageId: 'monolith',
					href: '/mortal-shell-ii/monolith/',
					title: 'The Monolith',
					description: 'Obsidian Vault branch and post-kill red-gland progression interaction.',
					eyebrow: 'Unfound Path',
				},
				{
					pageId: 'malborn-offspring',
					href: '/mortal-shell-ii/malborn-offspring/',
					title: 'Malborn Offspring',
					description: "Faithful's Shelter branch with a resurrection transition before the lightning phase.",
					eyebrow: 'Unfound Path',
				},
				{
					pageId: 'zmey',
					href: '/mortal-shell-ii/zmey/',
					title: 'Zmey the Unbidden',
					description: 'Final Unfound Path approach, Hidden Nave Beacon, and the Send Ova decision boundary.',
					eyebrow: 'Finale',
				},
			],
			fastAnswers: [
				{
					question: 'Is there one mandatory boss order?',
					answer: 'No. Use Prologue → Fainweald → Mammon → Unfound Path as the campaign backbone, but treat the three Fainweald gates, three Mammon gates, and the three Unfound Path branches as route-flexible unless the current in-game gate says otherwise.',
					pageId: 'beacons-fast-travel',
					href: '/mortal-shell-ii/beacons-fast-travel/',
				},
			],
		},
		{
			id: 'finish-complete',
			eyebrow: 'Route 05',
			title: 'Finish & Complete',
			description:
				'Handle endings, NG+, difficult optional goals, and the completion questions that matter late in a run.',
			href: '/mortal-shell-ii/routes/finish-complete/',
			pages: [
				{
					pageId: 'endings',
					href: '/mortal-shell-ii/endings/',
					title: 'Endings',
					description: 'Main ending and Baghead secret-ending route with spoiler boundaries.',
					eyebrow: 'Completion',
				},
				{
					pageId: 'trophies',
					href: '/mortal-shell-ii/trophies/',
					title: 'Trophies & Achievements',
					description: 'Protect the current-cycle missables, collect completion sets, and reserve NG+ for Shell Memory cleanup.',
					eyebrow: 'Achievement',
				},
				{
					pageId: 'new-game-plus',
					href: '/mortal-shell-ii/new-game-plus/',
					title: 'New Game Plus',
					description: 'What carries over, what resets, and what to finish before another cycle.',
					eyebrow: 'Endgame',
				},
				{
					pageId: 'slayer-seal-difficulty',
					href: '/mortal-shell-ii/slayer-seal-difficulty/',
					title: 'Slayer Seal Difficulty',
					description: 'Choose the easier Slayer Seal path or harder Night Mode path with current caveats.',
					eyebrow: 'Difficulty',
				},
				{
					pageId: 'peters-perfect-parry',
					href: '/mortal-shell-ii/peters-perfect-parry/',
					title: "Peter's Perfect Parry",
					description: 'Attempt the missable Nameless Captive trophy with the current combo and retry guidance.',
					eyebrow: 'Achievement',
				},
				{
					pageId: 'glimpses',
					href: '/mortal-shell-ii/glimpses/',
					title: 'Glimpses',
					description: 'Choose between Shell Bond upgrades and location information.',
					eyebrow: 'Resource',
				},
			],
			fastAnswers: [
				{
					question: 'What should I finish before NG+?',
					answer: 'Check the endings, completion, and carry-over guides before committing to another cycle.',
					pageId: 'new-game-plus',
					href: '/mortal-shell-ii/new-game-plus/',
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
