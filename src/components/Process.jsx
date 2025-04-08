import React from 'react';
import box from '../assets/box.png';
import hands from '../assets/hands.png';
import delivery from '../assets/delivery.png';

const Process = () => {
  return (
    <div className='bg-[#030517] text-white py-16 px-6'>
      {/* Heading Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Our Process</h1>
        <p className='text-lg sm:text-xl text-gray-300'>At KeySystem, we leave you with a lasting impression</p>
      </div>

      {/* Process Steps */}
      <div className='flex flex-col items-center gap-8'>

        {/* Strategic Consultation */}
        <div className='bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-xl p-8 text-center w-full sm:w-4/5 md:w-3/5 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-[#181B4D] hover:to-[#04050B]'>
          <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='text-left sm:w-1/2'>
              <h2 className='text-2xl sm:text-3xl font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-blue-500'>
                Strategic Consultation
              </h2>
              <p className='text-gray-300 mb-4 transition-all duration-300 ease-in-out hover:text-gray-100'>
                We kick off with a strategic consultation to understand your brand, goals, and audience.
              </p>
            </div>
            <div className='sm:w-1/2'>
              <img src={box} alt="Strategic Consultation" className="w-24 sm:w-32 mx-auto transition-all duration-300 ease-in-out hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Collaboration and Delivery (Side by Side) */}
        <div className='flex flex-col sm:flex-row justify-between gap-8 w-full sm:w-4/5 md:w-3/5'>
          
          {/* Collaboration */}
          <div className='bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-xl p-8 text-center w-full sm:w-1/2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-[#181B4D] hover:to-[#04050B]'>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
              <div className='text-left sm:w-1/2'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-blue-500'>
                  Collaboration
                </h2>
                <p className='text-gray-300 mb-4 transition-all duration-300 ease-in-out hover:text-gray-100'>
                  At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy.
                </p>
              </div>
              <div className='sm:w-1/2'>
                <img src={hands} alt="Collaboration" className="w-24 sm:w-32 mx-auto transition-all duration-300 ease-in-out hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className='bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-xl p-8 text-center w-full sm:w-1/2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-[#181B4D] hover:to-[#04050B]'>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
              <div className='text-left sm:w-1/2'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-blue-500'>
                  Delivery
                </h2>
                <p className='text-gray-300 mb-4 transition-all duration-300 ease-in-out hover:text-gray-100'>
                  Our delivery rate is 100%; our clients deserve nothing less.
                </p>
              </div>
              <div className='sm:w-1/2'>
                <img src={delivery} alt="Delivery" className="w-24 sm:w-32 mx-auto transition-all duration-300 ease-in-out hover:scale-110" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Process;
