import React from 'react'
import Container from './Container'
import GradientText from '../../ReactBits/GradientText/GradientText'

function About() {

    const technologiesimg = [
        {
            src: "/Images/html5.svg"
        },
        {
            src: "./Images/css3.svg"
        },
        {

            src: "./Images/javascript.svg"
        },
        {
            src: "./Images/framer-motion.svg"
        },
        {
            src: "./Images/git.svg"
        },
        {
            src: "./Images/github2.svg"
        },
        {
            src: "./Images/gsap.svg"
        },
        {
            src: "./Images/docker.svg"
        },
        {
            src: "./Images/mongodb.svg"
        },
        {
            src: "./Images/nodejs.svg"
        },
        {
            src: "./Images/react.svg"
        },
        {
            src: "./Images/socket-io.svg"
        },
        {
            src: "./Images/jwt-3.svg"
        },
        {
            src: "./Images/netlify.svg"
        },
        {
            src: "./Images/postman.svg"
        },
        {
            src: "./Images/visual-studio.svg"
        },
    ]
    return (
        <Container>
            <section className=' md:w-[60%] mx-auto md:p-0 p-2 mt-10'>


                <div className='flex flex-col items-center mb-10 '>
                    <h1 className='md:text-[4vw] text-[3.5rem] font-bold leading-none'>ABOUT ME</h1>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        EXPLORE NOW
                    </GradientText>
                    <div className='mt-6 font-serif md:text-[1.5wv] flex flex-col gap-4 text-center p-4'>

                        <p>

                            I completed my BCA (Bachelor of Computer Applications) from Maharaja Ganga Singh University (2021–2024), after finishing my 12th in Commerce from a government school in 2021.
                        </p>


                        <p>

                            To further enhance my development skills, I pursued a Full Stack Web Development course at WsCube Tech, Jaipur, where I trained extensively on real-world projects and mastered modern web technologies.


                        </p>
                        <p>
                            I believe in continuous learning and love building intuitive, scalable, and efficient web applications that solve real problems.

                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-20'>
                    <h1 className='md:text-[4vw] text-[3.5rem] font-bold leading-none'>EXPERIENCE</h1>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        EXPLORE NOW
                    </GradientText>
                    <div className='mt-6 font-serif md:text-[1.5wv]   flex flex-col gap-4 text-start p-4'>

                        <p>🚀 Currently open to opportunities where I can contribute, grow, and enhance my skills as a developer in a collaborative environment.</p>
                        <p>🤝 I enjoy collaborating with teams, learning from peers, and consistently strive to write clean, scalable, and maintainable code that adds real value.</p>
                        <div className=' grid md:grid-cols-6 grid-cols-3 gap-5 mt-10 items-center 
                         p-2'>

                            {
                                technologiesimg.map((img, i) => {
                                    return (
                                        <img src={img.src} alt="" key={i} className='w-14 mx-auto' />
                                    )
                                })
                            }
                        </div>


                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About
