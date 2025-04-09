import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0E0F1A] text-white px-6 py-12 text-sm">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 md:gap-16">
        <div>
          <img src={logo} alt="KeySystem Logo" className="w-40 mb-6" />
          <p className="text-gray-400 mt-4">
            © 2025 KeySystem Technology Limited. All rights reserved.
          </p>
        </div>

        <div className="text-gray-400 md:col-span-2 grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h2 className="font-bold text-2xl mb-2">SERVICES</h2>
            <ul className="space-y-1">
              <li>Core refresh</li>
              <li>Application management services</li>
              <li>Evolution & enhancement services</li>
              <li>Solution Assurance & validation</li>
              <li>Digital Banking & financial inclusion</li>
              <li>Online/mobile lending solution</li>
            </ul>
          </div>
          <div className="pt-2 mt-4 md:pt-6">
            <ul className="space-y-1">
              <li>Staff augmentation solutions</li>
              <li>Risk management & Internal audit solutions</li>
              <li>Data Warehouse & Business Intelligence (BI)</li>
              <li>Enterprise Document Management Solutions</li>
              <li>KeySystem software testing</li>
              <li>Cybersecurity Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-4 gap-10 md:gap-16">
        <div>
          <h2 className="font-bold text-2xl text-gray-400 mb-4">QUICK LINKS</h2>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="text-gray-400 md:col-span-2">
          <h2 className="font-bold text-2xl text-gray-400 mb-4">CONTACT</h2>
          <div className="space-y-6">
            {/* Address block */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-white">Nigeria</p>
                <p>55G Adebisi Omotola Close,</p>
                <p>Off Samuel Adedoyin Street,</p>
                <p>Victoria Island</p>
              </div>
              <div>
                <p className="font-semibold text-white">United Kingdom</p>
                <p>39 Kenyon Lane, Off Moston Lane,</p>
                <p>Moston, Manchester, United Kingdom, M40 9JG</p>
              </div>
            </div>

            {/* Horizontal contact numbers */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300 pt-2">
              <div>
                <p className="font-semibold text-white">United Kingdom</p>
                <p>Tel: +44 161 948 1444</p>
              </div>
              <div>
                <p className="font-semibold text-white">United Arab Emirates</p>
                <p>Tel: +971 50 423 8817</p>
              </div>
              <div>
                <p className="font-semibold text-white">Canada</p>
                <p>Tel: +1 647 977 1435</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-6 gap-6 items-start">
        <div className="flex space-x-4 col-span-2">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <p className="font-semibold">Nigeria</p>
          <p>Tel: +234 818 444 1404</p>
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <p className="font-semibold">Email</p>
          <p>enquiries@keysystemltd.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
