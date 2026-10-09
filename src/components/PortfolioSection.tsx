import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { INSTAGRAM_REELS } from '../data/portfolio';
import { InstagramIcon } from './BrandIcons';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Featured Reels Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Selected Video Edits.
          </h2>
          <p className="text-sm text-slate-400">
            High-retention commercial cuts and viral hooks engineered for Instagram & social media storytelling.
          </p>
        </div>

        {/* 9:16 Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_REELS.map((reel) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-[#070707] border border-white/10 hover:border-white/25 transition-all duration-400 flex flex-col shadow-xl"
            >
              {/* 9:16 Aspect Reel Thumbnail */}
              <div className="relative overflow-hidden aspect-[9/14] bg-black">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-black/80 backdrop-blur-md border border-white/10 text-slate-200 uppercase">
                    {reel.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-black/80 backdrop-blur-md border border-white/10 text-slate-400">
                    {reel.duration}
                  </span>
                </div>
              </div>

              {/* Card Bottom Info */}
              <div className="p-5 flex flex-col gap-4 bg-[#070707]">
                {/* Title */}
                <h3 className="font-heading font-bold text-base text-white group-hover:text-slate-200 transition-colors line-clamp-2 leading-snug">
                  {reel.title}
                </h3>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-1.5">
                  {reel.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-white/10 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Watch on Instagram Button */}
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 group/btn"
                >
                  <InstagramIcon className="w-4 h-4 text-slate-300 group-hover/btn:text-white transition-colors" />
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/btn:text-slate-300 transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
