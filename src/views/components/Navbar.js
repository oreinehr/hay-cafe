import React, { useState } from 'react';
import { NavigationController } from '../../controllers/NavigationController';
import { FaInstagram, FaBars, FaTimes, FaSpotify } from 'react-icons/fa';
import Img from "../../public/hc.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = NavigationController.getMenuItems();
  const socialLinks = NavigationController.getSocialLinks();

  const getIcon = (platform) => {
    switch (platform) {
      case 'instagram': return <FaInstagram />;
      case 'spotify': return <FaSpotify />;
      default: return null;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={Img} alt="Hay Cafe" className=" w-14"/>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.path}
                    className="text-white hover:text-[#394833] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      NavigationController.handleNavigation(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="text-[#8B4513] hover:text-[#A0522D] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="text-[#8B4513] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F5F5F5]"
                onClick={(e) => {
                  e.preventDefault();
                  NavigationController.handleNavigation(item.path);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-5 py-3 flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-[#8B4513]  hover:text-[#A0522D] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

