import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail } from 'lucide-react';

interface FloatingBottomNavProps {
  activeSection: string;
}

export const FloatingBottomNav: React.FC<FloatingBottomNavProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'works', label: 'Works', icon: Briefcase, href: '#work' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav
        aria-label="Bottom Navigation Bar"
        className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-2xl bg-[#090909]/95 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.95)]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex flex-col items-center justify-center min-w-[62px] sm:min-w-[72px] py-1.5 px-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-black font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span className="relative z-10 flex flex-col items-center gap-1">
                <Icon className={`w-4 h-4 ${isActive ? 'text-black stroke-[2.5]' : 'stroke-[1.8]'}`} />
                <span className={`text-[11px] leading-none ${isActive ? 'text-black font-bold' : 'font-medium'}`}>
                  {item.label}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
