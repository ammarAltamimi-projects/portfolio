import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNodejsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const techItemsList = [
  { Icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { Icon: FaCss3, color: "text-blue-500", name: "CSS3" },
  { Icon: RiJavascriptFill, color: "text-yellow-400", name: "JavaScript" },
  { Icon: BiLogoTypescript, color: "text-blue-400", name: "TypeScript" },
  { Icon: FaReact, color: "text-sky-400", name: "React" },
  { Icon: SiNextdotjs, color: "text-neutral-300", name: "Next.js" },
  { Icon: SiTailwindcss, color: "text-teal-400", name: "Tailwind CSS" },
  { Icon: RiNodejsLine, color: "text-green-500", name: "Node.js" },
  { Icon: SiExpress, color: "text-neutral-400", name: "Express.js" },
  { Icon: SiMongodb, color: "text-green-400", name: "MongoDB" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -5,
    scale: 1.05,
    boxShadow: "0px 0px 15px rgba(2, 132, 199, 0.3)",
    transition: { duration: 0.2 }
  }
};

function Technologies() {
  return (
    <div id="Technologies" className="border-b border-neutral-800/30 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(29,78,216,0.08),rgba(0,0,0,0))]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28 lg:py-32" >
       <motion.h2 initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='text-4xl sm:text-5xl font-bold text-center pb-16 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent'>Technologies</motion.h2>
   
        <div className="relative w-full overflow-hidden">
          <motion.div 
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6 sm:gap-8 py-8"
            style={{ width: `${techItemsList.length * 2 * 10}rem` }}
          >
            {[...techItemsList, ...techItemsList].map((tech, index) => (
              <motion.div 
                key={`${tech.name}-${index}`}
                variants={itemVariants} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover="hover" 
                className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex flex-col items-center justify-center rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 hover:border-sky-500/70 hover:bg-neutral-800/70 transition-all duration-200 group p-4"
              >
                <tech.Icon className={`text-4xl sm:text-5xl md:text-6xl ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 group-hover:text-sky-300 transition-colors duration-200">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
