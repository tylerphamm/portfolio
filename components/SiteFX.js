'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteFX() {
  const pathname = usePathname();

  // cursor follower, card spotlight, scroll progress (mount once)
  useEffect(() => {
    const prog = document.getElementById('progress');
    const onScroll = () => {
      const h = document.documentElement;
      const sc = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (prog) prog.style.width = sc * 100 + '%';
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hover = window.matchMedia('(hover:hover)').matches;
    let raf, onMove, over, out, spot;
    if (!reduce && hover) {
      const cur = document.getElementById('cursor');
      let mx = -100,
        my = -100,
        cx = mx,
        cy = my;
      onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
      };
      addEventListener('mousemove', onMove);
      const loop = () => {
        cx += (mx - cx) * 0.2;
        cy += (my - cy) * 0.2;
        if (cur) cur.style.transform = `translate(${cx}px,${cy}px)`;
        raf = requestAnimationFrame(loop);
      };
      loop();
      const sel = 'a,button,.card,.portrait';
      over = (e) => {
        if (e.target.closest?.(sel) && cur) cur.classList.add('big');
      };
      out = (e) => {
        if (e.target.closest?.(sel) && cur) cur.classList.remove('big');
      };
      document.addEventListener('mouseover', over);
      document.addEventListener('mouseout', out);
      // glow inside cards follows the pointer
      spot = (e) => {
        const c = e.target.closest?.('.card');
        if (!c) return;
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', e.clientX - r.left + 'px');
        c.style.setProperty('--my', e.clientY - r.top + 'px');
      };
      document.addEventListener('pointermove', spot);
    }
    return () => {
      removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (onMove) removeEventListener('mousemove', onMove);
      if (over) document.removeEventListener('mouseover', over);
      if (out) document.removeEventListener('mouseout', out);
      if (spot) document.removeEventListener('pointermove', spot);
    };
  }, []);

  // scroll reveals + table-of-contents highlight — re-run on every route change
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    let io, spy;
    if (reduce) {
      els.forEach((e) => e.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      // stagger within each group of sibling reveals
      els.forEach((el) => {
        const sibs = Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = (sibs.indexOf(el) % 6) * 0.07 + 's';
        io.observe(el);
      });
    }

    const links = Array.from(document.querySelectorAll('.toc a'));
    if (links.length) {
      spy = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            links.forEach((a) =>
              a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + e.target.id))
            );
          });
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );
      document.querySelectorAll('.prose h2[id]').forEach((h) => spy.observe(h));
    }
    return () => {
      io?.disconnect();
      spy?.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="progress" id="progress"></div>
      <div className="cursor" id="cursor" aria-hidden="true"></div>
    </>
  );
}
