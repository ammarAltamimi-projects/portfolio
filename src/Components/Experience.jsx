import {EXPERIENCES} from './data.js'
import { motion } from "framer-motion"

function Experience() {
  return (
    <div id="Experience" className="border-b border-neutral-900/20 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32" >
    <motion.h2 initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='text-4xl sm:text-5xl font-bold text-center pb-16 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent'>Experience</motion.h2>
    {EXPERIENCES.map((experience,index)=>(
      <motion.div 
        key={index} 
        initial={{opacity:0, y:30}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.8, delay: index * 0.2}}
        className="flex flex-col gap-8 md:flex-row md:items-start mb-16 last:mb-0" 
      >
        <motion.h3 className="text-xl md:text-2xl font-semibold w-full md:w-1/3 md:text-right text-pink-400/90">{experience.year}</motion.h3>
        <motion.div className="w-full md:w-2/3 pl-0 md:pl-8 border-l-0 md:border-l-2 border-neutral-800">    
        <h3 className='text-xl md:text-2xl font-bold pb-3 text-white'>{experience.role} <span className="text-neutral-400">@ {experience.company}</span></h3>
        <p className='pb-4 text-neutral-300 leading-relaxed'>{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technologie,index)=>(
            <span key={index} className="px-3 py-1 bg-neutral-800/50 rounded-full text-sm font-medium text-neutral-300 hover:bg-neutral-700/50 transition-colors">{technologie}</span>
          ))}
        </div>
        </motion.div>

      </motion.div>
     ))}
    </div>
    </div>
  )
}

export default Experience
