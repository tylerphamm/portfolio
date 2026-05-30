import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOne, getSlugs, formatDate } from '@/lib/content';

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

  return (
    <main className="page">
      <div className="wrap">
        <div className="detail-head">
          <div className="crumb">
            <Link href="/blog">← Blog</Link>
          </div>
          <h1>{p.title}</h1>
          {p.summary && <p className="dsum">{p.summary}</p>}
          <div className="detail-meta">
            {p.date && <span>{formatDate(p.date)}</span>}
            {p.readingTime && <span>{p.readingTime}</span>}
            {p.tags && p.tags.length > 0 && (
              <span className="ctags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>

        <article className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
      </div>

      <div className="wrap">
        <div className="cta-band">
          <span className="ey">Thanks for reading</span>
          <h2>Let&apos;s talk</h2>
          <p>Building something in AI, computer vision, or MLOps? I&apos;d love to help.</p>
          <div className="cta">
            <Link className="btn primary" href="/contact">
              Get in touch
            </Link>
            <Link className="btn ghost" href="/blog">
              More posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
