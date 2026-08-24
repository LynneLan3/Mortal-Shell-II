import type { GamePortalConfig } from '../config/game';

export type HubProminence = 'hot' | 'popular';

function canonicalPath(value: string) {
	const path = value.replace(/^\/+|\/+$/g, '');
	return `/${path}/`;
}

/**
 * Uses only existing portal ordering signals. This intentionally does not
 * infer popularity from card position, completion state, or model judgment.
 */
export function getPortalProminence(portal: GamePortalConfig | undefined) {
	const hot = new Set((portal?.hotGuides ?? []).map((item) => canonicalPath(item.href)));
	const popular = new Set((portal?.featuredOrder ?? []).map(canonicalPath));
	return { hot, popular };
}

export function prominenceForHref(
	href: string,
	signals: ReturnType<typeof getPortalProminence>,
): HubProminence | undefined {
	const path = canonicalPath(href);
	if (signals.hot.has(path)) return 'hot';
	if (signals.popular.has(path)) return 'popular';
	return undefined;
}
