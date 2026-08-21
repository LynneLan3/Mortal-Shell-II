import type { CollectionEntry } from 'astro:content';
import { game, type GameRoute } from '../config/game';
import { findRoutesForPage } from './routes';
import { topLevelHeadings, type GuideHeading } from './guide-headings';

export interface GuideContent {
	headings: GuideHeading[];
	lastUpdated?: Date;
	quickAnswer?: string;
	currentRoutes: GameRoute[];
	primaryRoute?: GameRoute;
	pageId: string;
}

export async function loadGuideContent(entry: CollectionEntry<'docs'>): Promise<GuideContent> {
	const pageId = entry.id.split('/').pop() ?? entry.id;
	const currentRoutes = findRoutesForPage(pageId, game.routes ?? []);
	const lastUpdated = entry.data.lastUpdated instanceof Date ? entry.data.lastUpdated : undefined;

	return {
		headings: topLevelHeadings(entry.body ?? ''),
		lastUpdated,
		quickAnswer: entry.data.quickAnswer,
		currentRoutes,
		primaryRoute: currentRoutes[0],
		pageId,
	};
}
