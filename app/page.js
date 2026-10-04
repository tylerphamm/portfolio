import Link from 'next/link';
import Preloader from '@/components/Preloader';
import { SolutionCard, PostRow, SectionHead, CtaBand } from '@/components/Blocks';
import { getAll } from '@/lib/content';

export default function Home() {
  const solutions = getAll('solutions').slice(0, 4);
  const posts = getAll('blog').slice(0, 2);

  return (
    <>
      <Preloader />
      <main className="page has-loader">
        <div className="wrap" id="top">
          <section className="hero">
            <div className="hero-a">
              <div>
                <span className="label kicker in-1">
                  <span className="dot"></span>AI Engineer — Hanoi, Vietnam
                </span>
                <h1 className="name">
                  <span className="w accent">
                    <i>Tien</i>
                  </span>
                  <span className="w">
                    <i>Pham</i>
                  </span>
                  <span className="w">
                    <i>Dinh</i>
                  </span>
                </h1>
                <div className="alias in-2">
                  also known as <span>Tyler Pham</span>
                </div>
                <p className="lede in-3">
                  I build <strong>AI agents</strong>, <strong>computer-vision systems</strong>, and
                  the <strong>MLOps infrastructure</strong> that ships them to production.
                </p>
                <div className="cta in-4">
                  <Link className="btn primary" href="/solutions">
                    View solutions <span className="ar">→</span>
                  </Link>
                  <Link className="btn ghost" href="/work">
                    Selected work
                  </Link>
                </div>
                <div className="avail in-5">
                  <span className="dot"></span>Open to freelance, consulting &amp; remote work
                </div>
              </div>
              <div className="proof in-5">
                <div className="row">
                  <span className="label">Currently</span>
                  <span>AI Engineer @ Vin Dynamics</span>
                </div>
                <div className="row">
                  <span className="label">Focus</span>
                  <span>Agentic AI · Computer Vision · Robotics · MLOps</span>
                </div>
                <div className="row">
                  <span className="label">Based in</span>
                  <span>Hanoi, Vietnam</span>
                </div>
                <div className="row">
                  <span className="label">Languages</span>
                  <span>VI · EN · KO</span>
                </div>
              </div>
            </div>
          </section>

          <section className="sec">
            <SectionHead
              num="01"
              label="Solutions"
              title="Solutions I can build for you"
              href="/solutions"
              linkText="All solutions"
            />
            <div className="cards">
              {solutions.map((s) => (
                <SolutionCard key={s.slug} s={s} />
              ))}
            </div>
          </section>

          <section className="sec">
            <SectionHead
              num="02"
              label="Writing"
              title="From the blog"
              href="/blog"
              linkText="Read the blog"
            />
            {posts.length ? (
              <div className="post-list">
                {posts.map((p) => (
                  <PostRow key={p.slug} p={p} />
                ))}
              </div>
            ) : (
              <div className="empty reveal">
                <h3>Posts coming soon</h3>
              </div>
            )}
          </section>

          <CtaBand
            eyebrow="Let's work together"
            title="Have a problem worth solving?"
            text="I help teams ship agentic AI, computer-vision, and MLOps systems that survive real users — available for freelance, consulting, and remote work."
          >
            <Link className="btn primary" href="/contact">
              Get in touch <span className="ar">→</span>
            </Link>
            <a className="btn ghost" href="/PhamDinhTien_AI_Engineer.pdf" download>
              Download CV ↓
            </a>
          </CtaBand>
        </div>
      </main>
    </>
  );
}
