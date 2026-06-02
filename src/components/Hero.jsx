import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/madhu_profile.png';
import resumePDF from '../assets/madhushree_mandokar_resume.pdf';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/purplemadhu2910',                        label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/madhushree-m-1544a42b5/',        label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/purplemadhu2910/',                    label: 'LeetCode' },
  { icon: FiMail,     href: 'mailto:madhu.mandokar29@gmail.com',                          label: 'Email' },
];

const roles = ['AI Developer', 'ML Engineer', 'Problem Solver', 'Full-Stack Builder'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function TypewriterRole() {
  const [index, setIndex]       = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]  = useState(false);

  useEffect(() => {
    const current = roles[index];
    let t;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    else { setDeleting(false); setIndex(i => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#a78bfa' }}>
      {displayed}
      <span className="ml-0.5 text-cyan-400 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float-slow  absolute top-[15%]  left-[10%]  w-[560px] h-[560px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="animate-float-medium absolute bottom-[15%] right-[8%]  w-[420px] h-[420px] rounded-full bg-cyan-500/8  blur-[110px]" />
        <div className="animate-pulse-glow  absolute top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/4 blur-[150px]" />
        <div className="absolute inset-0 hero-dots opacity-[0.18]" />
        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/8 to-transparent" />
      </div>

      <div className="section-padding w-full relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16 justify-between">

          {/* ── Left: Text ── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="flex-1 max-w-xl">

            {/* Status badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8b95a5]">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item}
              className="font-bold leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}>
              <span style={{ color: '#f0f2f5', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>Hi, I'm </span>
              <br />
              <span
                className="shimmer-text"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 6.5vw, 5rem)',
                  letterSpacing: '0.01em',
                  lineHeight: 1.1,
                }}
              >
                Madhushree
              </span>
              <br />
              <span
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 6.5vw, 5rem)',
                  letterSpacing: '0.01em',
                  lineHeight: 1.1,
                  color: '#f0f2f5',
                }}
              >
                Mandokar
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="flex items-center gap-3 mb-5 h-6">
              <div className="h-px w-6" style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
              <TypewriterRole />
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-base leading-[1.75] mb-9 max-w-md" style={{ color: '#8b95a5' }}>
              Building AI-powered products at the intersection of machine learning
              and elegant software. B.Tech CSE (AI) @ Parul University.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.15)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="relative overflow-hidden px-6 py-3 rounded-xl text-white text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 4px 24px rgba(124,58,237,0.3)' }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={resumePDF}
                download="Madhushree_Mandokar_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.45)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)'}
              >
                <FiDownload size={14} /> Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f2f5' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: '#4b5563' }}>Connect</span>
              <div className="h-px w-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div className="flex gap-2">
                {socials.map(s => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.18, y: -3 }} whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#8b95a5' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(124,58,237,0.25)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#8b95a5'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <s.icon size={15} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Glow blob */}
            <div className="absolute inset-0 blur-3xl scale-[1.4] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(34,211,238,0.1) 55%, transparent 100%)' }} />

            {/* Outer spinning hexagon ring */}
            <div className="absolute -inset-6 animate-spin-slow pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(124,58,237,0.4))' }}>
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <polygon points="100,4 196,52 196,148 100,196 4,148 4,52"
                  stroke="url(#hexGrad1)" strokeWidth="1" strokeDasharray="6 4" fill="none" />
                <defs>
                  <linearGradient id="hexGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Inner counter-spinning hexagon ring */}
            <div className="absolute -inset-2 pointer-events-none" style={{ animation: 'spin-slow 16s linear infinite reverse', filter: 'drop-shadow(0 0 4px rgba(34,211,238,0.3))' }}>
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <polygon points="100,8 192,54 192,146 100,192 8,146 8,54"
                  stroke="url(#hexGrad2)" strokeWidth="0.8" strokeDasharray="3 5" fill="none" />
                <defs>
                  <linearGradient id="hexGrad2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Hexagon gradient border shell */}
            <div className="relative w-72 h-72 md:w-88 md:h-88"
              style={{
                width: 'clamp(288px, 28vw, 360px)',
                height: 'clamp(288px, 28vw, 360px)',
                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)',
                padding: '3px',
                filter: 'drop-shadow(0 0 28px rgba(124,58,237,0.55)) drop-shadow(0 0 56px rgba(124,58,237,0.22))',
              }}
            >
              {/* Inner hexagon image */}
              <div className="w-full h-full overflow-hidden"
                style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
              >
                <img src={profileImg} alt="Madhushree Mandokar" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,9,18,0.3), transparent 60%)' }} />
              </div>
            </div>

            {/* Floating chip — bottom right */}
            <motion.div animate={{ y: [0,-7,0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-6 rounded-2xl px-4 py-2.5 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,27,0.85)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: '#4b5563' }}>Currently</p>
              <p className="text-sm font-bold" style={{ color: '#f0f2f5' }}>B.Tech CSE (AI)</p>
            </motion.div>

            {/* Floating chip — top left */}
            <motion.div animate={{ y: [0,7,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-6 rounded-2xl px-4 py-2.5 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,27,0.85)', border: '1px solid rgba(124,58,237,0.25)', boxShadow: '0 8px 32px rgba(124,58,237,0.12)' }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#a78bfa' }}>Parul University</p>
              <p className="text-sm font-bold" style={{ color: '#f0f2f5' }}>Graduating 2027</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo('about')}>
          <span className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#4b5563' }}>Scroll</span>
          <motion.div animate={{ y: [0,6,0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <FiArrowDown size={14} style={{ color: '#4b5563' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
