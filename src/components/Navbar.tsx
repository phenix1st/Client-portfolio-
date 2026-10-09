import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  isMuted: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMuted, toggleAudio }) => {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Process', href: '#process' },
    { label: 'Stack', href: '#stack' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Illuminated Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-violet-500 via-cyan-400 to-rose-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Sticky Glass Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 cursor-pointer select-none"
            data-cursor
            data-cursor-text="HOME"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 group-hover:border-violet-400 transition-colors">
              <span className="font-heading font-black text-white text-base tracking-tighter">A</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors uppercase">
                Anis Soualah
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-tight">
                @vex.11_
              </span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-3/4 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Sound Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleAudio}
              className="relative p-2 rounded-full border border-slate-800 hover:border-violet-500/50 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-300 transition-colors"
              title={isMuted ? 'Turn Sound On' : 'Mute Site Ambient Sound'}
              aria-label="Toggle site ambient sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <div className="relative">
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
              )}
            </button>

            {/* Let's Talk Magnetic CTA */}
            <div className="hidden sm:block">
              <MagneticButton
                as="a"
                href="#contact"
                className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-30 p-6 glass-panel border-b border-slate-800 md:hidden flex flex-col gap-4 backdrop-blur-2xl bg-[#06070B]/95"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-cyan-600"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </>
  );
};
