


import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Technologies from "./Components/Technologies"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Button from "./Components/Button"

export default function App() {
  return (
    < >
    
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0   -z-10 h-full w-full">
      {/* div color */}
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> </div>
    </div>

    {/* components  */}
    <Navbar/>
    <Hero />
    <About/>
    <Technologies/>
    <Experience/>
    <Project/>
   <Content />
   <Footer />
   <Button/>
    </div>
   

   



    </>
    
  )
}