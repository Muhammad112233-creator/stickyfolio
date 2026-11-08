<div align="center">

<img src=".github/assets/banner.svg" alt="Stickyfolio — animated rainbow banner" width="100%" />

<br />
<br />

<a href="#-quick-start"><img src="https://img.shields.io/badge/Quick%20Start-ff7e00?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" /></a>
<a href="#-deploy-to-github-pages"><img src="https://img.shields.io/badge/Deploy-fcd805?style=for-the-badge&logo=github&logoColor=16110a" alt="Deploy" /></a>
<a href="PUBLISH_GUIDE.md"><img src="https://img.shields.io/badge/Publish%20Guide-b6fe00?style=for-the-badge&logo=gitbook&logoColor=034102" alt="Publish Guide" /></a>
<a href="#-license"><img src="https://img.shields.io/badge/License-MIT-034102?style=for-the-badge" alt="MIT License" /></a>

<br />
<br />

<img src="https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js" alt="Next.js 15" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=000" alt="React 19" />
<img src="https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=fff" alt="GSAP" />
<img src="https://img.shields.io/badge/Lenis-Smooth%20Scroll-ff7e00?style=flat-square" alt="Lenis" />
<img src="https://img.shields.io/badge/Three.js-WebGL-000000?style=flat-square&logo=three.js" alt="Three.js" />
<img src="https://img.shields.io/badge/GitHub%20Pages-Ready-222?style=flat-square&logo=github" alt="GitHub Pages ready" />

<br />
<br />

**A playful, tape-inspired portfolio template for designers, creative developers and studios.**  
Handmade feel, smooth motion, bold colour, and a static export that is ready for GitHub Pages.

<br />

<img src=".github/assets/divider.svg" alt="animated rainbow divider" width="100%" />

</div>

<br />

<img src=".github/assets/heading-features.svg" alt="Features" width="100%" />

### ✨ What makes it stick?

| Feature                        | Description                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- |
| 🎬 **Cinematic preloader**     | Tape-roll loading scene with percentage counter and smooth exit.            |
| 🖱️ **Custom cursor**           | Magnetic dot + trailing tape strip, with hover labels on buttons and links. |
| 🧲 **Magnetic buttons**        | Buttons gently follow the pointer for a tactile, handcrafted feel.          |
| 🌀 **Lenis smooth scroll**     | Buttery scroll behaviour wired into GSAP ScrollTrigger.                     |
| 🎞️ **Scroll-driven scenes**    | Hero parallax, pinned horizontal work gallery, reveals and progress bars.   |
| 🧻 **Interactive skill rolls** | Clickable tape-roll tabs that update copy and recolour the 3D object.       |
| 🧊 **Three.js tape roll**      | Lightweight WebGL accent, lazy-loaded and cleaned up properly.              |
| 🔊 **Optional tape sounds**    | Tiny Web Audio “tape rip” clicks, off by default.                           |
| 📱 **Fully responsive**        | Mobile menu, touch-friendly gallery, reduced-motion support.                |
| ♿ **Accessible touches**      | Skip link, semantic sections, ARIA labels, keyboard-friendly controls.      |
| 🚀 **Static export**           | `next build` produces a plain static site for GitHub Pages.                 |
| 🌈 **Animated README**         | Rainbow SVG banner, section headers and dividers.                           |

<br />

<img src=".github/assets/heading-stack.svg" alt="Tech Stack" width="100%" />

### 🧰 Built with the good stuff

```txt
Next.js 15 App Router      → structure, routing, static export
React 19                   → components and state
GSAP + ScrollTrigger       → animation choreography
Lenis                      → smooth scrolling
Three.js                   → playful WebGL tape roll
next/font                  → self-hosted Google Fonts
Web Audio API              → optional tape sound effects
GitHub Pages / Actions     → publishing
```

> This is an **original template** inspired by tactile, craft-table web aesthetics.  
> It does not copy any third-party website’s protected assets, copy, or code.

<br />

<img src=".github/assets/heading-quickstart.svg" alt="Quick Start" width="100%" />

### 🚀 Run it locally

> Requirements: **Node.js 18.18+** (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

<img src=".github/assets/heading-customize.svg" alt="Customize" width="100%" />

### 🎨 Make it yours

| What to change                 | Where                                 |
| ------------------------------ | ------------------------------------- |
| Projects, skills, process copy | `lib/data.js`                         |
| Images                         | `public/assets/`                      |
| Brand colours                  | `app/globals.css` (`:root` variables) |
| Fonts                          | `app/layout.jsx`                      |
| SEO title / description        | `app/layout.jsx`                      |
| Email / social links           | `components/Footer.jsx`               |
| Nav links                      | `components/Nav.jsx`                  |
| Animation timing               | `components/*.jsx`                    |
| README banner                  | `.github/assets/*.svg`                |

#### Colour palette

```css
--orange: #ff7e00;
--green: #034102;
--lime: #b6fe00;
--yellow: #fcd805;
--cream: #fff1a2;
--ink: #16110a;
--paper: #f6efdf;
```

#### Project structure

```txt
stickyfolio/
├─ app/
│  ├─ globals.css
│  ├─ layout.jsx
│  └─ page.jsx
├─ components/
│  ├─ About.jsx
│  ├─ Cursor.jsx
│  ├─ Footer.jsx
│  ├─ Hero.jsx
│  ├─ Magnetic.jsx
│  ├─ Manifesto.jsx
│  ├─ Marquee.jsx
│  ├─ Nav.jsx
│  ├─ Preloader.jsx
│  ├─ Process.jsx
│  ├─ SmoothScroll.jsx
│  ├─ SoundToggle.jsx
│  ├─ TapeRoll3D.jsx
│  └─ Work.jsx
├─ lib/
│  ├─ data.js
│  └─ scroll.js
├─ public/
│  ├─ assets/
│  ├─ favicon.svg
│  └─ robots.txt
├─ scripts/
│  ├─ build-pages.mjs
│  └─ preview-static.mjs
├─ docs/                  ← static GitHub Pages build
├─ .github/
│  ├─ assets/             ← animated README SVGs
│  └─ workflows/deploy.yml
├─ .gitignore
├─ .nvmrc
├─ LICENSE
├─ next.config.mjs
├─ package.json
└─ README.md
```

<br />

<img src=".github/assets/heading-license.svg" alt="License" width="100%" />

### 📄 License

MIT — use it, remix it, ship it. See [LICENSE](LICENSE).

<div align="center">

<img src=".github/assets/footer.svg" alt="animated rainbow footer" width="100%" />

<br />

**If this template helped you, give the repo a ⭐ and make something that sticks.**

</div>
