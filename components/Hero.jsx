'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { asset } from '@/lib/data';
import { scrollToId } from '@/lib/scroll';
import Magnetic from './Magnetic';

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const play = () => {
        gsap.from('.hero__headline .line span', {
          yPercent: 110,
          rotate: 4,
          duration: 1,
          stagger: 0.09,
          ease: 'power4.out'
        });
        gsap.from('.hero__sub, .hero__actions', { opacity: 0, y: 24, duration: 0.8, delay: 0.5, stagger: 0.12 });
        gsap.from('.polaroid', { opacity: 0, scale: 0.7, rotate: 0, duration: 0.9, delay: 0.35, stagger: 0.1, ease: 'back.out(1.6)' });
      };
      if (window.__stickyLoaded) {
        play();
      } else {
        window.addEventListener('sticky:loaded', play, { once: true });
      }

      gsap.to('.polaroid--1', { y: -30, scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.polaroid--2', { y: 40, scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero__collage" aria-hidden="true">
        <figure className="polaroid polaroid--1">
          <span className="tape tape--cream" style={{ top: -14, left: '30%' }} />
          <img src={asset('/assets/project-brand.webp')} alt="" />
          <figcaption>brand mess</figcaption>
        </figure>
        <figure className="polaroid polaroid--2">
          <span className="tape" style={{ top: -14, right: '25%' }} />
          <img src={asset('/assets/project-web.webp')} alt="" />
          <figcaption>web stuff</figcaption>
        </figure>
        <figure className="polaroid polaroid--3">
          <span className="tape tape--lime" style={{ top: -14, left: '35%' }} />
          <img src={asset('/assets/project-pack.webp')} alt="" />
          <figcaption>pack it</figcaption>
        </figure>
        <figure className="polaroid polaroid--4">
          <span className="tape tape--dark" style={{ top: -14, right: '30%' }} />
          <img src={asset('/assets/portrait.webp')} alt="" />
          <figcaption>hi, it’s me</figcaption>
        </figure>
      </div>

      <div className="container">
        <h1 className="hero__headline">
          <span className="line"><span>Big ideas,</span></span>
          <span className="line"><span>sticky details,</span></span>
          <span className="line"><span>zero boring.</span></span>
        </h1>
        <p className="hero__sub">
          I’m a designer & creative developer making brands, websites and little internet moments that refuse to peel off.
        </p>
        <div className="hero__actions">
          <Magnetic><button className="btn" onClick={() => scrollToId('#work')} data-cursor="View">See the work</button></Magnetic>
          <Magnetic><button className="btn btn--ghost" onClick={() => scrollToId('#contact')} data-cursor="Say hi">Let’s talk</button></Magnetic>
        </div>
      </div>
    </section>
  );
}
