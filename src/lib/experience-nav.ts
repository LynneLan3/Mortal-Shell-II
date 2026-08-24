/**
 * Unified Game Experience navigation builder.
 *
 * All Experience pages (Routes Index, Guides Index, Route Hubs, formal
 * Homepage) share this single source for the top bar and footer:
 *
 *   Home / Routes / Guides / About   (+ Search rendered by GameShell)
 *
 * Home points at the formal hub homepage (`/{hubPath}/`) and About at
 * `/{hubPath}/#about`. `activeMatch` lets Route Hub pages keep "Routes"
 * highlighted even though the current URL is `/routes/{id}/`.
 */
import type { NavItem, FooterLink } from '../components/experience/GameShell.astro';
import { game } from '../config/game';
import { mapRoutes } from '../data/map-routes';
import { hubHref, pageHref } from './paths';
import { ui } from './ui';

export interface ExperienceNav {
	nav: NavItem[];
	footerLinks: FooterLink[];
	homeHref: string;
	hotGuidesHref: string;
	routesHref: string;
	guidesHref: string;
	bossesHref: string;
	mapHref: string;
	aboutHref: string;
}

export function experienceNav(): ExperienceNav {
	const t = ui();
	const hub = game.hubPath;
	const homeHref = hubHref(hub);
	const hotGuidesHref = `${homeHref}#hot-guides`;
	const byGoalHref = `${homeHref}#by-goal`;
	const routesHref = pageHref(hub, 'routes');
	const guidesHref = pageHref(hub, 'guides');
	const bossesHref = pageHref(hub, 'bosses');
	const mapHref = pageHref(hub, 'map');
	const aboutHref = `${homeHref}#about`;
	const byGoalSubpageMatches = [
		...(game.routes ?? []).map((route) => pageHref(hub, `routes/${route.id}`)),
		...mapRoutes.map((route) => pageHref(hub, `routes/${route.id}`)),
	];

	const nav: NavItem[] = [
		{ label: t.homeNav, href: homeHref },
		{ label: t.hotGuidesNav, href: hotGuidesHref },
		{ label: t.routesNav, href: byGoalHref, activeMatch: byGoalSubpageMatches },
		{ label: t.guidesNav, href: guidesHref },
		{ label: 'Bosses', href: bossesHref, activeMatch: [bossesHref] },
		{ label: 'Routes', href: routesHref, activeMatch: [] },
		{ label: 'Map', href: mapHref, activeMatch: [mapHref] },
	];
	const footerLinks = [...nav, { label: t.aboutNav, href: aboutHref }];

	return {
		nav,
		footerLinks,
		homeHref,
		hotGuidesHref,
		routesHref,
		guidesHref,
		bossesHref,
		mapHref,
		aboutHref,
	};
}
