
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,150,136,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-normal">
          We Acquire and Build{" "} <br/>
          <span className="small-text">(tiny)</span> Software
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We give founders a quick and straightforward exit with our simple direct process. If
you are founder who has built a great software product, gained market validation,
and solved for a specific niche, we'd love to hear from you.
        </p>
        <a 
          href="#submit-idea" 
          className="bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-teal-500/20"
        >
          Let’s talk
        </a>
      </div>

      <style>{`
        h1 .small-text {
          font-family: 'Press Start 2P'; 
          font-size: 34px
        }
        @media (max-width: 767px) {
          h1 .small-text {
            position: relative;
            top: 4px
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;
