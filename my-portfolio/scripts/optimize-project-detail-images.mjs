/**
 * 压缩 public/images/project-details 下的资源：
 * - JPEG：限制长边 ≤2048，mozjpeg q85 覆盖写回
 * - PNG：转 WebP（q86，支持透明），删除原 PNG，并同步替换 data/project-detail-manifest.ts 中的文件名
 *
 * 使用：npm run optimize:detail-images
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const baseDir = path.join(root, "public", "images", "project-details");
const manifestPath = path.join(root, "data", "project-detail-manifest.ts");

async function walkFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...(await walkFiles(p)));
    else out.push(p);
  }
  return out;
}

async function main() {
  const files = await walkFiles(baseDir);
  const pngRenames = [];

  for (const abs of files) {
    const ext = path.extname(abs).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") continue;

    const input = await fs.readFile(abs);

    if (ext === ".png") {
      const webpPath = abs.replace(/\.png$/i, ".webp");
      await sharp(input)
        .resize({
          width: 2048,
          height: 2048,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 86, effort: 6, alphaQuality: 90 })
        .toFile(webpPath);
      await fs.unlink(abs);
      pngRenames.push({
        from: path.basename(abs),
        to: path.basename(webpPath),
      });
    } else {
      const outBuf = await sharp(input)
        .resize({
          width: 2048,
          height: 2048,
          fit: "inside",
          withoutEnlargement: true,
        })
        .jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: "4:4:4" })
        .toBuffer();
      await fs.writeFile(abs, outBuf);
    }
  }

  let manifest = await fs.readFile(manifestPath, "utf8");
  for (const { from, to } of pngRenames) {
    const needle = `"${from}"`;
    if (!manifest.includes(needle)) {
      throw new Error(`manifest 中未找到引用：${needle}（请检查文件名是否一致）`);
    }
    manifest = manifest.split(needle).join(`"${to}"`);
  }
  await fs.writeFile(manifestPath, manifest);

  const after = await walkFiles(baseDir);
  let bytes = 0;
  for (const f of after) {
    const st = await fs.stat(f);
    bytes += st.size;
  }
  return {
    convertedPng: pngRenames.length,
    jpegTouched: files.filter((f) => /\.jpe?g$/i.test(path.extname(f))).length,
    totalFilesAfter: after.length,
    totalBytesAfter: bytes,
  };
}

main()
  .then((r) => {
    process.stdout.write(JSON.stringify(r, null, 2) + "\n");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
