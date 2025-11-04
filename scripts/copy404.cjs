import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const docsDir = join(__dirname, '..', 'docs');

async function main() {
  await mkdir(docsDir, { recursive: true });
  const source = join(distDir, 'index.html');
  const destination = join(docsDir, '404.html');
  await cp(source, destination);
}

main().catch((error) => {
  console.error('Failed to copy 404.html fallback:', error);
  process.exit(1);
});
