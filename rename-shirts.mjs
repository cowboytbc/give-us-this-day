import { renameSync } from 'fs'
renameSync('ART/SHIRT 1 FRONT.jpg', 'ART/SHIRT-FRONT.jpg')
renameSync('ART/SHIRT 1 BACK.jpg', 'ART/SHIRT-BACK.jpg')
console.log('Renamed OK')
