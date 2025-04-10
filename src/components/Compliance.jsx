import React from 'react';
import CC1 from '../assets/CC1.png';
import CC2 from '../assets/CC2.png';
import CC3 from '../assets/CC3.png';
import CC4 from '../assets/CC4.png';
import CC5 from '../assets/CC5.png';
import CC6 from '../assets/CC6.png';
import CC7 from '../assets/CC7.png';
import CC8 from '../assets/CC8.png';
import CC9 from '../assets/CC9.png';
import CC10 from '../assets/CC10.png';
import CC11 from '../assets/CC11.png';
import CC12 from '../assets/CC12.png';
import CC13 from '../assets/CC13.png';
import CC14 from '../assets/CC14.png';
import CC18 from '../assets/CC18.png';

const Compliance = () => {
  return (
    <div className="bg-[#030517] py-16 px-6 text-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Compliance Certifications &</h1>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Standards We Specialize In</h1>
        <p className="text-gray-300 text-lg">Elevate Your Organization's Security Posture with Our</p>
        <p className="text-gray-300 text-lg mb-6">Compliance/Standards Consulting Services</p>
        <button className="bg-gradient-to-r from-[#000080] to-[#4169E1] hover:from-[#1E90FF] hover:to-[#6495ED] text-white font-semibold cursor-pointer px-6 py-2 rounded-full transition-all duration-300 shadow-md">
  Contact Us
</button>

      </div>

      {/* Grid Section */}
      <div className="bg-white rounded-xl py-12 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          <img src={CC1} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC2} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC3} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC4} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC5} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC6} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC7} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC8} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC9} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC10} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC11} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC12} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC13} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC14} alt="cert" className="w-24 h-auto object-contain" />
          <img src={CC18} alt="cert" className="w-24 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Compliance;
