


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */

import Header from "./components/Header";
import Journey from "./components/Journey";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Evidence from "./components/Evidence";

import Contact from "./components/Contact";
import Footer from "./components/Footer";


const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


const App = () => {

  useGSAP(() => {
    // Everything is visible in CSS; hidden start states are only set here,
    // so content stays readable without JS, without GSAP, or with reduced motion.
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set('.reveal', { opacity: 0, y: 24 });

      ScrollTrigger.batch('.reveal', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          overwrite: true
        })
      });

      // Slow drift on the oversized numerals for a little depth
      gsap.utils.toArray('[data-drift]').forEach((element) => {
        gsap.to(element, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      gsap.to('.progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 }
      });
    });
  });

  const page = (
    <>
      <div className="atmosphere" aria-hidden="true"></div>
      <div className="progress" aria-hidden="true"></div>

      <Header />
      <div className="relative isolate">
      <Journey />
      <main>
        <Hero />
        <Skills />
        <Work />
        <Evidence />
        <About />
        <Contact />
      </main>
      </div>
      <Footer />
    </>
  );

  return reduceMotion ? page : <ReactLenis root>{page}</ReactLenis>
}

export default App;
