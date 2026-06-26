import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const socials = [
  {
    label: 'LinkedIn', icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/madhushree-m-1544a42b5/',
    desc: 'Connect professionally',
    gradient: 'from-blue-600/20 to-blue-500/5',
    border: 'hover:border-blue-500/40',
    icon_color: 'group-hover:text-blue-400',
    glow: 'hover:shadow-blue-500/15',
  },
  {
    label: 'GitHub', icon: FiGithub,
    href: 'https://github.com/purplemadhu2910',
    desc: 'Explore my code',
    gradient: 'from-white/10 to-white/2',
    border: 'hover:border-white/25',
    icon_color: 'group-hover:text-white',
    glow: 'hover:shadow-white/5',
  },
  {
    label: 'LeetCode', icon: SiLeetcode,
    href: 'https://leetcode.com/u/purplemadhu2910/',
    desc: 'Problem solving',
    gradient: 'from-orange-600/20 to-orange-500/5',
    border: 'hover:border-orange-500/40',
    icon_color: 'group-hover:text-orange-400',
    glow: 'hover:shadow-orange-500/15',
  },
  {
    label: 'HackerRank', icon: SiHackerrank,
    href: 'https://www.hackerrank.com/madhu_mandokar29',
    desc: 'Coding challenges',
    gradient: 'from-emerald-600/20 to-emerald-500/5',
    border: 'hover:border-emerald-500/40',
    icon_color: 'group-hover:text-emerald-400',
    glow: 'hover:shadow-emerald-500/15',
  },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-aurora absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[140px]" />
        <div className="animate-aurora absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/7 rounded-full blur-[120px]" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/2 to-transparent" />
      </div>

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">Let's Talk</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider mb-6"><span /></div>
        <p className="text-sm leading-[1.8] max-w-md mx-auto" style={{ color: '#8b95a5' }}>
          Open to new opportunities, collaborations, or just a friendly chat about AI and tech.
        </p>
      </AnimatedSection>

      <div className="flex flex-col items-center gap-10 relative z-10 max-w-2xl mx-auto">
        {/* Availability badge */}
        <AnimatedSection direction="scale">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-400 tracking-wider">Available for opportunities</span>
          </div>
        </AnimatedSection>

        {/* Contact cards row — email + phone */}
        <AnimatedSection direction="scale" delay={0.1} className="w-full">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <motion.a
              href="mailto:madhu.mandokar29@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(124,58,237,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-4 px-6 py-5 rounded-2xl text-white overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 8px 32px rgba(124,58,237,0.25)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <FiMail size={18} />
              </div>
              <div className="relative text-left">
                <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Email</p>
                <p className="text-sm font-semibold tracking-tight">madhu.mandokar29@gmail.com</p>
              </div>
              <FiArrowRight size={16} className="relative ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+919870099043"
              whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(34,211,238,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-4 px-6 py-5 rounded-2xl overflow-hidden"
              style={{ background: 'rgba(13,17,27,0.8)', border: '1px solid rgba(34,211,238,0.2)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                <FiPhone size={18} style={{ color: '#22d3ee' }} />
              </div>
              <div className="relative text-left">
                <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: '#4b5563' }}>Phone</p>
                <p className="text-sm font-semibold tracking-tight" style={{ color: '#f0f2f5' }}>+91 98700 99043</p>
              </div>
              <FiArrowRight size={16} className="relative ml-auto transition-all duration-300" style={{ color: '#4b5563' }} />
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Contact form */}
        <AnimatedSection direction="scale" delay={0.2} className="w-full">
          <form ref={formRef} onSubmit={handleSubmit}
            className="relative rounded-2xl p-6 space-y-4"
            style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }} />
            <p className="text-sm font-semibold mb-2" style={{ color: '#f0f2f5' }}>Send a message</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8b95a5' }}>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f2f5' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8b95a5' }}>Email</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f2f5' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8b95a5' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="What's on your mind?"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f2f5' }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <motion.button type="submit" disabled={status === 'sending'}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}
            >
              {status === 'sending' && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {status === 'success' && <FiCheck size={15} />}
              {status === 'error'   && <FiAlertCircle size={15} />}
              {status === 'idle'    && <FiSend size={15} />}
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed — try email' : 'Send Message'}
            </motion.button>
          </form>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/8" />
          <span className="text-xs text-[#4B5563] tracking-widest uppercase px-2">or find me on</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/8" />
        </AnimatedSection>

        {/* Social cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {socials.map((s, i) => (
            <AnimatedSection key={s.label} direction="scale" delay={i * 0.08}>
              <motion.a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`group relative flex flex-col items-center gap-3 p-5 rounded-2xl glass border border-white/5 transition-all duration-300 hover:border-white/12 overflow-hidden hover:shadow-xl ${s.glow} shimmer-border ${s.border}`}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-white/15 transition-colors">
                  <s.icon size={20} className={`text-[#6B7280] transition-colors duration-200 ${s.icon_color}`} />
                </div>
                <div className="relative text-center">
                  <p className="text-sm font-semibold text-[#E5E7EB] group-hover:text-white transition-colors">{s.label}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{s.desc}</p>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
