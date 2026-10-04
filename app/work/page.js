import Link from 'next/link';
import { getAll } from '@/lib/content';
import { CtaBand } from '@/components/Blocks';

export const metadata = {
  title: 'Work',
  description:
    'Selected AI engineering work by Tien Pham Dinh — agentic systems, computer vision, and MLOps platforms shipped to production.',
  alternates: { canonical: '/work' },
};

export default function Work() {
  const items = getAll('solutions');
  return (
    <main className="page">
      <div className="wrap">
        <div className="page-hero">
          <div className="ey">Selected Work</div>
          <h1>Things I&apos;ve shipped.</h1>
          <p className="lead">
            Production AI systems across agents, computer vision, and MLOps. Each one links to a full
            case study.
          </p>
        </div>

        <section className="sec">
          <div className="work-list">
            {items.map((s, i) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="work-row reveal">
                <span className="label n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="label">{s.category}</span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </div>
                <div className="tags">
                  {(s.stack || []).slice(0, 3).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="arr" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <a
            className="more work-cta"
            href="https://github.com/0121ienT"
            target="_blank"
            rel="noopener"
          >
            All projects on GitHub ↗
          </a>
        </section>

        <CtaBand
          eyebrow="Let's work together"
          title="Have a problem worth solving?"
          text="Open to freelance, consulting, and remote AI engineering work."
        >
          <Link className="btn primary" href="/contact">
            Get in touch <span className="ar">→</span>
          </Link>
          <Link className="btn ghost" href="/solutions">
            View solutions
          </Link>
        </CtaBand>
      </div>
    </main>
  );
}
