import { toolkitItems } from '../data/toolkit-items';

export const TOOLKIT_PROGRESS_VERSION = 5;
export const TOOLKIT_PROGRESS_STORAGE_KEY = 'ms2-toolkit-progress-v1';

export interface ToolkitProgressState {
	version: number;
	completedIds: string[];
	achievementProgress: Record<string, number>;
	activeRouteId: string;
	activeCategory: string;
	hideCompleted: boolean;
	search: string;
	completionFilter: string;
	completionCategory: string;
	completionHideCompleted: boolean;
}

const validToolkitIds = new Set(toolkitItems.map((item) => item.id));

function isRecord(value: unknown): value is Record<string, unknown> {
	return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function stringValue(value: unknown, fallback = ''): string {
	return typeof value === 'string' ? value : fallback;
}

function booleanValue(value: unknown, fallback = false): boolean {
	return typeof value === 'boolean' ? value : fallback;
}

function normalizeAchievementProgress(value: unknown): Record<string, number> {
	if (!isRecord(value)) return {};
	return Object.fromEntries(
		Object.entries(value)
			.filter(([, progress]) => typeof progress === 'number' && Number.isFinite(progress))
			.map(([id, progress]) => [id, Math.max(0, progress as number)]),
	);
}

export function normalizeToolkitProgressState(value: unknown): ToolkitProgressState {
	const source = Array.isArray(value) ? { completedIds: value } : isRecord(value) ? value : {};
	const completedIds = Array.isArray(source.completedIds)
		? [...new Set(source.completedIds.filter((id): id is string => typeof id === 'string' && validToolkitIds.has(id)))]
		: [];

	return {
		version: TOOLKIT_PROGRESS_VERSION,
		completedIds,
		achievementProgress: normalizeAchievementProgress(source.achievementProgress),
		activeRouteId: stringValue(source.activeRouteId),
		activeCategory: stringValue(source.activeCategory, 'all'),
		hideCompleted: booleanValue(source.hideCompleted),
		search: stringValue(source.search),
		completionFilter: stringValue(source.completionFilter, 'all'),
		completionCategory: stringValue(source.completionCategory, 'all'),
		completionHideCompleted: booleanValue(source.completionHideCompleted),
	};
}

export function readToolkitProgressState(
	storage: Storage,
	key = TOOLKIT_PROGRESS_STORAGE_KEY,
): ToolkitProgressState {
	try {
		const raw = storage.getItem(key);
		return normalizeToolkitProgressState(raw ? JSON.parse(raw) : undefined);
	} catch {
		return normalizeToolkitProgressState(undefined);
	}
}

export function writeToolkitProgressState(
	state: ToolkitProgressState,
	storage: Storage,
	key = TOOLKIT_PROGRESS_STORAGE_KEY,
): ToolkitProgressState {
	const normalized = normalizeToolkitProgressState(state);
	try {
		storage.setItem(key, JSON.stringify(normalized));
	} catch {
		// Browser-local completion is best effort.
	}
	return normalized;
}

export function mergeToolkitProgressState(
	changes: Partial<ToolkitProgressState>,
	storage: Storage,
	key = TOOLKIT_PROGRESS_STORAGE_KEY,
): ToolkitProgressState {
	return writeToolkitProgressState({ ...readToolkitProgressState(storage, key), ...changes }, storage, key);
}

export function getCanonicalMapProgress(completedIds: Iterable<string>) {
	const completed = new Set(completedIds);
	const total = toolkitItems.reduce((count, item) => count + (item.mapMarkerId ? 1 : 0), 0);
	const done = toolkitItems.reduce(
		(count, item) => count + (item.mapMarkerId && completed.has(item.id) ? 1 : 0),
		0,
	);
	return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}
