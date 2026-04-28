import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SceneSamjho Data Science Team. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
