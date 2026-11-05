import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiInfo, FiCode } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import ProjectDetailsModal from './ProjectDetailsModal';
import { useTheme } from '../context/ThemeContext';
import { projectsData, projectCategories } from '../data/projects';

export default function Projects() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className={`relative ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-white/60 border-b border-[#1D1D1F]/10'
      }`}
    >
      {/* Background decorations for dark mode */}
      {isDark && (
        <>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.04)' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[130px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)' }} />
        </>
      )}

      <div className={isDark ? '' : 'max-w-6xl mx-auto px-6'}>
        {/* Header */}
        <AnimatedSection className={isDark ? 'text-center mb-16' : 'flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#1D1D1F]/10 pb-6'}>
          {isDark ? (
            <>
              <span className="section-eyebrow">What I've Built</span>
              <h2 className="section-title">Projects</h2>
              <div className="section-divider mb-5"><span /></div>
              <p className="text-sm leading-[1.8] max-w-md mx-auto" style={{ color: '#8b95a5' }}>
                A selection of projects spanning AI/ML research, full-stack development, and creative problem-solving.
              </p>
            </>
          ) : (
            <>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-3">
                  <FiCode className="w-3.5 h-3.5 text-rose-600" />
                  Portfolio Showcase
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F]">
                  Things I've Built
                </h2>
              </div>
              <p className="text-[#1D1D1F]/70 text-sm sm:text-base max-w-md">
                A curated selection of machine learning tools, RAG architectures, and web applications I've engineered.
              </p>
            </>
          )}
        </AnimatedSection>

        {/* Filter Controls */}
        <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                    isDark
                      ? isActive
                        ? 'text-white'
                        : 'text-[#8b95a5] hover:text-[#f0f2f5] glass-light border border-white/8'
                      : isActive
                        ? 'bg-[#2A493C] text-white shadow-sm'
                        : 'bg-[#FAF8F5] text-[#1D1D1F] border border-[#1D1D1F]/15 hover:border-[#1D1D1F]/40'
                  }`}
                >
                  {isDark && isActive && (
                    <motion.div
                      layoutId="proj-tab"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <FiSearch size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/50'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or project..."
              className={`w-full pl-9 pr-8 py-2 rounded-full text-xs outline-none transition-all duration-200 ${
                isDark
                  ? 'bg-white/4 border border-white/8 text-[#f0f2f5] focus:border-violet-500'
                  : 'bg-white border border-[#1D1D1F]/15 text-[#1D1D1F] focus:border-[#2A493C]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-current opacity-60 hover:opacity-100"
              >
                <FiX size={13} />
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.93, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.32, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(p)}
                className={`group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'glass border border-white/8 hover:border-violet-500/40 shadow-xl'
                    : 'bg-white border border-[#1D1D1F]/15 hover:border-[#2A493C]/40 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header banner */}
                <div>
                  <div
                    className={`h-24 relative overflow-hidden flex items-end p-4 ${
                      isDark
                        ? 'bg-gradient-to-br from-violet-900/30 to-indigo-900/10'
                        : 'bg-[#FAF8F5] border-b border-[#1D1D1F]/10'
                    }`}
                  >
                    {p.featured && (
                      <span
                        className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          isDark
                            ? 'bg-violet-500/20 border border-violet-400/30 text-violet-300'
                            : 'bg-rose-100 border border-rose-200 text-rose-800'
                        }`}
                      >
                        <HiSparkles size={9} /> Featured
                      </span>
                    )}
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isDark
                          ? 'bg-violet-500/15 border border-violet-500/25 text-violet-300'
                          : 'bg-[#D9E6DF] text-[#2A493C]'
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3
                          className={`text-lg font-bold transition-colors ${
                            isDark
                              ? 'text-[#f0f2f5] group-hover:text-white font-tech'
                              : 'text-[#1D1D1F] group-hover:text-[#2A493C] font-serif-display'
                          }`}
                        >
                          {p.title}
                        </h3>
                        <FiInfo size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-current" />
                      </div>
                      <p className={`text-xs font-medium mb-2 ${isDark ? 'text-violet-300' : 'text-[#2A493C]'}`}>
                        {p.subtitle}
                      </p>
                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                        {p.shortDescription}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                            isDark
                              ? 'bg-white/4 border border-white/7 text-[#8b95a5]'
                              : 'bg-[#FAF8F5] border border-[#1D1D1F]/10 text-[#1D1D1F]/80'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action links */}
                <div
                  className={`p-4 pt-3 flex items-center justify-between border-t ${
                    isDark ? 'border-white/5' : 'border-[#1D1D1F]/10'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={`text-xs font-semibold ${isDark ? 'text-violet-400' : 'text-[#2A493C]'}`}>
                    View Details →
                  </span>
                  <div className="flex items-center gap-3">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current opacity-60 hover:opacity-100 transition-opacity"
                        title="GitHub Code"
                      >
                        <FiGithub size={15} />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current opacity-60 hover:opacity-100 transition-opacity"
                        title="Live Demo"
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
