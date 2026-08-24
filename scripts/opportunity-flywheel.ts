import { readFile, writeFile } from 'node:fs/promises';
import { game } from '../src/config/game';
import { mapMarkers } from '../src/data/map-markers';
import { mapRegions } from '../src/data/map-regions';
import { mapRoutes } from '../src/data/map-routes';
import {
	classifyAndLog,
	type OpportunityCoverage,
	type OpportunityInput,
	type PageInventoryEntry,
} from '../src/lib/opportunity-flywheel';

interface InputDocument {
	opportunities: readonly OpportunityInput[];
	pageInventory?: readonly PageInventoryEntry[];
	coverage?: OpportunityCoverage;
}

function parseArgs(argv: readonly string[]) {
	const input = argv.find((arg) => arg.startsWith('--input='))?.slice('--input='.length);
	const output = argv.find((arg) => arg.startsWith('--output='))?.slice('--output='.length);
	const now = argv.find((arg) => arg.startsWith('--now='))?.slice('--now='.length);
	if (!input) throw new Error('Usage: npm run flywheel -- --input=opportunities.json [--output=action-log.json] [--now=ISO]');
	return { input, output, now: now ? new Date(now) : new Date() };
}

function addInventory(entries: Map<string, PageInventoryEntry>, entry: PageInventoryEntry) {
	const url = entry.url.endsWith('/') ? entry.url : `${entry.url}/`;
	if (!entries.has(url)) entries.set(url, { ...entry, url });
}

function defaultPageInventory(): PageInventoryEntry[] {
	const entries = new Map<string, PageInventoryEntry>();
	addInventory(entries, { url: game.hubPath, title: game.hubTitle ?? game.name, kind: 'hub' });
	for (const route of game.routes ?? []) {
		addInventory(entries, { url: route.href, title: route.title, kind: 'route', aliases: [route.id] });
		for (const page of route.pages) addInventory(entries, { url: page.href, title: page.title, kind: 'guide' });
	}
	const portal = game.portal;
	for (const item of portal?.startHere ?? []) addInventory(entries, { url: item.href, title: item.title, kind: 'guide' });
	for (const item of portal?.hotGuides ?? []) addInventory(entries, { url: item.href, title: item.title, kind: 'guide' });
	for (const item of portal?.authorityHubs ?? []) addInventory(entries, { url: item.href, title: item.label, kind: item.badge === 'Map' ? 'map' : 'hub' });
	for (const item of portal?.popularQuestions ?? []) addInventory(entries, { url: item.href, title: item.label, kind: 'faq' });
	for (const item of portal?.recentUpdates ?? []) addInventory(entries, { url: item.href, title: item.title, kind: 'guide' });
	for (const region of mapRegions) addInventory(entries, { url: region.href, title: region.name, kind: 'region', aliases: [region.id] });
	addInventory(entries, { url: '/mortal-shell-ii/map/', title: 'Interactive Map', kind: 'map', aliases: ['map', 'interactive map'] });
	return [...entries.values()];
}

function defaultCoverage(): OpportunityCoverage {
	return {
		markers: mapMarkers.map((marker) => ({ id: marker.id, name: marker.name, regionId: marker.region.includes('Mammon') ? 'mammon' : 'fainweald', guideUrl: marker.guideUrl })),
		routes: mapRoutes.map((route) => ({ id: route.id, name: route.name, regionId: route.region.toLowerCase().includes('mammon') ? 'mammon' : 'fainweald', markerIds: route.waypoints.map((waypoint) => waypoint.markerId), plannerUrl: route.plannerHref })),
		regions: mapRegions.map((region) => ({ id: region.id, name: region.name, url: region.href })),
	};
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const raw = JSON.parse(await readFile(args.input, 'utf8')) as InputDocument | readonly OpportunityInput[];
	const document: InputDocument = Array.isArray(raw)
		? { opportunities: raw as readonly OpportunityInput[] }
		: raw as InputDocument;
	if (!Array.isArray(document.opportunities) || document.opportunities.length === 0) throw new Error('Input must contain a non-empty opportunities array.');
	const inventory = document.pageInventory?.length ? document.pageInventory : defaultPageInventory();
	const coverage = document.coverage ?? defaultCoverage();
	const entries = classifyAndLog(document.opportunities, inventory, coverage, args.now);
	const output = JSON.stringify({ schemaVersion: 1, generatedAt: args.now.toISOString(), entries }, null, 2);
	if (args.output) {
		await writeFile(args.output, `${output}\n`, 'utf8');
		console.log(`action log: ${args.output}`);
	} else {
		console.log(output);
	}
	console.error(`classified: ${entries.length} opportunities`);
}

try {
	await main();
} catch (error) {
	console.error(`Error: ${error instanceof Error ? error.message : error}`);
	process.exitCode = 1;
}
