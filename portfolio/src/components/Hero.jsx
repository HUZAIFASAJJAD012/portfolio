import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <div>
        <div className=" hidden  md:flex md:flex-row md:h-[350px] lg:h-[730px] bg-[#C4C4C4] md:mb-2 ">
          <div className="w-1/2 h-full bg-gradient-to-tl from-[#C4C4C4] to-[#C4C4C4]">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/Images/logo 1.png"
                className=" md:w-[34px] md:h-[50px] lg:w-[60px] lg:h-[180px] lg:pt-6 md:pt-2 md:pb-4 md:mb-6 lg:pb-28"
                alt=""
              />
              <p className="text-[#000000] font-bold md:text-xl lg:text-2xl md:mb-8 lg:mb-24">
                Hi, I am
              </p>
              <p className="text-[#000000] font-bold md:text-2xl lg:text-[60px]  md:mb-4 lg:mb-8">
                Tomasz Gajda
              </p>
              <p className="text-[#909090] font-extrabold md:text-xl lg:text-2xl md:mb-6 lg:mb-12">
                Frontend Developer/UI Designer
              </p>
              <div className="flex flex-row gap-2">
                <img
                  src="/Images/vector3.png"
                  className="w-[30px] h-[30px]"
                  alt=""
                />
                <img
                  src="/Images/Vector.png"
                  className="w-[30px] h-[30px]"
                  alt=""
                />
                <img
                  src="/Images/Vector2.png"
                  className="w-[30px] h-[30px]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-[url('/Images/Rectangle.png')] bg-cover bg-center flex flex-col">
            <ul className="hidden md:flex md:justify-end md:p-4 md:gap-3 lg:gap-14">
              <li>
                <NavLink className="text-white font-medium md:text-base text-xl">
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white font-medium md:text-base text-xl">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white font-medium md:text-base text-xl">
                  Portfolio
                </NavLink>
              </li>
              <button className="rounded-full bg-white py-2 px-2 text-center font-medium md:text-base lg:text-lg shadow-lg hover:shadow-lg transition-all">
                Contact Me
              </button>
            </ul>
            <div>
              <img
                src="/Images/image.png"
                className="md:w-[270px] md:h-[270px] lg:w-[550px] lg:h-[620px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:bg-[#1d1d1d]  md:h-[200px] lg:h-[240px] md:pb-8">
          <h1 className="text-white font-bold md:text-xl lg:text-3xl md:pt-1 lg:pt-3 md:ml-2 md:mb-2 lg:ml-8 lg:mb-4">
            IT BERRIES
          </h1>
          <p className="text-[#1b4263] md:max-w-[1300px] lg:max-w-[1400px] pl-10 md:text-sm lg:text-base mb-6">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.{" "}
          </p>
          <button className="lg:ml-8 md:ml-4 tracking-widest text-sm font-medium md:px-10 lg:px-10 lg:py-2  text-white py-2 border-l border-r-2 border-white hover:bg-white hover:text-black transition-colors lg:pb-6 ">EXPLORE</button>
        </div>
      </div>

      {/* it is the hero section for mobile devices  */}
      <div>
        <div className="md:hidden flex h-[70px] bg-[#1d1d1d] relative">
          <IoMdMenu
            className="text-5xl text-white cursor-pointer ml-auto justify-end"
            onClick={toggleMenu}
          />
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-[#1d1d1d] flex gap-2 flex-col items-center p-4`}
          >
            <li>
              <NavLink className="text-white font-medium text-xl">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white font-medium text-xl">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white font-medium text-xl">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white font-medium text-xl">
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='md:hidden bg-[url("/Images/bg.png")] bg-no-repeat bg-cover h-screen w-screen flex flex-col justify-center items-center gap-4 p-6 flex-wrap'>
          <p className="text-xl font-medium text-white">
            my name is Tomasz Gajda
          </p>
          <p className="text-[35px] font-semibold text-white">
            I'M A DEVELOPER
          </p>
          <img src="/Images/log.png" alt="" />
          <div className="flex flex-row gap-2 flex-wrap">
            <img
              src="/Images/vector3.png"
              className="w-[40px] h-[40px] fill-white"
              alt=""
            />
            <img
              src="/Images/Vector.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <img
              src="/Images/Vector2.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </div>
        </div>
        <div className="md:hidden block bg-[#1d1d1d] flex-col  p-8 justify-center items-center ">
        <p className='text-[#1b4263]  sm:max-w-[600px] flex flex-wrap pl-10 mb-3  text-base'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>

        <button className="tracking-widest text-sm font-medium px-10 text-white py-2 border-l border-r-2 border-white hover:bg-white hover:text-black transition-colors">EXPLORE</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
