

/**
 * Components
 */
import ChapterMark from './ChapterMark';
import Icon from './Icon';

const experience = {
    label: 'Experience',
    title: 'AI Intern, Infosys Springboard',
    desc: 'May – Jul 2024 · Built a web application for translation between Indian languages and English using IndicTrans models, with a Flask backend and Figma wireframes.'
};

const more = [
    {
      title: 'Pix Compressor',
      desc: 'A client-side image compressor that runs a binary search on the HTML5 Canvas API to reach a target file size, with JPG, PNG, WebP and PDF conversion.',
      tags: ['JavaScript', 'Canvas API'],
      projectLink: 'https://github.com/ManideepVerse/Pix-Compressor'
    },
    {
      title: 'Off GPT',
      desc: 'A chatbot built on a large language model for real-time, context-aware, multi-turn conversations.',
      tags: ['GPT', 'LLM'],
      projectLink: 'https://colab.research.google.com/drive/1jlzeIzqkwybWydIxR9EETQqbk5f9nA2p?usp=sharing'
    },
    {
      title: 'Cardio Vascular Disease Prediction System',
      tags: ['Machine Learning', 'Predictive Healthcare'],
      projectLink: 'https://github.com/ManideepVerse/Cardiovascular-Disease-Prediction'
    },
    {
      title: 'Spotify Songs Genre Segmentation',
      tags: ['Machine Learning', 'Music Analysis'],
      projectLink: 'https://github.com/ManideepVerse/Spotify-Songs-Genre-Segmentation'
    },
];


const Evidence = () => {
  return (
    <section
        id="evidence"
        className="section"
    >
        <div className="container">

            <ChapterMark number="04" title="Experimentation" as="h2" />

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

                <dl
                    data-journey-stop
                    className="border-t border-line lg:col-span-4 lg:sticky lg:top-28 lg:self-start reveal"
                >
                    <div className="py-5 border-b border-line">
                        <dt className="eyebrow">{experience.label}</dt>

                        <dd className="mt-2">
                            <p className="font-medium">{experience.title}</p>

                            <p className="mt-1 text-sm text-muted">{experience.desc}</p>
                        </dd>
                    </div>
                </dl>

                <div className="lg:col-span-8 reveal">
                <h3 className="eyebrow mb-4">More projects</h3>

                <ul className="border-t border-line">
                    {more.map(({ title, desc, tags, projectLink }, key) => (
                        <li
                            key={key}
                            className="border-b border-line"
                        >
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grid gap-3 py-6 md:grid-cols-12 md:items-center md:gap-6"
                            >
                                <span className="md:col-span-7">
                                    <span className="block text-lg font-medium transition-colors group-hover:text-accent">
                                        {title}
                                    </span>

                                    {desc &&
                                        <span className="block mt-1 text-sm text-muted max-w-[60ch]">
                                            {desc}
                                        </span>
                                    }
                                </span>

                                <span className="font-mono text-xs uppercase tracking-wider text-muted md:col-span-4">
                                    {tags.join(' / ')}
                                </span>

                                <Icon
                                    name="arrow_outward"
                                    classes="text-muted transition-[transform,color] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none md:justify-self-end"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Evidence
