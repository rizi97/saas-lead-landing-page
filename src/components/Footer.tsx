import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hyprlynx Capital. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            <b>Email Us:</b> <u><a href="mailto:info@hyprlynxcapital.com">info@hyprlynxcapital.com</a></u>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
