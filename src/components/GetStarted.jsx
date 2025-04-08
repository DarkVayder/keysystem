import React from 'react';
import spiral from '../assets/spiral.png';

const GetStarted = () => {
  return (
    <div className="bg-gradient-to-b from-[#0B2D92] to-[#030517] py-16 px-6 text-white">
      {/* Card Section */}
      <div className="bg-gradient-to-t from-[#030517] to-[#181B4D] p-12 rounded-xl shadow-xl flex items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 pr-8">
          <h1 className="text-4xl font-semibold mb-4">Ready to get started?</h1>
          <p className="text-xl text-gray-300 mb-4">Shoot us a Mail</p>
          <h2 className="text-lg mb-2">Join numerous corporations, organizations, and businesses as they</h2>
          <h2 className="text-lg mb-2">scale their teams, tap into new market opportunities and build</h2>
          <h2 className="text-lg mb-2">innovative products with KeySystem Technology.</h2>
          <h2 className="text-lg mb-4">Join thousands of students who are ready to learn new skills or take</h2>
          <h2 className="text-lg mb-4">their career to the next level by enrolling in one of our training programs today.</h2>

          {/* Button Section */}
          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-[#000080] to-[#4169E1] text-white font-semibold px-8 py-3 rounded-full">
              Send Us a Mail Now
            </button>
          </div>
        </div>

        {/* Spiral Image Section */}
        <div className="flex-shrink-0">
          <img src={spiral} alt="Spiral" className="w-48 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
