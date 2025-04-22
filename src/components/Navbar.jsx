import React, { useState } from "react";
// Importing Material Design icons instead of broken 'react-icons/lu'
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Services", href: "#" },
    { label: "Our Work", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900/70 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-20 md:py-5">
        
        {/* Editable Logo Text */}
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-white font-bold text-lg sm:text-2xl md:text-3xl tracking-wide cursor-text focus:outline-none"
        >
          Neon Edge
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-10">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`relative text-sm sm:text-md font-light text-white capitalize
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-300 hover:after:w-full
                ${idx === navLinks.length - 1 ? "ml-[8vw] md:ml-[10vw]" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl sm:text-3xl text-white"
        >
          {isOpen ? <MdClose /> : <MdMenu />}  {/* Changed icons */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/90 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg sm:text-xl font-medium text-white uppercase hover:text-zinc-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
