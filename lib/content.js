import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = process.cwd();
const dir = (type) => path.join(ROOT, 'content', type);

export function getAll(type) {
  const d = dir(type);
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace(/\.md$/, '');
      const { data, content } = matter(fs.readFileSync(path.join(d, f), 'utf8'));
      return { slug, content, ...data };
    })
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

export function getSlugs(type) {
  const d = dir(type);
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date)) return String(d);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function getOne(type, slug) {
  const fp = path.join(dir(type), `${slug}.md`);
  if (!fs.existsSync(fp)) return null;
  const { data, content } = matter(fs.readFileSync(fp, 'utf8'));
  return { slug, content, html: marked.parse(content), ...data };
}
