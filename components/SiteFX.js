'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteFX() {
  const pathname = usePathname();

  // cursor + scroll progress (mount once)
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
    let raf, onMove, over, out;
    if (!reduce && hover) {
      const cur = document.getElementById('cursor');
      let mx = innerWidth / 2,
        my = innerHeight / 2,
        cx = mx,
        cy = my;
      onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
      };
      addEventListener('mousemove', onMove);
      const loop = () => {
        cx += (mx - cx) * 0.18;
        cy += (my - cy) * 0.18;
        if (cur) cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        raf = requestAnimationFrame(loop);
      };
      loop();
      const sel = 'a,button,.work-row,.cap,.portrait,.card,.post-row,.resume-card';
      over = (e) => {
        if (e.target.closest && e.target.closest(sel) && cur) cur.classList.add('big');
      };
      out = (e) => {
        if (e.target.closest && e.target.closest(sel) && cur) cur.classList.remove('big');
      };
      document.addEventListener('mouseover', over);
      document.addEventListener('mouseout', out);
    }
    return () => {
      removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (onMove) removeEventListener('mousemove', onMove);
      if (over) document.removeEventListener('mouseover', over);
      if (out) document.removeEventListener('mouseout', out);
    };
  }, []);

  // scroll reveals — re-run on every route change
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    if (reduce) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
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
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.06 + 's';
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="progress" id="progress"></div>
      <div className="cursor" id="cursor"></div>
    </>
  );
}
