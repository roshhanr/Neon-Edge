import React, { useEffect, useState, useRef } from "react";

function Eyes() {
  const [pos, setPos] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const move = e => {
      const update = ref => {
        const r = ref.getBoundingClientRect();
        const cx = r.left + r.width / 2,
          cy = r.top + r.height / 2;
        const dx = e.clientX - cx,
          dy = e.clientY - cy;
        const a = Math.atan2(dy, dx),
          m = r.width / 4;
        return { x: Math.cos(a) * m, y: Math.sin(a) * m };
      };
      if (leftRef.current && rightRef.current)
        setPos({ left: update(leftRef.current), right: update(rightRef.current) });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center
          bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 flex gap-6 sm:gap-8 md:gap-10 -translate-x-1/2 -translate-y-1/2">
          {[
            { ref: leftRef, pos: pos.left },
            { ref: rightRef, pos: pos.right }
          ].map((eye, i) => (
            <div
              key={i}
              ref={eye.ref}
              className="w-20 sm:w-24 md:w-[15vw] h-20 sm:h-24 md:h-[15vw]
                rounded-full bg-zinc-100 flex items-center justify-center"
            >
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
                <div
                  className="w-8 sm:w-10 md:w-10 h-8 sm:h-10 md:h-10 bg-zinc-100 rounded-full"
                  style={{ transform: `translate(${eye.pos.x}px, ${eye.pos.y}px)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Eyes;
