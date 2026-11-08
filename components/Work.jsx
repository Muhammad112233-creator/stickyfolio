'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { asset, projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const section = useRef(null);
  const track = useRef(null);
  const progress = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 901px)', () => {
      const getDistance = () => track.current.scrollWidth - window.innerWidth;
      const tween = gsap.to(track.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress.current) progress.current.style.width = `${self.progress * 100}%`;
          }
        }
      });
      return () => tween.scrollTrigger?.kill();
    });

    mm.add('(max-width: 900px)', () => {
      const el = track.current;
      const onScroll = () => {
        const max = el.scrollWidth - el.clientWidth;
        if (progress.current) progress.current.style.width = `${max ? (el.scrollLeft / max) * 100 : 0}%`;
      };
      el.addEventListener('scroll', onScroll);
      return () => el.removeEventListener('scroll', onScroll);
    });

    return () => mm.revert();
  }, []);

  const nudge = (dir) => {
    const card = track.current.querySelector('.project-card');
    const amount = (card?.offsetWidth || 400) + 32;
    if (window.innerWidth > 900 && window.__lenis) {
      const st = ScrollTrigger.getAll().find((s) => s.trigger === section.current);
      if (st) window.__lenis.scrollTo(st.start + (st.end - st.start) * Math.min(1, Math.max(0, (window.scrollY - st.start) / (st.end - st.start) + dir * 0.25)));
    } else {
      track.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="work section" id="work" ref={section}>
      <div className="container section__head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Things I made stick.</h2>
        </div>
        <div className="work__controls">
          <button className="work__btn" onClick={() => nudge(-1)} aria-label="Previous project" data-cursor="Prev">←</button>
          <button className="work__btn" onClick={() => nudge(1)} aria-label="Next project" data-cursor="Next">→</button>
        </div>
      </div>

      <div className="work__viewport">
        <div className="work__track" ref={track}>
          {projects.map((p) => (
            <article className="project-card" key={p.id} data-cursor="View">
              <span className="tape" style={{ top: -14, left: 24, transform: 'rotate(-4deg)' }} />
              <div className="project-card__media" style={{ background: p.color }}>
                <img src={asset(p.image)} alt={`${p.title} — ${p.category}`} loading="lazy" />
              </div>
              <div className="project-card__body">
                <div className="project-card__meta"><span>{p.index} / {p.category}</span><span>{p.year}</span></div>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="project-card__tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="work__progress"><i ref={progress} /></div>
    </section>
  );
}
