import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdir, stat } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageDir = join(__dirname, "src/assets/webassests");

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath).webp({ quality: 80, effort: 6 }).toFile(outputPath);
    console.log(`✅ Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir);

    for (const file of files) {
      const fullPath = join(dir, file);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        await processDirectory(fullPath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
        await convertToWebP(fullPath, outputPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

console.log("🚀 Starting image conversion to WebP...\n");
processDirectory(imageDir)
  .then(() => console.log("\n✨ Conversion complete!"))
  .catch(console.error);
