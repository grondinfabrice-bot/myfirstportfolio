import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const originalsDir = path.join(projectRoot, "public", "images", "projects", "originals");
const optimizedDir = path.join(projectRoot, "public", "images", "projects", "optimized");

const supportedExtensions = new Set([".png", ".jpg", ".jpeg"]);
const outputWidth = 1600;
const outputHeight = 1000;
const quality = 80;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(originalsDir, { recursive: true });
  await fs.mkdir(optimizedDir, { recursive: true });

  const entries = await fs.readdir(originalsDir, { withFileTypes: true });
  const images = entries
    .filter((entry) => entry.isFile())
    .filter((entry) => supportedExtensions.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (images.length === 0) {
    const gitkeepPath = path.join(originalsDir, ".gitkeep");

    if (!(await pathExists(gitkeepPath))) {
      await fs.writeFile(gitkeepPath, "");
    }

    console.log("Aucune image source compatible trouvee.");
    console.log(`Ajoute tes .png, .jpg ou .jpeg dans ${path.relative(projectRoot, originalsDir)}/`);
    return;
  }

  const converted = [];

  for (const image of images) {
    const inputPath = path.join(originalsDir, image.name);
    const outputName = `${path.parse(image.name).name}.webp`;
    const outputPath = path.join(optimizedDir, outputName);

    await sharp(inputPath)
      .resize(outputWidth, outputHeight, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality })
      .toFile(outputPath);

    const [inputStats, outputStats] = await Promise.all([fs.stat(inputPath), fs.stat(outputPath)]);

    converted.push({
      source: image.name,
      output: outputName,
      sourceSize: inputStats.size,
      outputSize: outputStats.size,
    });
  }

  console.log(`Images converties en WebP (${outputWidth}x${outputHeight}, qualite ${quality})`);
  console.log("");

  for (const item of converted) {
    console.log(
      `- ${item.source} -> ${item.output} (${formatBytes(item.sourceSize)} -> ${formatBytes(item.outputSize)})`,
    );
  }

  console.log("");
  console.log(`Sortie : ${path.relative(projectRoot, optimizedDir)}/`);
}

main().catch((error) => {
  console.error("Erreur pendant la conversion des images :");
  console.error(error);
  process.exitCode = 1;
});
