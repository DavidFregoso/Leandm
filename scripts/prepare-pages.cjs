// Duplica index.html -> 404.html y crea .nojekyll en la carpeta de salida
const fs = require('fs')
const path = require('path')
const out = process.env.BUILD_OUTDIR || 'apps/web/dist'
const index = path.join(out, 'index.html')
const notFound = path.join(out, '404.html')
if (fs.existsSync(index)) fs.copyFileSync(index, notFound)
fs.writeFileSync(path.join(out, '.nojekyll'), '')
console.log('Pages prep done in', out)
