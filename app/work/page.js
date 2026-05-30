import Link from 'next/link';
import { getAll } from '@/lib/content';

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

        <section>
          <div className="work-list">
            {items.map((s, i) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="work-row reveal">
                <span className="rnum">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="rtitle">
                    {s.title}
                    <span className="arr">↗</span>
                  </span>
                  <p className="rdesc">{s.summary}</p>
                </div>
                <div className="rmeta">
                  {(s.stack || []).slice(0, 3).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <a
            className="work-cta"
            href="https://github.com/0121ienT"
            target="_blank"
            rel="noopener"
          >
            All projects on GitHub ↗
          </a>
        </section>
      </div>

      <div className="wrap">
        <div className="cta-band reveal">
          <span className="ey">Let&apos;s work together</span>
          <h2>Have a problem worth solving?</h2>
          <p>Open to freelance, consulting, and remote AI engineering work.</p>
          <div className="cta">
            <Link className="btn primary" href="/contact">
              Get in touch
            </Link>
            <Link className="btn ghost" href="/solutions">
              View solutions
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
