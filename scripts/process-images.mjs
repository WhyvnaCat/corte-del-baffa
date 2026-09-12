// Generates responsive WebP + JPEG derivatives for the source photos extracted
// from the sales brochure. Re-run with `npm run images:build` after adding new
// source files to scripts/source-images/<category>/<name>.jpg
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "scripts", "source-images");
const OUT_DIR = path.join(ROOT, "public", "images");

const WIDTHS = [480, 768, 1200, 1600, 2200];
const CATEGORIES = ["hero", "exterior", "interior", "view", "garden", "details"];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function processFile(category, file) {
  const srcPath = path.join(SRC_DIR, category, file);
  const name = path.parse(file).name;
  const outCatDir = path.join(OUT_DIR, category);
  await ensureDir(outCatDir);

  const image = sharp(srcPath);
  const meta = await image.metadata();
  const maxWidth = meta.width ?? 2200;

  const widths = WIDTHS.filter((w) => w <= maxWidth);
  if (widths.length === 0 || widths[widths.length - 1] !== maxWidth) {
    widths.push(Math.min(maxWidth, WIDTHS[WIDTHS.length - 1]));
  }

  for (const width of widths) {
    const webpPath = path.join(outCatDir, `${name}-${width}.webp`);
    const jpgPath = path.join(outCatDir, `${name}-${width}.jpg`);
    await sharp(srcPath).resize({ width }).webp({ quality: 78 }).toFile(webpPath);
    await sharp(srcPath).resize({ width }).jpeg({ quality: 80, mozjpeg: true }).toFile(jpgPath);
  }

  console.log(`processed ${category}/${name}: ${widths.join(", ")}px`);
}

async function main() {
  await ensureDir(SRC_DIR);
  for (const category of CATEGORIES) {
    const catDir = path.join(SRC_DIR, category);
    await ensureDir(catDir);
    const files = (await fs.readdir(catDir)).filter((f) =>
      /\.(jpe?g|png)$/i.test(f)
    );
    for (const file of files) {
      await processFile(category, file);
    }
  }
  console.log("Done. Responsive images written to public/images/<category>/.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
