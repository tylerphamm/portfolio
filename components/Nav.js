'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const isActive = (href) => path === href || path.startsWith(href + '/');

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="site-nav">
        <div className="wrap in">
          <Link className="brand" href="/">
            PDT<b>©</b>2026
          </Link>
          <nav className="links" aria-label="Main">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link className="navcta" href="/contact">
            Get in touch
          </Link>
          <button
            className="menubtn"
            type="button"
            aria-expanded={open}
            aria-controls="menu-sheet"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>
      <div
        id="menu-sheet"
        className={'sheet' + (open ? ' open' : '')}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="top">
          <span className="brand">
            PDT<b>©</b>2026
          </span>
          <button className="menubtn" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <nav aria-label="Mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="foot">
          <span className="label">Say hi</span>
          <a href="mailto:phamdt203@gmail.com">phamdt203@gmail.com</a>
        </div>
      </div>
    </>
  );
}
