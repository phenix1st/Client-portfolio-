import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FRAMEWORK_STEPS } from '../data/portfolio';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-4 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The High-Retention Blueprint</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My 5-Step Editing Framework.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A battle-tested production pipeline developed over hundreds of videos to maximize watch time, algorithmic favor, and viral shares.
          </p>
        </div>

        {/* Step Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {FRAMEWORK_STEPS.map((item, index) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                activeStep === index
                  ? 'glass-panel border-violet-500/70 shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <span
                className={`block font-mono text-xs font-bold mb-1 ${
                  activeStep === index ? 'text-cyan-400' : 'text-slate-500'
                }`}
              >
                STEP {item.step}
              </span>
              <span className="block font-heading font-semibold text-sm text-slate-200 line-clamp-1">
                {item.title}
              </span>

              {activeStep === index && (
                <motion.div
                  layoutId="stepActiveLine"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800/90 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 border border-violet-500/40 text-violet-300">
                  PHASE {FRAMEWORK_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {FRAMEWORK_STEPS[activeStep].tagline}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-4">
                {FRAMEWORK_STEPS[activeStep].title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {FRAMEWORK_STEPS[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Implementation Artifacts:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FRAMEWORK_STEPS[activeStep].deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-slate-200">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Graphic / Blueprint Mockup */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-slate-400">
                <span>STAGE_EXECUTION_AUDIT</span>
                <span className="text-cyan-400">STATUS: OPTIMAL</span>
              </div>

              <div className="space-y-3 text-slate-300">
                <div className="p-3 rounded bg-slate-900/90 border border-slate-800/80">
                  <span className="text-slate-500 block mb-1">Retention Objective:</span>
                  <span className="text-emerald-400 font-semibold">
                    Maintain 90%+ baseline through 0:03 mark
                  </span>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800/80">
                  <span className="text-slate-500 block mb-1">Pacing Density:</span>
                  <span className="text-violet-300">
                    A visual stimulus or audio riser every 1.2 to 2.4s
                  </span>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800/80">
                  <span className="text-slate-500 block mb-1">Export Standard:</span>
                  <span className="text-slate-200">
                    4K Ultra HD // Rec.709 Mastered // Rec.2020 Gamma Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
