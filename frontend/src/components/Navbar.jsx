import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, Menu, User, Settings, LogOut, CheckCircle2, ShieldAlert } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Navbar = ({ onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const profileRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-20 flex items-center justify-between px-6 z-30 shrink-0 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg shrink-0" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-slate-800 lg:hidden truncate">SceneSamjho</h2>
        
        <div className="hidden lg:flex items-center bg-slate-100/80 px-4 py-2.5 rounded-xl border border-transparent focus-within:border-indigo-500/30 focus-within:bg-white focus-within:shadow-sm focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all min-w-[280px] w-96 max-w-full">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input 
            type="text" 
            placeholder="Search reports or metrics..." 
            className="bg-transparent border-none outline-none ml-3 w-full text-sm placeholder-slate-400 text-slate-700 font-medium"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-6 shrink-0 relative">
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button onClick={() => setIsNotifOpen(!isNotifOpen)} className="text-slate-400 hover:text-slate-800 transition-colors p-2 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-100 relative">
            <div className="absolute flex h-3 w-3 top-1 right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white pointer-events-none"></span>
            </div>
            <Bell className="w-6 h-6" />
          </button>
          
          {isNotifOpen && (
            <div className="absolute right-0 sm:-right-4 mt-3 w-[300px] sm:w-80 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden z-50 animate-fade-in origin-top-right">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                <h3 className="font-bold text-slate-800">Notifications</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">2 New</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors flex gap-4 border-b border-slate-50 group/item">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"><ShieldAlert className="w-5 h-5"/></div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">High Severity Report</p>
                    <p className="text-xs text-slate-500 font-medium">New accident logged at City Junction.</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Just now</p>
                  </div>
                </div>
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors flex gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5"/></div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">Database Synced</p>
                    <p className="text-xs text-slate-500 font-medium">Daily backups successfully transferred.</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">2 hrs ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-center">
                <button onClick={() => setIsNotifOpen(false)} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Mark all as read</button>
              </div>
            </div>
          )}
        </div>
        
        <div className="w-px h-8 bg-slate-200 hidden sm:block" />
        
        {/* User Profile */}
        <div className="relative" ref={profileRef}>
          <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 focus-within:ring-4 focus-within:ring-indigo-500/10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200 overflow-hidden relative">
              <span className="relative z-10">A</span>
            </div>
            <div className="hidden md:flex flex-col pr-2">
              <span className="text-sm font-bold text-slate-800 leading-tight">Admin User</span>
              <span className="text-xs font-semibold text-slate-500">System Admin</span>
            </div>
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden z-50 animate-fade-in origin-top-right">
              <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-200 shrink-0">
                  A
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-slate-800 leading-tight truncate">Admin User</p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5 truncate">admin@scene.app</p>
                </div>
              </div>
              <div className="p-2 bg-slate-50/50">
                <button onClick={() => { setIsProfileOpen(false); localStorage.removeItem('sceneAppToken'); window.location.href = "/login"; }} className="w-full text-left px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-100 rounded-xl transition-all flex items-center gap-3 group">
                  <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
