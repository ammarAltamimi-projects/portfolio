import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";



function Button() {
const [toScroll , setToScroll] = useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setToScroll(true);
            }else{
                setToScroll(false);
            }
        })
    },[])

    function handleClickTop(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
 toScroll && (<button onClick={handleClickTop}  className=" w-[40px] h-[40px] rounded-full flex justify-center items-center fixed bottom-10 right-10 bg-sky-700 hover:bg-sky-900 transition duration-300" > <motion.span animate={{y:[-5,0]}} transition={{duration:0.5 , repeat:Infinity , repeatType:"reverse"}}><IoIosArrowUp/></motion.span>  </button>)

  )
}

export default Button
