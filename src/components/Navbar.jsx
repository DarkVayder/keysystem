import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FiPhone, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // State to track scroll

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Effect hook to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50); // Change state when scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial scroll position
    if (window.scrollY > 50) {
      setIsScrolling(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar with scroll effect */}
      <div
        className={`${
          isScrolling ? 'bg-neutral-900 bg-opacity-80 backdrop-blur-md' : ''
        } bg-[linear-gradient(90.18deg,_#05071E_50.58%,_#000080_79.08%,_#111A89_90.72%)] text-white fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      >
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
                  item.name === 'Services' ? 'flex items-center gap-1' : ''
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
                {item.name === 'Services' && <FiChevronDown size={16} />}
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
                aria-label="Close Menu"
              />
            ) : (
              <FiMenu
                size={28}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer text-white"
                aria-label="Open Menu"
              />
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[linear-gradient(90.18deg,_#05071E_50.58%,_#000080_79.08%,_#111A89_90.72%)] text-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300"
          aria-expanded={menuOpen}
        >
          <ul className="flex flex-col items-center gap-6 text-xl font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-gray-300 transition ${
                  item.name === 'Services' ? 'flex items-center gap-1' : ''
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
                {item.name === 'Services' && <FiChevronDown size={16} />}
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
