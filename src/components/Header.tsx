
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-teal-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2V7a1 1 0 00-1-1H8V5z" clipRule="evenodd" />
            </svg>
            Capital Chai
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Features</a>
          <a href="#process" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Process</a>
          <a href="#faq" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">FAQ</a>
        </nav>
        <a href="#submit-idea" className="hidden md:inline-block bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
          Submit Idea
        </a>
      </div>
    </header>
  );
};

export default Header;
