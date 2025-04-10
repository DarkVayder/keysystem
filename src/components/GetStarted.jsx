import React from 'react';
import spiral from '../assets/spiral.png';

const GetStarted = () => {
  return (
    <div className="w-full bg-[#0B2D92] bg-gradient-to-r from-[#0B2D92] to-[#030517] py-16 px-6 text-white">
      <div className="bg-[#030517] bg-gradient-to-r from-[#030517] to-[#181B4D] p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center md:justify-between transition-shadow duration-500 ease-in-out hover:shadow-[0_0_40px_rgba(65,105,225,0.6)] max-w-4xl mx-auto text-white">
        
        {/* Text Section */}
        <div className="flex-1 md:pr-6 text-white">
          <h1 className="text-3xl font-semibold mb-3">Ready to get started?</h1>
          <p className="text-lg text-gray-300 mb-3">Shoot us a Mail</p>
          <p className="text-base mb-1">Join numerous corporations, organizations, and businesses as they</p>
          <p className="text-base mb-1">scale their teams, tap into new market opportunities and build</p>
          <p className="text-base mb-1">innovative products with KeySystem Technology.</p>
          <p className="text-base mb-2">Join thousands of students who are ready to learn new skills or take</p>
          <p className="text-base mb-4">their career to the next level by enrolling in one of our training programs today.</p>

          <div className="mt-4">
            <button className="bg-gradient-to-r from-[#000080] to-[#4169E1] text-white font-semibold cursor-pointer px-6 py-2 rounded-full hover:brightness-110 transition duration-300">
              Send Us a Mail Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-6 w-full md:w-auto flex justify-center">
          <img src={spiral} alt="Spiral" className="w-40 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
