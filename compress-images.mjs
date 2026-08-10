import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const files = [
  { src: 'ART/LOGO.png', maxWidth: 1200 },
  { src: 'ART/SIGIL.png', maxWidth: 800 },
]

for (const { src, maxWidth } of files) {
  const before = readFileSync(src).length
  await sharp(src)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .png({ quality: 70, compressionLevel: 9 })
    .toFile(src + '.tmp')

  const tmp = readFileSync(src + '.tmp')
  const after = tmp.length
  writeFileSync(src, tmp)
  const fs = await import('fs')
  fs.default.unlinkSync(src + '.tmp')

  console.log(`${src}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`)
}
