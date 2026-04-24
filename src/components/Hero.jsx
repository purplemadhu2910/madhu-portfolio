import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import profileImg from '../assets/madhu_profile.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-28">
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 justify-between">
        {/* Text */}
        <div className="flex-1 space-y-5">
          <motion.p {...fadeUp(0)} className="text-violet-500 font-semibold tracking-widest text-sm uppercase">
            Hello, I'm
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl font-extrabold leading-tight">
            Madhushree{' '}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Mandokar
            </span>
          </motion.h1>
          <motion.div {...fadeUp(0.2)} className="space-y-1">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              B.Tech CSE (Artificial Intelligence)
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Parul University · Graduating 2027
            </p>
          </motion.div>
          <motion.p {...fadeUp(0.3)} className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Passionate B.Tech CSE (AI) student with a strong interest in Machine Learning and Software Development.
            Experienced in building real-world projects like UPI fraud detection and algorithm visualizers.
            Actively solving problems on LeetCode and HackerRank, aiming to develop scalable and impactful AI-driven solutions.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-200 dark:hover:shadow-violet-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-semibold hover:border-violet-400 hover:text-violet-500 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-violet-200 dark:border-violet-800 overflow-hidden">
              <img src={profileImg} alt="Madhushree Mandokar" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
