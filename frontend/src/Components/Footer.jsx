import React from 'react'
import Container from './Container'

function Footer() {
    const socialicon = [
        {
            name: "github",
            src: "/Images/github.png",
            path: "https://github.com/itzadmin001"
        }, {
            name: "instagram",
            src: "/Images/instagram.svg",
            path: "https://instagram.com/itz__admin__01"
        },
        {
            name: "linkedin",
            src: "/Images/linkedin.svg",
            path: "https://linkedin.com/in/yogesh-kumar-558b4b26b"

        },
        {
            name: "twitter",
            src: "/Images/twitter.svg",
            path: "https://x.com/Yogeshkumar_00"
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
                <div className="container mx-auto text-center px-4">
                    <p className="text-sm sm:text-base animate-pulse">
                        Made in <span className="text-pink-500">127.0.0.1</span> 🖥️ | Crafted with <span className="text-yellow-400">⚙️, ❤️ & {'<code>'}</span> by <span className="font-semibold text-cyan-400">ADMIN 👨‍💻</span>
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </Container >
    )
}

export default Footer
