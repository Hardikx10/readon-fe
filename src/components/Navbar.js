// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo3 from "../assets/logo3.png";
import { ChevronDownIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleLanguageSelect = (url) => {
    window.location.href = url;  // Redirect to the selected domain
  };

  return (
    <nav className="flex justify-between items-center bg-white px-4 py-3 text-black fixed w-full z-50 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="h-12 w-32 pb-1.2"> {/* Added padding-bottom to the logo */}
          <img 
            src={logo3} 
            alt="ReadON Logo" 
            className="h-full w-full object-contain" 
          />
        </div>
      </div>

      {/* Navbar Links */}
      <div className="flex space-x-6 flex-grow justify-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">About</Link>
        <Link to="whychooseus" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Why Choose Us?</Link>
        <Link to="benefits" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Benefits</Link>
        <Link to="approach" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Our Approach</Link>
      </div>

      {/* Language Selector and Sign In Button */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <button 
            onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)} 
            className="bg-[#FB8500] text-white px-3 py-1 rounded hover:bg-[#cc883a] transition focus:outline-none flex items-center space-x-1"
          >
            <span>Language</span>
            <ChevronDownIcon className="h-4 w-4" /> 
          </button>
          
          {/* Language Dropdown */}
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul>
                <li 
                  onClick={() => handleLanguageSelect('https://arabia.example.com')}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Arabia
                </li>
                <li 
                  onClick={() => handleLanguageSelect('https://india.example.com')}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  India
                </li>
              </ul>
            </div>
          )}
        </div>

        <button className="bg-[#FB8500] text-white px-3 py-1 rounded hover:bg-[#dc933f] transition focus:outline-none">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
