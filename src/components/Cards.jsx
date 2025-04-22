import React from "react";
import { motion } from "framer-motion";

function Cards() {
  const logos = [
    "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
    "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
    "https://ochi.design/wp-content/uploads/2022/04/logo003.png"
  ];

  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-32 py-16 sm:py-20 md:py-24 flex flex-col lg:flex-row gap-5">
      {logos.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative flex items-center justify-center rounded-xl overflow-hidden
            ${i === 0 ? "bg-[#004D43]" : "bg-[#293231]"} 
            w-full lg:w-1/2 md:w-full h-60 sm:h-72 md:h-96`}
        >
          <img
            src={src}
            alt="ochi"
            className={`${i === 0 ? "w-[25%]" : "w-[50%] mix-blend-lighten"}`}
          />
          <button className="absolute left-5 bottom-5 px-4 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            © 2025
          </button>
        </motion.div>
      ))}
    </section>
  );
}

export default Cards;
