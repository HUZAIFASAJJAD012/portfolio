import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
const NavBar = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <header className="fixed-top top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32  flex justify-between items-center text-white">
        <a
          href="#"
          className="text-xl font-extrabold  md:text-3xl p-2  bg-gradient-to-r from-indigo-300 via-sky-100 to-indigo-300 text-transparent 
bg-clip-text hover:scale-110 transition-all duration-300"
        >
          {" "}
          LogiNest
        </a>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="opacity-70 hover:opacity-100  transition-opacity duration-300">
            <a href="#about" className=" ">
              {" "}
              Home
            </a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">Projects</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">About</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">ContactUs</a>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setisopen(!isopen)}>
          <BiMenu className="text-3xl"></BiMenu>
        </button>
        {isopen && (
            <ul className="md:hidden absolute top-16 right-0 left-0 bg-blue-800 w-full p-4 rounded-lg shadow-lg">  
            
            <li className=" group  px-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about" className="" onClick={() => setisopen(false)}>
              {" "}
              Home  
            </a>
          </li>  
            <li className=" group  px-10 opacity-70 hover:opacity-100 transition-opacity duration-300">            
            <a href="#about" onClick={() => setisopen(false)}>Projects</a>
          </li>
          <li className=" group  px-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about"  onClick={() => setisopen(false)}>About</a>
          </li>
          <li className=" group  px-10 opacity-70 hover:opacity-100 transition-opacity duration-300">            
            <a href="#about"  onClick={() => setisopen(false)}>ContactUs</a>
          </li>
            </ul>
        )




        }
      </nav>
    </header>
  );
};

export default NavBar;
