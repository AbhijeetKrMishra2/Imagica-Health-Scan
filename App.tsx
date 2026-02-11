
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingModule from './components/BookingModule';
import ReportPortal from './components/ReportPortal';
import InvestorSection from './components/InvestorSection';
import CenterLocator from './components/CenterLocator';
import AIHealthAdvisor from './components/AIHealthAdvisor';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { AppView } from './types';
import { EXPERTS, EQUIPMENTS, SERVICES_LIST } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case AppView.BOOKING:
        return <BookingModule onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.REPORTS:
        return <ReportPortal onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.INVESTORS:
        return <InvestorSection />;
      case AppView.LOCATIONS:
        return <CenterLocator />;
      case AppView.CAREERS:
        return <CareersSection />;
      case AppView.CONTACT:
        return <ContactSection />;
      case AppView.ABOUT:
        return (
          <div className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 md:mb-6 uppercase tracking-tight">Our Mission & Experts</h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
                "Together we can and we will make a difference. Better Accuracy, Faster Service."
              </p>
            </div>

            {/* Director's Message - Refined for Laptop & Large Desktop */}
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-slate-100 mb-20 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side: Profile - Side by side starting at lg (laptop) */}
                <div className="lg:w-[35%] relative bg-slate-900 overflow-hidden min-h-[400px] lg:min-h-full">
                  <div className="absolute top-0 right-0 w-full h-20 bg-red-600 -skew-y-6 translate-y-[-50%]"></div>
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-red-600 skew-y-6 translate-y-[50%]"></div>
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-10 xl:p-12 text-center">
                    <div className="w-48 h-48 lg:w-56 xl:w-64 lg:h-56 xl:h-64 bg-white rounded-full p-2 shadow-2xl mb-8 relative">
                      <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-bold overflow-hidden text-center px-4">
                        Dr. Mihir Kumar Jha
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Director</div>
                    </div>
                    <h2 className="text-2xl xl:text-3xl font-black text-white uppercase tracking-tight">Dr. Mihir Kumar Jha</h2>
                    <p className="text-red-400 text-xs font-bold mt-2 uppercase tracking-[0.2em]">Medical Excellence Lead</p>
                  </div>
                </div>
                
                {/* Right Side: Content */}
                <div className="lg:w-[65%] p-8 md:p-12 lg:p-14 xl:p-20 bg-white">
                  <div className="space-y-8">
                    <div className="space-y-6 text-slate-700 leading-relaxed text-lg xl:text-xl">
                      <p className="font-medium">
                        "My Professional Journey Started with a passion for excellence in high quality diagnostics. In the early days of my career, I acknowledged that precise and timely diagnosis can indeed save lives."
                      </p>
                      <p className="font-medium">
                        "This thought affixed deep in my heart and the constant urge to serve people heightened. With this in my mind, I started Imagica Health Scan to offer high quality diagnostic services in a patient-centric manner."
                      </p>
                      <p className="font-medium">
                        "I feel every patient deserves a final diagnosis. We have started all kinds of guided core biopsy for histopathological correlation to ensure accuracy."
                      </p>
                      <p className="font-medium italic text-blue-900 border-l-4 border-blue-600 pl-6">
                        "It gives me great pleasure to inform you that we have started CT Coronary Angiography first time in Dhanbad—an emerging new dimension of Preventive Radiology."
                      </p>
                      <p className="font-medium">
                        "We are trying our best to make our team give the best of services by making their stay comfortable and short, in line with our motto: <span className="text-blue-600 font-black tracking-tight">'Better Accuracy, Faster Service.'</span>"
                      </p>
                    </div>
                    
                    <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <div>
                        <p className="font-black text-xl text-slate-900">Regards</p>
                        <p className="text-red-600 font-black text-2xl lg:text-3xl mt-1">Dr. M. K. Jha</p>
                      </div>
                      <p className="text-xl lg:text-2xl font-black text-blue-900 italic max-w-xs">"Together we can and we will make a difference"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-900 uppercase tracking-tight">Our Medical Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {EXPERTS.map((expert, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 group hover:shadow-2xl transition duration-500 text-center">
                  <div className="h-56 lg:h-64 bg-slate-100 relative flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/0 transition-colors"></div>
                    <span className="text-slate-300 font-bold uppercase tracking-widest text-sm relative z-10">{expert.name}</span>
                  </div>
                  <div className="p-8 bg-white relative">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                      {expert.name.charAt(4)}
                    </div>
                    <h3 className="text-2xl font-black text-blue-900 mb-1 mt-10">{expert.name}</h3>
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">{expert.title}</p>
                    <div className="h-px w-12 bg-slate-200 mx-auto mb-4"></div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold uppercase px-4">{expert.qualifications}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero onBook={() => setCurrentView(AppView.BOOKING)} />
            
            {/* Our Services Section */}
            <div className="bg-white py-16 md:py-24 px-4 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                   <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Comprehensive Diagnostic Destination</span>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter inline-block relative">
                     Our Services
                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-900 rounded-full"></div>
                   </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 mb-16 items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_LIST.map((service, idx) => (
                      <div key={idx} className="relative group">
                        <div className={`py-4 px-6 rounded-r-full shadow-sm ${service.color} text-white font-black text-sm uppercase tracking-wider transform transition group-hover:translate-x-2 group-hover:shadow-md cursor-default`}>
                          {service.name}
                        </div>
                        <div className={`absolute top-0 left-0 w-1.5 h-full ${service.color} brightness-75 rounded-full`}></div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-10">
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-blue-900 pl-8">
                      "We offer a comprehensive range of diagnostic services aimed at accurately assessing and identifying various medical conditions. Our highly skilled team of professionals and latest technology enable us to deliver precise and reliable diagnostic results."
                    </p>
                    
                    <div className="bg-slate-50 p-10 rounded-[3rem] border-2 border-slate-100 space-y-6 shadow-inner">
                      {['All Diagnostic Services Under One Roof', 'Free Ambulance Services', 'Extended Service Hours (8 Am to 8 Pm)'].map((txt) => (
                        <div key={txt} className="flex items-center gap-4 text-blue-900 font-black uppercase tracking-tight text-sm">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">▶</div>
                          {txt}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      {['MRI (3 Tesla)', 'CT Scan (512 Slice)', 'Cardiac CT & MRI', 'Guided True Cut Biopsies'].map((icon, i) => (
                         <div key={i} className="flex flex-col items-center text-center gap-2">
                            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-2xl shadow-inner group hover:scale-110 transition">
                              {i === 0 ? '🧠' : i === 1 ? '⚡' : i === 2 ? '🫀' : '🔬'}
                            </div>
                            <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter leading-tight">{icon}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Liver Elastography Section */}
            <div className="bg-slate-900 py-20 md:py-32 px-4 relative overflow-hidden text-white">
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                  <span className="bg-orange-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block shadow-2xl animate-bounce">1st Time in Jharkhand - RESONA i9</span>
                  <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8">LIVER ELASTOGRAPHY</h2>
                  <p className="text-blue-200 text-xl md:text-2xl font-medium max-w-3xl mx-auto italic uppercase tracking-wider">
                    "Early detection of liver disease can save lives."
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                  <div className="space-y-12">
                    <div className="bg-white/5 backdrop-blur-md p-10 lg:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
                       <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-tighter text-blue-400">Diagnostic Stages</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                         {[
                           { name: 'Healthy Liver', color: 'bg-green-500' },
                           { name: 'Simple Fatty Liver', color: 'bg-yellow-400' },
                           { name: 'Fatty Liver / NASH', color: 'bg-orange-400' },
                           { name: 'Liver Cirrhosis', color: 'bg-red-500' },
                           { name: 'Hepatocellular Carcinoma', color: 'bg-red-800' },
                         ].map((stage) => (
                           <div key={stage.name} className="flex items-center gap-4 group">
                             <div className={`w-4 h-4 rounded-full ${stage.color} group-hover:scale-125 transition shadow-lg`}></div>
                             <p className="text-sm font-black uppercase tracking-tight">{stage.name}</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <h4 className="text-2xl md:text-3xl font-black text-blue-400 uppercase tracking-tight">Precision Imaging Protocol</h4>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                      RESONA i9 2D Shear-Wave Elastography is a gold-standard non-invasive imaging technique that measures the stiffness of liver tissue to catch disease at stage 0.
                    </p>
                    <button onClick={() => setCurrentView(AppView.BOOKING)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all hover:-translate-y-2">Book Liver Assessment</button>
                  </div>
                </div>
              </div>
            </div>

            <AIHealthAdvisor />
            <CenterLocator />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow pt-24 md:pt-36">
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} />
      
      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.15)]">
        <button onClick={() => setCurrentView(AppView.HOME)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.HOME ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-black uppercase">Home</span>
        </button>
        <button onClick={() => setCurrentView(AppView.BOOKING)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.BOOKING ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">📅</span>
          <span className="text-[10px] font-black uppercase">Book</span>
        </button>
        <button onClick={() => setCurrentView(AppView.REPORTS)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.REPORTS ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">📄</span>
          <span className="text-[10px] font-black uppercase">Reports</span>
        </button>
      </div>
    </div>
  );
};

export default App;
