import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  const titles = ["We Create", "Eye-opening", "presentations"];
  const below = ["For public and private companies", "From the first pitch to IPO"];

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 flex flex-col justify-center overflow-hidden"
    >
      <div className="px-4 sm:px-8 md:px-20 space-y-6">
        {titles.map((title, i) => (
          <div key={i} className="flex items-center overflow-hidden">
            {i === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="mr-2 w-[9vw] h-[6vw] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZwz8OCWq7Jc5HbzxWDbKBo8VfBQhppjiy80alEyot2FHqDy63PvVMPyJaaiPDTQHeRI&usqp=CAU')] bg-cover bg-center rounded-b-md"
              />
            )}
            <h1 className="uppercase text-[6vw] sm:text-[7vw] md:text-[8vw] leading-[5.5vw] sm:leading-[6vw] font-bold tracking-tighter text-white">
              {title}
            </h1>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-20 py-5 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          {below.map((text, i) => (
            <p key={i} className="text-sm sm:text-md text-zinc-200 font-light">
              {text}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 sm:px-5 py-2 border border-zinc-500 rounded-full uppercase text-xs sm:text-md text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 transition">
            start the project
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-zinc-500 rounded-full flex items-center justify-center text-zinc-200">
            <span className="rotate-45">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
