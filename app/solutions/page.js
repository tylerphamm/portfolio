import Link from 'next/link';
import { getAll } from '@/lib/content';

export const metadata = {
  title: 'Solutions',
  description:
    'AI solutions you can hire Tien Pham Dinh to build — agentic assistants, eKYC / face recognition, real-time video analytics, multi-agent systems, and LLMOps platforms.',
  alternates: { canonical: '/solutions' },
};

export default function Solutions() {
  const items = getAll('solutions');
  return (
    <main className="page">
      <div className="wrap">
        <div className="page-hero">
          <div className="ey">Solutions</div>
          <h1>Solutions I build &amp; ship.</h1>
          <p className="lead">
            Productized expertise from real deployments. Hire me to build one of these for your team
            — or something new tailored to your problem.
          </p>
        </div>

        <section>
          {items.length ? (
            <div className="cards">
              {items.map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="card reveal">
                  <span className="ccat">{s.category}</span>
                  <span className="ctitle">
                    {s.title}
                    <span className="arr">↗</span>
                  </span>
                  <span className="csum">{s.summary}</span>
                  <span className="ctags">
                    {(s.stack || []).slice(0, 5).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty reveal">Solutions coming soon.</div>
          )}
        </section>
      </div>

      <div className="wrap">
        <div className="cta-band reveal">
          <span className="ey">Don&apos;t see your exact need?</span>
          <h2>Let&apos;s scope a custom solution</h2>
          <p>
            Tell me your problem and constraints — I&apos;ll propose an approach, timeline, and what
            &quot;done&quot; looks like.
          </p>
          <div className="cta">
            <Link className="btn primary" href="/contact">
              Get a quote
            </Link>
            <a className="btn ghost" href="/PhamDinhTien_AI_Engineer.pdf" download>
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
