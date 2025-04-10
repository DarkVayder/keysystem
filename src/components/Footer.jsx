import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0E0F1A] text-white px-6 py-16">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-16">
        <div className="mb-6">
          <img src={logo} alt="KeySystem Logo" className="w-40 mb-4" />
          <p className="text-gray-400 mt-2">
            © 2025 KeySystem Technology Limited. All rights reserved.
          </p>
        </div>

        <div className="text-gray-400 md:col-span-2 grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h2 className="font-bold text-2xl text-white mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>Core Refresh</li>
              <li>Application Management Services</li>
              <li>Evolution & Enhancement Services</li>
              <li>Solution Assurance & Validation</li>
              <li>Digital Banking & Financial Inclusion</li>
              <li>Online/Mobile Lending Solutions</li>
            </ul>
          </div>
          <div className="pt-2 mt-4 md:pt-6">
            <ul className="space-y-2">
              <li>Staff Augmentation Solutions</li>
              <li>Risk Management & Internal Audit Solutions</li>
              <li>Data Warehouse & Business Intelligence (BI)</li>
              <li>Enterprise Document Management Solutions</li>
              <li>KeySystem Software Testing</li>
              <li>Cybersecurity Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-4 gap-12 md:gap-16">
        <div>
          <h2 className="font-bold text-2xl text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="text-gray-400 md:col-span-2">
          <h2 className="font-bold text-2xl text-white mb-4">Contact Us</h2>
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

            {/* Contact Numbers */}
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
        {/* Social Icons */}
        <div className="flex space-x-6 col-span-2">
          <FaInstagram className="hover:text-white cursor-pointer text-xl" />
          <FaXTwitter className="hover:text-white cursor-pointer text-xl" />
          <FaLinkedinIn className="hover:text-white cursor-pointer text-xl" />
          <FaFacebookF className="hover:text-white cursor-pointer text-xl" />
        </div>

        {/* Nigeria Contact Info */}
        <div className="md:col-span-2 text-center md:text-left">
          <p className="font-semibold text-white">Nigeria</p>
          <p>Tel: +234 818 444 1404</p>
        </div>

        {/* Email Section */}
        <div className="md:col-span-2 text-center md:text-left">
          <p className="font-semibold text-white">Email</p>
          <p>enquiries@keysystemltd.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
