import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiCode, FiArrowUpRight, FiMapPin, FiAward } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';
import profileImg from '../assets/madhu_profile.png';
import resumePDF from '../assets/mandokar_madhushree_resume.pdf';

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github.url, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin.url, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode.url, label: 'LeetCode' },
  { icon: FiMail, href: personalInfo.socials.email.url, label: 'Email' },
];

function TypewriterRole() {
  const roles = personalInfo.roles;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let t;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    else {
      t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 50);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index, roles]);

  return (
    <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#a78bfa' }}>
      {displayed}
      <span className="ml-0.5 text-cyan-400 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const { theme } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (theme === 'light') {
    return (
      <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#FAF8F5]">
        {/* Light Background Decorative Accents */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-rose-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-5 w-96 h-96 bg-[#D9E6DF]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Floating Handwritten Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1D1D1F]/15 text-xs font-medium text-[#1D1D1F] shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-handwriting text-lg font-bold text-[#2A493C]">
              currently exploring RAG & LLM architectures ✨
            </span>
          </motion.div>

          {/* Light Mode Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif-display font-bold text-[#1D1D1F] tracking-tight leading-[1.05]">
              MADHUSHREE <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#2A493C] italic">
                MANDOKAR
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D97762]/40 pointer-events-none"
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15C50 5 150 18 295 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Handwritten Floating Tag */}
            <div className="hidden lg:block absolute -right-2 top-4 transform rotate-6 bg-[#FAF2DA] border border-[#1D1D1F]/20 px-3.5 py-1.5 rounded-lg shadow-sm">
              <p className="font-handwriting text-xl text-[#1D1D1F] font-semibold leading-none">
                CS & AI Student 🌿
              </p>
            </div>
          </motion.div>

          {/* Light Subtitle Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-sm font-medium text-[#1D1D1F]/80"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#EBE1D0]/60 border border-[#1D1D1F]/15 text-[#2A493C] font-semibold">
              <FiAward className="w-4 h-4 text-[#2A493C]" />
              {personalInfo.degree}
            </span>
            <span className="hidden sm:inline text-[#1D1D1F]/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-[#1D1D1F] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D97762]" />
              {personalInfo.specialization}
            </span>
            <span className="hidden sm:inline text-[#1D1D1F]/30">•</span>
            <span className="inline-flex items-center gap-1 text-[#1D1D1F]/70">
              <FiMapPin className="w-4 h-4 text-[#1D1D1F]/50" />
              {personalInfo.university}
            </span>
          </motion.div>

          {/* Tagline & Short Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-2xl sm:text-3xl font-serif-display italic text-[#1D1D1F] leading-snug">
              "{personalInfo.tagline}"
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#1D1D1F]/80 leading-relaxed font-normal">
              {personalInfo.shortIntro}
            </p>
          </motion.div>

          {/* Light Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#1D1D1F] text-[#FAF8F5] font-semibold text-sm rounded-full shadow-md hover:bg-[#2A493C] transition-all duration-200 active:scale-95"
            >
              <FiCode className="w-4 h-4 text-[#E9C4BD]" />
              <span>View Projects</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href={resumePDF}
              download="Madhushree_Mandokar_Resume.pdf"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-white border border-[#1D1D1F]/20 text-[#1D1D1F] font-semibold text-sm rounded-full shadow-sm hover:border-[#1D1D1F] hover:bg-stone-50 transition-all duration-200 active:scale-95"
            >
              <FiDownload className="w-4 h-4 text-[#2A493C]" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Bottom cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex items-center gap-2 text-[#1D1D1F]/60 cursor-pointer"
            onClick={() => scrollTo('about')}
          >
            <span className="font-handwriting text-xl text-[#1D1D1F]/80">
              scroll down to explore my work & journey
            </span>
            <FiArrowDown className="w-4 h-4 animate-bounce text-[#2A493C]" />
          </motion.div>
        </div>
      </section>
    );
  }

  // Dark Mode Hero (Original portfolio identity)
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#060912]">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float-slow absolute top-[15%] left-[10%] w-[560px] h-[560px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="animate-float-medium absolute bottom-[15%] right-[8%] w-[420px] h-[420px] rounded-full bg-cyan-500/8 blur-[110px]" />
        <div className="animate-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/4 blur-[150px]" />
        <div className="absolute inset-0 hero-dots opacity-[0.18]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/8 to-transparent" />
      </div>

      <div className="section-padding w-full relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16 justify-between">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8b95a5]">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-bold leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              <span style={{ color: '#f0f2f5', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
                Hi, I'm{' '}
              </span>
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
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-5 h-6">
              <div className="h-px w-6" style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
              <TypewriterRole />
            </div>

            {/* Bio */}
            <p className="text-base leading-[1.75] mb-9 max-w-md" style={{ color: '#8b95a5' }}>
              Building AI-powered products at the intersection of machine learning and elegant software. B.Tech CSE (AI) @ Parul University.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="relative overflow-hidden px-6 py-3 rounded-xl text-white text-sm font-semibold cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 4px 24px rgba(124,58,237,0.3)' }}
              >
                <span className="relative z-10">View Projects</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={resumePDF}
                download="Madhushree_Mandokar_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
              >
                <FiDownload size={14} /> Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f2f5' }}
              >
                Contact Me
              </motion.button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: '#4b5563' }}>Connect</span>
              <div className="h-px w-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div className="flex gap-2">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.18, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#8b95a5' }}
                  >
                    <s.icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile image with glowing hexagon rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Glow blob */}
            <div
              className="absolute inset-0 blur-3xl scale-[1.4] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(34,211,238,0.1) 55%, transparent 100%)' }}
            />

            {/* Outer spinning hexagon ring */}
            <div className="absolute -inset-6 animate-spin-slow pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(124,58,237,0.4))' }}>
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <polygon points="100,4 196,52 196,148 100,196 4,148 4,52" stroke="url(#hexGrad1)" strokeWidth="1" strokeDasharray="6 4" fill="none" />
                <defs>
                  <linearGradient id="hexGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Hexagon shape image container */}
            <div
              className="relative w-72 h-72 md:w-88 md:h-88"
              style={{
                width: 'clamp(288px, 28vw, 360px)',
                height: 'clamp(288px, 28vw, 360px)',
                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)',
                padding: '3px',
                filter: 'drop-shadow(0 0 28px rgba(124,58,237,0.55))',
              }}
            >
              <div
                className="w-full h-full overflow-hidden"
                style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
              >
                <img src={profileImg} alt="Madhushree Mandokar" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating chip — bottom right */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-6 rounded-2xl px-4 py-2.5 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,27,0.85)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <p className="text-[10px] uppercase tracking-wider" style={{ color: '#4b5563' }}>Currently</p>
              <p className="text-sm font-bold" style={{ color: '#f0f2f5' }}>B.Tech CSE (AI)</p>
            </motion.div>

            {/* Floating chip — top left */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-6 rounded-2xl px-4 py-2.5 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,27,0.85)', border: '1px solid rgba(124,58,237,0.25)' }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#a78bfa' }}>Parul University</p>
              <p className="text-sm font-bold" style={{ color: '#f0f2f5' }}>Graduating 2027</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#4b5563' }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <FiArrowDown size={14} style={{ color: '#4b5563' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
