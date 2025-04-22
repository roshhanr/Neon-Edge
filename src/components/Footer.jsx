import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

function Footer({ brandName = "Neon Edge" }) {
  const links = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/roshhanr/", icon: <FaLinkedin /> },
    { label: "GitHub", url: "https://github.com/roshhanr", icon: <FaGithub /> },
    { label: "Website", url: "https://your.com", icon: <FaGlobe /> },
    { label: "X", url: "https://x.com/your", icon: <FaTwitter /> },
    { label: "Email", url: "mailto:roshanroshr2003@gmail.com", icon: <FaEnvelope /> }
  ];

  return (
    <footer className="w-full bg-[#1d1f1e] px-4 sm:px-8 md:px-16 lg:px-32 py-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h1
            contentEditable
            suppressContentEditableWarning
            className="font-FoundersGroteskCondensed uppercase text-3xl sm:text-4xl md:text-5xl mb-4 cursor-text hover:text-zinc-400 transition"
          >
            {brandName}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">© Developed by Roshan 2025</p>
        </div>

        <div className="flex flex-col md:items-end">
          <h2 className="uppercase text-lg sm:text-xl mb-4 border-b border-zinc-700 pb-2">
            Connect with me
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {links.map(({ label, url, icon }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="relative flex items-center gap-2 text-zinc-200 hover:text-white transition
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {icon}
                <span className="text-xs sm:text-sm">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
