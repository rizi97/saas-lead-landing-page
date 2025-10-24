
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhySell from './components/WhySell';
import Process from './components/Process';
import SubmissionForm from './components/SubmissionForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import BuildWithUs from './components/BuildWithUs';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <WhySell />
        <SubmissionForm />
        <BuildWithUs />
        {/* <TeamSection /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
