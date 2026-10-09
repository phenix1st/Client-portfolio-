import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';
import { InstagramIcon } from './BrandIcons';

// WhatsApp SVG Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '213673707199';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Anis%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20video%20editing%20project%20with%20you!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#A1A1AA', '#E4E4E7'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Creator Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Let's Work Together.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ready to craft high-retention edits that keep viewers hooked? Reach out directly via WhatsApp, Instagram, or the form below.
              </p>
            </div>

            {/* WhatsApp CTA — Primary Contact */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#075E54]/10 border border-[#25D366]/20 hover:border-[#25D366]/60 hover:bg-[#075E54]/20 transition-all group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-heading font-bold text-base group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </p>
                <p className="text-slate-400 font-mono text-xs mt-0.5">
                  +213 673 707 199
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#25D366] transition-colors flex-shrink-0" />
            </a>

            {/* Instagram Live Profile Card */}
            <a
              href="https://instagram.com/vex.11_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#080808] border border-white/10 hover:border-pink-500/40 hover:bg-[#0d0d0d] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex-shrink-0">
                <div className="w-full h-full rounded-[10px] bg-black flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-pink-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-heading font-bold text-base group-hover:text-pink-300 transition-colors">
                  @vex.11_
                </p>
                <p className="text-slate-400 font-mono text-xs mt-0.5">
                  DMs open · Responds within 2h
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors flex-shrink-0" />
            </a>

            {/* Quick Info Pills */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080808] border border-white/8 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>anissoualeh.edits@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080808] border border-white/8 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Algeria — Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simplified Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#080808] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md">
                    Thanks for reaching out! Anis will respond shortly — or you can get an instant reply on WhatsApp.
                  </p>

                  {/* WhatsApp quick action in success state */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-heading font-bold text-sm hover:bg-[#20bd5a] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chat Now on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-xl text-white mb-1">Send a Message</h3>
                    <p className="text-xs text-slate-400 font-mono">Or reach out directly via WhatsApp for an instant reply ↑</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam / Apex Media"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-white/40 text-sm text-white focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-white/40 text-sm text-white focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project — platform, content style, audience, and turnaround deadline..."
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-white/40 text-sm text-white focus:outline-none transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit + WhatsApp Buttons Row */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <MagneticButton
                      as="button"
                      type="submit"
                      disabled={isSubmitting}
                      strength={0.2}
                      className="flex-1 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </MagneticButton>

                    {/* WhatsApp Direct Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
