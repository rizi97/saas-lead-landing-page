
import React from 'react';

const ProcessStep: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-full bg-brand-teal-500 text-white font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 px-4">{title}</h3>
    <p className="text-gray-400 px-4">{children}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Simple Process</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We've made it as easy as possible to share your vision with us.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Dotted line connector */}
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-700 border-l-2 border-dashed border-gray-600"></div>
            <div className="space-y-12">
              <ProcessStep number="1" title="Submit Your Idea">
                Fill out our straightforward submission form with the details of your project or idea. The more detail, the better!
              </ProcessStep>
              <ProcessStep number="2" title="Internal Review">
                Our expert team will carefully review your submission, evaluating its market potential, technical feasibility, and alignment with our portfolio.
              </ProcessStep>
              <ProcessStep number="3" title="Receive Feedback">
                We'll get back to you within 5-7 business days. If there's a potential fit, we'll schedule a discovery call to learn more.
              </ProcessStep>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
