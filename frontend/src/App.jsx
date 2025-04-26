import { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Particles from "../ReactBits/Particles/Particles"
import Lightning from "../ReactBits/Lightning/Lightning"
function App() {
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault(); // Right-click context menu ko disable karta hai
    };

    document.addEventListener("contextmenu", handleRightClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return (
    <div className='bg-[#111111] text-gray-200 relative z-20 select-none'>

      <div className='md:block hidden w-full h-full absolute top-0 z-[-1] '>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className='md:hidden block w-full h-full absolute top-0 z-[-1]'>
        <Lightning
          hue={220}
          xOffset={0}
          speed={0.1}
          intensity={0.6}
          size={1.3}
        />
      </div>

      <Navbar />
      <Home />
      <About />
      <Projects />

      <Footer />
    </div>

  )
}

export default App
