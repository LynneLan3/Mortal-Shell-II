import type { APIRoute } from 'astro';
import { getGuides, guideHref } from '../../lib/guides';

/** Build-time search index — fetched on first search open instead of inlined on every page. */
export const GET: APIRoute = async () => {
	const guides = await getGuides();
	const payload = guides.map((entry) => ({
		title: entry.data.title,
		description: entry.data.description ?? '',
		href: guideHref(entry),
		text: [entry.data.title, entry.data.description, entry.data.quickAnswer]
			.filter(Boolean)
			.join(' ')
			.replace(/\s+/g, ' ')
			.slice(0, 1200),
	}));

	return new Response(JSON.stringify(payload), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=86400, immutable',
		},
	});
};
