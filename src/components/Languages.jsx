import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { languagesData } from '../data/languages';

export default function Languages() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="languages"
      className={`relative ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-[#FAF8F5] border-b border-[#1D1D1F]/10'
      }`}
    >
      {isDark && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        />
      )}

      <div className={isDark ? '' : 'max-w-6xl mx-auto px-6'}>
        <AnimatedSection className={isDark ? 'text-center mb-16' : 'text-center mb-12'}>
          {isDark ? (
            <>
              <span className="section-eyebrow">Communication</span>
              <h2 className="section-title">Languages</h2>
              <div className="section-divider mb-5"><span /></div>
            </>
          ) : (
            <>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2A493C] mb-2 block">
                Communication
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F] mb-3">
                Languages Spoken
              </h2>
            </>
          )}
          <p className={`text-sm leading-[1.8] max-w-sm mx-auto ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
            Languages I speak, read, and write across personal and professional settings.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {languagesData.map((lang, i) => (
            <AnimatedSection key={lang.name} direction="scale" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'glass border border-white/6 shadow-xl'
                    : 'bg-white border border-[#1D1D1F]/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Flag + name */}
                <div className="relative flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      isDark
                        ? 'bg-violet-500/10 border border-violet-500/20'
                        : 'bg-[#D9E6DF]/50 border border-[#2A493C]/20'
                    }`}
                  >
                    {lang.flag}
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-base ${
                        isDark ? 'text-[#f0f2f5] font-tech' : 'text-[#1D1D1F] font-serif-display text-lg'
                      }`}
                    >
                      {lang.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isDark
                          ? 'bg-violet-500/10 text-violet-300 border border-violet-500/25'
                          : 'bg-[#D9E6DF] text-[#2A493C]'
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`relative text-xs leading-relaxed mb-5 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
                  {lang.desc}
                </p>

                {/* Progress bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-[#4b5563]' : 'text-[#1D1D1F]/50'}`}>
                      Proficiency
                    </span>
                    <span className={`text-xs font-bold ${isDark ? 'text-violet-300' : 'text-[#2A493C]'}`}>
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div
                    className={`h-1.5 rounded-full overflow-hidden ${
                      isDark ? 'bg-white/6' : 'bg-stone-200'
                    }`}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: isDark
                          ? `linear-gradient(90deg, ${lang.from}, ${lang.to})`
                          : '#2A493C',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
