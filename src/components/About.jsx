import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineCode, HiOutlineBookOpen } from 'react-icons/hi';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { Compass, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';
import profileImg from '../assets/madhu_profile.png';

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const numeric = parseFloat(target);
  useEffect(() => {
    if (started.current || isNaN(numeric)) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const val = (1 - Math.pow(1 - p, 3)) * numeric;
      setCount(Number.isInteger(numeric) ? Math.floor(val) : Math.round(val * 10) / 10);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [numeric, duration]);
  return isNaN(numeric) ? target : count;
}

function StatCard({ s, theme }) {
  const raw = useCountUp(s.value);
  const display = s.noPlus ? raw : `${raw}+`;

  if (theme === 'light') {
    return (
      <div className="p-5 bg-white border border-[#1D1D1F]/15 rounded-2xl shadow-sm text-center">
        <p className="text-3xl font-serif-display font-bold text-[#2A493C] mb-1">{display}</p>
        <p className="text-xs font-semibold text-[#1D1D1F]/70">{s.label}</p>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-2xl p-6 cursor-default overflow-hidden group transition-all duration-300"
      style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <p className="text-3xl font-bold mb-1 font-tech text-gradient-cool">
        {display}
      </p>
      <p className="text-xs font-medium text-[#8b95a5]">{s.label}</p>
    </motion.div>
  );
}

export default function About() {
  const { theme } = useTheme();
  const [githubStats, setGithubStats] = useState({ repos: 10, followers: 0, loading: true });

  useEffect(() => {
    fetch('https://api.github.com/users/purplemadhu2910')
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setGithubStats({
            repos: data.public_repos,
            followers: data.followers,
            loading: false,
          });
        }
      })
      .catch(() => setGithubStats((prev) => ({ ...prev, loading: false })));
  }, []);

  if (theme === 'light') {
    return (
      <section id="about" className="py-24 bg-white/70 border-y border-[#1D1D1F]/10 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <AnimatedSection className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold uppercase tracking-wider">
                <HiOutlineCompass className="w-4 h-4 text-rose-600" />
                About Me
              </div>

              <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F] leading-tight">
                {personalInfo.aboutHeading}
              </h2>

              {/* Profile Photo */}
              <div className="relative group w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#1D1D1F]/20 shadow-md bg-[#D9E6DF]">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Editorial Highlight Box */}
              <div className="p-6 bg-[#D9E6DF]/30 border border-[#2A493C]/20 rounded-2xl relative shadow-sm">
                <div className="absolute -top-3 left-6 bg-[#2A493C] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  My Specialty
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#1D1D1F] font-medium leading-relaxed">
                  Specializing in <span className="font-bold underline decoration-[#D97762]">Artificial Intelligence</span> at Parul University, with a strong passion for practical software engineering.
                </p>
                <div className="mt-4 pt-4 border-t border-[#2A493C]/20 flex items-center justify-between text-xs text-[#2A493C] font-semibold">
                  <span>Degree: B.Tech CSE</span>
                  <span>Expected 2027</span>
                </div>
              </div>

              {/* Personal Note */}
              <div className="p-4 bg-[#FAF2DA] border border-[#1D1D1F]/10 rounded-xl flex items-start gap-3">
                <FiSparkles className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <p className="font-handwriting text-xl text-[#1D1D1F] leading-snug font-semibold">
                  "I believe code should solve real everyday friction — elegant logic combined with thoughtful design."
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column: Narrative & Currently Learning */}
            <AnimatedSection className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-[#1D1D1F]/80 leading-relaxed font-normal">
                {personalInfo.aboutParagraphs.map((para, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-serif-display first-letter:font-bold first-letter:text-[#2A493C]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {personalInfo.stats.map((s) => (
                  <StatCard key={s.label} s={s} theme="light" />
                ))}
              </div>

              {/* Currently Learning Section */}
              <div className="pt-6 border-t border-[#1D1D1F]/10">
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineBookOpen className="w-5 h-5 text-[#2A493C]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Currently Learning & Exploring
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.currentlyLearning.map((item, index) => (
                    <div
                      key={index}
                      className="p-3.5 bg-[#FAF8F5] border border-[#1D1D1F]/15 rounded-xl flex items-center justify-between shadow-sm group hover:border-[#2A493C] transition-all"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#2A493C] transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#1D1D1F]/60">
                          {item.category}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#2A493C] group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  // Dark Mode Layout (portfolio identity)
  return (
    <section id="about" className="section-padding relative bg-[#060912]">
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
            <div className="relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover-glow" style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }} />
              {personalInfo.aboutParagraphs.slice(0, 2).map((p, idx) => (
                <p key={idx} className="text-base leading-[1.8] mb-4" style={{ color: '#8b95a5' }}>
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-2.5 mt-4">
                {personalInfo.highlights.map((h) => (
                  <span
                    key={h.label}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-default"
                    style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: h.colorDark }}
                  >
                    {h.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover-glow" style={{ background: 'rgba(13,17,27,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)' }} />
              <p className="text-sm font-semibold mb-4" style={{ color: '#f0f2f5' }}>Currently focused on</p>
              <ul className="space-y-3">
                {personalInfo.currentlyLearning.map((item) => (
                  <li key={item.title} className="flex items-center gap-3 text-sm" style={{ color: '#8b95a5' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-violet-400" />
                    {item.title} ({item.category})
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — stat cards & Live GitHub Card */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((s, i) => (
              <AnimatedSection key={s.label} direction="scale" delay={i * 0.1}>
                <StatCard s={s} theme="dark" />
              </AnimatedSection>
            ))}
          </div>

          {/* Live GitHub API Badge */}
          <AnimatedSection direction="scale" delay={0.4}>
            <a
              href="https://github.com/purplemadhu2910"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:border-violet-500/40"
              style={{
                background: 'rgba(13,17,27,0.85)',
                border: '1px solid rgba(124,58,237,0.2)',
                boxShadow: '0 8px 32px rgba(124,58,237,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <SiGithub size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <p className="text-xs font-semibold text-white">Live GitHub Stats</p>
                  </div>
                  <p className="text-xs text-[#8b95a5] mt-0.5">
                    {githubStats.loading ? 'Syncing with API...' : `${githubStats.repos} Repositories • ${githubStats.followers} Followers`}
                  </p>
                </div>
              </div>
              <FiExternalLink size={14} className="text-[#8b95a5] group-hover:text-violet-400 transition-all" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
