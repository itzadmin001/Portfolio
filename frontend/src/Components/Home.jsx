import React from 'react'
import Container from './Container'
import ShinyText from '../../ReactBits/ShinyText/ShinyText'
import { motion } from "motion/react"
import TextPressure from "../../ReactBits/TextAnimations/TextPressure/TextPressure"
function Home() {
    return (
        <Container classes='h-[80vh] flex gap-5 mt-10 flex-col items-center'>
            <section className='md:w-[50%] w-full md:px-5 px-4 flex flex-col gap-5 items-center justify-center '>
                <div className='w-60 h-60 rounded-full shadow-xl relative z-10 '>

                    <img src="/Images/YogeshProfile.jpg" alt="" className='w-full h-full p-2 rounded-full object-cover' />
                    <motion.div className='w-full h-full rounded-full absolute top-0 z-0 circle-path  outline-dashed'
                        initial={{ rotateZ: "0deg" }}
                        animate={{ rotateZ: "360deg" }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                    </motion.div>
                </div>
                <div className='px-5 flex flex-col gap-4 items-center justify-center'>
                    <div className='w-full  md:block hidden'>
                        <TextPressure
                            text="Yogesh Kumar"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={16}
                        />
                    </div>
                    <h1 className='md:hidden  block text-[2.4rem] animate-bounce duration-300 font-[800] leading-none mt-2'
                    >Yogesh Kumar!</h1>
                    <h3 className='md:text-[1.6vw] text-2xl tracking-tight font-[400]'>Build & Battle <span className='animate-pulse'>💻🕹️</span></h3>
                    <p className='text-center font-[300]'>Full Stack Developer skilled in MERN stack (MongoDB, Express, React, Node.js). Passionate about building scalable web apps and delivering seamless user experiences.😉</p>
                </div>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=itz98104@gmail.com&su=Let's%20Connect&body=Hi%20Yogesh,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded "
                >


                    <ShinyText text={"Contact Me"} className=' px-10 py-3 border-[1px] rounded-full font-bold cursor-pointer' speed={5} />
                </a>

            </section>
        </Container>
    )
}

export default Home
