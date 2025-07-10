import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 4
    },
    {
      label: 'Years of experience',
      number: 1
    }
];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">


            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                  Hi, I'm Manideep, an undergraduate in Computer Science interested in Artificial Intelligence and frontend development. I am skilled in creating intelligent systems with Python and TensorFlow, and designing seamless, user-centered interfaces with React and Figma. With a background in design and data, and a published research paper on deep learning, I aspire to create useful, real-world tech solutions that blend innovation with usability.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                              <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                              </div> {/* Correctly closed div */}
                          
                              <p className="text-sm text-zinc-400">{label}</p>
                            </div> 
                        ))    
                    }

                    <img 
                      src="/Manideep - Portfolio Images/images/logo.svg" 
                      alt="Logo" 
                      width={30}
                      height={30}
                      className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
};

export default About