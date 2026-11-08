'use client';

import { useEffect, useState } from 'react';
import { scrollToId } from '@/lib/scroll';
import SoundToggle from './SoundToggle';

const links = [
  ['Home', '#home'],
  ['Work', '#work'],
  ['About', '#about'],
  ['Process', '#process'],
  ['Contact', '#contact']
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(href), 50);
  };

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a href="#home" className="nav__logo" onClick={(e) => go(e, '#home')} data-cursor="Home">
            <i /> Stickyfolio
          </a>
          <nav className="nav__links" aria-label="Primary">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={(e) => go(e, href)}>{label}</a>
            ))}
          </nav>
          <SoundToggle />
          <button className="nav__pull" onClick={() => setOpen(true)} data-cursor="Pull">Pull me</button>
        </div>
      </header>

      <div className={`menu-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button className="btn btn--lime menu-close" onClick={() => setOpen(false)}>Close</button>
        <nav aria-label="Menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => go(e, href)}>{label}</a>
          ))}
        </nav>
        <p className="hand" style={{ position: 'absolute', bottom: 30, fontSize: 26 }}>pull tab → big menu</p>
      </div>
    </>
  );
}
