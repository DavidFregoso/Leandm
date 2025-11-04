const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');

if (!fs.existsSync(distDir)) {
  console.error('The dist directory was not found. Run "npm run build:gh" before deploying.');
  process.exit(1);
}

const copyRecursiveSync = (source, destination) => {
  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    const entries = fs.readdirSync(source);
    entries.forEach((entry) => {
      const srcPath = path.join(source, entry);
      const destPath = path.join(destination, entry);
      copyRecursiveSync(srcPath, destPath);
    });
  } else {
    fs.copyFileSync(source, destination);
  }
};

fs.rmSync(docsDir, { recursive: true, force: true });
fs.mkdirSync(docsDir, { recursive: true });

copyRecursiveSync(distDir, docsDir);

const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(docsDir, '404.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
}

const noJekyllPath = path.join(docsDir, '.nojekyll');
fs.closeSync(fs.openSync(noJekyllPath, 'w'));

console.log('Docs folder ready for GitHub Pages deployment.');
