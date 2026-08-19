import { game, type GameRoute, type GuideEditorial } from '../config/game';
import type { GuideEntry } from './guides';

export function guideSlugSuffix(entry: GuideEntry): string {
	return entry.id.split('/').pop() ?? '';
}

export function routeForGuide(entry: GuideEntry): GameRoute | undefined {
	const suffix = guideSlugSuffix(entry);
	return game.routes.find((r) => r.guides.includes(suffix));
}

export function editorialForGuide(entry: GuideEntry): GuideEditorial | undefined {
	const route = routeForGuide(entry);
	if (!route?.guideEditorial) return undefined;
	const suffix = guideSlugSuffix(entry);
	return route.guideEditorial[suffix];
}

export function routeById(id: string): GameRoute | undefined {
	return game.routes.find((r) => r.id === id);
}

export function nextRoute(route: GameRoute): GameRoute | undefined {
	const idx = game.routes.indexOf(route);
	return idx >= 0 && idx < game.routes.length - 1 ? game.routes[idx + 1] : undefined;
}

export function prevRoute(route: GameRoute): GameRoute | undefined {
	const idx = game.routes.indexOf(route);
	return idx > 0 ? game.routes[idx - 1] : undefined;
}

export interface RouteNeighbors {
	next: string[];
	prev: string | undefined;
}

export function routeNeighborsForGuide(entry: GuideEntry): RouteNeighbors | undefined {
	const route = routeForGuide(entry);
	if (!route) return undefined;
	const suffix = guideSlugSuffix(entry);
	const idx = route.guides.indexOf(suffix);
	if (idx < 0) return undefined;
	const next = route.guides.slice(idx + 1, idx + 3);
	const prev = idx > 0 ? route.guides[idx - 1] : undefined;
	return { next, prev };
}

export function guideHrefFromSlug(slug: string): string {
	return `/mortal-shell-ii/${slug}/`;
}
