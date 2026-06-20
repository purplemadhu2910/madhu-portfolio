import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { label: 'About',        id: 'about',        color: '#a78bfa', shadow: 'rgba(167,139,250,0.35)' },
  { label: 'Skills',       id: 'skills',       color: '#22d3ee', shadow: 'rgba(34,211,238,0.35)'  },
  { label: 'Projects',     id: 'projects',     color: '#f472b6', shadow: 'rgba(244,114,182,0.35)' },
  { label: 'Journey',      id: 'journey',      color: '#34d399', shadow: 'rgba(52,211,153,0.35)'  },
  { label: 'Certificates', id: 'certificates', color: '#fb923c', shadow: 'rgba(251,146,60,0.35)'  },
  { label: 'Languages',    id: 'languages',    color: '#38bdf8', shadow: 'rgba(56,189,248,0.35)'  },
  { label: 'Contact',      id: 'contact',      color: '#c084fc', shadow: 'rgba(192,132,252,0.35)' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.findIndex((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current !== -1) setActive(links[current].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)',
              boxShadow: '0 0 20px rgba(124,58,237,0.45), 0 0 40px rgba(124,58,237,0.15)',
            }}
          >
            {/* Inner dark inset */}
            <div className="absolute inset-[2px] rounded-[10px]" style={{ background: '#0d1117' }} />
            {/* Cursive M */}
            <span className="relative z-10 text-xl leading-none"
              style={{
                fontFamily: "'Dancing Script', 'Segoe Script', 'Brush Script MT', cursive",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >M</span>
          </motion.div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <motion.button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
              style={{ color: active === l.id ? l.color : '#6b7280' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = l.color;
                e.currentTarget.style.textShadow = `0 0 12px ${l.shadow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = active === l.id ? l.color : '#6b7280';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {active === l.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: `${l.color}12`, border: `1px solid ${l.color}30` }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </motion.button>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow duration-300"
          >
            Hire Me
          </motion.button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/5 transition-colors"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(l.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === l.id
                      ? 'text-[#F3F4F6] bg-white/5'
                      : 'text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
