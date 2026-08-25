export type CardDensity = 'single' | 'pair' | 'balanced' | 'dense' | 'odd';

export function cardDensity(count: number, columns: number): CardDensity {
	if (count <= 1) return 'single';
	if (count === 2) return 'pair';
	if (count > columns && count % columns === 1) return 'odd';
	if (count >= columns * 2) return 'dense';
	return 'balanced';
}

export function hasFeatureLast(count: number, columns: number): boolean {
	return count === 1 || (count > columns && count % columns === 1);
}
