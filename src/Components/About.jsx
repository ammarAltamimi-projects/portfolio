import aboutIm from '../image/about.jpeg'
import { motion } from "framer-motion"

function About() {
  return (
          <div id="about" className="border-b border-neutral-900/20 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32">
            <motion.h2 initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='text-4xl sm:text-5xl font-bold text-center pb-16 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent'>About <span className='text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text'> Me</span></motion.h2>
          <div className="flex flex-col gap-12 lg:gap-20 justify-between items-center lg:flex-row">
          <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1}} className="w-full max-w-[450px] lg:w-5/12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 blur-lg"></div>
              <img src={aboutIm} alt="Profile" className='relative w-full rounded-lg shadow-2xl' />
            </div>
          </motion.div>
          <div className="lg:w-1/2">
              <motion.p 
                initial={{opacity:0, x: 100}} 
                whileInView={{opacity:1, x: 0}} 
                transition={{duration: 0.8, ease: "easeOut"}} 
                className="text-neutral-300 text-lg leading-relaxed"
              >
                I&apos;m a curious and creative full stack developer who enjoys turning ideas into real, working products. My passion for technology started with a fascination for how websites work, and today, I use that same curiosity to explore new tools, frameworks, and architectures.
                <br /><br />
                While I specialize in the MERN stack, what drives me most is the excitement of solving problems, building clean user experiences, and constantly improving. I enjoy working with teams, learning from others, and contributing to open-source communities. Outside of coding, I find balance through reading, trying new things, and staying active.
              </motion.p>
            </div>
          </div>

        </div>
        </div>
      );
}

export default About
