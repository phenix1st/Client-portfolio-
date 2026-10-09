import React from 'react';
import { TECH_STACK } from '../data/portfolio';
import { Zap } from 'lucide-react';

export const TechTickerSection: React.FC = () => {
  // Double the list for infinite smooth marquee
  const marqueeItems = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="stack" className="py-16 border-y border-slate-900 bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Zap className="w-3.5 h-3.5" />
          <span>Industry Standard Suite</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-200">
          Professional Software & Creative Weapons
        </h3>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Side fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#06070B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#06070B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 py-2">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-panel border border-slate-800/90 hover:border-violet-500/50 hover:bg-slate-900/90 transition-all cursor-default select-none group"
            >
              <div
                className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: tech.color, color: tech.color }}
              />
              <div className="flex flex-col text-left">
                <span className="font-heading font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
                  {tech.category} // <span className="text-slate-400">{tech.level}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
