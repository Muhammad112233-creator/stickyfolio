'use client';

import { useEffect, useState } from 'react';

let ctx;
function tapeSound() {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.18;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const t = i / data.length;
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2) * 0.5;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    const gain = ctx.createGain();
    gain.gain.value = 0.25;
    src.connect(filter).connect(gain).connect(ctx.destination);
    src.start();
  } catch {}
}

export default function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!on) return;
      if (e.target.closest('a, button')) tapeSound();
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [on]);

  return (
    <button
      className="sound-toggle"
      aria-label={on ? 'Mute tape sounds' : 'Enable tape sounds'}
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
      data-cursor={on ? 'Mute' : 'Sound'}
    >
      {on ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>
      )}
    </button>
  );
}
