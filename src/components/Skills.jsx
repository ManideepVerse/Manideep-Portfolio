import React from 'react'


/**
 * Components
 */
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: "/Manideep - Portfolio Images/images/python-original.svg",
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/ai-dl.svg",
      label: 'Deep learning',
      desc: 'AI Technique'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/figma.svg",
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/html5-original.svg",
      label: 'HTML',
      desc: 'Markup Language'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/css3.svg",
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/javascript.svg",
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/nodejs.svg",
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/mysql-original.svg",
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/mongodb.svg",
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/react.svg",
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/data-analytics.svg",
      label: 'Data Analytics',
      desc: 'Analytical Process'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/jupyter-original-wordmark.svg",
      label: 'Jupyter',
      desc: 'Tool'
    },
    {
      imgSrc: "/Manideep - Portfolio Images/images/keras-original.svg",
      label: 'Keras',
      desc: 'Fraamework'
    },
    
];


const Skills = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills