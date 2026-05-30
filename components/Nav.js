'use client';
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
  return (
    <nav>
      <Link className="brand" href="/">
        PDT©2026
      </Link>
      <div className="right">
        {LINKS.map((l) => {
          const active = path === l.href || path.startsWith(l.href + '/');
          return (
            <Link key={l.href} href={l.href} className={active ? 'active' : ''}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
