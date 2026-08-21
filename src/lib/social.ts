import { canonicalizePath } from './paths';

export interface SocialImageRef {
	asset: string;
	alt: string;
}

export interface SocialImageLookup {
	pathname: string;
	pages?: readonly { slug: string; socialImage?: SocialImageRef }[];
	defaultImage?: SocialImageRef;
}

export function resolveSocialImage(input: SocialImageLookup): SocialImageRef | undefined {
	const path = canonicalizePath(input.pathname);
	const page = input.pages?.find((entry) => canonicalizePath(`/${entry.slug}/`) === path);
	if (page?.socialImage) return page.socialImage;
	return input.defaultImage;
}

export function toAbsoluteUrl(src: string, siteUrl: string): string {
	if (/^https?:\/\//i.test(src)) return src;
	const origin = new URL(siteUrl);
	return new URL(src, origin).href;
}
