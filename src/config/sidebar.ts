import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { game } from './game';

function categoryHasGuides(categoryId: string) {
	const dir = fileURLToPath(new URL(`../content/docs/${categoryId}`, import.meta.url));
	if (!existsSync(dir)) return false;
	return readdirSync(dir).some((file) => /\.(md|mdx)$/i.test(file));
}

export function sidebarFromCategories() {
	const hotGuides = game.portal?.hotGuides ?? [];
	const hotGroup = hotGuides.length > 0
		? [{
				label: 'Hot Guides',
				items: hotGuides.map((guide) => ({ label: guide.title, link: guide.href })),
			}]
		: [];

	const categoryGroups = [...game.categories]
		.sort((a, b) => a.order - b.order)
		.filter((category) => categoryHasGuides(category.contentDir ?? category.id))
		.map((category) => ({
			label: category.label,
			items: [{ autogenerate: { directory: category.contentDir ?? category.id } }],
		}));

	return [...hotGroup, ...categoryGroups];
}
