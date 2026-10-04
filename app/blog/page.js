import { PostRow } from '@/components/Blocks';
import { getAll } from '@/lib/content';

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

        <section className="sec">
          {posts.length ? (
            <div className="post-list">
              {posts.map((p) => (
                <PostRow key={p.slug} p={p} showTags />
              ))}
            </div>
          ) : (
            <div className="empty reveal">
              <h3>Posts coming soon</h3>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
