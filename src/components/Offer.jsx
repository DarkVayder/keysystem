import React from 'react';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';

const Offer = () => {
  return (
    <div className="bg-[#030517] py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-center text-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Our Offerings
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity solutions drive efficiency, security, and growth. We empower businesses to thrive in the digital age.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-12">
      <button className="bg-gradient-to-r from-[#000080] to-[#4169E1] hover:from-[#4169E1] hover:to-[#000080] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          Learn More
        </button>
      </div>

      {/* Smaller Offer Images */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[offer1, offer2, offer3].map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`Offer ${idx + 1}`}
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
