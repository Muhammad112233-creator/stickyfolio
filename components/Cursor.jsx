'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursor = useRef(null);
  const trail = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('has-cursor');

    let x = innerWidth / 2, y = innerHeight / 2;
    let cx = x, cy = y, tx = x, ty = y;
    let raf;

    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      cx += (x - cx) * 0.35;
      cy += (y - cy) * 0.35;
      tx += (x - tx) * 0.12;
      ty += (y - ty) * 0.12;
      if (cursor.current) cursor.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      if (trail.current) trail.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%) rotate(${(x - tx) * 0.2}deg)`;
      raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor]');
      if (!t) return;
      cursor.current?.classList.add('is-active');
      const label = t.getAttribute('data-cursor') || (t.tagName === 'A' ? 'Open' : 'Click');
      const el = cursor.current?.querySelector('.cursor__label');
      if (el) el.textContent = label;
    };
    const out = (e) => {
      const t = e.target.closest('a, button, [data-cursor]');
      if (t) cursor.current?.classList.remove('is-active');
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-trail" ref={trail} aria-hidden="true" />
      <div className="cursor" ref={cursor} aria-hidden="true"><span className="cursor__label" /></div>
    </>
  );
}
