import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOne, getSlugs } from '@/lib/content';
import Article from '@/components/Article';
import { CtaBand } from '@/components/Blocks';

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

  const date = s.date
    ? new Date(s.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    : null;
  const meta = [
    s.category && { label: 'Category', value: s.category },
    date && { label: 'Date', value: date },
  ].filter(Boolean);

  return (
    <main className="page">
      <div className="wrap">
        <Article
          crumbHref="/solutions"
          crumbLabel="Solutions"
          crumbCurrent={s.category}
          title={s.title}
          summary={s.summary}
          meta={meta}
          tags={s.stack?.length ? { label: 'Stack', items: s.stack } : null}
          toc={s.toc}
          html={s.html}
        />

        <CtaBand
          eyebrow="Interested in this?"
          title="Let's build it for your team"
          text="I can adapt this solution to your use case — or build something new from scratch."
        >
          <Link className="btn primary" href="/contact">
            Hire me / Get a quote <span className="ar">→</span>
          </Link>
          <Link className="btn ghost" href="/solutions">
            See other solutions
          </Link>
        </CtaBand>
      </div>
    </main>
  );
}
