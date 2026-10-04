'use client';
import { useEffect, useState } from 'react';

// Counter + bar, then the screen lifts and the home hero starts its entrance.
// Shown once per browser session so returning to Home is instant.
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = () => document.querySelector('.has-loader')?.classList.add('go');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem('pdt-loaded') === '1';
      sessionStorage.setItem('pdt-loaded', '1');
    } catch {}
    if (reduce || seen) {
      setGone(true);
      start();
      return;
    }
    let p = 0;
    let lift;
    const t = setInterval(() => {
      p = Math.min(100, p + Math.floor(Math.random() * 11) + 6);
      setPct(p);
      if (p >= 100) {
        clearInterval(t);
        lift = setTimeout(() => {
          setDone(true);
          setTimeout(start, 350);
          setTimeout(() => setGone(true), 1100);
        }, 300);
      }
    }, 80);
    return () => {
      clearInterval(t);
      clearTimeout(lift);
    };
  }, []);

  if (gone) return null;
  return (
    <div className={'loader' + (done ? ' done' : '')} aria-hidden="true">
      <div className="lname">
        Ti<em>e</em>n
      </div>
      <div className="pct">{pct}</div>
      <div className="bar" style={{ width: pct + '%' }} />
    </div>
  );
}
