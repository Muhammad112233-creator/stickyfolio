'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToId } from '@/lib/scroll';
import Magnetic from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer__cta .h2 span', {
        yPercent: 110, duration: 1, stagger: 0.08, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" id="contact" ref={root}>
      <div className="container footer__cta">
        <p className="eyebrow">Got a project?</p>
        <h2 className="h2">
          <span className="line" style={{ display: 'block', overflow: 'hidden' }}><span>Let’s make</span></span>
          <span className="line" style={{ display: 'block', overflow: 'hidden' }}><span>it stick!</span></span>
        </h2>
        <Magnetic>
          <a className="footer__email" href="mailto:hello@stickyfolio.dev" data-cursor="Email">hello@stickyfolio.dev</a>
        </Magnetic>
        <p className="hand" style={{ fontSize: 26, marginTop: 18 }}>for everything that matters.</p>
      </div>

      <div className="container footer__grid">
        <nav className="nav__links" aria-label="Footer" style={{ display: 'flex' }}>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollToId('#work'); }}>Work</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('#about'); }}>About</a>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollToId('#process'); }}>Process</a>
        </nav>
        <div className="footer__social">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor="Git">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" data-cursor="Ball">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8.5 2.7c3 4 4.5 8.5 5.5 18.6M2.3 10.5c6 1 12 0 17.5-4.5M21.7 13.5c-6-2-12-1-17 3"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor="In">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.45V24H8V8z"/></svg>
          </a>
        </div>
        <button className="back-top" onClick={() => scrollToId('#home')} data-cursor="Top">Back to top ↑</button>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Stickyfolio. Handmade with tape & code.</span>
        <span>Next.js · GSAP · Lenis · Three.js</span>
      </div>
    </footer>
  );
}
