'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const root = useRef(null);
  const fill = useRef(null);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(obj.v);
        setPct(v);
        if (fill.current) fill.current.style.width = `${v}%`;
      },
      onComplete: () => {
        gsap.to(root.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.classList.remove('is-loading');
            window.__stickyLoaded = true;
            setDone(true);
            window.dispatchEvent(new Event('sticky:loaded'));
          }
        });
      }
    });
    return () => tween.kill();
  }, []);

  if (done) return null;

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__logo">Stickyfolio</div>
        <div className="preloader__roll" />
        <div className="preloader__bar"><div className="preloader__fill" ref={fill} /></div>
        <div className="preloader__pct">{pct}%</div>
        <p className="hand" style={{ fontSize: 24, marginTop: 8 }}>warming up the tape…</p>
      </div>
    </div>
  );
}
