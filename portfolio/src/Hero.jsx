import React from 'react';
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (

    <div>      
    <div className=" hidden lg:flex lg:flex-row lg:h-[750px] bg-[#C4C4C4]">
      <div className="w-1/2 h-full bg-gradient-to-tl from-[#C4C4C4] to-[#C4C4C4]">
        <div className='flex flex-col justify-center items-center'>
            <img src="/Images/logo 1.png" className='pt-6 pb-24' alt="" />
            <p className='text-[#000000] font-bold text-2xl mb-12'>Hi, I am</p>
            <p className='text-[#000000] font-bold text-[60px] mb-2'>Tomasz Gajda</p>
            <p className='text-[#909090] font-extrabold text-2xl mb-12'>Frontend Developer/UI Designer</p>
            <div className='flex flex-row gap-2'>
                <img src="/Images/vector3.png" className='w-[30px] h-[30px]' alt="" />
                <img src="/Images/Vector.png"  className='w-[30px] h-[30px]' alt="" />
                <img src="/Images/Vector2.png"  className='w-[30px] h-[30px]' alt="" />
            </div>
        </div>
      </div>

     
      <div className="w-1/2 bg-[url('/Images/Rectangle.png')] bg-cover bg-center flex flex-col">
      <ul className="hidden lg:flex lg:justify-end lg:p-4 lg:gap-14">
        <li><NavLink className='text-white font-medium text-xl'>About me</NavLink></li>
        <li><NavLink className='text-white font-medium text-xl'>Skills</NavLink></li>
        <li><NavLink className='text-white font-medium text-xl'>Portfolio</NavLink></li>
        <button className="rounded-full bg-white py-2 px-2 text-center font-medium text-lg shadow-lg hover:shadow-lg transition-all">
          Contact Me
        </button>
      </ul>
      <div>
        <img src="/Images/image.png" className='w-[600px] h-[600px]' alt="" />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
