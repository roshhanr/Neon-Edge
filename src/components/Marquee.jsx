import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1"
      className='w-full py-8 sm:py-10 md:py-12 rounded-t-3xl bg-[#004D43]'
    >
      <div className='border-t-4 border-b-4 border-zinc-300 overflow-hidden whitespace-nowrap flex items-center px-4 sm:px-8 md:px-20'>
        {[...Array(3)].map((_, i) => (
          <motion.h1 
            key={i}
            initial={{ x: 0 }} 
            animate={{ x: "-100%" }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className='text-[18vw] sm:text-[20vw] md:text-[22vw] leading-none font-["FoundersGroteskCondensed"] uppercase font-semibold tracking-tighter pr-4'
          >
            we are ochi ◦
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
