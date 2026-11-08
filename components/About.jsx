'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { asset, skills } from '@/lib/data';
import TapeRoll3D from './TapeRoll3D';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);
  const [active, setActive] = useState(skills[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__portrait', {
        opacity: 0, x: -60, rotate: -3, duration: 1,
        scrollTrigger: { trigger: root.current, start: 'top 70%' }
      });
      gsap.from('.about__copy > *', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.8,
        scrollTrigger: { trigger: '.about__copy', start: 'top 75%' }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section section--green curve-top" id="about" ref={root}>
      <div className="container about__grid">
        <div className="about__portrait">
          <span className="tape tape--lime" style={{ top: -18, left: '18%' }} />
          <span className="tape" style={{ bottom: -14, right: '12%', transform: 'rotate(8deg)' }} />
          <img src={asset('/assets/portrait.webp')} alt="Portrait of the designer in an orange studio" />
          <div className="about__note">yes, I actually use this much tape</div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">The maker</p>
          <h2 className="h2">Meet the one who sticks.</h2>
          <p style={{ fontSize: 'clamp(16px,1.3vw,20px)', maxWidth: 560 }}>
            I help small teams and loud brands look like themselves — then build the website to prove it.
            Part designer, part front-end nerd, full-time believer that craft still matters.
          </p>

          <div className="skills__rolls" role="tablist" aria-label="Skills">
            {skills.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active.id === s.id}
                className={`roll-btn ${active.id === s.id ? 'is-active' : ''}`}
                style={{ '--roll-color': s.color, color: s.ink, background: s.color }}
                onClick={() => setActive(s)}
                data-cursor="Roll"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="skill-panel" aria-live="polite">
            <h3>{active.title}</h3>
            <p>{active.body}</p>
          </div>

          <div className="three-wrap" aria-hidden="true">
            <TapeRoll3D color={active.color} />
          </div>
        </div>
      </div>
    </section>
  );
}
