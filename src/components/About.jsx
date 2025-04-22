import React from "react";

function About() {
  return (
    <section className="w-full bg-[#CDEA68] px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-20 rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-serif text-[5vw] sm:text-[4.5vw] md:text-[4vw] leading-[5vw] sm:leading-[4.5vw] md:leading-[4.5vw] tracking-tight text-black">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-black">
            Our Approach
          </h2>
          <button className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-4 sm:py-6 bg-zinc-900 text-white rounded-full uppercase text-sm sm:text-base transform hover:scale-105 transition">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full" />
          </button>
        </div>
        <div className="md:w-1/2 h-60 sm:h-80 md:h-[70vh] rounded-2xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545273085-46e4001b30ba?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
