import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Tech Stack', 'Projects', 'Certificates', 'Contact'];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Madhushree
        </motion.span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-500 transition-colors">
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
