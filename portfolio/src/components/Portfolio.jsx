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
    <div className="font-sans">
      {/* Header Section */}
      <div className="relative">
        <img
          src="src/assets/porfolio header.png" // Replace with your image
          alt="Header"
          className="w-full h-64 object-cover"
        />
        <h1 className="absolute inset-0 flex justify-center items-center text-black border-2 border-black tracking-widest text-3xl font-bold bg-black/20">
          PORTFOLIO
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center space-x-4 py-4 bg-customblack">
        <ul className="flex text-white text-opacity-25 font-bold border-b-2 border-white border-opacity-25">
          <li className="px-4 py-2">ALL</li>
          <li className="px-4 py-2">CODED</li>
          <li className="px-4 py-2">DESIGNED</li>
        </ul>
      </div>

      {/* Card Section */}
      <div>
        {Portfolioarray.map(Fetch)} {/* Correct usage of map */}
      </div>
    </div>
  );
};

export default Portfolio;
