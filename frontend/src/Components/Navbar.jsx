import React from 'react'
import ShinyText from '../../ReactBits/ShinyText/ShinyText'
function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 w-full sticky top-0 z-50 
         backdrop-blur-[2px]">
            <img src="/Images/signature.svg" alt="" className='w-40 h-16' />
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=itz98104@gmail.com&su=Let's%20Connect&body=Hi%20Yogesh,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded "
            >
                <ShinyText text={"Contact"} className='text-white' />

            </a>

        </nav>
    )
}

export default Navbar
