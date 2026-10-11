

/**
 * Components
 */
import ProjectCard from './ProjectCard';
import CareConnectPreview from './CareConnectPreview';
import QmasterPreview from './QmasterPreview';
import PlanItPalPreview from './PlanItPalPreview';
import ChapterMark from './ChapterMark';

// Stack and features are checked against each repository; no outcomes or metrics added.
const featured = [
    {
      id: 'careconnect',
      title: 'CareConnect',
      category: 'AI healthcare assistant',
      desc: 'A healthcare booking assistant with document Q&A. A Gemini-powered chat collects appointment details over several turns and confirms by email, while a retrieval pipeline answers questions about uploaded PDFs.',
      features: [
        'Conversational booking with multi-turn slot filling',
        'Automated email confirmations over SMTP',
        'PDF question answering with TF-IDF retrieval (RAG)',
        'Supabase-backed admin dashboard with search, filters, CRUD and CSV export'
      ],
      tags: ['Python', 'Streamlit', 'Google Gemini API', 'LangChain', 'RAG', 'TF-IDF', 'Supabase', 'SMTP'],
      projectLink: 'https://github.com/ManideepVerse/CareConnect',
      preview: <CareConnectPreview />,
      tone: '#22D3EE',
      lead: true
    },
    {
      id: 'qmaster',
      title: 'Qmaster',
      category: 'Real-time queue management',
      desc: 'A full-stack queue management system that keeps queue state in sync across web and mobile clients. FastAPI serves the REST API and Redis holds the live queue for low-latency updates.',
      features: [
        'Queue joining and status tracking from the mobile app',
        'REST endpoints to join, check status, leave, serve and skip',
        'React admin dashboard for serving and skipping tokens',
        'Redis-backed queue state shared by web and mobile clients'
      ],
      tags: ['Python', 'FastAPI', 'Redis', 'REST APIs', 'React', 'React Native (Expo)', 'Render', 'Vercel'],
      projectLink: 'https://github.com/ManideepVerse/Qmaster',
      preview: <QmasterPreview />,
      tone: '#A78BFA',
      flip: true
    },
    {
      id: 'plan-it-pal',
      title: 'Plan It Pal',
      category: 'AI travel planner',
      desc: 'An AI travel planner built with React and the Google Gemini API. It generates personalised, day-wise itineraries with prices and ratings, and uses Google Maps to locate each venue.',
      features: [
        'Personalised, day-wise itinerary generation',
        'Hotel and venue cards with pricing and ratings',
        'Map links for venue locations',
        'Destination search with trip length, budget and traveller filters'
      ],
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Google Gemini API', 'Google Maps API', 'Firebase', 'Vercel'],
      projectLink: 'https://github.com/ManideepVerse/Plan-It-Pal',
      preview: <PlanItPalPreview />,
      tone: '#CBD5E1'
    },
];



const Work = () => {
  return (
    <section
        id="work"
        className="section"
    >
        <div className="container">

            <ChapterMark number="03" title="From Ideas to Systems" />

            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12 reveal">
                <div className="lg:col-span-8">
                    <p className="eyebrow">Selected work</p>

                    <h2 className="headline-1 mt-5">
                        Projects that solve <span className="text-accent">real problems</span>
                    </h2>
                </div>

                <p className="text-muted max-w-[44ch] lg:col-span-4 lg:pb-2">
                    Three featured full-stack and AI projects: an LLM-powered healthcare assistant, a real-time queue system and an AI travel planner. Together they cover REST APIs, real-time data, LLM integration, retrieval and responsive React interfaces.
                </p>
            </div>

            <div className="grid gap-28 mt-24 lg:gap-48 lg:mt-36">
                {featured.map((project, key) => (
                    <ProjectCard
                        key={key}
                        {...project}
                        index={'0' + (key + 1)}
                        classes="reveal"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work
