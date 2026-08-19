import type { GuideEntry } from './guides';
import { routeForGuide } from './routes';

export interface GuideVisual {
	src: string;
	alt: string;
	position?: string;
}

const POSITIONS = ['center', 'center 30%', 'center 65%'];

/** Extract image references from a guide body — both markdown and raw <img> tags. */
function bodyImages(entry: GuideEntry): GuideVisual[] {
	const body = entry.body ?? '';
	const found: GuideVisual[] = [];

	const mdRe = /!\[([^\]]*)\]\(([^)\s]+)\)/g;
	for (const m of body.matchAll(mdRe)) {
		const src = m[2].startsWith('/') || m[2].startsWith('http') ? m[2] : `/${m[2]}`;
		if (!found.some((v) => v.src === src)) found.push({ src, alt: m[1]?.trim() || '' });
	}

	const htmlRe = /<img[^>]*>/gi;
	for (const tag of body.matchAll(htmlRe)) {
		const src = tag[0].match(/src=["']([^"']+)["']/)?.[1];
		const alt = tag[0].match(/alt=["']([^"']*)["']/)?.[1] ?? '';
		if (src && !found.some((v) => v.src === src)) {
			const normalized = src.startsWith('/') || src.startsWith('http') ? src : `/${src}`;
			found.push({ src: normalized, alt });
		}
	}

	return found;
}

/** Route fallback visual. */
function routeVisual(entry: GuideEntry): GuideVisual | undefined {
	const route = routeForGuide(entry);
	if (!route?.image) return undefined;
	return { src: route.image, alt: route.imageAlt ?? '', position: route.imagePosition };
}

/** First visual used for the article header band. Body evidence first, then route image. */
export function headerVisual(entry: GuideEntry): GuideVisual | undefined {
	return bodyImages(entry)[0] ?? routeVisual(entry);
}

/**
 * Visual Context strip: up to 3 slots.
 * Uses the guide's own evidence first; fills remaining slots from the route image,
 * reusing it with different object-positions when the page has fewer than 3 images.
 */
export function visualContext(entry: GuideEntry): GuideVisual[] {
	const own = bodyImages(entry);
	const fallback = routeVisual(entry);
	const slots: GuideVisual[] = [];

	for (let i = 0; i < 3; i++) {
		const ownImg = own[i];
		if (ownImg) {
			slots.push({ ...ownImg, position: POSITIONS[i] ?? ownImg.position });
		} else if (fallback) {
			slots.push({ ...fallback, position: POSITIONS[i] });
		} else {
			break;
		}
	}
	return slots;
}
