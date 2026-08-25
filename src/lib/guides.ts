import { getCollection, type CollectionEntry } from 'astro:content';
import { game } from '../config/game';

export { categoryHref, categoryIdFromPath, isCategoryLandingPath } from './category-url';

export type GuideEntry = CollectionEntry<'docs'>;

export type GuideLibraryCategory = 'exploration' | 'shells' | 'weapons' | 'bosses' | 'items' | 'completion' | 'fixes';

export const guideLibraryCategoryLabels: Record<GuideLibraryCategory, string> = {
	exploration: 'Exploration',
	shells: 'Shells',
	weapons: 'Weapons',
	bosses: 'Bosses',
	items: 'Items',
	completion: 'Completion',
	fixes: 'Fixes / Troubleshooting',
};

const shellGuideSlugs = new Set(['shells', 'shell-memories', 'tiel', 'proxima', 'gragu', 'eredrim', 'smert', 'lazlo', 'sariel', 'sester-genessa']);
const weaponGuideSlugs = new Set([
	'weapons',
	'sidearms',
	'axe-dagger',
	'veterans-battle-axe',
	'great-martyrs-blade',
	'obsidian-hammer',
	'axatana',
	'black-needle',
	'clockwork-scythe',
	'forgotten-crossbow',
	'cursed-child',
	'caged-hystrix',
	'ballistazooka',
	'makeshift-projectile',
	'salvaged-trebuchaxe',
	'triarch-repeater',
	'troubadours-lute',
]);
const bossGuideSlugs = new Set([
	'bosses',
	'tar-golem',
	'magdalena',
	'lucian-thirsting-knight',
	'lost-child',
	'sariel',
	'hall-of-illusions',
	'nameless-captive',
	'droeg-the-conqueror',
	'hexapod',
	'isaac-the-scholar-prince',
	'orrem-discarded-golem',
	'monolith',
	'malborn-offspring',
	'zmey',
	'vellen-lazlo',
	'eredrim',
	'obsidian-hammer',
	'smert',
]);
const completionGuideSlugs = new Set(['trophies', 'endings', 'new-game-plus', 'ova', 'ascension', 'map-fragments', 'blackmarrow-keys', 'skip-prologue', 'beta-progress-carry-over']);
const fixesGuideSlugs = new Set(['crashing-pc', 'system-requirements', 'pc-requirements']);

export function guideLibraryCategoryOf(entry: GuideEntry): GuideLibraryCategory {
	const slug = guideHref(entry).replace(/^\/mortal-shell-ii\//, '').replace(/\/$/, '');
	if (shellGuideSlugs.has(slug)) return 'shells';
	if (weaponGuideSlugs.has(slug)) return 'weapons';
	if (bossGuideSlugs.has(slug)) return 'bosses';
	if (completionGuideSlugs.has(slug)) return 'completion';
	if (fixesGuideSlugs.has(slug)) return 'fixes';
	if (/tar|gloom|glimpse|healing|seedbearer|beacon|flame|night|fragment|key|stone|memory|seal|ova/.test(slug)) return 'items';
	return 'exploration';
}

export function isGuidePage(entry: GuideEntry) {
	return entry.data.template !== 'splash';
}

function sourceDirectory(entry: GuideEntry) {
	const match = entry.filePath?.match(/(?:^|\/)src\/content\/docs\/([^/]+)\//);
	return match?.[1];
}

export function categoryIdOf(entry: GuideEntry) {
	return entry.data.category ?? sourceDirectory(entry) ?? '';
}

export function categoryOf(entry: GuideEntry) {
	const id = categoryIdOf(entry);
	return game.categories.find((category) => category.id === id);
}

export function guideHref(entry: GuideEntry) {
	const id = entry.id.replace(/\/index$/, '');
	if (!id || id === 'index') return '/';
	return `/${id}/`;
}

export async function getHubHref() {
	const docs = await getCollection('docs');
	const hub = docs.find((entry) => entry.data.template === 'splash');
	return hub ? guideHref(hub) : '/';
}

export function sortGuides(a: GuideEntry, b: GuideEntry) {
	const orderA = a.data.sidebar.order ?? Number.POSITIVE_INFINITY;
	const orderB = b.data.sidebar.order ?? Number.POSITIVE_INFINITY;
	if (orderA !== orderB) return orderA - orderB;
	return a.data.title.localeCompare(b.data.title);
}

export async function getGuides() {
	const docs = await getCollection('docs');
	return docs.filter(isGuidePage);
}

export function resolveRelated(guides: GuideEntry[], slugs: string[], sourceId: string) {
	return slugs.map((rawSlug) => {
		const slug = rawSlug.replace(/^\/+|\/+$/g, '');
		const match = guides.find((entry) => entry.id === slug);
		if (!match) {
			throw new Error(
				`Related guide "${slug}" was not found (referenced from "${sourceId}"). Fix the frontmatter related list.`
			);
		}
		return match;
	});
}
