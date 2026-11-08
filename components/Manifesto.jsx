'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = 'Good design should feel handmade, load fast, and still make you smile on a Monday.'.split(' ');

export default function Manifesto() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto__words span', {
        opacity: 0.12,
        y: 18,
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'top 20%', scrub: true }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section section--paper manifesto curve-top" ref={root}>
      <div className="container">
        <p className="eyebrow">Why I exist</p>
        <h2 className="h2 manifesto__words">
          {words.map((w, i) => <span key={i}>{w}</span>)}
        </h2>
      </div>
    </section>
  );
}
