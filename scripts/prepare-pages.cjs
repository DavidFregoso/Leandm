const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'apps', 'web', 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');
const noJekyllPath = path.join(distPath, '.nojekyll');

if (!fs.existsSync(indexPath)) {
  throw new Error('No se encontró index.html en dist/. Ejecuta la build antes de correr este script.');
}

fs.copyFileSync(indexPath, notFoundPath);
fs.writeFileSync(noJekyllPath, '');
console.log('Archivos para GitHub Pages listos.');
