export type BossCardVariant = 'compact' | 'standard' | 'feature' | 'wide';
export type BossRowType = 'pair' | 'trio' | 'feature-support' | 'wide';
export type BossContentWeight = 'light' | 'medium' | 'heavy';

export interface BossLayoutInput {
	hasImage: boolean;
	descriptionLength: number;
	areaLength: number;
	rewardLength: number;
	featured?: boolean;
}

export interface BossLayoutCard<T> {
	value: T;
	variant: BossCardVariant;
	mediaSide: 'left' | 'right';
}

export interface BossLayoutRow<T> {
	type: BossRowType;
	cards: readonly BossLayoutCard<T>[];
}

export function bossContentWeight(item: BossLayoutInput): BossContentWeight {
	let score = 0;
	if (item.descriptionLength >= 145) score += 2;
	else if (item.descriptionLength >= 105) score += 1;
	if (item.areaLength >= 34) score += 1;
	if (item.rewardLength >= 34) score += 1;
	if (item.hasImage) score += 1;
	if (item.featured) score += 2;

	if (score >= 4) return 'heavy';
	if (score >= 2) return 'medium';
	return 'light';
}

function isFeatureCandidate(item: BossLayoutInput) {
	return Boolean(item.featured) || (item.hasImage && bossContentWeight(item) === 'heavy');
}

function variantFor(item: BossLayoutInput): BossCardVariant {
	if (isFeatureCandidate(item)) return 'feature';
	return bossContentWeight(item) === 'light' ? 'compact' : 'standard';
}

function rowCards<T extends BossLayoutInput>(items: readonly T[], offset: number, type: BossRowType): BossLayoutRow<T> {
	const cards = items.map((value, index) => {
		const absoluteIndex = offset + index;
		const variant = type === 'wide' ? 'wide' : type === 'feature-support' ? (isFeatureCandidate(value) ? 'feature' : 'standard') : variantFor(value);
		return {
			value,
			variant,
			mediaSide: variant === 'wide' ? (absoluteIndex % 2 === 0 ? 'right' : 'left') : (absoluteIndex % 2 === 0 ? 'left' : 'right'),
		};
	});
	return { type, cards };
}

function pairType<T extends BossLayoutInput>(items: readonly T[]) {
	const candidates = items.filter(isFeatureCandidate).length;
	const hasHeavySupport = items.some((item) => !isFeatureCandidate(item) && bossContentWeight(item) === 'heavy');
	return candidates === 1 && !hasHeavySupport ? 'feature-support' as const : 'pair' as const;
}

/**
 * Build explicit reading-order rows for a Boss section. The planner only
 * chooses composition; the source array remains in progression order.
 */
export function planBossRows<T extends BossLayoutInput>(items: readonly T[]): BossLayoutRow<T>[] {
	if (items.length === 0) return [];
	if (items.length === 1) return [rowCards(items, 0, 'wide')];
	if (items.length === 2) return [rowCards(items, 0, pairType(items))];

	const rows: BossLayoutRow<T>[] = [];
	let offset = 0;
	const pairCount = items.length % 3 === 1 ? Math.floor((items.length - 3) / 2) : items.length % 3 === 2 ? 1 : 0;
	for (let index = 0; index < pairCount; index += 1) {
		const pair = items.slice(offset, offset + 2);
		rows.push(rowCards(pair, offset, pairType(pair)));
		offset += 2;
	}
	while (offset < items.length) {
		const remaining = items.length - offset;
		const size = remaining === 2 ? 2 : Math.min(3, remaining);
		const chunk = items.slice(offset, offset + size);
		rows.push(rowCards(chunk, offset, size === 2 ? pairType(chunk) : 'trio'));
		offset += size;
	}
	return rows;
}
