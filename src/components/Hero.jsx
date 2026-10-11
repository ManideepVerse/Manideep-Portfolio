

/**
 * Node modules
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button';
import AgentGraph from './AgentGraph';
import Icon from './Icon';
import ChapterMark from './ChapterMark';

// Public link to the current CV, set per environment. Falls back to the copy shipped with the site.
const cvUrl = import.meta.env.VITE_CV_URL || '/resumes/Mani_Resume_New_1.pdf';

const headline = [
    { text: 'Engineering ' },
    { text: 'Intelligence. ' },
    { text: 'Building ' },
    { text: 'Autonomous ', accent: true },
    { text: 'Systems.', accent: true }
];

const focusAreas = [
    'Agentic AI engineering',
    'LLM applications and RAG systems',
    'AI-powered product development',
    'Backend and full-stack engineering',
    'Intelligent workflow automation'
];

const Hero = () => {
  const root = useRef(null);

  useGSAP(() => {
    // Entrance only; the hero is fully visible without it
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-line', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.09 });
      gsap.from('.hero-fade', { opacity: 0, y: 16, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.5 });
      gsap.from('.graph-line', { opacity: 0, duration: 1, ease: 'power1.out', delay: 0.5 });
      gsap.from('.graph-node', { opacity: 0, scale: 0.6, transformOrigin: '50% 50%', duration: 0.6, ease: 'back.out(1.6)', stagger: 0.08, delay: 0.7 });
    });
  }, { scope: root });

  return (
    <section
        id="home"
        ref={root}
        className="relative isolate pt-32 pb-8 overflow-hidden lg:min-h-[100svh] lg:flex lg:flex-col lg:justify-end"
    >

        <div className="container">

            <ChapterMark number="01" title="The Beginning" classes="hero-fade mb-6" />

            <div className="hero-fade flex flex-wrap items-center gap-x-6 gap-y-2">
                {/* Shown here beside the status; the h1 below carries the name for assistive tech */}
                <p className="font-display text-2xl font-bold md:text-3xl" aria-hidden="true">Manideep D.</p>

                <p className="eyebrow flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>

                    Available for work
                </p>
            </div>

            <h1 className="mt-6">
                <span className="sr-only">Manideep D. </span>

                <span className="display block">
                    {headline.map(({ text, accent }, key) => (
                        <span
                            key={key}
                            className="block py-[0.03em] overflow-hidden"
                        >
                            <span className={'hero-line block ' + (accent ? 'text-accent' : '')}>{text}</span>
                        </span>
                    ))}
                </span>
            </h1>

            <div className="hero-fade mt-8 lg:mt-10">
                <p className="max-w-[46ch] text-lg text-muted md:text-xl">
                    I build AI-powered applications, agentic workflows, and reliable software systems that turn complex problems into practical products.
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-8">
                    <ButtonPrimary
                        href="#work"
                        label="View selected work"
                        icon="arrow_downward"
                    />

                    <ButtonOutline
                        href="#contact"
                        label="Let's collaborate"
                        icon="arrow_forward"
                    />

                    <a
                        href={cvUrl}
                        download=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow flex items-center gap-2 h-12 px-3 transition-colors hover:text-accent"
                    >
                        Download CV

                        <Icon name="download" />
                    </a>
                </div>
            </div>

            <AgentGraph />

            <div className="hero-fade mt-12 pt-5 border-t border-line lg:mt-16">
                <p className="eyebrow">Focus areas</p>

                <ol className="grid gap-x-6 gap-y-3 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                    {focusAreas.map((area, key) => (
                        <li
                            key={key}
                            className="flex gap-3 text-sm"
                        >
                            <span className="font-mono text-xs text-accent" aria-hidden="true">{'0' + (key + 1)}</span>

                            {area}
                        </li>
                    ))}
                </ol>
            </div>

            <a
                href="#skills"
                className="hero-fade eyebrow inline-flex items-center gap-3 mt-10 transition-colors hover:text-accent"
            >
                Begin the journey

                <Icon name="arrow_downward" />
            </a>

        </div>

    </section>
  )
}

export default Hero
