import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const jobs = [
  { src: 'ART/LOGO.png', out: 'ART/LOGO-stripe.png', size: 512 },
  { src: 'ART/SIGIL.png', out: 'ART/SIGIL-stripe.png', size: 512 },
]

for (const { src, out, size } of jobs) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .flatten({ background: { r: 0, g: 0, b: 0 } })
    .png({ quality: 85, compressionLevel: 9 })
    .toFile(out)

  const kb = (readFileSync(out).length / 1024).toFixed(0)
  console.log(`${out}: ${kb}KB`)
}
