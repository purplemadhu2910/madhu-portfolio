import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const languages = [
  {
    name: 'English',
    level: 'Professional',
    desc: 'Full professional proficiency',
    proficiency: 90,
    flag: '🇬🇧',
    from: '#7c3aed', to: '#6366f1',
    glow: 'rgba(124,58,237,0.3)',
    badge: { bg: 'rgba(124,58,237,0.1)', text: '#a78bfa', border: 'rgba(124,58,237,0.25)' },
  },
  {
    name: 'Hindi',
    level: 'Fluent',
    desc: 'Full fluency — reading, writing & speaking',
    proficiency: 95,
    flag: '🇮🇳',
    from: '#f97316', to: '#eab308',
    glow: 'rgba(249,115,22,0.3)',
    badge: { bg: 'rgba(249,115,22,0.1)', text: '#fb923c', border: 'rgba(249,115,22,0.25)' },
  },
  {
    name: 'Marathi',
    level: 'Native',
    desc: 'Mother tongue — native speaker',
    proficiency: 100,
    flag: '🇮🇳',
    from: '#22d3ee', to: '#0d9488',
    glow: 'rgba(34,211,238,0.3)',
    badge: { bg: 'rgba(34,211,238,0.1)', text: '#22d3ee', border: 'rgba(34,211,238,0.25)' },
  },
];

export default function Languages() {
  return (
    <section id="languages" className="section-padding relative" style={{ background: 'rgba(10,14,28,0.5)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">Communication</span>
        <h2 className="section-title">Languages</h2>
        <div className="section-divider mb-5"><span /></div>
        <p className="text-sm leading-[1.8] max-w-sm mx-auto" style={{ color: '#8b95a5' }}>
          Languages I speak, read, and write across personal and professional settings.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {languages.map((lang, i) => (
          <AnimatedSection key={lang.name} direction="scale" delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 overflow-hidden group transition-all duration-300 cursor-default"
              style={{ background: 'rgba(13,17,27,0.75)', border: `1px solid rgba(255,255,255,0.06)` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px ${lang.glow}, 0 0 0 1px rgba(255,255,255,0.09)`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${lang.from}, ${lang.to})` }} />

              {/* Hover background tint */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(ellipse at top, ${lang.from}10, transparent 70%)` }} />

              {/* Flag + name */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `linear-gradient(135deg, ${lang.from}20, ${lang.to}10)`, border: `1px solid ${lang.from}30` }}>
                  {lang.flag}
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: '#f0f2f5', letterSpacing: '-0.01em' }}>
                    {lang.name}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: lang.badge.bg, color: lang.badge.text, border: `1px solid ${lang.badge.border}` }}>
                    {lang.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="relative text-xs leading-relaxed mb-5" style={{ color: '#8b95a5' }}>
                {lang.desc}
              </p>

              {/* Proficiency bar */}
              <div className="relative">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: '#4b5563' }}>Proficiency</span>
                  <span className="text-xs font-bold" style={{ color: lang.badge.text }}>{lang.proficiency}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${lang.from}, ${lang.to})`, boxShadow: `0 0 8px ${lang.glow}` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
