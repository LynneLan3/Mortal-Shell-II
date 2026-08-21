import { isCategoryLandingPath } from './category-url';

interface GuideEntryLike {
	id: string;
	data: { template?: string };
}

export function isExperienceHomepage(entry: GuideEntryLike): boolean {
	return entry.data.template === 'splash';
}

export function isExperienceGuide(entry: GuideEntryLike, pathname: string): boolean {
	if (isExperienceHomepage(entry)) return false;
	if (entry.id === '404' || entry.id.endsWith('/404')) return false;
	if (isCategoryLandingPath(pathname)) return false;
	return true;
}
