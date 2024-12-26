import React from 'react';
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (

    <div className='mb-4'>      
    <div className=" hidden lg:flex lg:flex-row lg:h-[730px] bg-[#C4C4C4] lg:mb-4">
      <div className="w-1/2 h-full bg-gradient-to-tl from-[#C4C4C4] to-[#C4C4C4]">
        <div className='flex flex-col justify-center items-center'>
            <img src="/Images/logo 1.png" className='pt-6 pb-28' alt="" />
            <p className='text-[#000000] font-bold text-2xl mb-24'>Hi, I am</p>
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
        <img src="/Images/image.png" className='w-[550px] h-[620px]' alt="" />
      </div>
      </div>
    </div>
    <div className='bg-[#1d1d1d] h-[180px]'>
    <h1 className='text-white font-bold text-3xl pt-3 ml-8 mb-4'>IT BERRIES</h1>
    <p className='text-[#1b4263] max-w-[1000px] pl-10 text-base'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
    </div>
    </div>
  );
};

export default Hero;
