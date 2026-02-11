import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  const dimensions = {
    sm: 'w-8 h-8 text-xl',
    md: 'w-10 h-10 text-2xl',
    lg: 'w-14 h-14 text-4xl'
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Golden Pulse/Glow */}
      <div className={`absolute inset-0 bg-amber-400 rounded-xl blur-md opacity-20 group-hover:opacity-50 transition-opacity animate-breathe ${dimensions[size].split(' ')[0]} ${dimensions[size].split(' ')[1]}`}></div>
      
      {/* Main Logo Body with Golden Gradient */}
      <div className={`relative ${dimensions[size]} bg-gradient-to-br from-yellow-200 via-amber-500 to-orange-700 rounded-xl flex items-center justify-center text-white font-black overflow-hidden logo-glow transition-transform group-hover:scale-110 shadow-xl border border-yellow-300/30`}>
        
        {/* Shimmer Effect for Metallic Finish */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer"></div>
        </div>

        {/* The 'i' Character with Stylish Shadow */}
        <span className="relative z-10 select-none tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" style={{ fontFamily: 'Inter, sans-serif' }}>
          i
        </span>

        {/* Micro-Lens Flare sparkle */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-white/60 rounded-full blur-[1.5px] group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/20 rounded-full blur-[0.5px]"></div>
      </div>
    </div>
  );
};

export default BrandLogo;