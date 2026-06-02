import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineBadgeCheck } from 'react-icons/hi';
import { HiSparkles } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';

const certificates = [
  { id: 1, title: 'Artificial Intelligence Course', issuer: 'Infosys Springboard', date: 'April 2026', domain: 'AI & ML', link: 'https://drive.google.com/file/d/1SAOpgGTBUf1cwShS0Xq0mXWG1yjoilGh/view?usp=drive_link' },
  { id: 2, title: 'Deep Learning', issuer: 'Infosys Springboard', date: 'April 2026', domain: 'AI & ML', link: 'https://drive.google.com/file/d/1NS9COI6AeETcdR-bkG8f4A8rs3uoSiKG/view?usp=drive_link' },
  { id: 3, title: 'Natural Language Processing (NLP)', issuer: 'Infosys Springboard', date: 'April 2026', domain: 'AI & ML', link: 'https://drive.google.com/file/d/1odwaCvHBTPmY7qKHVTiLopZznooBJ-Ev/view?usp=drive_link' },
  { id: 4, title: 'MATLAB Basics for Artificial Intelligence', issuer: 'IEEE Gujarat Section', date: 'Sept 2024', domain: 'AI & ML', link: 'https://drive.google.com/open?id=1DawKnAyW3dIWhzGA-RG5vAU96IkiB44m' },
  { id: 5, title: 'Python Programming', issuer: 'Infosys Springboard', date: 'April 2026', domain: 'Programming', link: 'https://drive.google.com/file/d/1YANREvWVI0u0olkAgogMiJINCKZy6jwE/view?usp=drive_link' },
  { id: 6, title: 'Python Developer Certification', issuer: 'SoloLearn', date: 'Feb 2025', domain: 'Programming', link: 'https://drive.google.com/open?id=1zM0bFka5l-KeWmHw7YfBbBodOYOGitUJ' },
  { id: 7, title: 'Introduction to C Programming', issuer: 'Infosys Springboard', date: null, domain: 'Programming', link: null },
  { id: 8, title: 'SQL and Relational Databases', issuer: 'IBM SkillsBuild', date: 'Oct 2025', domain: 'Programming', link: 'https://drive.google.com/open?id=15nHOdxvPz7xXLTyLgP-hcJYREE8KMxj0' },
  { id: 9, title: 'React JS Bootcamp', issuer: 'Bootcamp', date: 'Sept 2025', domain: 'Web Dev', link: null },
  { id: 10, title: 'Dynamic Programming Camp', issuer: 'AlgoUniversity', date: 'April 2026', domain: 'Competitive Programming', link: 'https://drive.google.com/file/d/15bazG0qrTdnRLzlcLGD2E7QIQmu_BL2j/view?usp=sharing' },
];

const filters = ['All', 'AI & ML', 'Programming', 'Web Dev', 'Competitive Programming'];

const domainStyle = {
  'AI & ML':                 { badge: 'bg-violet-500/12 text-violet-300 border-violet-500/25', bar: 'from-violet-500 to-purple-500', glow: 'hover:shadow-violet-500/10', check: 'group-hover:text-violet-400' },
  'Programming':             { badge: 'bg-blue-500/12 text-blue-300 border-blue-500/25',       bar: 'from-blue-500 to-indigo-500',   glow: 'hover:shadow-blue-500/10',   check: 'group-hover:text-blue-400' },
  'Web Dev':                 { badge: 'bg-cyan-500/12 text-cyan-300 border-cyan-500/25',        bar: 'from-cyan-500 to-teal-500',     glow: 'hover:shadow-cyan-500/10',   check: 'group-hover:text-cyan-400' },
  'Competitive Programming': { badge: 'bg-pink-500/12 text-pink-300 border-pink-500/25',        bar: 'from-pink-500 to-rose-500',     glow: 'hover:shadow-pink-500/10',   check: 'group-hover:text-pink-400' },
};

export default function Certificates() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? certificates : certificates.filter((c) => c.domain === active);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-4 heading-glow">Certificates</h2>
        <span className="section-line mb-6 block" />
        <p className="text-[#9CA3AF] max-w-lg mx-auto text-sm leading-relaxed">
          Verified credentials across AI, programming, web development, and competitive programming
          from globally recognized platforms.
        </p>
      </AnimatedSection>

      {/* Filter tabs */}
      <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === f ? 'text-white' : 'text-[#9CA3AF] hover:text-[#F3F4F6] glass-light border border-white/8'
            }`}
          >
            {active === f && (
              <motion.div
                layoutId="cert-tab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </AnimatedSection>

      {/* Count */}
      <AnimatedSection className="text-center mb-10">
        <span className="text-xs text-[#6B7280]">
          Showing <span className="text-violet-400 font-semibold">{filtered.length}</span> certificate{filtered.length !== 1 ? 's' : ''}
        </span>
      </AnimatedSection>

      {/* Cards */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, i) => {
            const style = domainStyle[cert.domain];
            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className={`group glass rounded-2xl border border-white/5 hover:border-white/12 overflow-hidden transition-all duration-300 hover:shadow-2xl ${style.glow} flex flex-col shimmer-border`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${style.bar}`} />

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${style.badge}`}>
                      {cert.domain}
                    </span>
                    <HiOutlineBadgeCheck size={18} className={`text-[#4B5563] transition-colors duration-300 flex-shrink-0 ${style.check}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-[#E5E7EB] text-sm leading-snug mb-1.5 group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <HiSparkles size={10} className="text-[#6B7280]" />
                      <p className="text-xs text-[#6B7280]">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-[#6B7280] font-medium">{cert.date ?? '—'}</span>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#9CA3AF] hover:text-violet-400 transition-colors group/link"
                      >
                        View cert
                        <HiOutlineExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs text-white/15 italic">No link</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
