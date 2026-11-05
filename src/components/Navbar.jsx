import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onGoIntro }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#060912]/85 backdrop-blur-md py-3 border-b border-white/10 shadow-xl'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md py-3 border-b border-[#1D1D1F]/10 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5"
        >
          {theme === 'dark' ? (
            <div
              className="relative w-9 h-9 rounded-xl flex items-center justify-center font-bold text-base transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: '#ffffff',
                }}
              >
                M
              </span>
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#2A493C] text-[#FAF8F5] flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              MM
            </div>
          )}

          <div className="flex flex-col">
            <span
              className={`font-bold text-lg leading-tight transition-colors ${
                theme === 'dark'
                  ? 'text-[#f0f2f5] group-hover:text-violet-400 font-tech'
                  : 'text-[#1D1D1F] group-hover:text-[#2A493C] font-serif-display'
              }`}
            >
              Madhushree
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase ${
                theme === 'dark' ? 'text-[#8b95a5]' : 'text-[#2A493C]'
              }`}
            >
              AI / CSE Student
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`transition-colors py-1 relative ${
                    theme === 'dark'
                      ? 'text-[#8b95a5] hover:text-[#f0f2f5]'
                      : 'text-[#1D1D1F]/80 hover:text-[#2A493C]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Link */}
          <a
            href={personalInfo.resume.url}
            download={personalInfo.resume.filename}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-violet-600/10 text-violet-300 border border-violet-500/30 hover:bg-violet-600/20'
                : 'bg-white text-[#1D1D1F] border border-[#1D1D1F]/20 hover:bg-[#2A493C] hover:text-white hover:border-[#2A493C]'
            }`}
          >
            <FiFileText size={13} />
            Resume
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              theme === 'dark' ? 'text-[#f0f2f5] hover:bg-white/5' : 'text-[#1D1D1F] hover:bg-[#1D1D1F]/5'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b px-6 py-5 ${
              theme === 'dark'
                ? 'bg-[#060912] border-white/10'
                : 'bg-[#FAF8F5] border-[#1D1D1F]/10'
            }`}
          >
            <ul className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`block text-base font-medium py-1 ${
                      theme === 'dark' ? 'text-[#f0f2f5]' : 'text-[#1D1D1F]'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-current/10 flex items-center justify-between">
                <a
                  href={personalInfo.resume.url}
                  download={personalInfo.resume.filename}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full ${
                    theme === 'dark'
                      ? 'bg-violet-600 text-white'
                      : 'bg-[#2A493C] text-white'
                  }`}
                >
                  <FiFileText size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
