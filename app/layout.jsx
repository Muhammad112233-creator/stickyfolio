import { Oswald, Inter_Tight, Caveat } from 'next/font/google';
import './globals.css';

const heading = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap'
});

const body = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const hand = Caveat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-hand',
  display: 'swap'
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const viewport = {
  themeColor: '#034102'
};

export const metadata = {
  icons: { icon: `${basePath}/favicon.svg` },
  title: 'Stickyfolio — Ideas That Stick',
  description:
    'A playful, tape-inspired portfolio template for designers and creative developers. Built with Next.js, GSAP, Lenis and Three.js.',
  keywords: ['portfolio', 'template', 'next.js', 'gsap', 'lenis', 'three.js', 'creative developer'],
  openGraph: {
    title: 'Stickyfolio — Ideas That Stick',
    description: 'A playful, tape-inspired portfolio template.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
