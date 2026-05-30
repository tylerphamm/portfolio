import { getSlugs } from '@/lib/content';

const SITE = 'https://tylerpham.dev';

export default function sitemap() {
  const routes = ['', '/about', '/work', '/solutions', '/blog', '/contact'].map((p) => ({
    url: `${SITE}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));

  const solutions = getSlugs('solutions').map((slug) => ({
    url: `${SITE}/solutions/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blog = getSlugs('blog').map((slug) => ({
    url: `${SITE}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...solutions, ...blog];
}
