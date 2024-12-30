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
        <li><NavLink to='/' className='text-white font-medium cursor-default text-xl'>Home</NavLink></li>
        <li><NavLink to='/portfolio' className='text-white font-medium cursor-default text-xl'>Portfolio</NavLink></li>
        <li><NavLink to='/about' className='text-white font-medium cursor-default text-xl'>About me</NavLink></li>
        <li><NavLink to='/contact' className='text-white font-medium cursor-default text-xl'>Contact Us</NavLink></li>
      </ul>

   
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-full h-[50%] bg-[#0B0B0B] z-50 flex flex-col justify-center items-center gap-8 transition-all lg:hidden`}
      >
        <li>
          <NavLink to='/'
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink  to='/portfolio'
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
        <li>
          <NavLink to='/about'
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
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'
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
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
