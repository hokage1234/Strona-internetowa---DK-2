import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import GlitchLogo from './components/GlitchLogo';
import Cursor from './components/Cursor';
import { CONTENT } from './constants';
import { Language } from './types';
import { ArrowUp } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('PL');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const t = CONTENT[lang];

  // Obsługa scrolla dla przycisku "W górę" (Scroll handler)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-term-green font-mono pb-20">
      {/* CRT Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] crt-overlay opacity-20"></div>

      <Navbar lang={lang} setLang={setLang} t={t.nav} />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center p-4 relative overflow-hidden">
          
          <GlitchLogo />
          
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base opacity-70 mb-8 animate-pulse">
              {t.hero.subtitle}
            </p>
            
            <a 
              href="WPISZ_PRZEKIEROWANIE" // LINK PLACEHOLDER
              className="inline-block bg-term-green text-black font-bold text-lg md:text-xl px-8 py-4 hover:bg-white hover:scale-105 transition-all duration-200 border-2 border-term-green shadow-[0_0_15px_rgba(0,255,65,0.5)]"
            >
              {t.hero.joinForum}
            </a>
          </div>

          {/* Tło macierzy (Matrix Background Decoration) */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none overflow-hidden flex justify-between px-10">
            {[...Array(5)].map((_, i) => (
               <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-term-green to-transparent animate-scanline" style={{ animationDelay: `${i * 1.5}s` }}></div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" title={t.about.title}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {t.about.content.map((line, idx) => (
                <p key={idx} className="leading-relaxed">
                  {line} {idx === t.about.content.length - 1 && <Cursor />}
                </p>
              ))}
            </div>
            <div className="border border-term-green/30 p-4 bg-term-dim/10 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-term-green"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-term-green"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-term-green"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-term-green"></div>
              
              <div className="aspect-video bg-black flex items-center justify-center border border-dashed border-term-green/20">
                <span className="animate-pulse">[ USER_AVATAR_PLACEHOLDER ]</span>
              </div>
            </div>
          </div>
        </Section>

        {/* SHOP SECTION */}
        <Section id="shop" title={t.shop.title}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-term-green p-4 hover:bg-term-green/5 transition-colors group relative">
                 <div className="absolute -top-3 left-4 bg-black px-2 text-xs border border-term-green/50">
                    ITEM_0{item}
                 </div>
                 
                 <div className="h-48 mb-4 border border-dashed border-term-green/30 flex items-center justify-center bg-term-dim/5 overflow-hidden">
                    <img src={`https://picsum.photos/400/400?random=${item}`} alt="Product" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all mix-blend-luminosity" />
                 </div>
                 
                 <h3 className="text-xl font-bold mb-2">CYBER_ARTIFACT_V{item}</h3>
                 <div className="flex justify-between items-center mt-4 border-t border-term-green/20 pt-4">
                    <span>{t.shop.price}: <span className="font-bold">99 PLN</span></span>
                    <button className="bg-transparent hover:bg-term-green hover:text-black border border-term-green px-3 py-1 text-sm transition-colors">
                      {t.shop.buy}
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </Section>

        {/* DOWNLOAD SECTION */}
        <Section id="download" title={t.download.title}>
           <div className="space-y-4">
              <p className="text-sm opacity-70 mb-6">{t.download.desc}</p>
              
              {[t.download.file1, t.download.file2].map((file, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border border-term-green/40 p-4 hover:border-term-green transition-colors bg-black">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <span className="text-2xl">💾</span>
                    <span className="font-bold">{file}</span>
                  </div>
                  <a href="WPISZ_PRZEKIEROWANIE" className="text-right hover:bg-term-green hover:text-black px-4 py-1 border border-term-green/50 md:border-transparent transition-colors inline-block">
                    [ DOWNLOAD_NOW ]
                  </a>
                </div>
              ))}
           </div>
        </Section>

        {/* NEWSLETTER SECTION */}
        <Section id="newsletter" title={t.newsletter.title}>
           <div className="max-w-2xl mx-auto border-l-4 border-term-green pl-6 py-2">
              <label className="block mb-2 text-sm opacity-80">> ROOT_ACCESS_REQUIRED:</label>
              <div className="flex flex-col md:flex-row gap-4">
                 <input 
                   type="email" 
                   placeholder={t.newsletter.placeholder}
                   className="flex-grow bg-transparent border-b-2 border-term-green/50 focus:border-term-green outline-none py-2 font-mono text-lg placeholder-term-green/30"
                 />
                 <button className="bg-term-green text-black font-bold px-6 py-3 hover:bg-white transition-colors">
                   {t.newsletter.button}
                 </button>
              </div>
           </div>
        </Section>

        {/* DONATION SECTION - CRITICAL */}
        <section className="py-20 px-4 text-center border-y-4 border-double border-term-green/40 bg-term-dim/5 mt-12 mb-12 relative overflow-hidden">
          {/* Ozdobniki tła (Background ornaments) */}
          <div className="absolute top-2 left-2 text-xs opacity-50">SYS_ID: 0x992</div>
          <div className="absolute bottom-2 right-2 text-xs opacity-50">HASH: #coffee</div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-pulse text-shadow-glow">
             {t.donation.title}
          </h2>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-term-green opacity-30 blur group-hover:opacity-75 transition-opacity duration-200"></div>
            <a 
              href="WPISZ_PRZEKIEROWANIE" 
              className="relative block bg-black border-2 border-term-green text-term-green hover:bg-term-green hover:text-black font-bold text-xl md:text-2xl px-12 py-6 uppercase tracking-widest transition-all transform hover:scale-105"
            >
              {t.donation.button}
            </a>
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <footer id="contact" className="py-12 border-t border-term-green/20 text-center text-sm opacity-60">
           <div className="mb-8 flex justify-center gap-8">
              {['INSTAGRAM', 'TWITTER', 'YOUTUBE', 'DISCORD'].map(social => (
                <a key={social} href="#" className="hover:text-white hover:underline decoration-term-green underline-offset-4 transition-all">
                  [{social}]
                </a>
              ))}
           </div>
           <p>
             &copy; {new Date().getFullYear()} DEEKAY. {t.footer.rights}
           </p>
           <p className="mt-2 text-xs">
             SYSTEM_STATUS: STABLE | UPTIME: 99.9%
           </p>
        </footer>

      </main>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 border border-term-green bg-black p-2 z-40 transition-opacity duration-300 hover:bg-term-green hover:text-black ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <span className="text-xl font-bold">[<ArrowUp className="inline w-4 h-4 mb-1" />]</span>
      </button>
    </div>
  );
}

export default App;