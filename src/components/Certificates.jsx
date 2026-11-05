import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineBadgeCheck, HiOutlineAcademicCap } from 'react-icons/hi';
import { HiSparkles } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';
import { certificatesData, certificateCategories } from '../data/certificates';

const domainStyleDark = {
  'AI & ML':                 { badge: 'bg-violet-500/12 text-violet-300 border-violet-500/25', bar: 'from-violet-500 to-purple-500' },
  'Programming':             { badge: 'bg-blue-500/12 text-blue-300 border-blue-500/25',       bar: 'from-blue-500 to-indigo-500' },
  'Web Dev':                 { badge: 'bg-cyan-500/12 text-cyan-300 border-cyan-500/25',        bar: 'from-cyan-500 to-teal-500' },
  'Competitive Programming': { badge: 'bg-pink-500/12 text-pink-300 border-pink-500/25',        bar: 'from-pink-500 to-rose-500' },
  'Data Analytics':          { badge: 'bg-amber-500/12 text-amber-300 border-amber-500/25',      bar: 'from-amber-500 to-orange-500' },
  'Participation':           { badge: 'bg-emerald-500/12 text-emerald-300 border-emerald-500/25', bar: 'from-emerald-500 to-teal-500' },
};

export default function Certificates() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory || c.domain === activeCategory);

  const isDark = theme === 'dark';

  return (
    <section
      id="certificates"
      className={`relative ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-[#FAF8F5] border-b border-[#1D1D1F]/10'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className={isDark ? '' : 'max-w-6xl mx-auto px-6'}>
        <AnimatedSection className={isDark ? 'text-center mb-16' : 'flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#1D1D1F]/10 pb-6'}>
          {isDark ? (
            <>
              <span className="section-eyebrow">Credentials</span>
              <h2 className="section-title">Certificates</h2>
              <div className="section-divider mb-5"><span /></div>
              <p className="text-sm leading-[1.8] max-w-lg mx-auto" style={{ color: '#8b95a5' }}>
                Verified credentials across AI, programming, web development, and competitive programming from globally recognized platforms.
              </p>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-xs font-semibold text-violet-300">{certificatesData.length} Certificates Earned</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9E6DF] border border-[#2A493C]/30 text-[#2A493C] text-xs font-semibold uppercase tracking-wider mb-3">
                  <HiOutlineAcademicCap className="w-4 h-4 text-[#2A493C]" />
                  Continuous Learning
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F]">
                  Certificates & Credentials
                </h2>
              </div>
              <p className="text-[#1D1D1F]/70 text-sm sm:text-base max-w-md">
                Verified course completions and technical certifications across machine learning, software development, and algorithms.
              </p>
            </>
          )}
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
          {certificateCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isDark
                  ? activeCategory === cat
                    ? 'text-white'
                    : 'text-[#9CA3AF] hover:text-[#F3F4F6] glass-light border border-white/8'
                  : activeCategory === cat
                    ? 'bg-[#2A493C] text-white shadow-sm'
                    : 'bg-white text-[#1D1D1F] border border-[#1D1D1F]/15 hover:border-[#1D1D1F]/40'
              }`}
            >
              {isDark && activeCategory === cat && (
                <motion.div
                  layoutId="cert-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Certificates Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, i) => {
              const styleDark = domainStyleDark[cert.domain] || domainStyleDark['AI & ML'];
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={`group overflow-hidden rounded-2xl transition-all duration-300 flex flex-col justify-between p-5 ${
                    isDark
                      ? 'glass border border-white/5 hover:border-white/15 hover:shadow-2xl'
                      : 'bg-white border border-[#1D1D1F]/15 hover:border-[#2A493C]/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isDark && <div className={`h-1 w-full bg-gradient-to-r ${styleDark.bar} -mx-5 -mt-5 mb-4`} />}

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          isDark
                            ? styleDark.badge
                            : 'bg-[#D9E6DF]/40 border-[#2A493C]/30 text-[#2A493C]'
                        }`}
                      >
                        {cert.category || cert.domain}
                      </span>
                      <HiOutlineBadgeCheck size={20} className={isDark ? 'text-violet-400' : 'text-[#2A493C]'} />
                    </div>

                    <div>
                      <h3
                        className={`font-bold text-sm leading-snug mb-1 ${
                          isDark ? 'text-[#E5E7EB] group-hover:text-white font-tech' : 'text-[#1D1D1F] group-hover:text-[#2A493C] font-serif-display text-base'
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <HiSparkles size={11} className={isDark ? 'text-violet-400' : 'text-[#D97762]'} />
                        <p className={`text-xs font-semibold ${isDark ? 'text-[#8b95a5]' : 'text-[#2A493C]'}`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {cert.description && (
                      <p className={`text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between pt-3 mt-4 border-t ${
                      isDark ? 'border-white/5' : 'border-[#1D1D1F]/10'
                    }`}
                  >
                    <span className={`text-xs font-medium ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/60'}`}>
                      {cert.date ?? 'Verified'}
                    </span>

                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          isDark ? 'text-violet-400 hover:text-cyan-300' : 'text-[#2A493C] hover:text-[#1E352C]'
                        }`}
                      >
                        View cert
                        <HiOutlineExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-xs opacity-40 italic">Verified Course</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
