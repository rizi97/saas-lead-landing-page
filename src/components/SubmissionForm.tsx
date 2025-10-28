import React from 'react';
import ProductForm from "./ProductForm";

const SubmissionForm: React.FC = () => {
  return (
    <section id="submit-idea" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready To Sell Your Product?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Please submit the form below to start the process.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl shadow-brand-teal-900/20">

          <ProductForm />

        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
