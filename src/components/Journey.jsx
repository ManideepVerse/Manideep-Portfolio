

/**
 * Node modules
 */
import { useEffect, useRef, useState } from 'react';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// How far down the viewport the lit part of the path reaches
const HEAD = 0.62;

/**
 * Decorative path that links the sections into one journey.
 * The path is measured from the real section positions, lights up as the page scrolls
 * and adds no text.
 */
const Journey = () => {
  const svg = useRef(null);
  const clip = useRef(null);
  const [shape, setShape] = useState(null);

  useEffect(() => {
    const host = svg.current.parentElement;

    const onScroll = () => {
      const y = window.scrollY - host.offsetTop;

      clip.current?.setAttribute('height', reduceMotion ? host.offsetHeight : Math.max(0, y + window.innerHeight * HEAD));

      // Lets the fixed background lighting drift as the journey advances
      if (!reduceMotion) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty('--journey', max > 0 ? (window.scrollY / max).toFixed(3) : 0);
      }
    };

    const measure = () => {
      const W = host.clientWidth;
      const H = host.offsetHeight;
      const sections = [...host.querySelectorAll('main > section')];
      if (!sections.length) return;

      // On wide screens the path swaps gutters at every section; below lg it is a straight rail
      const wide = W >= 1024;
      const gutter = sections[0].querySelector('.container').getBoundingClientRect().left;
      const left = wide ? Math.max(14, gutter * 0.55) : 8;
      const sideOf = (i) => (wide && i % 2 ? W - left : left);

      const tops = sections.map((section) => section.offsetTop);

      const nodes = sections.map((section, i) => ({
        id: section.id,
        x: sideOf(i),
        y: i ? tops[i] + parseFloat(getComputedStyle(section).paddingTop) + 6 : tops[0] + 136
      }));

      let d = 'M' + nodes[0].x + ' ' + nodes[0].y;
      for (let i = 1; i < sections.length; i++) {
        const from = sideOf(i - 1), to = sideOf(i), top = tops[i];

        d += ' V' + (top + 16);
        if (from !== to) d += ' C' + from + ' ' + (top + 70) + ' ' + to + ' ' + (top + 40) + ' ' + to + ' ' + (top + 104);
      }
      d += ' V' + (H - 24);

      // Branches from the path to marked blocks (skill groups, projects, experience).
      // offsetTop is used so reveal transforms in progress do not shift the result.
      const topOf = (element) => {
        let y = 0;
        for (let node = element; node && node !== host; node = node.offsetParent) y += node.offsetTop;
        return y;
      };
      const edge = wide ? gutter : 20;
      const stops = [...host.querySelectorAll('[data-journey-stop]')].map((element) => {
        const x = sideOf(sections.indexOf(element.closest('section')));

        return { x, y: topOf(element) + 30, to: x < W / 2 ? edge - 6 : W - edge + 6 };
      });

      setShape({ W, H, d, nodes, stops });
      onScroll();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(host);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
        <svg
            ref={svg}
            aria-hidden="true"
            width={shape?.W}
            height={shape?.H}
            fill="none"
            className="absolute top-0 left-0 -z-10 pointer-events-none"
        >
            {shape &&
                <>
                    <defs>
                        <linearGradient id="journey-ink" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={shape.H}>
                            <stop offset="0" stopColor="#22D3EE" />
                            <stop offset="0.5" stopColor="#A78BFA" />
                            <stop offset="1" stopColor="#22D3EE" />
                        </linearGradient>

                        <clipPath id="journey-clip">
                            <rect ref={clip} x="0" y="0" width={shape.W} height={reduceMotion ? shape.H : 0} />
                        </clipPath>
                    </defs>

                    {/* The whole route, faint */}
                    <path d={shape.d} stroke="#1B2230" />

                    {shape.stops.map(({ x, y, to }, key) => (
                        <path key={key} d={'M' + x + ' ' + y + ' H' + to} stroke="#1B2230" />
                    ))}

                    {shape.nodes.map(({ id, x, y }) => (
                        <circle key={id} cx={x} cy={y} r="5" fill="#05070B" stroke="#334155" />
                    ))}

                    {/* The part already travelled, lit */}
                    <g clipPath="url(#journey-clip)">
                        <path d={shape.d} stroke="url(#journey-ink)" strokeWidth="1.5" />

                        {shape.nodes.map(({ id, x, y }) => (
                            <g key={id}>
                                <circle cx={x} cy={y} r="5" fill="#05070B" stroke="#22D3EE" />
                                <circle cx={x} cy={y} r="2" fill="#22D3EE" />
                            </g>
                        ))}

                        {shape.stops.map(({ x, y, to }, key) => (
                            <g key={key}>
                                <path d={'M' + x + ' ' + y + ' H' + to} stroke="#A78BFA" strokeOpacity="0.7" />
                                <circle cx={x} cy={y} r="2.5" fill="#A78BFA" />
                            </g>
                        ))}

                        {/* Where the signal begins */}
                        <circle cx={shape.nodes[0].x} cy={shape.nodes[0].y} r="5" stroke="#22D3EE" className="signal" />
                    </g>
                </>
            }
        </svg>
  )
}

export default Journey
