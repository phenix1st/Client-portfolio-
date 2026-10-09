import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { InstagramIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-slate-900 bg-[#040508] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-heading font-black text-sm text-white tracking-wider">
            ANIS SOUALEH <span className="text-cyan-400 font-mono text-xs">(@vex.11_)</span>
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} All Rights Reserved. Engineered for Hyper-Retention.
          </span>
        </div>

        {/* Live Studio Clock */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>STUDIO TIME:</span>
          <span className="text-slate-200">{currentTime || '00:00:00 UTC'}</span>
        </div>

        {/* Social Icons & Back to top button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/vex.11_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              aria-label="Instagram @vex.11_"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:anissoualeh.edits@gmail.com"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Floating Back to Top */}
          <MagneticButton
            as="button"
            onClick={scrollToTop}
            strength={0.3}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-violet-400 text-slate-300 hover:text-white shadow-lg transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
