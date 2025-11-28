import React, { useState } from 'react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations['nav'];
}

// Górny pasek nawigacji (Top Navigation Bar)
const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funkcja przewijania do sekcji (Scroll function)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t.about, id: 'about' },
    { label: t.shop, id: 'shop' },
    { label: t.download, id: 'download' },
    { label: t.newsletter, id: 'newsletter' },
    { label: t.contact, id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm border-b border-term-green/30 z-50 h-16 flex items-center justify-between px-4 md:px-8">
      {/* Przełącznik Języka (Language Toggle) */}
      <div className="flex items-center text-sm font-bold">
        <span className="mr-2 opacity-50">[</span>
        <button 
          onClick={() => setLang('PL')}
          className={`hover:text-white transition-colors ${lang === 'PL' ? 'text-term-green' : 'text-term-green/40'}`}
        >
          PL
        </button>
        <span className="mx-2 opacity-50">|</span>
        <button 
          onClick={() => setLang('EN')}
          className={`hover:text-white transition-colors ${lang === 'EN' ? 'text-term-green' : 'text-term-green/40'}`}
        >
          EN
        </button>
        <span className="ml-2 opacity-50">]</span>
      </div>

      {/* Menu Desktopowe (Desktop Menu) */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-sm">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button 
              onClick={() => scrollTo(item.id)}
              className="group relative hover:text-white transition-colors py-2"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 text-term-green font-bold transition-opacity">_</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Menu Mobilne Przycisk (Mobile Toggle) */}
      <button 
        className="md:hidden text-term-green border border-term-green px-2 py-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '[ X ]' : '[ MENU ]'}
      </button>

      {/* Menu Mobilne Dropdown (Mobile Dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-b border-term-green p-4 flex flex-col gap-4 md:hidden">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-2 border-l-2 border-transparent hover:border-term-green hover:bg-term-green/10 pl-4 transition-all"
            >
              {`> ${item.label}`}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;