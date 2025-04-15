import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020629] text-white py-8 px-4 md:px-12">
      <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">

    

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com" className="hover:text-blue-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Huzaifa Sajjad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
