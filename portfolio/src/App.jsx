import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useSpring as useMotionSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
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
        {/* Logo */}
        <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)', boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}>
          <div className="absolute inset-[2px] rounded-[14px]" style={{ background: '#060912' }} />
          <span className="relative z-10 text-2xl font-bold"
            style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>M</span>
        </div>

        {/* Progress bar */}
        <div className="w-48 flex flex-col items-center gap-2">
          <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #22d3ee)', boxShadow: '0 0 8px rgba(124,58,237,0.8)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#4b5563' }}>
            {progress < 100 ? 'Loading...' : 'Ready'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CursorTrail() {
  const cursorX = useMotionValue(-9999);
  const cursorY = useMotionValue(-9999);
  const springX = useMotionSpring(cursorX, { stiffness: 60, damping: 20 });
  const springY = useMotionSpring(cursorY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

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

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {/* Cursor trail */}
      <div className="hidden lg:block">
        <CursorTrail />
      </div>

      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen noise-bg grid-bg"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Certificates />
            <Languages />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </>
  );
}
