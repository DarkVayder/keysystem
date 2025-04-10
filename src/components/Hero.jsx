import React from 'react';
import heroImage from '../assets/hero.png';
import strokeImage from '../assets/stroke.png';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[linear-gradient(90.18deg,_#05071E_50.58%,_#000080_79.08%,_#111A89_90.72%)] overflow-hidden flex items-center justify-center">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 sm:px-8 md:px-24 py-16">
        <p className="bg-[#2E6D9C] tracking-widest text-sm mb-6 mt-4 border border-gray-600 px-4 py-3 rounded-full">
          Welcome to KeySystem
        </p>

        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-300 mb-6">IT Consulting for</h3>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-300 mb-6">Forward-thinking</h3>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-300 mb-8">Businesses</h3>

        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight mb-12 max-w-4xl">
          Driving Digital Transformation, One Solution at a Time
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
        <button className="bg-[#000080] text-white font-semibold cursor-pointer px-6 py-2 rounded-full transition duration-300 hover:bg-[#4169E1]">
  Get Started
</button>

          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>

        {/* Hero and Stroke Images */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* Stroke Image */}
          <img
            src={strokeImage}
            alt="stroke"
            className="absolute bottom-0 left-0 w-full h-auto z-0"
          />

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="relative z-10 w-full max-w-3xl sm:max-w-4xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero); 
