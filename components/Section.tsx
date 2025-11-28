import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

// Kontener sekcji z nagłówkiem w stylu terminala (Section Container)
const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 border-b border-term-dim ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <span className="text-term-green opacity-50">{'>'}</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
            {title}
          </h2>
          <div className="h-px bg-term-green flex-grow opacity-30 ml-4"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;