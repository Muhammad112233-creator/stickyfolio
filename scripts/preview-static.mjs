import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.argv[2] || 'docs';
const port = Number(process.env.PORT || 4173);
const base = process.env.BASE_PATH || '/stickyfolio';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (urlPath === '/') {
      res.writeHead(302, { Location: `${base}/` });
      return res.end();
    }
    if (base && urlPath.startsWith(base)) urlPath = urlPath.slice(base.length) || '/';
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    const file = normalize(join(process.cwd(), root, urlPath));
    const s = await stat(file);
    const target = s.isDirectory() ? join(file, 'index.html') : file;
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': types[extname(target)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Static preview: http://localhost:${port}${base}/`);
});
