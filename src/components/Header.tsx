
import React from 'react';
import logoImg from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#" className="flex text-lg items-center gap-2 uppercase logo">
            <img
              src={logoImg}
              alt="hyprlynx-logo"
              className="h-12 object-cover logo-img"
            />
            Hyprlynx Capital
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#criteria" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Criteria</a>
          <a href="#process" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Process</a>
          <a href="#team" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Team</a>
          <a href="#faq" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">FAQ</a>
        </nav>
        <a href="#submit-idea" className="hidden md:inline-block bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
          Submit Product
        </a>
      </div>
    </header>
  );
};

export default Header;
