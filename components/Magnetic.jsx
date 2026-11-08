'use client';

import { useEffect, useRef } from 'react';

export default function Magnetic({ children, strength = 0.35, className = '', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => { el.style.transform = 'translate(0,0)'; };

    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`magnetic ${className}`} style={{ display: 'inline-block', transition: 'transform .25s ease' }} {...props}>
      {children}
    </span>
  );
}
