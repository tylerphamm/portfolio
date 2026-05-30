'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDone(true);
      return;
    }
    let p = 0;
    const t = setInterval(() => {
      p += Math.floor(Math.random() * 11) + 6;
      if (p > 100) p = 100;
      setPct(p);
      if (p >= 100) {
        clearInterval(t);
        setTimeout(() => setDone(true), 360);
      }
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={'loader' + (done ? ' done' : '')} aria-hidden="true">
      <div className="lname">
        Ti<em>e</em>n
      </div>
      <div className="pct">{pct}</div>
    </div>
  );
}
