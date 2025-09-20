
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-brand-teal-500/50 hover:shadow-2xl hover:shadow-brand-teal-900/30">
    <h4 className="text-xl font-500 text-white mb-2">{title}</h4>
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
          <FeatureCard title="Fast, straightforward, transparent process"></FeatureCard>
          <FeatureCard title="Alternate exit route for founders"></FeatureCard>
          <FeatureCard title="Potential for future exits to single buyer"></FeatureCard>
          <FeatureCard title="We deploy our own capital, which eliminates any barriers"></FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhySell;
