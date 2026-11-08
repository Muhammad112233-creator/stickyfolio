import { spawnSync } from 'node:child_process';
import { cpSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Usage:
//   npm run build:pages                 -> builds for repo name "stickyfolio"
//   npm run build:pages -- my-repo-name -> builds for https://<user>.github.io/my-repo-name/
//   npm run build:pages -- --root       -> builds for https://<user>.github.io/ (no base path)

const arg = process.argv[2];
const repoName = arg === '--root' ? '' : (arg || 'stickyfolio').replace(/^\/+|\/+$/g, '');
const basePath = repoName ? `/${repoName}` : '';

console.log(`\nBuilding static GitHub Pages export${basePath ? ` for base path ${basePath}` : ' for root domain'}...\n`);

const result = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, BASE_PATH: basePath, NEXT_PUBLIC_BASE_PATH: basePath },
  shell: process.platform === 'win32'
});

if (result.status !== 0) process.exit(result.status || 1);

const outDir = resolve('out');
const docsDir = resolve('docs');
if (!existsSync(outDir)) {
  console.error('Expected ./out after next build. Check next.config.mjs output: "export".');
  process.exit(1);
}

rmSync(docsDir, { recursive: true, force: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(resolve(docsDir, '.nojekyll'), '');

console.log('\n✅ Static site copied to ./docs');
console.log('Upload the CONTENTS of ./docs to your GitHub repository, then enable Pages from the docs folder (or root if you upload docs contents to root).');
console.log('See PUBLISH_GUIDE.md for the drag-and-drop workflow.\n');
