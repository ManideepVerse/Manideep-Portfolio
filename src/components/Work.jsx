import React from 'react'


/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/Manideep - Portfolio Images/images/offline-gpt.jpg',
      title: 'Off Gpt',
      tags: ['GPT', 'LLM', 'Development'],
      projectLink: 'https://colab.research.google.com/drive/1rRQ1nHi0IPS4Iz0OMIGWHkPdIAULwUIm?usp=sharing'
    },
    {
      imgSrc: '/Manideep - Portfolio Images/images/travel-planner.png',
      title: 'Trip Scout - Travel Planner',
      tags: ['Javascript', 'Web Development'],
      projectLink: 'https://github.com/ManideepVerse/Plan-It-Pal'
    },
    {
      imgSrc: '/Manideep - Portfolio Images/images/image-compressor.png',
      title: 'Pix Compressor',
      tags: ['Web Tools', 'JS'],
      projectLink: 'https://github.com/ManideepVerse/Pix-Compressor'
    },
    {
      imgSrc: '/Manideep - Portfolio Images/images/Heart-Disease-Prediction-img.png',
      title: 'Cardio Vascular Disease Prediction System',
      tags: ['Machine Learning', 'Predictive Healthcare'],
      projectLink: 'https://github.com/ManideepVerse/Cardiovascular-Disease-Prediction'
    },
    {
      imgSrc: '/Manideep - Portfolio Images/images/song-segment.png',
      title: 'Spotify Songs Genre Segmentation',
      tags: ['Machine Learning', 'Music Analysis'],
      projectLink: 'https://github.com/ManideepVerse/Spotify-Songs-Genre-Segmentation'
    },
];


const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights

            </h2>


            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes= "reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work