import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const IMAGE_DIRS = [
  'public/images'
];

const QUALITY = 80;
const MAX_WIDTH = 1920;

async function getFiles(dir, files = []) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      await getFiles(fullPath, files);
    } else {
      const ext = extname(entry).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const stats = await stat(filePath);
  const originalSize = stats.size;

  // Skip if already optimized (less than 200KB)
  if (originalSize < 200 * 1024) {
    console.log(`⏭️  Skipping ${filePath} (already optimized: ${(originalSize / 1024).toFixed(2)} KB)`);
    return;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too large
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Optimize based on format
    if (ext === '.png') {
      await image
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    } else {
      await image
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(filePath + '.tmp');
    }

    // Check new size
    const newStats = await stat(filePath + '.tmp');
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);

    // Only replace if smaller
    if (newSize < originalSize) {
      await sharp(filePath + '.tmp').toFile(filePath);
      console.log(`✅ Optimized ${filePath}: ${(originalSize / 1024).toFixed(2)} KB → ${(newSize / 1024).toFixed(2)} KB (${reduction}% reduction)`);
    } else {
      console.log(`⏭️  Skipping ${filePath} (optimization didn't reduce size)`);
    }

    // Clean up temp file
    const fs = await import('fs/promises');
    await fs.unlink(filePath + '.tmp').catch(() => {});

  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  for (const dir of IMAGE_DIRS) {
    console.log(`📁 Scanning ${dir}...`);
    const files = await getFiles(dir);
    console.log(`Found ${files.length} images\n`);

    for (const file of files) {
      await optimizeImage(file);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

main().catch(console.error);
