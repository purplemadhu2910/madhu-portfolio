import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiInfo } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    category: 'AI/ML', featured: true,
    title: 'LexAssist', subtitle: 'AI-Powered Legal Assistant Platform',
    description: 'An intelligent legal assistant leveraging RAG to answer complex tax and legal queries. Built with FastAPI backend, vector search, and a modern React frontend.',
    highlights: [
      'Retrieval-Augmented Generation (RAG) using ChromaDB vector database',
      'FastAPI async backend providing low-latency document query API',
      'Multi-language response support (English, Hindi, Marathi, etc.)',
      'Document parsing for PDF, DOCX, and text formats with instant summaries'
    ],
    tech: ['Python', 'FastAPI', 'React', 'OpenAI', 'ChromaDB', 'RAG'],
    github: 'https://github.com/purplemadhu2910/lexassist',
    demo: 'https://lexassist-1paa.onrender.com/',
    accent: { from: '#7c3aed', to: '#6366f1', glow: 'rgba(124,58,237,0.25)', border: 'rgba(124,58,237,0.3)', badge: { bg: 'rgba(124,58,237,0.12)', text: '#a78bfa', border: 'rgba(124,58,237,0.25)' } },
  },
  {
    category: 'Web Dev', featured: false,
    title: 'Resume Screener', subtitle: 'AI-Powered Resume Analyzer',
    description: 'AI-powered resume vs job description compatibility analyzer using TF-IDF and Cosine Similarity. Features drag-and-drop upload, animated score ring, matched/missing skills, and actionable improvement suggestions.',
    tech: ['React', 'Flask', 'Python', 'TF-IDF', 'Cosine Similarity', 'Tailwind CSS'],
    github: 'https://github.com/purplemadhu2910/resume-screener',
    demo: null,
    accent: { from: '#16a34a', to: '#15803d', glow: 'rgba(22,163,74,0.2)', border: 'rgba(74,222,128,0.25)', badge: { bg: 'rgba(74,222,128,0.1)', text: '#4ade80', border: 'rgba(74,222,128,0.22)' } },
  },
  {
    category: 'AI/ML', featured: false,
    title: 'UPI Fraud Detection', subtitle: 'ML-Based Transaction Classifier',
    description: 'ML model to detect fraudulent UPI transactions using classification techniques, feature engineering, and data preprocessing on real-world financial datasets.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/purplemadhu2910/upi_fraud_detection',
    demo: 'https://upifrauddetection.streamlit.app/',
    accent: { from: '#0891b2', to: '#0d9488', glow: 'rgba(8,145,178,0.2)', border: 'rgba(34,211,238,0.25)', badge: { bg: 'rgba(34,211,238,0.1)', text: '#22d3ee', border: 'rgba(34,211,238,0.2)' } },
  },
  {
    category: 'AI/ML', featured: false,
    title: 'Sign Language Recognition', subtitle: 'Real-Time Gesture Detection System',
    description: 'Real-time sign language recognition using MediaPipe hand landmarks and a trained ML classifier to identify ASL gestures from webcam input.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'Scikit-learn', 'SQLite'],
    github: 'https://github.com/purplemadhu2910/gesture-detection',
    demo: null,
    accent: { from: '#4f46e5', to: '#7c3aed', glow: 'rgba(99,102,241,0.2)', border: 'rgba(99,102,241,0.28)', badge: { bg: 'rgba(99,102,241,0.12)', text: '#818cf8', border: 'rgba(99,102,241,0.25)' } },
  },
  {
    category: 'AI/ML', featured: false,
    title: 'Air Math Whiteboard', subtitle: 'Gesture-Controlled Math Solver',
    description: 'Draw math expressions in the air via webcam. A CNN model recognizes handwritten digits and operators to evaluate expressions in real time.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'CNN'],
    github: 'https://github.com/purplemadhu2910',
    demo: null,
    accent: { from: '#db2777', to: '#e11d48', glow: 'rgba(219,39,119,0.2)', border: 'rgba(236,72,153,0.25)', badge: { bg: 'rgba(236,72,153,0.1)', text: '#f472b6', border: 'rgba(236,72,153,0.22)' } },
  },
  {
    category: 'Web Dev', featured: false,
    title: 'Algorithm Visualizer', subtitle: 'Interactive Sorting & Searching',
    description: 'Interactive web app to visualize sorting and searching algorithms step-by-step with speed controls. Supports Bubble, Quick, Merge Sort, Binary Search and more.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    github: 'https://github.com/purplemadhu2910/algorithm_visualizer',
    demo: 'https://purplemadhu2910.github.io/algorithm_visualizer/',
    accent: { from: '#059669', to: '#0d9488', glow: 'rgba(5,150,105,0.2)', border: 'rgba(52,211,153,0.25)', badge: { bg: 'rgba(52,211,153,0.1)', text: '#34d399', border: 'rgba(52,211,153,0.22)' } },
  },
  {
    category: 'AI/ML', featured: false,
    title: 'Rainfall Prediction', subtitle: 'ML Regression on Weather Data',
    description: 'Predicted rainfall using multiple ML regression models on historical weather data. Includes EDA, feature selection, model comparison, and visualization.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/purplemadhu2910/ml_rainfall_prediction',
    demo: null,
    accent: { from: '#0284c7', to: '#0ea5e9', glow: 'rgba(2,132,199,0.2)', border: 'rgba(56,189,248,0.25)', badge: { bg: 'rgba(56,189,248,0.1)', text: '#38bdf8', border: 'rgba(56,189,248,0.22)' } },
  },
];

