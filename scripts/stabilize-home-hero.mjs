import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const sourcePath = join(process.cwd(), 'src/assets/experience/hero-main.jpg');
const outputDir = join(process.cwd(), 'dist/images/site');
const homepagePath = join(process.cwd(), 'dist/mortal-shell-ii/index.html');
const widths = [1280, 1920, 2560];
const quality = 72;
const alt = 'Official Steam artwork for Mortal Shell II';

await mkdir(outputDir, { recursive: true });

const metadata = await sharp(sourcePath).metadata();
if (!metadata.width || !metadata.height) {
  throw new Error('Cannot read Mortal Shell II hero dimensions.');
}

for (const width of widths) {
  const outputPath = join(outputDir, `ms2-hero-${width}.webp`);
  await sharp(sourcePath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(outputPath);
}

const heroWidth = Math.min(2560, metadata.width);
const heroHeight = Math.round((heroWidth / metadata.width) * metadata.height);
const html = await readFile(homepagePath, 'utf8');
const escapedAlt = alt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const heroPattern = new RegExp(`<img\\b(?=[^>]*\\balt=["']${escapedAlt}["'])[^>]*>`, 'i');
const existingHero = html.match(heroPattern)?.[0];

if (!existingHero) {
  throw new Error(`Cannot find homepage hero image with alt: ${alt}`);
}

const style = existingHero.match(/\bstyle=(['"])(.*?)\1/i)?.[2];
const className = existingHero.match(/\bclass=(['"])(.*?)\1/i)?.[2];
const optionalAttrs = [
  className ? `class="${className}"` : '',
  style ? `style="${style}"` : '',
].filter(Boolean).join(' ');

const stableHero = `<img src="/images/site/ms2-hero-1920.webp" srcset="/images/site/ms2-hero-1280.webp 1280w, /images/site/ms2-hero-1920.webp 1920w, /images/site/ms2-hero-2560.webp 2560w" sizes="100vw" alt="${alt}" width="${heroWidth}" height="${heroHeight}" loading="eager" fetchpriority="high" decoding="async" ${optionalAttrs}>`;
const rewritten = html.replace(heroPattern, stableHero);
await writeFile(homepagePath, rewritten, 'utf8');

const sizes = {};
for (const width of widths) {
  const file = join(outputDir, `ms2-hero-${width}.webp`);
  sizes[width] = (await stat(file)).size;
}

console.log('Stable MS2 homepage hero generated and wired:', sizes);
