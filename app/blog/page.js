import Link from 'next/link';
import { getAll, formatDate } from '@/lib/content';

export const metadata = {
  title: 'Blog',
  description:
    'Notes on building agentic AI, computer vision, and MLOps in production — by Tien Pham Dinh (Tyler Pham).',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const posts = getAll('blog');
  return (
    <main className="page">
      <div className="wrap">
        <div className="page-hero">
          <div className="ey">Blog</div>
          <h1>Writing &amp; notes.</h1>
          <p className="lead">
            Lessons from shipping agentic AI, computer-vision, and MLOps systems to production.
          </p>
        </div>

        <section>
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
                    {p.tags && p.tags.length > 0 && (
                      <div className="ptags">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty reveal">Posts coming soon.</div>
          )}
        </section>
      </div>
    </main>
  );
}
