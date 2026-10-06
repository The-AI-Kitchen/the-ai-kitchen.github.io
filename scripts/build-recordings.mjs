// Refresh the archive's static HTML from sessions.js and its browser renderer.
// Run with: node scripts/build-recordings.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const grid = { innerHTML: '' };
const context = vm.createContext({ window: {}, document: { getElementById: () => grid } });
vm.runInContext(readFileSync(resolve(root, 'sessions.js'), 'utf8'), context);
vm.runInContext(readFileSync(resolve(root, 'recordings.js'), 'utf8'), context);
if (!grid.innerHTML) throw new Error('No recordings found in the session data.');

const pagePath = resolve(root, 'recordings.html');
const page = readFileSync(pagePath, 'utf8');
const start = '<!-- RECORDINGS:START -->';
const end = '<!-- RECORDINGS:END -->';
if (!page.includes(start) || !page.includes(end)) throw new Error('Static archive markers are missing.');
const refreshed = page.slice(0, page.indexOf(start) + start.length) + '\n' + grid.innerHTML + '\n' + page.slice(page.indexOf(end));
writeFileSync(pagePath, refreshed);
console.log('Refreshed the static recording archive.');
