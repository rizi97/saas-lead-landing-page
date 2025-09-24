
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-brand-teal-500/50 hover:shadow-2xl hover:shadow-brand-teal-900/30">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-teal-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-500 text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const WhySell: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Sell to us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Fast, straightforward, transparent process"
          ></FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15" /></svg>}
            title="Alternate exit route for founders"
          ></FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" role="img"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16l5-7 4 3 6-6" /><path d="M20 4v6h-6" /> <circle cx="17" cy="19" r="1" fill="currentColor" stroke="none"/><circle cx="20" cy="16" r="1" fill="currentColor" stroke="none"/><path d="M19.2 18.2l-2-2" /></g></svg>}
            title="Potential for future exits to single buyer"
          ></FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>}
            title="We deploy our own capital, which eliminates any barriers"
          ></FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhySell;
