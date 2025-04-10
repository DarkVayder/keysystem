import React from 'react';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';

const Offer = () => {
  return (
    <div className="bg-[#030517] py-16 px-6 sm:px-8 md:px-12 lg:px-20 text-center text-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Our Offerings
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity solutions drive efficiency, security, and growth. We empower businesses to thrive in the digital age.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-12">
      <button className="bg-[#000080] text-white font-semibold cursor-pointer px-6 py-2 rounded-full transition duration-300 hover:bg-[#4169E1]">
  Learn More
</button>

      </div>

      {/* Smaller Offer Images */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {[offer1, offer2, offer3].map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img}
              alt={`Offer ${idx + 1}`}
              className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
