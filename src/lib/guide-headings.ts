export interface GuideHeading {
	id: string;
	text: string;
}

const REMOVE_RE = /[^\p{L}\p{N}\s._/-]/gu;

function plainHeadingText(raw: string): string {
	return raw
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[`*_~]/g, '')
		.trim();
}

export function slugifyHeading(text: string): string {
	return text
		.toLowerCase()
		.replace(REMOVE_RE, '')
		.replace(/ /g, '-');
}

export function topLevelHeadings(markdown: string): GuideHeading[] {
	const lines = markdown.split(/\r?\n/);
	const out: GuideHeading[] = [];
	const occurrences = new Map<string, number>();
	let inFence = false;

	for (const line of lines) {
		if (/^\s*(```|~~~)/.test(line)) {
			inFence = !inFence;
			continue;
		}
		if (inFence) continue;

		const match = line.match(/^##\s+(.+?)\s*$/);
		if (!match) continue;

		const text = plainHeadingText(match[1]);
		if (!text) continue;

		let id = slugifyHeading(text);
		const count = occurrences.get(id) ?? 0;
		if (count > 0) {
			occurrences.set(id, count + 1);
			id = `${id}-${count + 1}`;
		} else {
			occurrences.set(id, 1);
		}
		out.push({ id, text });
	}

	return out;
}
