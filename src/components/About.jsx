
import ChapterMark from './ChapterMark';

const aboutItems = [
    {
      label: 'Education',
      title: 'B.Tech, Computer Science and Engineering',
      desc: 'Amrita Vishwa Vidyapeetham, Amaravati · 2022 – 2026'
    }
];

// As listed on the current résumé
const certifications = [
    'Google Data Analytics Professional Certificate',
    'AWS Certified Cloud Practitioner',
    'Introduction to Machine Learning – IIT Madras'
];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">

            <ChapterMark number="05" title="Engineering Intelligence" as="h2" />

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

                <figure className="relative max-w-[280px] lg:col-span-3 lg:max-w-none reveal">
                    <img
                      src="/Manideep - Portfolio Images/images/maniimgf.webp"
                      alt="Portrait of Manideep D."
                      width={656}
                      height={800}
                      loading="lazy"
                      className="w-full h-auto [mask-image:linear-gradient(black_72%,transparent)]"
                    />
                </figure>

                <div className="lg:col-span-5 reveal">
                    <p className="text-lg text-muted">
                      I&apos;m Manideep D, I enjoy solving complex problems and building intelligent applications using LLMs, RAG, and LangChain. With hands on experience in machine learning, AI observability, model evaluation, and backend development, I focus on creating reliable, scalable solutions. My foundation in data structures, algorithms, and full-stack development helps me turn challenging ideas into practical software.
                    </p>

                    <dl className="mt-8 border-t border-line">
                        {
                            aboutItems.map(({ label, title, desc }, key) => (
                                <div
                                    key={key}
                                    className="py-5 border-b border-line"
                                >
                                    <dt className="eyebrow">{label}</dt>

                                    <dd className="mt-2">
                                        <p className="font-medium">{title}</p>

                                        <p className="mt-1 text-sm text-muted">{desc}</p>
                                    </dd>
                                </div>
                            ))
                        }
                    </dl>
                </div>

                <div className="lg:col-span-4 reveal">
                    <h3 className="eyebrow">Certifications</h3>

                    <ol className="mt-4 border-t border-line">
                        {certifications.map((name, key) => (
                            <li
                                key={key}
                                className="flex gap-4 py-3.5 text-sm border-b border-line"
                            >
                                <span className="font-mono text-xs text-accent" aria-hidden="true">{'0' + (key + 1)}</span>

                                {name}
                            </li>
                        ))}
                    </ol>
                </div>

            </div>

        </div>
    </section>
  )
};

export default About
