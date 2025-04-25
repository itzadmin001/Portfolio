import React, { useRef } from 'react'
import GradientText from '../../ReactBits/GradientText/GradientText'
function Projects() {

    return (
        <section className='w-full mx-auto mt-20 z-10' >

            <div className='flex flex-col items-center mb-10 '>
                <h1 className='md:text-[4vw] text-[2.8rem]  font-bold leading-none'>PROJECTS</h1>
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    EXPLORE NOW
                </GradientText>


                <div className=' md:w-[60%] grid md:grid-cols-2 justify-center items-center md:p-2 p-4  mt-5 gap-5'>

                    <a target='_black' href='https://ubar-beta.vercel.app' className='w-full flex justifyclass items-center gap-2'>
                        <img src="/Images/Project-3.png" alt="" className='w-40 rounded-md' />
                        <div className='flex flex-col items-center  gap-2 leading-none '>
                            <h1 className=' text-xl font-[800] leading-none'>Ubar</h1>
                            <p className='w-40 text-[10px] font-[100] leading-none'>Passionate MERN stack developer creating intuitive, dynamic web experiences with a focus on performance and user-centric design.</p>
                        </div>
                    </a>

                    <a target='_black' href='https://refokus-ochre.vercel.app/' className='w-full flex justifyclass items-center gap-2'>
                        <img src="/Images/project-1.png" alt="" className='w-40 rounded-md' />
                        <div className='flex flex-col items-center  gap-2 leading-none '>
                            <h1 className=' text-xl font-[800] leading-none'>Refokus</h1>
                            <p className='w-40 text-[10px] font-[100] leading-none'>Designed a sleek, interactive web experience inspired by Refokus — combining modern aesthetics, smooth animations, and responsive layouts.</p>
                        </div>
                    </a>

                    <a target='_black' href='https://to-do-list-github-io-ashen.vercel.app/' className='w-full flex justifyclass items-center gap-2'>
                        <img src="/Images/project-2.png" alt="" className='w-40 rounded-md' />
                        <div className='flex flex-col items-center  gap-2 leading-none '>
                            <h1 className='text-xl font-[800] leading-none'>ToduList</h1>
                            <p className='w-40 text-[10px] font-[100] leading-none'>Built a responsive to-do list application focusing on user-friendly design, facilitating easy task tracking and management across various devices</p>
                        </div>
                    </a>
                    <a target='_black' href='https://nike-github-io.vercel.app/' className='w-full flex justifyclass items-center gap-2'>
                        <img src="/Images/project-4.png" alt="" className='w-40 rounded-md' />
                        <div className='flex flex-col items-center  gap-2 leading-none '>
                            <h1 className='text-xl font-[800] leading-none'>Nike</h1>
                            <p className='w-40 text-[10px] font-[100] leading-none'>Developed a Nike-inspired landing page featuring a sleek, responsive design to showcase products with modern aesthetics and user-friendly navigation</p>
                        </div>
                    </a>


                </div>
            </div>
        </section >
    )
}

export default Projects
