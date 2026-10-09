import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-12 pb-24 overflow-hidden bg-black">
      {/* Subtle geometric circles in background inspired by reference */}
      <div className="absolute top-1/4 left-1/2 w-8 h-8 rounded-full bg-white/5 blur-[1px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-24 right-1/3 w-16 h-16 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        
        {/* Left Column: Headline Card, Sub-Card Box, Dual CTA */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          
          {/* Main Name Container Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 sm:p-10 bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>@vex.11_ // AVAILABLE FOR COMMISSIONS</span>
            </div>

            {/* Clean, Full Heading Display */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              ANIS SOUALEH
            </h1>

            {/* Subtle white accent line */}
            <div className="mt-4 w-16 h-1 bg-white/40 rounded-full" />
          </motion.div>

          {/* Subheading Box Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-6 sm:p-8 bg-[#050505] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
          >
            <h2 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
              Senior Video Editor & Content Creator
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Specializing in <span className="text-white font-semibold">Short-Form Retention Edits</span>, Dynamic Reels, VFX & High-Pacing Social Media Storytelling.
            </p>
          </motion.div>

          {/* Dual Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            {/* Primary CTA: "Get In Touch" */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-200 text-black font-heading font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:scale-102"
            >
              <Mail className="w-4 h-4 stroke-[2.5]" />
              <span>Get In Touch</span>
            </a>

            {/* Secondary CTA: "View My Work" */}
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#080808] hover:bg-[#121212] text-white font-heading font-bold text-sm tracking-wide border border-white/15 hover:border-white/30 transition-all duration-200 hover:scale-102"
            >
              <Briefcase className="w-4 h-4 text-white stroke-[2.5]" />
              <span>View My Work</span>
            </a>

            {/* Instagram Quick Link */}
            <a
              href="https://instagram.com/vex.11_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors text-xs font-mono"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
              <span>@vex.11_</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait Frame with Anis's Real Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-md rounded-3xl p-3 bg-[#080808] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-black flex items-center justify-center">
              
              {/* Creator Photo - Anis Soualeh */}
              <img
                src="/anis-portrait.jpg"
                alt="Anis Soualeh (@vex.11_)"
                className="w-full h-full object-cover object-center filter contrast-105"
              />

              {/* Dark studio bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />

              {/* Bottom Quote Pill Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 text-left shadow-2xl">
                <p className="text-xs sm:text-[13px] text-slate-200 italic leading-snug font-serif">
                  "Every frame must earn the viewer's second. When pacing meets emotion, retention takes care of itself."
                </p>
                <span className="block mt-2 text-[11px] font-mono text-slate-400 font-semibold tracking-wider">
                  — Anis Soualeh (@vex.11_)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
