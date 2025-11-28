import React from 'react';

// Logotyp z efektem Glitch (Glitch Logo)
const GlitchLogo: React.FC = () => {
  return (
    <div className="relative mb-8 select-none">
      <h1 
        className="glitch text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
        data-text="DEEKAY"
      >
        DEEKAY
      </h1>
      <div className="absolute -bottom-4 right-0 text-xs md:text-sm text-term-green/60 tracking-widest">
        SYSTEM_VER_3.0
      </div>
    </div>
  );
};

export default GlitchLogo;