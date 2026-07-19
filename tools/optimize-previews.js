const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'previews');

async function processFile(filePath) {
  try {
    const image = await Jimp.read(filePath);
    await image.cover(1200, 700).quality(85).writeAsync(filePath);
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