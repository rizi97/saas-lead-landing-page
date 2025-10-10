import React, { useState } from "react";
import logoImg from "../assets/logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div class="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8">
            <a href="#criteria" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Criteria</a>
            <a href="#process" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Process</a>
            <a href="#team" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">Team</a>
            <a href="#faq" className="text-gray-300 hover:text-brand-teal-400 transition-colors duration-300">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#submit-idea"
            className="hidden md:inline-block bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Submit Product
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
  className={`fixed top-0 right-0 h-[100vh] w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col space-y-6 px-6 text-lg">
          <a href="#criteria" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-teal-400 transition">Criteria</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-teal-400 transition">Process</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-teal-400 transition">Team</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-teal-400 transition">FAQ</a>

          <a href="#submit-idea" onClick={() => setIsOpen(false)} className="mt-4 bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 text-center">
            Submit Product
          </a>
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
