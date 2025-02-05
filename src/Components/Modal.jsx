import Lottie from "lottie-react";
import doneAnimation from '../animation/done.json'
import { motion } from "framer-motion"


import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal(props,ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    
    <motion.dialog initial={{opacity:0, y:70}} whileInView={{opacity:1 , y:0}}  transition={{ duration:1}}  className="result-modal" ref= {dialog}>
    <span className="flex justify-center items-center "><Lottie key={Math.random()} loop="false" className="w-[200px] flex justify-center items-center " animationData={doneAnimation} /></span> 
    <h2>Your message has been sent successfully</h2>
  <form method="dialog">
    <button>close</button>
  </form>
</motion.dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
