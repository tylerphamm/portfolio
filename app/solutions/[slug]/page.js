import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOne, getSlugs } from '@/lib/content';

export function generateStaticParams() {
  return getSlugs('solutions').map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const s = getOne('solutions', params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: `/solutions/${s.slug}` },
  };
}

export default function SolutionDetail({ params }) {
  const s = getOne('solutions', params.slug);
  if (!s) notFound();

  return (
    <main className="page">
      <div className="wrap">
        <div className="detail-head">
          <div className="crumb">
            <Link href="/solutions">← Solutions</Link>
          </div>
          <h1>{s.title}</h1>
          {s.summary && <p className="dsum">{s.summary}</p>}
          <div className="detail-meta">
            {s.category && <span>{s.category}</span>}
            {s.stack && s.stack.length > 0 && (
              <span className="ctags">
                {s.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>

        <article className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
      </div>

      <div className="wrap">
        <div className="cta-band">
          <span className="ey">Interested in this?</span>
          <h2>Let&apos;s build it for your team</h2>
          <p>I can adapt this solution to your use case — or build something new from scratch.</p>
          <div className="cta">
            <Link className="btn primary" href="/contact">
              Hire me / Get a quote
            </Link>
            <Link className="btn ghost" href="/solutions">
              See other solutions
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
