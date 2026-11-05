import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineLightBulb, HiOutlineStar } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';
import { timelineData } from '../data/timeline';

const iconMap = {
  education: HiOutlineAcademicCap,
  project: HiOutlineCode,
  achievement: HiOutlineStar,
};

export default function Journey() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="journey"
      className={`relative ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-white/70 border-b border-[#1D1D1F]/10'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className={isDark ? '' : 'max-w-6xl mx-auto px-6'}>
        <AnimatedSection className="text-center mb-16">
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${isDark ? 'text-violet-400' : 'text-[#2A493C]'}`}>
            My Path
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#F3F4F6] font-tech' : 'text-[#1D1D1F] font-serif-display'}`}>
            Academic & Technical Journey
          </h2>
          {isDark ? <div className="section-divider"><span /></div> : <div className="w-16 h-1 bg-[#2A493C] mx-auto rounded-full mt-2" />}
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div
            className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px ${
              isDark ? 'timeline-line opacity-60' : 'bg-[#2A493C]/20'
            }`}
          />

          <div className="space-y-10">
            {timelineData.map((item, i) => {
              const IconComp = iconMap[item.type] || HiOutlineLightBulb;
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-2">
                    <span className="relative flex h-4 w-4">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 ${isDark ? 'bg-violet-400' : 'bg-[#2A493C]'}`} />
                      <span className={`relative inline-flex h-4 w-4 rounded-full shadow-lg ${isDark ? 'bg-violet-500 ring-4 ring-violet-500/30' : 'bg-[#2A493C] ring-4 ring-[#2A493C]/20'}`} />
                    </span>
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden shadow-lg ${
                        isDark
                          ? 'glass border-white/5 hover:border-white/12'
                          : 'bg-white border-[#1D1D1F]/15 hover:border-[#2A493C]/40 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                            isDark
                              ? 'bg-violet-500/15 border-violet-500/25 text-violet-300'
                              : 'bg-[#D9E6DF] border-[#2A493C]/30 text-[#2A493C]'
                          }`}
                        >
                          <IconComp size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-xs font-bold tracking-wider uppercase ${isDark ? 'text-violet-400' : 'text-[#2A493C]'}`}>
                            {item.year}
                          </span>
                          <h3 className={`font-bold text-sm leading-snug mt-0.5 ${isDark ? 'text-[#F3F4F6] font-tech' : 'text-[#1D1D1F] font-serif-display text-base'}`}>
                            {item.title}
                          </h3>
                          <p className={`text-xs mt-0.5 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/60'}`}>
                            {item.org}
                          </p>
                        </div>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/80'}`}>
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                              isDark
                                ? 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                                : 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15'
                            }`}
                          >
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
      </div>
    </section>
  );
}
