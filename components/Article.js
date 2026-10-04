import Link from 'next/link';

// Shared reading layout for case studies and blog posts:
// header with meta row, sticky table of contents, 68ch prose column.
export default function Article({ crumbHref, crumbLabel, crumbCurrent, title, summary, meta, tags, toc, html }) {
  const showToc = toc && toc.length >= 3;
  return (
    <>
      <header className="detail-head">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href={crumbHref}>{crumbLabel}</Link>
          {crumbCurrent && (
            <>
              <span aria-hidden="true">/</span>
              <span>{crumbCurrent}</span>
            </>
          )}
        </nav>
        <h1>{title}</h1>
        {summary && <p className="dsum">{summary}</p>}
        <div className="dmeta">
          {meta.map((m) => (
            <div key={m.label}>
              <span className="label">{m.label}</span>
              <span className="v">{m.value}</span>
            </div>
          ))}
          {tags && tags.items.length > 0 && (
            <div>
              <span className="label">{tags.label}</span>
              <div className="tags">
                {tags.items.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <div className={'layout' + (showToc ? '' : ' no-toc')}>
        {showToc && (
          <aside className="toc" aria-label="On this page">
            <span className="label">On this page</span>
            {toc.map((t, i) => (
              <a key={t.id} href={`#${t.id}`} aria-current={i === 0 ? 'true' : 'false'}>
                {t.text}
              </a>
            ))}
          </aside>
        )}
        <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
