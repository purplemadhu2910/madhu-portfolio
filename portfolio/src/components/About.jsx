import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineCode } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

const stats = [
  { value: '10+',  label: 'Projects Built',    icon: HiOutlineCode,         gradient: 'from-violet-500 to-indigo-500', shadow: 'rgba(124,58,237,0.3)' },
  { value: '10+',  label: 'Certifications',    icon: HiOutlineAcademicCap,  gradient: 'from-cyan-500 to-teal-500',    shadow: 'rgba(34,211,238,0.3)' },
  { value: '100+', label: 'LeetCode Problems', icon: SiLeetcode,             gradient: 'from-orange-500 to-amber-500', shadow: 'rgba(249,115,22,0.3)' },
  { value: '7.95', label: 'CGPA',              icon: HiOutlineLightBulb,     gradient: 'from-pink-500 to-rose-500',    shadow: 'rgba(236,72,153,0.3)', noPlus: true },
];

const highlights = [
  { label: 'AI & Machine Learning',   from: 'rgba(124,58,237,0.12)',  border: 'rgba(124,58,237,0.25)', color: '#a78bfa' },
  { label: 'Full-Stack Development',  from: 'rgba(34,211,238,0.10)',  border: 'rgba(34,211,238,0.22)', color: '#22d3ee' },
  { label: 'Problem Solving',         from: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.25)', color: '#818cf8' },
];

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const numeric = parseFloat(target);
  useEffect(() => {
    if (started.current || isNaN(numeric)) return;
    started.current = true;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / duration, 1);
      const val = (1 - Math.pow(1 - p, 3)) * numeric;
      setCount(Number.isInteger(numeric) ? Math.floor(val) : Math.round(val * 10) / 10);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [numeric, duration]);
  return isNaN(numeric) ? target : count;
}

function StatCard({ s }) {
  const raw = useCountUp(s.value);
  const display = s.noPlus ? raw : `${raw}+`;
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-2xl p-6 cursor-default overflow-hidden group transition-all duration-300"
      style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px ${s.shadow}`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4`}
        style={{ boxShadow: `0 4px 20px ${s.shadow}` }}>
        <s.icon size={19} className="text-white" />
      </div>
      <p className={`text-3xl font-bold mb-1 bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}
        style={{ fontFamily: 'Space Grotesk', letterSpacing: '-0.02em' }}>
        {display}
      </p>
      <p className="text-xs font-medium" style={{ color: '#8b95a5' }}>{s.label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[130px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.04)' }} />

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"><span /></div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-4">
          <AnimatedSection direction="left">
            <div className="relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover-glow"
              style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }} />
              <p className="text-base leading-[1.8] mb-4" style={{ color: '#8b95a5' }}>
                I'm a passionate B.Tech CSE (Artificial Intelligence) student at Parul University,
                driven by the intersection of intelligent systems and elegant software design.
              </p>
              <p className="text-base leading-[1.8] mb-6" style={{ color: '#8b95a5' }}>
                My journey spans building ML models for real-world problems — from UPI fraud detection
                to sign language recognition — while crafting clean, performant web applications.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {highlights.map(h => (
                  <span key={h.label}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-default transition-transform duration-200 hover:scale-105"
                    style={{ background: h.from, border: `1px solid ${h.border}`, color: h.color }}>
                    {h.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover-glow"
              style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)' }} />
              <p className="text-sm font-semibold mb-4" style={{ color: '#f0f2f5' }}>Currently focused on</p>
              <ul className="space-y-3">
                {[
                  ['Deep Learning & Neural Networks',         '#a78bfa'],
                  ['Building scalable AI-powered web apps',   '#22d3ee'],
                  ['Competitive programming on LeetCode',     '#818cf8'],
                ].map(([text, color]) => (
                  <li key={text} className="flex items-center gap-3 text-sm" style={{ color: '#8b95a5' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} direction="scale" delay={i * 0.1}>
              <StatCard s={s} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
