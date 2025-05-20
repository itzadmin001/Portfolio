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
                <h1 className='mb-10'>  Building in public at ADMIN 👤</h1>
            </div>
        </Container >
    )
}

export default Footer
