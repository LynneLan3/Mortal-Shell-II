import type { Root } from 'hast';
import { visit } from 'unist-util-visit';
import { game } from '../config/game';

interface Options {
	/** How many consecutive image-less content sections before injecting a visual. */
	after?: number;
}

const SPECIAL = new Set(['faq', 'sources', 'source']);

/**
 * Injects a route/guide visual into long text sections that otherwise have no
 * images, so the article keeps a visual rhythm. Runs only on guide pages whose
 * slug belongs to a route (uses the route image as fallback source).
 */
export default function rehypeSectionVisuals(options: Options = {}) {
	const after = options.after ?? 2;

	return (tree: Root, file: { path?: string }) => {
		const slug = file.path?.match(/([^/]+)\.(md|mdx)$/)?.[1];
		if (!slug) return;

		const route = game.routes.find((r) => r.guides.includes(slug));
		const source = route?.image;
		if (!source) return;

		let sectionsSinceVisual = 0;
		let lastSectionHadImage = false;

		visit(tree, 'element', (node, index, parent) => {
			if (!parent || index === undefined || index === null) return;

			if (node.tagName === 'img' || node.tagName === 'figure') {
				lastSectionHadImage = true;
				return;
			}

			if (node.tagName !== 'h2') return;

			const id = (node.properties?.id as string) ?? '';
			if (SPECIAL.has(id)) return;

			// Close the previous section.
			if (!lastSectionHadImage) sectionsSinceVisual += 1;
			else sectionsSinceVisual = 0;
			lastSectionHadImage = false;

			if (sectionsSinceVisual > after) {
				const figure = createVisualFigure(source, route?.imageAlt ?? '', id);
				parent.children.splice(index, 0, figure);
				sectionsSinceVisual = 0;
			}
		});
	};
}

function createVisualFigure(src: string, alt: string, forId: string) {
	const position = ['center', 'center 30%', 'center 65%'][forId.length % 3];
	return {
		type: 'element',
		tagName: 'figure',
		properties: { className: ['ms-section-visual'] },
		children: [
			{
				type: 'element',
				tagName: 'img',
				properties: {
					src,
					alt: alt || 'Mortal Shell II gameplay context',
					width: 1280,
					height: 720,
					loading: 'lazy',
					style: `object-fit: cover; object-position: ${position};`,
				},
				children: [],
			},
		],
	};
}
