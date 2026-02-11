
import React, { useState } from 'react';
import { AppView } from '../types';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-[10px] md:text-xs py-1.5 px-4 flex justify-between items-center overflow-hidden">
        <div className="flex gap-4 items-center animate-pulse">
          <span className="flex items-center gap-1">🏆 ISO 9001:2015 Certified</span>
          <span className="hidden sm:flex items-center gap-1">🏥 NABL Accredited Partner</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Partner With Us</a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setView(AppView.HOME)} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <BrandLogo size="md" />
          <div>
            <span className="text-lg md:text-xl font-black text-blue-900 block leading-none tracking-tighter group-hover:text-blue-700 transition-colors">IMAGICA</span>
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-[0.3em]">Health Scan</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button 
            onClick={() => setView(AppView.HOME)} 
            className={currentView === AppView.HOME ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}
          >
            Home
          </button>
          
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 hover:text-blue-600 ${currentView === AppView.ABOUT ? 'text-blue-600 font-bold' : ''}`}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              About Us <span className="text-[10px]">▼</span>
            </button>
            <div className={`absolute top-full -left-4 w-48 bg-white shadow-xl rounded-xl py-2 transition-all transform origin-top ${activeDropdown === 'about' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
              <button onClick={() => setView(AppView.ABOUT)} className="w-full text-left px-4 py-2 hover:bg-slate-50">Company Profile</button>
              <button className="w-full text-left px-4 py-2 hover:bg-slate-50">Mission & Values</button>
              <button className="w-full text-left px-4 py-2 hover:bg-slate-50">Awards</button>
            </div>
          </div>

          <div className="relative group">
            <button 
              className={`flex items-center gap-1 hover:text-blue-600 ${currentView === AppView.INVESTORS ? 'text-blue-600 font-bold' : ''}`}
              onMouseEnter={() => setActiveDropdown('investors')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Investors <span className="text-[10px]">▼</span>
            </button>
            <div className={`absolute top-full -left-4 w-52 bg-white shadow-xl rounded-xl py-2 transition-all transform origin-top ${activeDropdown === 'investors' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
              <button onClick={() => setView(AppView.INVESTORS)} className="w-full text-left px-4 py-2 hover:bg-slate-50">Financial Documents</button>
              <button className="w-full text-left px-4 py-2 hover:bg-slate-50">Corporate Policy</button>
              <button className="w-full text-left px-4 py-2 hover:bg-slate-50">AGM/EGM Notices</button>
            </div>
          </div>

          <button 
            onClick={() => setView(AppView.CAREERS)} 
            className={`hover:text-blue-600 ${currentView === AppView.CAREERS ? 'text-blue-600 font-bold' : ''}`}
          >
            Careers
          </button>
          
          <button 
            onClick={() => setView(AppView.CONTACT)} 
            className={`hover:text-blue-600 ${currentView === AppView.CONTACT ? 'text-blue-600 font-bold' : ''}`}
          >
            Contact Us
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => setView(AppView.REPORTS)}
            className="px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition"
          >
            My Reports
          </button>
          <button 
            onClick={() => setView(AppView.BOOKING)}
            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 transition"
          >
            Book a Test
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => {setView(AppView.REPORTS); setIsMenuOpen(false);}} className="p-3 bg-slate-50 rounded-xl text-center">
              <div className="text-xl mb-1">📄</div>
              <div className="text-xs font-bold text-slate-700">Reports</div>
            </button>
            <button onClick={() => {setView(AppView.BOOKING); setIsMenuOpen(false);}} className="p-3 bg-blue-50 rounded-xl text-center">
              <div className="text-xl mb-1">📅</div>
              <div className="text-xs font-bold text-blue-700">Book Test</div>
            </button>
          </div>
          <div className="space-y-4 px-2 py-4">
            <button onClick={() => {setView(AppView.HOME); setIsMenuOpen(false);}} className="block w-full text-left text-lg font-medium">Home</button>
            <button onClick={() => {setView(AppView.ABOUT); setIsMenuOpen(false);}} className="block w-full text-left text-lg font-medium">About Us</button>
            <button onClick={() => {setView(AppView.INVESTORS); setIsMenuOpen(false);}} className="block w-full text-left text-lg font-medium">Investors</button>
            <button onClick={() => {setView(AppView.CAREERS); setIsMenuOpen(false);}} className="block w-full text-left text-lg font-medium">Careers</button>
            <button onClick={() => {setView(AppView.CONTACT); setIsMenuOpen(false);}} className="block w-full text-left text-lg font-medium">Contact Us</button>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl">
            <p className="text-sm font-semibold mb-2">Get our App</p>
            <div className="flex gap-4">
              <span className="text-xs border border-slate-700 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-800 transition">Android</span>
              <span className="text-xs border border-slate-700 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-800 transition">iOS</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;