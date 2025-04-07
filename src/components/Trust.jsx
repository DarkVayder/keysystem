import React from 'react';
import { FiPlay } from 'react-icons/fi';  // Importing the play icon
import trust from "../assets/trust.png";

const Trust = () => {
  return (
    <div className="bg-[#050617] py-16 px-6 md:px-20 text-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold mt-18">Why Are We Your Trusted Consultant?</h1>
      <p className="text-gray-400 text-lg mt-10">Empowering businesses with cutting-edge technologies</p>
      <h2 className="text-xl md:text-2xl text-gray-300 mt-8 leading-relaxed">
        Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
      </h2>
      <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed"> 
        excellence is the driving force behind our success. Excellence is our 
      </h2>
      <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
        legacy, and we are proud to carry it forward.
      </h2>

      <div className="mt-10">
        <p className="text-lg text-gray-400 mb-10">Watch the video to see how we are innovating to keep businesses on top of their games.</p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <img 
          src={trust} 
          alt="Trust" 
          className="w-full h-auto rounded-lg shadow-lg" 
        />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="text-4xl text-white bg-blue-500 p-4 rounded-full hover:bg-blue-700">
            <FiPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trust;
