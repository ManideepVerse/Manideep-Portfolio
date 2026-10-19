

// Every entry is either on the résumé, used in a featured project, or added at the owner's request
import ChapterMark from './ChapterMark';

const skillGroups = [
    {
      label: 'AI & Agentic Systems',
      items: ['LLM Applications', 'RAG Pipelines', 'LangChain', 'LangGraph', 'NLP', 'Prompt Engineering', 'Guardrails', 'Observability']
    },
    {
      label: 'Machine Learning & Deep Learning',
      items: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Machine Learning', 'Deep Learning', 'CNNs', 'LSTMs & RNNs', 'Transformers', 'Fine-tuning', 'Model Evaluation', 'MLOps']
    },
    {
      label: 'Backend & Systems',
      items: ['FastAPI', 'Node.js', 'REST APIs', 'Redis', 'MySQL', 'MongoDB', 'Supabase', 'C & C++']
    },
    {
      label: 'Frontend & Product Engineering',
      items: ['React', 'JavaScript', 'HTML', 'CSS', 'Figma', 'UX Design']
    },
    {
      label: 'Tools & Deployment',
      items: ['Git', 'GitHub', 'AWS', 'Vercel', 'Render', 'Streamlit', 'Jupyter', 'Data Analytics']
    }
];


const Skills = () => {
  return (
    <section
        id="skills"
        className="pt-24 lg:pt-36"
    >
        <div className="container">

            <ChapterMark number="02" title="Learning to Think" />

            <div className="reveal">
                <p className="eyebrow">Skills</p>

                <h2 className="headline-2 mt-5">
                    Technical directory
                </h2>
            </div>

            <div className="mt-12 border-b border-line">
                {
                    skillGroups.map(({ label, items }, key) => (
                        <div
                            key={key}
                            style={{ '--step': key }}
                            data-journey-stop
                            className="group grid gap-3 py-6 border-t border-line md:grid-cols-12 md:gap-6 md:py-7 lg:ml-[calc(var(--step)*2.5%)] reveal"
                        >
                            <h3 className="flex gap-3 font-mono text-xs uppercase tracking-[0.2em] md:col-span-3 md:pt-1.5">
                                <span className="text-accent" aria-hidden="true">{'0' + (key + 1)}</span>

                                {label}
                            </h3>

                            <ul className="slashed text-lg font-medium text-slate-300 transition-colors duration-300 group-hover:text-foreground md:col-span-9 md:text-xl">
                                {items.map((item, key) => (
                                    <li key={key}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
