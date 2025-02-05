import Lottie from "lottie-react";
import mailAnimation from '../animation/mail.json'
import { motion } from "framer-motion"
import { IoMdMail } from "react-icons/io";
import { Toaster, toast } from 'sonner'
import Modal from "./Modal";
import { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {useEffect} from "react"

const Content = () => {
  const modal = useRef();
  const [state, handleSubmit] = useForm("xjkbgkyr");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    if (!message) {
      toast.error('Please enter your message');
      return;
    }

    handleSubmit(e);
  };

  useEffect(()=>{
    if(state?.succeeded){
      toast.success('Your message has been sent successfully')
    }
  },[state])

  return (
    <div id="content" className="border-b border-neutral-900/20 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{opacity:0, y:-50}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.8}} 
            className="text-4xl sm:text-5xl font-bold pb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent flex justify-center items-center gap-3"
          >
            <IoMdMail className="text-pink-400" />
            <span>Get in Touch</span>
          </motion.h2>
          <motion.p 
            initial={{opacity:0, x:-100}} 
            whileInView={{opacity:1, x:0}} 
            transition={{duration:0.8, delay: 0.2}} 
            className="text-lg text-neutral-400"
          >
            Content us for more information.
          </motion.p>
          <motion.p 
            initial={{opacity:0, x:100}} 
            whileInView={{opacity:1, x:0}} 
            transition={{duration:0.8, delay: 0.4}} 
            className="text-lg text-neutral-400 mt-2"
          >
            Get notified when I publish something new.
          </motion.p>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.form 
            initial={{opacity:0, x:-100}} 
            whileInView={{opacity:1, x:0}} 
            transition={{duration:0.8, delay: 0.4}} 
            className="w-full lg:w-1/2 relative space-y-6" 
            onSubmit={handleFormSubmit}
          >
            <div className="relative">
              <label htmlFor="email" className="text-sm font-medium text-neutral-300 mb-2 block">Email Address</label>
              <div className="relative">
                <input 
                  autoComplete="off"  
                  id="email" 
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 focus:border-pink-500/50 rounded-lg text-white placeholder-neutral-500 transition-colors" 
                  placeholder="your@email.com"  
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="text-sm font-medium text-neutral-300 mb-2 block">Your Message</label>
              <textarea 
                id="message" 
                name="message"  
                rows="6"
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 focus:border-pink-500/50 rounded-lg text-white placeholder-neutral-500 transition-colors resize-none" 
                placeholder="What would you like to say?"
              ></textarea>
            </div>

            <button  
              type="submit" 
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 
            >
              {state.submitting ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : "Send Message" }
            </button>
          </motion.form>

          <Toaster className='mt-14' position="top-center" expand={false} richColors />
          <Modal ref={modal} />
          
          <motion.div 
            initial={{opacity:0, x:100}} 
            whileInView={{opacity:1, x:0}} 
            transition={{duration:0.8, delay: 0.4}} 
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="w-full max-w-[450px]">
              <Lottie className="w-full" animationData={mailAnimation} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
