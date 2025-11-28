import React from 'react';

// Komponent migającego kursora (Blinking Cursor Component)
const Cursor: React.FC = () => {
  return (
    <span className="inline-block w-2.5 h-5 bg-term-green animate-cursor-blink ml-1 align-middle"></span>
  );
};

export default Cursor;