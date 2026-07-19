const Jimp = require('jimp').Jimp;
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'previews');

async function processFile(filePath) {
  try {
    const image = await Jimp.read(filePath);
    // Scale the image to fit within the target box while preserving aspect
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    const ratio = Math.min(1200 / w, 700 / h);
    const newW = Math.max(1, Math.round(w * ratio));
    const newH = Math.max(1, Math.round(h * ratio));
    image.resize({ w: newW, h: newH });
    const canvas = await new Jimp({ width: 1200, height: 700, color: 0xffffffff });
    const x = Math.round((1200 - image.bitmap.width) / 2);
    const y = Math.round((700 - image.bitmap.height) / 2);
    canvas.composite(image, x, y);
    // Determine output format from extension and encode manually
    const ext = path.extname(filePath).toLowerCase();
    const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
    const format = canvas.formats.find(f => f.mime === mime) || canvas.formats.find(f => f.mime === 'image/png');
    if (!format || typeof format.encode !== 'function') {
      throw new Error('No encoder available for ' + mime);
    }
    const outBuffer = format.encode(canvas.bitmap);
    await fs.promises.writeFile(filePath, Buffer.from(outBuffer));
    console.log('Optimized:', filePath);
  } catch (err) {
    console.error('Failed:', filePath, err.message);
  }
}

(async function main() {
  if (!fs.existsSync(dir)) {
    console.error('Previews directory not found:', dir);
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g)$/i.test(f));
  for (const f of files) {
    const p = path.join(dir, f);
    await processFile(p);
  }

  console.log('All done');
})();
