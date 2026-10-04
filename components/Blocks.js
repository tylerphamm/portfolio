import Link from 'next/link';
import { formatDate } from '@/lib/content';

export function SolutionCard({ s, maxTags = 4 }) {
  return (
    <Link href={`/solutions/${s.slug}`} className="card reveal">
      <span className="top">
        <span className="label">{s.category}</span>
        <span className="arr" aria-hidden="true">
          ↗
        </span>
      </span>
      <h3>{s.title}</h3>
      <p>{s.summary}</p>
      <span className="tags">
        {(s.stack || []).slice(0, maxTags).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </span>
    </Link>
  );
}

export function PostRow({ p, showTags = false }) {
  return (
    <Link href={`/blog/${p.slug}`} className="post-row reveal">
      <div className="meta">
        <span className="label">{formatDate(p.date)}</span>
        {p.readingTime && <span className="label">{p.readingTime}</span>}
      </div>
      <div>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        {showTags && p.tags?.length > 0 && (
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <span className="arr" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}

export function SectionHead({ num, label, title, href, linkText }) {
  return (
    <div className="sec-head reveal">
      <div>
        <span className="label">
          {num && <span className="num">{num}</span>}
          {num && label && ' · '}
          {label}
        </span>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="more" href={href}>
          {linkText} →
        </Link>
      )}
    </div>
  );
}

export function CtaBand({ eyebrow, title, text, children }) {
  return (
    <div className="cta-band reveal">
      <span className="ey">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      <div className="cta">{children}</div>
    </div>
  );
}
