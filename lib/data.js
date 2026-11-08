export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${clean}`;
}

export const projects = [
  {
    id: 'citrus-club',
    index: '01',
    title: 'Citrus Club',
    category: 'Brand Identity',
    year: '2026',
    image: '/assets/project-brand.webp',
    color: '#ff7e00',
    tags: ['Art Direction', 'Packaging', 'Print'],
    blurb: 'A loud little soda brand built from hand-cut labels, citrus stains and too much yellow tape.'
  },
  {
    id: 'paper-plane',
    index: '02',
    title: 'Paper Plane',
    category: 'E-commerce',
    year: '2026',
    image: '/assets/project-web.webp',
    color: '#034102',
    tags: ['Next.js', 'Shopify', 'Motion'],
    blurb: 'A stationery shop that feels like rummaging through the best drawer in the studio.'
  },
  {
    id: 'stick-with-it',
    index: '03',
    title: 'Stick With It',
    category: 'Packaging System',
    year: '2025',
    image: '/assets/project-pack.webp',
    color: '#fcd805',
    tags: ['Structure', 'Sustainability', 'Illustration'],
    blurb: 'Modular packaging for a craft subscription box — taped, stamped and ready to post.'
  },
  {
    id: 'studio-self',
    index: '04',
    title: 'Studio Self',
    category: 'Portfolio Site',
    year: '2025',
    image: '/assets/portrait.webp',
    color: '#b6fe00',
    tags: ['Web Design', 'GSAP', 'Three.js'],
    blurb: 'This very template: a portfolio that treats the browser like a craft table.'
  }
];

export const skills = [
  {
    id: 'design',
    label: 'Design',
    color: '#fcd805',
    ink: '#16110a',
    title: 'Art direction & identity',
    body: 'Logos, type, colour and the weird little details that make a brand feel like a person instead of a PDF.'
  },
  {
    id: 'code',
    label: 'Code',
    color: '#b6fe00',
    ink: '#034102',
    title: 'Front-end that behaves',
    body: 'Next.js, React and tidy component systems. Fast, accessible, and animated without turning into a slideshow.'
  },
  {
    id: 'motion',
    label: 'Motion',
    color: '#ff7e00',
    ink: '#16110a',
    title: 'Scroll, hover, delight',
    body: 'GSAP + Lenis choreography: marquees, reveals, magnetic buttons and scroll scenes that feel hand-made.'
  },
  {
    id: 'brand',
    label: 'Brand',
    color: '#fff1a2',
    ink: '#16110a',
    title: 'Voice & world-building',
    body: 'Naming, tone, packaging and the tiny rules that keep a brand consistent across every sticky surface.'
  },
  {
    id: '3d',
    label: '3D',
    color: '#034102',
    ink: '#b6fe00',
    title: 'Playful WebGL moments',
    body: 'Small Three.js objects with big personality. Used like seasoning, not the whole meal.'
  },
  {
    id: 'strategy',
    label: 'Strategy',
    color: '#16110a',
    ink: '#fff1a2',
    title: 'Plan before you tape',
    body: 'Workshops, sitemaps and launch plans that stop pretty ideas from falling apart in production.'
  }
];

export const processSteps = [
  {
    index: '01',
    word: 'SHAPE',
    caption: 'every good idea starts as a messy sketch.',
    body: 'We start with references, questions and a wall of sticky notes. Then we cut away everything that does not belong.',
    image: '/assets/project-brand.webp'
  },
  {
    index: '02',
    word: 'BUILD',
    caption: 'the quick fix that outlasts the thing it fixed.',
    body: 'Design becomes code: components, motion, responsive layouts and a CMS-ready structure that is easy to update.',
    image: '/assets/project-web.webp'
  },
  {
    index: '03',
    word: 'LAUNCH',
    caption: 'from our hands to theirs, arriving whole.',
    body: 'Testing, performance, SEO and a clean handoff. Then we stick around long enough to make sure it actually holds.',
    image: '/assets/project-pack.webp'
  }
];
