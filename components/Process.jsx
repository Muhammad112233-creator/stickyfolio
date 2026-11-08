'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { asset, processSteps } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.process-step').forEach((step) => {
        gsap.from(step.querySelector('.process-step__copy'), {
          opacity: 0, y: 50, duration: 0.9,
          scrollTrigger: { trigger: step, start: 'top 70%' }
        });
        gsap.from(step.querySelector('.process-step__media'), {
          opacity: 0, scale: 0.9, rotate: -2, duration: 1,
          scrollTrigger: { trigger: step, start: 'top 70%' }
        });
        gsap.to(step.querySelector('img'), {
          yPercent: -8,
          scrollTrigger: { trigger: step, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section section--orange" id="process" ref={root}>
      <div className="container">
        <p className="eyebrow">How it holds together</p>
        <h2 className="h2">From sketch to shipped.</h2>

        {processSteps.map((s) => (
          <div className="process-step" key={s.index}>
            <div className="process-step__copy">
              <div className="process-step__index">{s.index}</div>
              <h3 className="process-step__word">To {s.word}</h3>
              <p style={{ maxWidth: 520, fontSize: 'clamp(16px,1.3vw,20px)' }}>{s.body}</p>
              <p className="process-step__caption">{s.caption}</p>
            </div>
            <div className="process-step__media">
              <span className="tape tape--cream" style={{ top: -16, left: '20%' }} />
              <span className="tape tape--lime" style={{ bottom: -14, right: '18%', transform: 'rotate(6deg)' }} />
              <img src={asset(s.image)} alt={`${s.word} stage`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
