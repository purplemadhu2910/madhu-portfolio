import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiPhone } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github.url, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin.url, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode.url, label: 'LeetCode' },
  { icon: FiMail, href: personalInfo.socials.email.url, label: 'Email' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t overflow-hidden ${
      isDark ? 'bg-[#060912] border-white/5' : 'bg-[#FAF8F5] border-[#1D1D1F]/10'
    }`}>
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px ${
        isDark ? 'bg-gradient-to-r from-transparent via-violet-500/50 to-transparent' : 'bg-[#2A493C]/20'
      }`} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shadow-md ${
                  isDark
                    ? 'bg-gradient-to-br from-violet-600 to-cyan-500 text-white'
                    : 'bg-[#2A493C] text-[#FAF8F5]'
                }`}
              >
                M
              </div>
              <span className={`font-bold text-[#f0f2f5] text-base ${isDark ? 'text-white font-tech' : 'text-[#1D1D1F] font-serif-display text-lg'}`}>
                Madhushree Mandokar
              </span>
            </div>
            <p className={`text-xs max-w-xs text-center md:text-left leading-relaxed ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
              Building AI-powered products with clean user experiences.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-500 font-semibold">Open to opportunities</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-xs font-medium transition-colors cursor-pointer ${
                  isDark
                    ? 'text-[#8b95a5] hover:text-white'
                    : 'text-[#1D1D1F]/70 hover:text-[#2A493C]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                  isDark
                    ? 'glass-light border-white/8 text-[#8b95a5] hover:text-white hover:border-violet-500/40'
                    : 'bg-white border-[#1D1D1F]/15 text-[#1D1D1F] hover:text-[#2A493C] hover:border-[#2A493C]'
                }`}
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
          isDark ? 'border-white/5 text-[#4b5563]' : 'border-[#1D1D1F]/10 text-[#1D1D1F]/60'
        }`}>
          <p>© {new Date().getFullYear()} Madhushree Mandokar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FiHeart size={12} className="text-pink-500 fill-pink-500" /> using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