const tabs = ['All', 'AI/ML', 'Web Dev'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => {
    const matchesCategory = active === 'All' || p.category === active;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.04)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[130px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)' }} />

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">What I've Built</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider mb-5"><span /></div>
        <p className="text-sm leading-[1.8] max-w-md mx-auto" style={{ color: '#8b95a5' }}>
          A selection of projects spanning AI/ML research, full-stack development, and creative problem-solving.
        </p>
      </AnimatedSection>

      {/* Search & Category Filter Controls */}
      <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
        {/* Category Tabs */}
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab ? 'text-white' : 'text-[#8b95a5] hover:text-[#f0f2f5]'
              }`}
              style={active !== tab ? { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' } : {}}
            >
              {active === tab && (
                <motion.div
                  layoutId="proj-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-72">
          <FiSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b95a5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or project..."
            className="w-full pl-9 pr-8 py-2 rounded-full text-xs outline-none transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#f0f2f5',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.5)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b95a5] hover:text-white"
            >
              <FiX size={13} />
            </button>
          )}
        </div>
      </AnimatedSection>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.32, delay: i * 0.055 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(p)}
              className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(13,17,27,0.75)',
                border: `1px solid ${p.accent.border}`,
                boxShadow: p.featured ? `0 0 0 1px ${p.accent.border}, 0 0 40px ${p.accent.glow}, 0 24px 48px rgba(0,0,0,0.35)` : 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 0 1px ${p.accent.border}, 0 0 50px ${p.accent.glow}, 0 24px 60px rgba(0,0,0,0.4)`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = p.featured ? `0 0 0 1px ${p.accent.border}, 0 0 40px ${p.accent.glow}, 0 24px 48px rgba(0,0,0,0.35)` : 'none')}
            >
              {/* Top gradient bar */}
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${p.accent.from}, ${p.accent.to})` }} />

              {/* Banner */}
              <div className="h-28 relative overflow-hidden flex items-end p-4" style={{ background: `linear-gradient(135deg, ${p.accent.from}22, ${p.accent.to}10, rgba(13,17,27,0.6))` }}>
                <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '18px 18px' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,17,27,0.7), transparent)' }} />
                {p.featured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.35)', color: '#a78bfa' }}>
                    <HiSparkles size={9} /> Featured
                  </span>
                )}
                <span className="relative z-10 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: p.accent.badge.bg, border: `1px solid ${p.accent.badge.border}`, color: p.accent.badge.text }}>
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="text-base font-bold group-hover:text-white transition-colors duration-200" style={{ color: '#f0f2f5', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    <FiInfo size={14} className="text-[#8b95a5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-medium mb-2.5" style={{ color: p.accent.badge.text }}>{p.subtitle}</p>
                  <p className="text-sm leading-[1.7]" style={{ color: '#8b95a5' }}>{p.description}</p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium transition-colors duration-150 cursor-default" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#8b95a5' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} onClick={(e) => e.stopPropagation()}>
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150" style={{ color: '#8b95a5' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f2f5')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8b95a5')}>
                      <FiGithub size={12} /> GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.18)', cursor: 'not-allowed' }}><FiGithub size={12} /> GitHub</span>
                  )}
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 ml-auto" style={{ color: '#8b95a5' }} onMouseEnter={(e) => (e.currentTarget.style.color = p.accent.badge.text)} onMouseLeave={(e) => (e.currentTarget.style.color = '#8b95a5')}>
                      <FiExternalLink size={12} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-semibold ml-auto" style={{ color: 'rgba(255,255,255,0.18)', cursor: 'not-allowed' }}><FiExternalLink size={12} /> Live Demo</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-2xl overflow-hidden glass border border-white/10 p-6 shadow-2xl space-y-5"
              style={{ background: '#0a0e1a' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-[#8b95a5] hover:text-white hover:bg-white/5 transition-colors"
              >
                <FiX size={18} />
              </button>

              {/* Category & Badge */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: selectedProject.accent.badge.bg, border: `1px solid ${selectedProject.accent.badge.border}`, color: selectedProject.accent.badge.text }}>
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.35)', color: '#a78bfa' }}>
                    <HiSparkles size={11} /> Featured Project
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                <p className="text-sm font-medium" style={{ color: selectedProject.accent.badge.text }}>{selectedProject.subtitle}</p>
              </div>

              {/* Overview */}
              <p className="text-sm leading-relaxed text-[#8b95a5]">{selectedProject.description}</p>

              {/* Highlights */}
              {selectedProject.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Key Features & Highlights</h4>
                  <ul className="space-y-1.5 text-xs text-[#8b95a5]">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: selectedProject.accent.badge.text }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f2f5' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
                  >
                    <FiGithub size={14} /> View Code on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
                  >
                    <FiExternalLink size={14} /> Open Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GitHub CTA */}
      <AnimatedSection className="text-center mt-12">
        <motion.a
          href="https://github.com/purplemadhu2910"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
          style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.22)', color: '#a78bfa' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124,58,237,0.12)';
            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(124,58,237,0.07)';
            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.22)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <FiGithub size={14} /> View all projects on GitHub
        </motion.a>
      </AnimatedSection>
    </section>
  );
}
