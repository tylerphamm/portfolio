import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOne, getSlugs, formatDate } from '@/lib/content';
import Article from '@/components/Article';
import { CtaBand } from '@/components/Blocks';

export function generateStaticParams() {
  return getSlugs('blog').map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = getOne('blog', params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/blog/${p.slug}` },
  };
}

export default function BlogPost({ params }) {
  const p = getOne('blog', params.slug);
  if (!p) notFound();

  const meta = [
    p.date && { label: 'Published', value: formatDate(p.date) },
    p.readingTime && { label: 'Reading time', value: p.readingTime },
  ].filter(Boolean);

  return (
    <main className="page">
      <div className="wrap">
        <Article
          crumbHref="/blog"
          crumbLabel="Blog"
          title={p.title}
          summary={p.summary}
          meta={meta}
          tags={p.tags?.length ? { label: 'Topics', items: p.tags } : null}
          toc={p.toc}
          html={p.html}
        />

        <CtaBand
          eyebrow="Thanks for reading"
          title="Let's talk"
          text="Building something in AI, computer vision, or MLOps? I'd love to help."
        >
          <Link className="btn primary" href="/contact">
            Get in touch <span className="ar">→</span>
          </Link>
          <Link className="btn ghost" href="/blog">
            More posts
          </Link>
        </CtaBand>
      </div>
    </main>
  );
}
