import React from "react";
import ServiceForm from "./ServiceForm";

export default function BuildWithUs() {
  return (
    <section className="py-20 bg-gray-800/30" id="companies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Build With Us</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Leverage our growth and development expertise</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl shadow-brand-teal-900/20">
         
          <ServiceForm />

        </div>
      </div>
    </section>
  );
}
