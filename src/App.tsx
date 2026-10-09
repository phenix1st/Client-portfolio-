import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveCanvasBackground } from './components/InteractiveCanvasBackground';
import { FloatingBottomNav } from './components/FloatingBottomNav';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FrameworkSection } from './components/FrameworkSection';
import { TechTickerSection } from './components/TechTickerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const sections = [
        { id: 'contact', el: document.getElementById('contact') },
        { id: 'works', el: document.getElementById('work') },
        { id: 'home', el: document.getElementById('home') },
      ];

      for (const s of sections) {
        if (s.el && scrollPos >= s.el.offsetTop) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-100 relative selection:bg-white/20 selection:text-white pb-20">
      {/* Dynamic Dual-Ring Cursor */}
      <CustomCursor />

      {/* Interactive WebGL / Canvas Dust & Timeline Background */}
      <InteractiveCanvasBackground />

      {/* Main Content Flow */}
      <main className="relative z-10 bg-black">
        <HeroSection />
        <PortfolioSection />
        <FrameworkSection />
        <TechTickerSection />
        <ContactSection />
      </main>

      {/* Floating Bottom Navigation Bar (Centered at Bottom) */}
      <FloatingBottomNav activeSection={activeSection} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
