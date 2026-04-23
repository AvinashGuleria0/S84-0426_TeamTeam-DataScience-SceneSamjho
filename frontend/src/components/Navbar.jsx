import React from 'react';
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 z-10 shrink-0">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold text-gray-800 md:hidden flex-1">SceneSamjho</h2>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-gray-200" />
        <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            A
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:block">Admin User</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;