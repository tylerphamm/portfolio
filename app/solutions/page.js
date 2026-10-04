import Link from 'next/link';
import { SolutionCard, CtaBand } from '@/components/Blocks';
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

        <section className="sec">
          {items.length ? (
            <div className="cards">
              {items.map((s) => (
                <SolutionCard key={s.slug} s={s} maxTags={5} />
              ))}
            </div>
          ) : (
            <div className="empty reveal">
              <h3>Solutions coming soon</h3>
            </div>
          )}
        </section>

        <CtaBand
          eyebrow="Don't see your exact need?"
          title="Let's scope a custom solution"
          text={`Tell me your problem and constraints — I'll propose an approach, timeline, and what "done" looks like.`}
        >
          <Link className="btn primary" href="/contact">
            Get a quote <span className="ar">→</span>
          </Link>
          <a className="btn ghost" href="/PhamDinhTien_AI_Engineer.pdf" download>
            Download CV ↓
          </a>
        </CtaBand>
      </div>
    </main>
  );
}
