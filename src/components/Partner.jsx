import React from 'react';
import partners from '../assets/partners.png';

const Partner = () => {
  return (
    <div className="bg-[#030517] py-16 px-6 text-white text-center">
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Partners</h1>
        <p className="text-lg sm:text-xl text-gray-300">Creating a Synergy with Global Brands</p>
      </div>

      {/* Partners Image Section */}
      <div className="relative">
        <img 
          src={partners} 
          alt="Our Partners" 
          className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" 
        />
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-xl hover:opacity-0 transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Partner;
