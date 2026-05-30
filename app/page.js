import Link from 'next/link';
import Preloader from '@/components/Preloader';
import { getAll, formatDate } from '@/lib/content';

export default function Home() {
  const solutions = getAll('solutions').slice(0, 4);
  const posts = getAll('blog').slice(0, 2);

  return (
    <>
      <Preloader />
      <main className="page">
        <div className="wrap" id="top">
          <header>
            <div className="hero-inner">
              <span className="kicker">AI Engineer — Hanoi, Vietnam</span>
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
              <div className="alias">
                also known as <span>Tyler Pham</span>
              </div>
              <div className="hr-line"></div>
              <p className="tag">
                I build AI agents, computer-vision systems, and the MLOps infrastructure that ships
                them to production.
              </p>
              <div className="cta">
                <Link className="btn primary" href="/solutions">
                  View solutions
                </Link>
                <Link className="btn ghost" href="/work">
                  Selected work
                </Link>
              </div>
              <div className="avail">
                <span className="dot"></span> Open to freelance & remote work
              </div>
            </div>
            <div className="scrollcue">
              SCROLL<span className="ln"></span>
            </div>
          </header>
        </div>

        <div className="wrap">
          <section>
            <div className="sec-head reveal">
              <span className="num">(01)</span>
              <h2>Solutions I can build for you</h2>
            </div>
            <div className="cards">
              {solutions.map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="card reveal">
                  <span className="ccat">{s.category}</span>
                  <span className="ctitle">
                    {s.title}
                    <span className="arr">↗</span>
                  </span>
                  <span className="csum">{s.summary}</span>
                  <span className="ctags">
                    {(s.stack || []).slice(0, 4).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                </Link>
              ))}
            </div>
            <Link className="section-link" href="/solutions">
              All solutions →
            </Link>
          </section>

          <section>
            <div className="sec-head reveal">
              <span className="num">(02)</span>
              <h2>From the blog</h2>
            </div>
            {posts.length ? (
              <div className="post-list">
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="post-row reveal">
                    <div className="pdate">{formatDate(p.date)}</div>
                    <div>
                      <span className="ptitle">
                        {p.title}
                        <span className="arr">↗</span>
                      </span>
                      <p className="pdesc">{p.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty reveal">Posts coming soon.</div>
            )}
            <Link className="section-link" href="/blog">
              Read the blog →
            </Link>
          </section>
        </div>

        <div className="wrap">
          <div className="cta-band reveal">
            <span className="ey">Let&apos;s work together</span>
            <h2>Have a problem worth solving?</h2>
            <p>
              I help teams ship agentic AI, computer-vision, and MLOps systems that survive real
              users — available for freelance and remote projects.
            </p>
            <div className="cta">
              <Link className="btn primary" href="/contact">
                Get in touch
              </Link>
              <a className="btn ghost" href="/PhamDinhTien_AI_Engineer.pdf" download>
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
