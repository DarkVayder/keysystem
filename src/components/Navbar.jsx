import React, { useState } from 'react';
import { FiPhone, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-[linear-gradient(90.18deg,_#05071E_50.58%,_#000080_79.08%,_#111A89_90.72%)] text-white relative z-50">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 list-none items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-gray-300 hover:border-b-2 hover:border-gray-300 pb-1 transition duration-200 ${
                  item === 'Services' ? 'flex items-center gap-1' : ''
                }`}
              >
                {item}
                {item === 'Services' && <FiChevronDown size={16} />}
              </li>
            ))}
          </ul>

          {/* Contact - Desktop Only */}
          <div className="hidden md:flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-full hover:border-gray-400 transition duration-200">
            <FiPhone />
            <p className="text-sm">234 818 4441404</p>
          </div>

          {/* Hamburger / Close Icon */}
          <div className="md:hidden z-[60]">
            {menuOpen ? (
              <FiX
                size={28}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-white"
              />
            ) : (
              <FiMenu
                size={28}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer text-white"
              />
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[linear-gradient(90.18deg,_#05071E_50.58%,_#000080_79.08%,_#111A89_90.72%)] text-white z-40 flex flex-col items-center justify-center space-y-8">
          <ul className="flex flex-col items-center gap-6 text-xl font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-gray-300 transition ${
                  item === 'Services' ? 'flex items-center gap-1' : ''
                }`}
              >
                {item}
                {item === 'Services' && <FiChevronDown size={16} />}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="flex items-center gap-2 mt-4 border border-gray-600 px-4 py-2 rounded-full hover:border-gray-400 transition duration-200">
            <FiPhone />
            <p className="text-sm">234 818 4441404</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
