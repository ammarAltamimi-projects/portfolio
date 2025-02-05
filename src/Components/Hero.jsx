import {  motion } from "framer-motion"
import Lottie from "lottie-react";
import developerAnimation from '../animation/develpor.json'

let str = `Full Stack Web Developer with a Bachelor of Engineering in Computer Science from BMS Institute of Technology and Management, Bangalore, India.
I have hands-on experience in building modern applications using the MERN stack, through professional roles at SaaS Tech and TechnoHacks EduTech. I'm skilled in creating responsive React and Next.js interfaces, developing secure and scalable Node.js/Express.js APIs, and managing MongoDB databases. I'm passionate about writing clean, maintainable code, optimizing performance, and delivering complete end-to-end solutions that solve real-world problems.`;


const grandVariants = {
  hidden:{},
  visible:{transition:{ staggerChildren:0.5 , when:"beforeChildren"}}
}

const Child1aAnd2dVariants = {
  hidden:{opacity:0, x:-100},
  visible:{opacity:1 , x:0,transition:{  duration:1}}
}

const Child3Variants = {
  hidden:{opacity:0, x:-100},
  visible:{opacity:1 , x:0,transition:{ duration:1, staggerChildren:0.03 , when:"beforeChildren"}}
}

const NestedFrom3renVariants = {
  hidden:{opacity:0,},
  visible:{opacity:1 ,transition:{duration:1 }}
}

// const CVariants = {
//   hidden:{opacity:0,},
//   visible:{opacity:1 ,transition:{ staggerChildren:0.03 , delay:2, when:"beforeChildren"}}
// }

// const ChlidrenVariants = {
//   hidden:{opacity:0,},
//   visible:{opacity:1 ,transition:{duration:1 }}
// }

function Hero() {
  return (
    <div id="home" className="border-b border-neutral-900/20 bg-gradient-to-b from-black via-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32 lg:py-40">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center justify-between">
        <motion.div   variants={grandVariants} initial="hidden" whileInView="visible"  className="text-white lg:w-1/2 ">
          <motion.h2 variants={Child1aAnd2dVariants} className="text-5xl sm:text-6xl lg:text-7xl text-white pb-6 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-neutral-400">Ammar Altamimi</motion.h2>
          <motion.div variants={Child1aAnd2dVariants} className="text-2xl sm:text-3xl pb-6 font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
            Full Stack Developer
          </motion.div>
          <motion.p variants={Child3Variants} className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
            {str.split("").map((letter,index)=>(
              <motion.span key={index} variants={NestedFrom3renVariants}>{letter}</motion.span>
            ))}
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="flex justify-center items-center lg:w-1/2">
          <Lottie className="w-full max-w-[600px]" animationData={developerAnimation} />
        </motion.div>
      
      </div>
    </div>
    </div>
  );
}

export default Hero;
