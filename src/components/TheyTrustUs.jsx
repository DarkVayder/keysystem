import React from 'react';
import ttu from "../assets/ttu.png";

const TheyTrustUs = () => {
  return (
    <div className="bg-[#030517] py-16 px-6 text-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">They Trust Us</h1>
        <p className="text-lg sm:text-xl text-gray-300">And so can you</p>
      </div>

      {/* Large Image Section */}
      <div className="flex justify-center mb-12">
        <img src={ttu} alt="They Trust Us" className="w-[80%] sm:w-[60%] lg:w-[68%] h-auto object-contain" />
      </div>
    </div>
  );
};

export default TheyTrustUs;
