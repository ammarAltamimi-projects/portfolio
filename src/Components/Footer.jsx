
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram} from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import {  motion } from "framer-motion"
import { Link} from 'react-scroll';


const CVariants = {
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0 ,transition:{ duration:1.5, delay:1.5, staggerChildren:0.5 , when:"beforeChildren"}}
  }
  
  
  const ChlidrenVariants = {
    hidden:{y:-20,},
    visible:{y:0 ,transition:{duration:1.5, repeat:Infinity , repeatType:"reverse" }}
  }
  

  const FooterVariants = {
    hidden:{},
    visible:{transition:{ staggerChildren:0.5 , when:"beforeChildren"}}
  }
  
  
  const ChlidrenLink1Variants = {
    hidden:{opacity:0, x:-70},
    visible:{opacity:1 , x:0 ,transition:{duration:1.5}}
  }
  
  const ChlidrenLink2Variants = {
    hidden:{opacity:0, x:70},
    visible:{opacity:1 , x:0 ,transition:{duration:1.5}}
  }
  
  const ChlidrenLoacationVariants = {
    hidden:{opacity:0, x:70},
    visible:{opacity:1 , x:0 ,transition:{duration:1.5}}
  }


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <div className="container mx-auto px-10  pt-10   text-white">
          <div className=" grid grid-cols-1  md:grid-cols-3 gap-10 text-center sm:text-left px-4 border-b border-neutral-900 pb-4">
        <div className="box">
          <motion.h3   initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0 }} transition={{ duration:1.5 }} className="text-white  text-center lg:text-start text-2xl tracking-tight mb-10">Find us in social media : </motion.h3>
          <motion.ul  variants={CVariants}  initial="hidden" whileInView="visible" className="flex justify-center items-center md:justify-start space-x-2 mb-4">

          <motion.li variants={ChlidrenVariants} >
              <a href="https://x.com/home?lang=ar"  target="_blank" className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-black rounded-md">
              <FaSquareXTwitter/>
              </a>
            </motion.li>
            <motion.li variants={ChlidrenVariants} >
              <a href="https://www.linkedin.com/in/ammar-attamimi-9884512a4/"  target="_blank"  className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-blue-600  rounded-md">
              <FaLinkedin/>
              </a>
            </motion.li>
            <motion.li variants={ChlidrenVariants} >
              <a href="https://github.com/dashboard"  target="_blank"  className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-black  rounded-md">
              <FaGithub/>
              </a>
            </motion.li>
            <motion.li variants={ChlidrenVariants} >
              <a  href="https://www.instagram.com/ar_506_/"  target="_blank"  className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-red-600  rounded-md">
              <FaInstagram/>
              </a>
            </motion.li>
          </motion.ul>
        </div>
        <div className="box  flex justify-center">
          <motion.ul variants={FooterVariants}  initial="hidden" whileInView="visible" className="flex flex-col gap-2 h-full w-fit m-x-auto">
          <motion.li variants={ChlidrenLink1Variants} className=" border-b border-neutral-900 pb-2" ><Link to="home" spy={true}  smooth={true}   offset={0}  duration={500}  className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> Home</span></Link></motion.li>
          <motion.li variants={ChlidrenLink2Variants} className=" border-b border-neutral-900 pb-2" ><Link to="about" spy={true}  smooth={true}   offset={-100}  duration={500}  className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> About Me</span></Link></motion.li>
          <motion.li variants={ChlidrenLink1Variants} className=" border-b border-neutral-900 pb-2" ><Link to="Technologies" spy={true}  smooth={true}   offset={-100} duration={500}  className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> Technologies</span></Link></motion.li>
            <motion.li variants={ChlidrenLink2Variants} className=" border-b border-neutral-900 pb-2" ><Link to="Experience" spy={true}  smooth={true}    offset={-100}  duration={500}  className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> Experience</span></Link></motion.li>
            <motion.li variants={ChlidrenLink1Variants} className=" border-b border-neutral-900 pb-2" ><Link to="Project" spy={true}  smooth={true}   offset={-100}  duration={500}  className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> Project</span></Link></motion.li>
            <motion.li variants={ChlidrenLink2Variants} className=" border-b border-neutral-900 pb-2" ><Link to="content" spy={true}  smooth={true}    offset={-100}  duration={500}   className="text-gray-400 hover:text-white hover:translate-x-3 transition duration-300 flex items-center"><MdOutlineKeyboardDoubleArrowRight  className="text-blue-500 text-[20px]"/> <span> Content Us</span></Link></motion.li>
          </motion.ul>
        </div>

        <motion.div  className="box "  variants={FooterVariants}  initial="hidden" whileInView="visible" >
            <div className="w-fit mx-auto">
            <motion.div   variants={ChlidrenLoacationVariants}  className="flex items-center  lg:justify-start text-gray-400 mb-8  ">
          <  IoLocationSharp  className=" text-[30px] text-blue-500 "/>
            <div className="ml-2 info">India, bangalore, Ramky one north B-3 703 </div>
          </motion.div>

          <motion.div   variants={ChlidrenLoacationVariants}   className="flex items-center  lg:justify-start text-gray-400 mb-8 ">
          <IoMdTime className=" text-[30px] text-blue-500 " />
            <div className="info ml-2">Business Hours: From 10:00 To 18:00</div>
          </motion.div>

          <motion.div   variants={ChlidrenLoacationVariants}   className="flex items-center  lg:justify-start text-gray-400 ">
          <MdWifiCalling3 className=" text-[30px] text-blue-500 " />
            <div className="info ml-2">
              <span>+917204178249</span>
              <span> +967777209343</span>
            </div>

          </motion.div>
            </div>
        </motion.div>
      </div>
      <motion.p initial={{opacity:0, y:-70}} whileInView={{opacity:1 , y:0}} transition={{ duration:1.5}} className="text-white text-center mt-10 ">
        Made With &lt;3 By Ammar
      </motion.p>
    </div>
    </div>
  );
};

export default Footer;


