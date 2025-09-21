import React from 'react';
import { Script } from 'vm';
import TallyForm from "./TallyForm";

const SubmissionForm: React.FC = () => {
  return (
    <section id="submit-idea" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to sell your product?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Please submit the form below to start the process.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl shadow-brand-teal-900/20">
          {/* <div className="p-4 text-center bg-gray-900/30">
            <p className="text-sm text-gray-400">
              Note: You may need to scroll within the embedded form to see all fields.
            </p>
          </div> */}
          {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeszoU8Y2alEkhGg6fDzYuHiU3CvSZe4ONY9f8JyxLzTkrRVw/viewform?embedded=true"
            width="100%"
            height="850"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="SaaS Idea Submission Form"
            className="block"
            aria-label="SaaS Idea Submission Form"
          >
            Loading…
          </iframe> */}
          <TallyForm />

        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
