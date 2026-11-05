import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

export default function ProjectDetailsModal({ project, onClose }) {
  const { theme } = useTheme();

  if (!project) return null;

  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-2xl rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto ${
            isDark
              ? 'bg-[#0a0e1a] border border-white/10 text-[#f0f2f5]'
              : 'bg-[#FAF8F5] border border-[#1D1D1F]/20 text-[#1D1D1F]'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 p-2 rounded-xl transition-colors ${
              isDark
                ? 'text-[#8b95a5] hover:text-white hover:bg-white/10'
                : 'text-[#1D1D1F]/60 hover:text-[#1D1D1F] hover:bg-[#1D1D1F]/10'
            }`}
          >
            <FiX size={20} />
          </button>

          {/* Badges */}
          <div className="flex items-center gap-2.5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                isDark
                  ? 'bg-violet-500/15 border border-violet-500/30 text-violet-300'
                  : 'bg-[#2A493C]/10 border border-[#2A493C]/30 text-[#2A493C]'
              }`}
            >
              {project.category}
            </span>
            {project.featured && (
              <span
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark
                    ? 'bg-violet-600/20 border border-violet-400/40 text-violet-300'
                    : 'bg-rose-100 border border-rose-300 text-rose-800'
                }`}
              >
                <HiSparkles size={12} /> Featured Project
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-1.5 ${
                isDark ? 'text-white font-tech' : 'text-[#1D1D1F] font-serif-display'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-sm font-semibold ${
                isDark ? 'text-cyan-400' : 'text-[#2A493C]'
              }`}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
              Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed opacity-90">
              {project.description || project.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider opacity-70">
                Key Features & Technical Highlights
              </h4>
              <ul className="space-y-2 text-sm">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        isDark ? 'bg-violet-400' : 'bg-[#2A493C]'
                      }`}
                    />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 opacity-70">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className={`text-xs px-3 py-1 rounded-lg font-medium border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white'
                      : 'bg-white border-[#1D1D1F]/15 text-[#1D1D1F]'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-current/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold border transition-all ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                    : 'bg-white hover:bg-stone-100 border-[#1D1D1F]/20 text-[#1D1D1F]'
                }`}
              >
                <FiGithub size={15} /> View Code on GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white transition-all shadow-md ${
                  isDark
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 shadow-violet-500/25'
                    : 'bg-[#2A493C] hover:bg-[#1E352C]'
                }`}
              >
                <FiExternalLink size={15} /> Open Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
