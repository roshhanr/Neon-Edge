import React from "react";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const handleHoverStart = i => cards[i].start({ y: "0%" });
  const handleHoverEnd = i => cards[i].start({ y: "100%" });

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 overflow-x-hidden">
      <div className="border-b border-zinc-700 pb-8 sm:pb-10 md:pb-12 mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight">
          Feature Projects
        </h1>
      </div>

      {[0, 1].map(row => (
        <div
          key={row}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-10"
        >
          {[0, 1].map(col => {
            const idx = row * 2 + col;
            const label = ["FYDE", "VISE", "TRIB", "WAVE"][idx];
            const srcs = [
              "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
              "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
              "https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg",
              "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
            ];

            return (
              <motion.div
                key={idx}
                onHoverStart={() => handleHoverStart(idx)}
                onHoverEnd={() => handleHoverEnd(idx)}
                className="relative w-full h-64 sm:h-80 md:h-[75vh] cursor-pointer"
              >
                <h1
                  className={`absolute flex overflow-hidden text-[#CDEA68] text-5xl sm:text-7xl md:text-8xl font-semibold leading-none tracking-tighter
                    ${col === 0 ? "left-full -translate-x-1/2" : "right-full translate-x-1/2"}
                    -translate-y-1/2 top-1/2 z-10`}
                >
                  {label.split("").map((l, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[idx]}
                      transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                    >
                      {l}
                    </motion.span>
                  ))}
                </h1>

                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={srcs[idx]}
                    alt={label}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default Featured;
