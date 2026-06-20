import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineLightBulb, HiOutlineStar } from 'react-icons/hi';

const timeline = [
  {
    year: '2023', type: 'education', icon: HiOutlineAcademicCap,
    title: 'Started B.Tech CSE (AI)',
    org: 'Parul University, Vadodara',
    description: 'Began my journey in Computer Science with a specialization in Artificial Intelligence. Dived deep into programming fundamentals, data structures, and algorithms.',
    tags: ['Python', 'C', 'Data Structures'],
    color: 'violet',
  },
  {
    year: '2024', type: 'project', icon: HiOutlineCode,
    title: 'First ML Projects',
    org: 'Personal Projects',
    description: 'Built my first real-world ML projects — UPI Fraud Detection and Rainfall Prediction — applying supervised learning techniques on real datasets.',
    tags: ['Scikit-learn', 'Pandas', 'Streamlit'],
    color: 'cyan',
  },
  {
    year: '2024', type: 'achievement', icon: HiOutlineStar,
    title: 'MATLAB AI Workshop',
    org: 'IEEE Gujarat Section',
    description: 'Completed hands-on MATLAB programming workshop for AI applications, signal processing, and data analysis organized by IEEE Gujarat Section.',
    tags: ['MATLAB', 'Signal Processing', 'IEEE'],
    color: 'indigo',
  },
  {
    year: '2025', type: 'project', icon: HiOutlineCode,
    title: 'Advanced AI Systems',
    org: 'Personal Projects',
    description: 'Developed Sign Language Recognition System and Air Math Whiteboard — combining computer vision, deep learning, and real-time gesture detection.',
    tags: ['MediaPipe', 'TensorFlow', 'OpenCV'],
    color: 'pink',
  },
  {
    year: '2025', type: 'achievement', icon: HiOutlineStar,
    title: 'Multiple Certifications',
    org: 'Infosys Springboard, IBM, SoloLearn',
    description: 'Earned certifications in Deep Learning, NLP, Python, SQL, and React.js from globally recognized platforms, validating practical expertise.',
    tags: ['Deep Learning', 'NLP', 'React.js', 'SQL'],
    color: 'emerald',
  },
  {
    year: '2026', type: 'project', icon: HiOutlineLightBulb,
    title: 'LexAssist — AI Legal Platform',
    org: 'Final Year Project',
    description: 'Building an AI-powered legal assistant using RAG architecture, vector databases, and LLMs to make legal information accessible and intelligent.',
    tags: ['RAG', 'FastAPI', 'ChromaDB', 'OpenAI'],
    color: 'violet',
  },
];

const colorMap = {
  violet: {
    dot: 'bg-violet-500', ring: 'ring-violet-500/30', ping: 'bg-violet-400',
    icon: 'text-violet-300', iconBg: 'bg-violet-500/15 border-violet-500/25',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    year: 'text-violet-400', border: 'border-l-violet-500/60',
    glow: 'hover:shadow-violet-500/10',
  },
  cyan: {
    dot: 'bg-cyan-500', ring: 'ring-cyan-500/30', ping: 'bg-cyan-400',
    icon: 'text-cyan-300', iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    year: 'text-cyan-400', border: 'border-l-cyan-500/60',
    glow: 'hover:shadow-cyan-500/10',
  },
  indigo: {
    dot: 'bg-indigo-500', ring: 'ring-indigo-500/30', ping: 'bg-indigo-400',
    icon: 'text-indigo-300', iconBg: 'bg-indigo-500/15 border-indigo-500/25',
    tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    year: 'text-indigo-400', border: 'border-l-indigo-500/60',
    glow: 'hover:shadow-indigo-500/10',
  },
  pink: {
    dot: 'bg-pink-500', ring: 'ring-pink-500/30', ping: 'bg-pink-400',
    icon: 'text-pink-300', iconBg: 'bg-pink-500/15 border-pink-500/25',
    tag: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    year: 'text-pink-400', border: 'border-l-pink-500/60',
    glow: 'hover:shadow-pink-500/10',
  },
  emerald: {
    dot: 'bg-emerald-500', ring: 'ring-emerald-500/30', ping: 'bg-emerald-400',
    icon: 'text-emerald-300', iconBg: 'bg-emerald-500/15 border-emerald-500/25',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    year: 'text-emerald-400', border: 'border-l-emerald-500/60',
    glow: 'hover:shadow-emerald-500/10',
  },
};

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative" style={{ background: 'rgba(10,14,28,0.5)' }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">My Path</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-4 heading-glow">Journey</h2>
        <span className="section-line" />
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* Glowing vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px opacity-60" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const c = colorMap[item.color];
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot with pulse ring */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-2">
                  <span className={`relative flex h-4 w-4`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c.ping} opacity-40`} />
                    <span className={`relative inline-flex h-4 w-4 rounded-full ${c.dot} ring-4 ${c.ring} shadow-lg`} />
                  </span>
                </div>

                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`relative glass rounded-2xl p-5 border border-white/5 hover:border-white/12 border-l-2 ${c.border} transition-all duration-300 overflow-hidden shadow-lg ${c.glow} hover:shadow-xl shimmer-border`}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.iconBg}`}>
                        <item.icon size={18} className={c.icon} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-xs font-bold tracking-wider uppercase ${c.year}`}>{item.year}</span>
                        <h3 className="font-bold text-[#F3F4F6] text-sm leading-snug mt-0.5">{item.title}</h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">{item.org}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${c.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
