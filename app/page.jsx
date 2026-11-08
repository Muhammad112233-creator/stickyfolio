import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Manifesto from '@/components/Manifesto';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Preloader />
      <Cursor />
      <SmoothScroll />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee items={['When ideas get messy', 'Something has to hold', 'Design', 'Code', 'Motion', 'Brand']} />
        <About />
        <Work />
        <Marquee green items={['Available for freelance', 'Let’s make it stick', 'Remote worldwide', 'Say hello']} speed={26} />
        <Process />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
