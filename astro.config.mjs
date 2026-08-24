// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { game } from './src/config/game.ts';
import { sidebarFromCategories } from './src/config/sidebar.ts';
import { categoryHref } from './src/lib/category-url.ts';

function isCategoryLandingUrl(page) {
	const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
	return game.categories.some((category) => {
		const href = categoryHref(category.id).replace(/\/+$/, '') || '/';
		return path === href;
	});
}

function isNoindexUtilityUrl(page) {
	const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
	const hub = game.hubPath.replace(/\/+$/, '') || '/';
	return path === `${hub}/guides` || path === `${hub}/routes` || path.startsWith(`${hub}/routes/`);
}

// https://astro.build/config
export default defineConfig({
	site: game.siteUrl,
	trailingSlash: 'always',
	webAnalytics: {
		enabled: true,
	},
	integrations: [
		starlight({
			title: game.shortName,
			description: game.description,
			lastUpdated: true,
			...(game.logoImage
				? { logo: { src: `./src/assets/${game.logoImage}`, alt: game.name } }
				: {}),
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/experience.css',
				'./src/styles/experience-guide.css',
				'./src/styles/completion.css',
			],
			head: [
				{
					tag: 'style',
					content: `:root { --game-accent: ${game.accentColor}; }`,
				},
			],
			sidebar: sidebarFromCategories(),
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
				Footer: './src/components/overrides/Footer.astro',
				SiteTitle: './src/components/overrides/SiteTitle.astro',
				Header: './src/components/overrides/Header.astro',
				Head: './src/components/overrides/Head.astro',
				Sidebar: './src/components/overrides/Sidebar.astro',
				PageFrame: './src/components/overrides/PageFrame.astro',
				PageSidebar: './src/components/overrides/PageSidebar.astro',
				MarkdownContent: './src/components/overrides/MarkdownContent.astro',
				TwoColumnContent: './src/components/overrides/TwoColumnContent.astro',
			},
		}),
		sitemap({
			filter: (page) =>
				!isCategoryLandingUrl(page) &&
				!isNoindexUtilityUrl(page) &&
				(new URL(page).pathname.replace(/\/+$/, '') || '/') !== '/',
		}),
	],
});
