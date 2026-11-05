import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';
import { FiMail, FiPhone, FiArrowRight, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';

export default function Contact() {
  const { theme } = useTheme();
  const formRef = useRef();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const isDark = theme === 'dark';

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-[#FAF8F5] border-b border-[#1D1D1F]/10'
      }`}
    >
      {/* Background elements */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-aurora absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[140px]" />
          <div className="animate-aurora absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/7 rounded-full blur-[120px]" style={{ animationDelay: '-4s' }} />
        </div>
      )}

      <div className={isDark ? '' : 'max-w-6xl mx-auto px-6'}>
        <AnimatedSection className="text-center mb-16">
          {isDark ? (
            <>
              <span className="section-eyebrow">Let's Talk</span>
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-divider mb-6"><span /></div>
            </>
          ) : (
            <>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2A493C] mb-2 block">
                Let's Connect
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F] mb-3">
                Get In Touch
              </h2>
            </>
          )}
          <p className={`text-sm leading-[1.8] max-w-md mx-auto ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
            Open to new opportunities, AI/ML collaborations, or just a friendly chat.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-10 relative z-10 max-w-2xl mx-auto">
          {/* Status availability badge */}
          <AnimatedSection direction="scale">
            <div className={`flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-sm ${
              isDark
                ? 'glass-light border-emerald-500/20 text-emerald-400'
                : 'bg-white border-[#2A493C]/20 text-[#2A493C]'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase">
                Available for internships & opportunities
              </span>
            </div>
          </AnimatedSection>

          {/* Quick contact cards: Email + Phone */}
          <AnimatedSection direction="scale" delay={0.1} className="w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email */}
              <motion.a
                href={personalInfo.socials.email.url}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex items-center gap-4 px-6 py-5 rounded-2xl overflow-hidden shadow-md ${
                  isDark
                    ? 'text-white'
                    : 'bg-white border border-[#1D1D1F]/15 text-[#1D1D1F]'
                }`}
                style={isDark ? { background: 'linear-gradient(135deg, #7c3aed, #6366f1)' } : {}}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-white/15 text-white' : 'bg-[#D9E6DF] text-[#2A493C]'
                  }`}
                >
                  <FiMail size={18} />
                </div>
                <div className="text-left">
                  <p className={`text-[10px] uppercase tracking-wider mb-0.5 ${isDark ? 'text-white/60' : 'text-[#1D1D1F]/50'}`}>Email</p>
                  <p className="text-sm font-semibold tracking-tight">{personalInfo.socials.email.display}</p>
                </div>
                <FiArrowRight size={16} className="ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>

              {/* Phone */}
              <motion.a
                href={personalInfo.socials.phone.url}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex items-center gap-4 px-6 py-5 rounded-2xl overflow-hidden ${
                  isDark
                    ? 'bg-[#0d1117] border border-cyan-500/20 text-[#f0f2f5]'
                    : 'bg-white border border-[#1D1D1F]/15 text-[#1D1D1F]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  <FiPhone size={18} />
                </div>
                <div className="text-left">
                  <p className={`text-[10px] uppercase tracking-wider mb-0.5 ${isDark ? 'text-[#4b5563]' : 'text-[#1D1D1F]/50'}`}>Phone</p>
                  <p className="text-sm font-semibold tracking-tight">{personalInfo.socials.phone.display}</p>
                </div>
                <FiArrowRight size={16} className="ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="scale" delay={0.2} className="w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`relative rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl ${
                isDark
                  ? 'glass border border-white/7'
                  : 'bg-white border border-[#1D1D1F]/15'
              }`}
            >
              <p className={`text-sm font-bold mb-2 ${isDark ? 'text-[#f0f2f5] font-tech' : 'text-[#1D1D1F] font-serif-display text-xl'}`}>
                Send Me a Message
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-medium mb-1.5 block ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                      isDark
                        ? 'bg-white/4 border border-white/8 text-[#f0f2f5] focus:border-violet-500'
                        : 'bg-[#FAF8F5] border border-[#1D1D1F]/15 text-[#1D1D1F] focus:border-[#2A493C]'
                    }`}
                  />
                </div>
                <div>
                  <label className={`text-xs font-medium mb-1.5 block ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                    Your Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                      isDark
                        ? 'bg-white/4 border border-white/8 text-[#f0f2f5] focus:border-violet-500'
                        : 'bg-[#FAF8F5] border border-[#1D1D1F]/15 text-[#1D1D1F] focus:border-[#2A493C]'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className={`text-xs font-medium mb-1.5 block ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What would you like to discuss?"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none transition-all ${
                    isDark
                      ? 'bg-white/4 border border-white/8 text-[#f0f2f5] focus:border-violet-500'
                      : 'bg-[#FAF8F5] border border-[#1D1D1F]/15 text-[#1D1D1F] focus:border-[#2A493C]'
                  }`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all shadow-md cursor-pointer ${
                  isDark
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600'
                    : 'bg-[#2A493C] hover:bg-[#1E352C]'
                }`}
              >
                {status === 'sending' && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {status === 'success' && <FiCheck size={16} />}
                {status === 'error' && <FiAlertCircle size={16} />}
                {status === 'idle' && <FiSend size={16} />}
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Failed — try sending email'
                  : 'Send Message'}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
