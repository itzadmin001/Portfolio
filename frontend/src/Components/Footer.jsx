import React from 'react'
import Container from './Container'

function Footer() {
    const socialicon = [
        {
            name: "github",
            src: "/Images/github.png"
        }, {
            name: "instagram",
            src: "/Images/instagram.svg"
        },
        {
            name: "linkedin",
            src: "/Images/linkedin.svg"
        },
        {
            name: "twitter",
            src: "/Images/twitter.svg"
        }
    ]
    return (
        <Container>
            <div className='text-center flex flex-col items-center gap-10'>
                <div className='flex items-center justify-center gap-8'>
                    {
                        socialicon.map((img, i) => {
                            return (
                                <img src={img.src} key={i} alt="" className='md:w-8 w-4' />
                            )
                        })
                    }
                </div>
<<<<<<< HEAD


=======
               <div className="container mx-auto text-center px-4">
                    <p className="text-sm sm:text-base animate-pulse">
                        Made in <span className="text-pink-500">127.0.0.1</span> 🖥️ | Crafted with <span className="text-yellow-400">⚙️, ❤️ & {'<code>'}</span> by <span className="font-semibold text-cyan-400">ADMIN 👨‍💻</span>
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
>>>>>>> da08e2c5c5d6b1907f7cffd2a993af7a3b9c0f90
            </div>
        </Container >
    )
}

export default Footer
