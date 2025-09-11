
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,150,136,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Have a Micro-SaaS Idea?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We invest in and acquire promising software projects. If you've built something amazing or have a brilliant idea, we want to hear from you.
        </p>
        <a 
          href="#submit-idea" 
          className="bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-teal-500/20"
        >
          Pitch Your Idea
        </a>
      </div>
    </section>
  );
};

export default Hero;
