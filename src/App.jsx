import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Journey from './components/Journey';
import Languages from './components/Languages';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [20, 45, 70, 88, 100];
    const timings = [100, 250, 400, 650, 1000];
    const timers = steps.map((s, i) => setTimeout(() => setProgress(s), timings[i]));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
      style={{ background: '#060912' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-6"
      >
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)' }}
        >
          <div className="absolute inset-[2px] rounded-[14px]" style={{ background: '#060912' }} />
          <span
            className="relative z-10 text-2xl font-bold"
            style={{ fontFamily: "'Dancing Script', cursive", color: '#a78bfa' }}
          >
            M
          </span>
        </div>

        <div className="w-48 flex flex-col items-center gap-2">
          <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #22d3ee)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#4b5563]">
            {progress < 100 ? 'Loading Portfolio...' : 'Welcome'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CursorTrail() {
  const { theme } = useTheme();
  const cursorX = useMotionValue(-9999);
  const cursorY = useMotionValue(-9999);
  const springX = useSpring(cursorX, { stiffness: 60, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  if (theme !== 'dark') return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: 380,
        height: 380,
        background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
        filter: 'blur(8px)',
      }}
    />
  );
}

function MainContent() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      key="portfolio-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cursor trail in dark mode */}
      <div className="hidden lg:block">
        <CursorTrail />
      </div>

      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className={`relative min-h-screen ${theme === 'dark' ? 'noise-bg grid-bg bg-[#060912]' : 'bg-[#FAF8F5]'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Journey />
          <Languages />
          <Profiles />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const defaultTitle = 'Madhushree Mandokar | AI/ML & Computer Science Student';
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '👋 Come back! | Madhushree Mandokar';
      } else {
        document.title = defaultTitle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && <MainContent />}
    </ThemeProvider>
  );
}
