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

export interface GuideFact {
	label: string;
	value: string;
}

export interface GuideEditorial {
	eyebrow: string;
	shortTitle: string;
	shortDesc: string;
	facts?: readonly GuideFact[];
}

export interface GameRoute {
	id: string;
	number: string;
	label: string;
	editorialName: string;
	title: string;
	intro: string;
	context: string;
	path: string;
	image?: string;
	imageAlt?: string;
	imagePosition?: string;
	guides: readonly string[];
	guideEditorial?: Readonly<Record<string, GuideEditorial>>;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	guidesPath: string;
	allRoutesPath: string;
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
	routes: readonly GameRoute[];
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
	guidesPath: '/mortal-shell-ii/guides/',
	releaseDate: '2026-08-20',
	developer: 'Cold Symmetry',
	publisher: 'Playstack',
	platforms: ['PC via Steam', 'PlayStation 5', 'Xbox Series X|S'],
	accentColor: '#7c3aed',
	allRoutesPath: '/mortal-shell-ii/gameplay/',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam artwork for Mortal Shell II',
	heroPosition: 'center',
	routes: [
		{
			id: 'start',
			number: '01',
			label: 'START THE GAME',
			editorialName: 'The First Descent',
			title: 'Launch, Setup & First Steps',
			intro: 'Everything you need before your first session — release timing, beta status, PC checks, and early decisions.',
			context: 'Start here if you are deciding when to buy, checking whether your PC can run the game, or planning what to do before the Prologue ends.',
			path: '/mortal-shell-ii/start/',
			image: '/images/hero-keyart.png',
			imageAlt: 'Mortal Shell II key art',
			imagePosition: 'center 30%',
			guides: [
				'release-date',
				'open-beta',
				'beta-progress-carry-over',
				'skip-prologue',
				'system-requirements',
				'crashing-pc',
			],
			guideEditorial: {
				'release-date': { eyebrow: 'Launch Window', shortTitle: 'Release Date & Unlock Time', shortDesc: 'Standard and Devout Edition unlock times by platform.', facts: [{ label: 'Standard Launch', value: 'Aug 20, 2026' }, { label: 'Devout Access', value: 'Aug 17, 2026' }] },
				'open-beta': { eyebrow: 'Free Preview', shortTitle: 'Open Beta: How to Play', shortDesc: 'What the beta includes, platforms, and how it connects to launch.', facts: [{ label: 'Platforms', value: 'PC · PS5 · Xbox' }, { label: 'Scope', value: 'Prologue + first region' }] },
				'beta-progress-carry-over': { eyebrow: 'Save Transfer', shortTitle: 'Beta Progress Carry Over', shortDesc: 'What resets, the Flayed Harbinger reward, and Prologue skip unlock.', facts: [{ label: 'Reward', value: 'Flayed Harbinger' }, { label: 'Saves', value: 'Do not carry over' }] },
				'skip-prologue': { eyebrow: 'New Game', shortTitle: 'Skip the Prologue', shortDesc: 'Who can skip, what you miss, and whether you should.', facts: [{ label: 'Unlock', value: 'Past Marrow Keep in beta' }] },
				'system-requirements': { eyebrow: 'PC Check', shortTitle: 'PC System Requirements', shortDesc: 'Minimum specs from Steam including the SSD requirement.', facts: [{ label: 'RAM', value: '16 GB' }, { label: 'Storage', value: '70 GB SSD' }, { label: 'DirectX', value: '12' }] },
				'crashing-pc': { eyebrow: 'Hotfix 1.0', shortTitle: 'PC Crashes & Fixes', shortDesc: 'Known launch crashes, Hotfix 1.0, and workarounds.', facts: [{ label: 'Patch', value: 'Hotfix 1.0' }, { label: 'Status', value: 'Live on Steam' }] },
			},
		},
		{
			id: 'weapons',
			number: '02',
			label: 'GET A WEAPON',
			editorialName: 'Arm Yourself',
			title: 'Weapons & Early Power',
			intro: 'Find and equip powerful weapons before most players leave the first region.',
			context: 'Three early-game weapon routes through Fainweald and Mammon. Each guide covers the dungeon path, pickup location, and what you need before you go.',
			path: '/mortal-shell-ii/weapons/',
			image: '/images/great-martyrs-blade/great-martyrs-blade-acquired.png',
			imageAlt: "Acquiring the Great Martyr's Blade in Mortal Shell II",
			imagePosition: 'center 40%',
			guides: [
				'great-martyrs-blade',
				'axatana',
				'axe-dagger',
			],
			guideEditorial: {
				'great-martyrs-blade': { eyebrow: "Martyr's Prison", shortTitle: "Great Martyr's Blade", shortDesc: "Greatsword at the end of the Martyr's Prison dungeon chain.", facts: [{ label: 'Location', value: "Martyr's Prison" }, { label: 'Type', value: 'Greatsword' }] },
				'axatana': { eyebrow: 'Forgotten Tower', shortTitle: 'Axatana', shortDesc: 'Early heavy weapon via the Outskirts of Mammon route.', facts: [{ label: 'Location', value: 'Forgotten Tower' }, { label: 'Type', value: 'Heavy weapon' }] },
				'axe-dagger': { eyebrow: 'Shrine of Trials', shortTitle: 'Axe & Dagger', shortDesc: 'Chapel Key, Shrine puzzle, and the launch-build location.', facts: [{ label: 'Location', value: 'Shrine of Trials' }, { label: 'Type', value: 'Axe & dagger pair' }] },
			},
		},
		{
			id: 'power',
			number: '03',
			label: 'GET STRONGER',
			editorialName: 'Sharpen the Edge',
			title: 'Progression & Difficulty',
			intro: 'Level up faster and tune the challenge to match your playstyle.',
			context: 'Gloom is the currency of growth. These guides cover how to earn it, how to control difficulty, and how to unlock Night Mode.',
			path: '/mortal-shell-ii/power/',
			image: '/images/slayer-seal/slayer-seal-gloomslayer-effects.webp',
			imageAlt: 'Slayer Seal Gloomslayer effects in Mortal Shell II',
			guides: [
				'gloom-farm',
				'slayer-seal-difficulty',
				'gloombound-flame',
			],
			guideEditorial: {
				'gloom-farm': { eyebrow: 'Leveling Loop', shortTitle: 'Gloom Farming', shortDesc: 'Best early farm routes and realistic per-run returns.', facts: [{ label: 'Currency', value: 'Gloom' }, { label: 'Spend At', value: 'Beacons' }] },
				'slayer-seal-difficulty': { eyebrow: 'Marrow Keep', shortTitle: 'Slayer Seal & Difficulty', shortDesc: 'The optional easy mode item and Night Mode explained.', facts: [{ label: 'Location', value: 'Marrow Keep' }, { label: 'Effect', value: 'Easy mode item' }] },
				'gloombound-flame': { eyebrow: 'Great Arbiter', shortTitle: 'Gloombound Flame', shortDesc: 'Find the Flame and activate Night Mode at Marrow Keep.', facts: [{ label: 'Location', value: 'Great Arbiter arena' }, { label: 'Unlocks', value: 'Night Mode' }] },
			},
		},
		{
			id: 'explore',
			number: '04',
			label: 'EXPLORE',
			editorialName: 'Chart the Dark',
			title: 'Locations & Exploration',
			intro: 'Uncover every corner of the interconnected world.',
			context: 'The map does not clear itself. Collect fragments at crow-marked statues and unlock new Shells at Shattered Beacons.',
			path: '/mortal-shell-ii/explore/',
			image: '/images/great-martyrs-blade/great-martyrs-blade-widows-overlook.png',
			imageAlt: "Widow's Overlook vista in Mortal Shell II",
			imagePosition: 'center 30%',
			guides: [
				'map-fragments',
				'proxima',
			],
			guideEditorial: {
				'map-fragments': { eyebrow: 'Fainweald & Mammon', shortTitle: 'Map Fragments', shortDesc: 'All 11 Ruk statue locations by region.', facts: [{ label: 'Total', value: '11 fragments' }, { label: 'Regions', value: 'Fainweald · Mammon' }] },
				'proxima': { eyebrow: 'Shattered Beacon', shortTitle: 'Proxima Shell', shortDesc: 'Unlock Proxima via Blackridge Pass after the Prologue.', facts: [{ label: 'Location', value: 'Shattered Beacon' }, { label: 'Type', value: 'Shell' }] },
			},
		},
		{
			id: 'trials',
			number: '05',
			label: 'FACE A TRIAL',
			editorialName: 'The Named',
			title: 'Bosses & Encounters',
			intro: 'Prepare for the named encounters that guard your path.',
			context: 'Named encounters are the gates between regions. Each guide covers location, what to expect, and what remains unconfirmed.',
			path: '/mortal-shell-ii/trials/',
			image: '/images/gloombound-flame/great-arbiter-flame-pickup.webp',
			imageAlt: 'Great Arbiter encounter area in Mortal Shell II',
			guides: [
				'magdalena',
			],
			guideEditorial: {
				'magdalena': { eyebrow: 'Sunken Village', shortTitle: 'Magdalena', shortDesc: 'The Lady of the Woods — location, fight, and what is confirmed.', facts: [{ label: 'Location', value: 'Sunken Village' }, { label: 'Fight', value: 'Open Beta' }] },
			},
		},
	],
	portal: {
		popularQuestions: [
			{ label: 'When does Mortal Shell II release?', href: '/mortal-shell-ii/release-date/' },
			{ label: 'How do I skip the prologue?', href: '/mortal-shell-ii/skip-prologue/' },
			{ label: 'How do I farm Gloom fast?', href: '/mortal-shell-ii/gloom-farm/' },
			{ label: 'Where are all the Map Fragments?', href: '/mortal-shell-ii/map-fragments/' },
			{ label: 'Where do I get the Axe & Dagger?', href: '/mortal-shell-ii/axe-dagger/' },
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
