
import React from 'react';

interface HeroProps {
  onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <div className="relative overflow-hidden bg-white pb-20 pt-10 md:pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-blue-200">
            <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            Better Accuracy • Faster Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tighter">
            Where, <span className="text-blue-600">Best of Talents</span><br/>
            Meets <span className="text-orange-500">Best of Technologies</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium italic border-l-4 border-slate-100 pl-6">
            1st Time in Dhanbad: High-Precision 3 Tesla MRI and 512 Slice CT. 
            Delivering world-class preventive radiology and diagnostic excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <button 
              onClick={onBook}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-200 transition transform hover:-translate-y-1"
            >
              Book Your Scan
            </button>
            <button className="px-10 py-5 bg-white hover:bg-slate-50 text-blue-900 border-2 border-blue-900 rounded-2xl font-black text-sm uppercase tracking-widest transition">
              Meet Our Experts
            </button>
          </div>

          <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-8">
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 text-xl">🧠</div>
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none">MRI<br/>3 Tesla</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 text-xl">⚡</div>
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none">CT Scan<br/>512 Slice</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 text-xl">🫀</div>
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none">Cardiac<br/>CT & MRI</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl">
          <div className="relative p-3 bg-white rounded-[3rem] shadow-2xl border-4 border-slate-50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="bg-slate-200 rounded-[2.5rem] w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden">
               {/* Center Building Imagery Mockup */}
               <div className="absolute inset-0 bg-blue-900/10 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-6xl mb-4">🏥</span>
                  <p className="text-2xl font-black text-blue-900 uppercase tracking-tighter">IMAGICA HEALTH SCAN</p>
                  <p className="text-sm font-bold text-slate-500 mt-2">Dhanbad's Premier Imaging Hub</p>
               </div>
            </div>
            <div className="absolute top-8 left-8 bg-blue-900/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl z-20 border border-white/20">
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] mb-1">Dhanbad Main Hub</p>
              <p className="font-black text-white text-sm">Sri Ram Vatika, Dhaiya</p>
            </div>
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl z-20 border border-slate-100">
               <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">Open All Days</p>
               <p className="font-black text-slate-800 text-xs">7:30 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
