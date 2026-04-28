import React from 'react';

const Legal = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">{title}</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 prose prose-slate max-w-none">
        <p className="lead text-slate-600 font-medium pb-4 border-b border-slate-100">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="mt-6 text-slate-600">
          This is a placeholder page for the {title}. As this is a demonstration environment, 
          these documents are not populated with real legal text. In a production environment, 
          this section would contain the official {title} for SceneSamjho.
        </p>
        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. General Information</h2>
        <p className="text-slate-600 mb-4">
          All data submitted to the SceneSamjho platform is handled confidentially and used solely for training and operational purposes.
        </p>
        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Data Usage</h2>
        <p className="text-slate-600 mb-4">
          By using this service, you agree to the collection and use of information in accordance with our operating policies. We do not sell your personal data.
        </p>
      </div>
    </div>
  );
};

export default Legal;
