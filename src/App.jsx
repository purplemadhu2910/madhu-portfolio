import { useState, useEffect } from 'react';
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
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0B1020' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-16 h-16">
          <div className="loader-ring w-16 h-16 rounded-full absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gradient font-bold text-xl" style={{ fontFamily: 'Space Grotesk' }}>M</span>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-[#9CA3AF] tracking-widest uppercase"
        >
          Loading Portfolio
        </motion.p>
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
