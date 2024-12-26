import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className='bg-[#0B0B0B] w-full h-[80px] '>
     
      <IoMdMenu
        className="text-4xl text-white cursor-pointer lg:hidden ml-auto"
        onClick={toggleMenu} 
      />

      <ul className="hidden lg:flex lg:justify-end lg:p-4 lg:gap-14">
        <li><NavLink className='text-white font-medium text-xl'>About me</NavLink></li>
        <li><NavLink className='text-white font-medium text-xl'>Skills</NavLink></li>
        <li><NavLink className='text-white font-medium text-xl'>Portfolio</NavLink></li>
        <button className="rounded-full bg-white py-2 px-2 text-center font-medium text-lg shadow-lg hover:shadow-lg transition-all">
          Contact Me
        </button>
      </ul>

   
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-full h-[50%] bg-[#0B0B0B] z-50 flex flex-col justify-center items-center gap-8 transition-all lg:hidden`}
      >
        <li>
          <NavLink
            className='text-white font-medium text-xl relative'
            onMouseEnter={(e) => {
              const w = e.target.offsetWidth;
              const h = e.target.offsetHeight;
              const t = e.target.offsetTop;
              e.target.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px;`;
            }}
            onMouseLeave={(e) => {
              e.target.style.cssText = '';
            }}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-white font-medium text-xl relative'
            onMouseEnter={(e) => {
              const w = e.target.offsetWidth;
              const h = e.target.offsetHeight;
              const t = e.target.offsetTop;
              e.target.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px;`;
            }}
            onMouseLeave={(e) => {
              e.target.style.cssText = '';
            }}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-white font-medium text-xl relative'
            onMouseEnter={(e) => {
              const w = e.target.offsetWidth;
              const h = e.target.offsetHeight;
              const t = e.target.offsetTop;
              e.target.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px;`;
            }}
            onMouseLeave={(e) => {
              e.target.style.cssText = '';
            }}
          >
            Portfolio
          </NavLink>
        </li>
        <button className="rounded-full bg-white py-2 px-2 text-center font-medium text-lg shadow-lg hover:shadow-lg transition-all">
          Contact Me
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
