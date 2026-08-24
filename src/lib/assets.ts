import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { ImageMetadata } from 'astro';
import { game } from '../config/game';

const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{svg,png,jpg,jpeg,webp,avif}', {
	eager: true,
});

export function resolveGameAsset(filename?: string, _field?: string) {
	if (!filename) return undefined;
	return assets[`../assets/${filename}`]?.default;
}

export interface CardImage {
	src: string | ImageMetadata;
	alt: string;
}

interface CardImageInput {
	href?: string;
	title: string;
	image?: string | ImageMetadata;
	imageAlt?: string;
	cover?: ImageMetadata;
}

interface CardEntryLike {
	data: {
		title: string;
		cover?: ImageMetadata;
		cardImage?: string;
		thumbnail?: string;
		imageAlt?: string;
	};
}

const publicImagesRoot = join(process.cwd(), 'public/images');
const publicImageCache = new Map<string, string | undefined>();
const imageExtensions = new Set(['.avif', '.jpeg', '.jpg', '.png', '.webp']);

function resolveImageSource(image: string | ImageMetadata | undefined) {
	if (!image) return undefined;
	if (typeof image !== 'string') return image;
	return resolveGameAsset(image) ?? image;
}

function slugFromHref(href?: string) {
	if (!href) return undefined;
	const slug = href.replace(/\/+$/, '').split('/').pop();
	return slug && slug !== 'mortal-shell-ii' ? slug : undefined;
}

function autoPublicImage(href?: string) {
	const slug = slugFromHref(href);
	if (!slug) return undefined;
	if (publicImageCache.has(slug)) return publicImageCache.get(slug);

	let selected: string | undefined;
	try {
		const directory = join(publicImagesRoot, slug);
		const files = readdirSync(directory)
			.filter((filename) => imageExtensions.has(filename.slice(filename.lastIndexOf('.')).toLowerCase()))
			.sort((a, b) => a.localeCompare(b));
		const preferred = files.find((filename) => /arena|cover|location|acquired|pickup|overview/i.test(filename));
		selected = preferred ?? files[0];
	} catch {
		selected = undefined;
	}

	const result = selected ? `/images/${slug}/${selected}` : undefined;
	publicImageCache.set(slug, result);
	return result;
}

/** Resolve the smallest useful image contract for any content entry card. */
export function resolveCardImage({ href, title, image, imageAlt, cover }: CardImageInput): CardImage | undefined {
	const configuredImage = href ? game.portal?.guideVisuals?.[href]?.image : undefined;
	const source = resolveImageSource(image) ?? cover ?? resolveImageSource(configuredImage) ?? autoPublicImage(href);
	if (!source) return undefined;
	return { src: source, alt: imageAlt ?? (href ? game.portal?.guideVisuals?.[href]?.alt : undefined) ?? '' };
}

/** Resolve the same card image contract for any docs entry. */
export function resolveEntryCardImage(entry: CardEntryLike, href: string) {
	return resolveCardImage({
		href,
		title: entry.data.title,
		image: entry.data.cardImage ?? entry.data.thumbnail,
		imageAlt: entry.data.imageAlt,
		cover: entry.data.cover,
	});
}

/** Stable partition: real-image cards first, editorial order preserved in each group. */
export function sortCardsByImage<T>(items: readonly T[], resolve: (item: T) => CardImage | undefined): T[] {
	return [...items].sort((a, b) => Number(!resolve(a)) - Number(!resolve(b)));
}
