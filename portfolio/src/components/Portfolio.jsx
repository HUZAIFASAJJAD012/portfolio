import React from "react";
import Portfolioarray from "./portfolioarray"; // Make sure Portfolioarray is an array
import PortfolioCards from "./portfoliocards";

// Fetch function to render each card
const Fetch = (val) => {
  return (
    <PortfolioCards
      key={val.id} // Ensure you have a unique key for each element
      src={val.src}
      p1={val.p1}
      h1={val.h1}
      p2={val.p2}
    />
  );
};

const Portfolio = () => {
  return (
    <div className="font-sans mb-9">
      {/* Header Section */}
      <div className="relative">
        <img
          src="src/assets/porfolio header.png" // Replace with your image
          alt="Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-black  tracking-widest text-xl font-semibold bg-black/20">
          <h1 className="border-4  px-5 py-1 border-black">PORTFOLIO</h1>
          </div>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center space-x-4 py-4 bg-customblack">
        <ul className="flex text-white text-opacity-25 text-xs font-bold  border-opacity-25">
          <li className="px-4 py-2 text-white opacity-100  border-white border-b-2">ALL</li>
          <li className="px-4 py-2 border-white border-b-2 border-opacity-25 " >CODED</li>
          <li className="px-4 py-2 border-white border-b-2 border-opacity-25">DESIGNED</li>
        </ul>
      </div>

      {/* Card Section */}
      <div className=" grid grid-cols-3 gap-0 w-full h-auto">
        {Portfolioarray.map(Fetch)} {/* Correct usage of map */}
      </div>

      <div className="bg-customblack w-full h-[40px]  ">
        <h1 className=" text-white py-2 font-semibold text-center font-montserrat ">And many more to come!</h1>
      </div>
    </div> 
  );
};

export default Portfolio;
