import assert from 'node:assert/strict';
import test from 'node:test';
import {
	getCanonicalMapProgress,
	mergeToolkitProgressState,
	normalizeToolkitProgressState,
	TOOLKIT_PROGRESS_VERSION,
} from '../../src/lib/toolkit-progress';
import { toolkitItems } from '../../src/data/toolkit-items';

class MemoryStorage implements Storage {
	private values = new Map<string, string>();

	get length() { return this.values.size; }
	clear() { this.values.clear(); }
	getItem(key: string) { return this.values.get(key) ?? null; }
	key(index: number) { return [...this.values.keys()][index] ?? null; }
	removeItem(key: string) { this.values.delete(key); }
	setItem(key: string, value: string) { this.values.set(key, value); }
}

test('normalizes legacy array state and preserves known completion fields', () => {
	const knownId = toolkitItems[0].id;
	const state = normalizeToolkitProgressState([knownId, 'removed-item']);
	assert.equal(state.version, TOOLKIT_PROGRESS_VERSION);
	assert.deepEqual(state.completedIds, [knownId]);
	assert.deepEqual(state.achievementProgress, {});
});

test('merges one changed field without deleting other toolkit state', () => {
	const storage = new MemoryStorage();
	const initial = normalizeToolkitProgressState({
		completedIds: [toolkitItems[0].id],
		achievementProgress: { 'achievement-counter': 2 },
		activeRouteId: 'start-launch',
		completionCategory: 'Achievements',
	});
	storage.setItem('ms2-toolkit-progress-v1', JSON.stringify(initial));
	const merged = mergeToolkitProgressState({ completedIds: [toolkitItems[1].id] }, storage);

	assert.deepEqual(merged.completedIds, [toolkitItems[1].id]);
	assert.deepEqual(merged.achievementProgress, { 'achievement-counter': 2 });
	assert.equal(merged.activeRouteId, 'start-launch');
	assert.equal(merged.completionCategory, 'Achievements');
	assert.equal(merged.version, TOOLKIT_PROGRESS_VERSION);
});

test('map progress counts only mapped objectives against the global mapped denominator', () => {
	const mapped = toolkitItems.find((item) => item.mapMarkerId);
	assert.ok(mapped);
	const progress = getCanonicalMapProgress([mapped.id, toolkitItems[0].id]);

	assert.equal(progress.total, toolkitItems.filter((item) => item.mapMarkerId).length);
	assert.equal(progress.done, 1 + (toolkitItems[0].mapMarkerId && toolkitItems[0].id !== mapped.id ? 1 : 0));
});
