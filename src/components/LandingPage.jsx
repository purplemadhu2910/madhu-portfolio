import { motion } from 'framer-motion';
import { FiGithub, FiArrowRight, FiFileText } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/madhu_profile.png';
import resumePDF from '../assets/mandokar_madhushree_resume.pdf';

const RESUME_URL = resumePDF;
const GITHUB_URL = 'https://github.com/purplemadhu2910';
const LEETCODE_URL = 'https://leetcode.com/u/purplemadhu2910/';

export default function LandingPage({ onEnterPortfolio }) {
  // Stagger container for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#f3efe6] text-[#111111] overflow-x-hidden font-sans selection:bg-[#a8f0d0] selection:text-black">
      {/* ── Background Editorial Split & Grid Texture ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft pastel split backdrops */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-[#e8fbf2] opacity-70" />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#f0e8ff] opacity-70" />
        
        {/* Subtle brutalist grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Decorative corner stars / accents */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-black/40 uppercase">
          <span>✦ EDITORIAL INTRO</span>
          <span>•</span>
          <span>EST. 2027</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-10 flex flex-col justify-between min-h-screen">
        
        {/* ── 1. HEADER / BRAND ── */}
        <header className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Left: Monogram logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white border-2 sm:border-[3px] border-black rounded-2xl flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_#000] transition-all cursor-pointer">
              <span className="font-serif italic font-black text-black">M</span>
            </div>
            <div className="hidden xs:flex flex-col leading-tight">
              <span className="font-black text-xs sm:text-sm tracking-wider uppercase">Madhushree</span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-black/60">Portfolio Intro</span>
            </div>
          </motion.div>

          {/* Right: Status indicator */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2 bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_#000]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>
        </header>

        {/* ── 2 & 3. MAIN HERO & PHOTO (ASYMMETRIC SPLIT) ── */}
        <motion.main 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4"
        >
          
          {/* Left Column: Hero Text & Information (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <span className="bg-[#a8f0d0] border-2 border-black px-3.5 py-1 rounded-lg text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_#000] flex items-center gap-1.5">
                <FiSparkles className="text-black" /> 01 / INTRO
              </span>
              <span className="bg-[#e4d4ff] border-2 border-black px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">
                INDIA
              </span>
            </motion.div>

            {/* Typography */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black/80 font-sans mb-1">
                Hi, I'm
              </h2>
              
              <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-black font-sans my-1 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                MADHUSHREE
              </h1>

              <div className="mt-4 inline-block">
                <span className="bg-black text-white text-base sm:text-xl md:text-2xl font-black px-4 py-1.5 rounded-xl uppercase tracking-wider inline-block shadow-[4px_4px_0px_0px_#a8f0d0]">
                  AI / ML ENGINEER
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl font-medium text-black/85 leading-relaxed max-w-xl mb-8 bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border-2 border-black/10 shadow-sm"
            >
              Building intelligent products with machine learning and code.
            </motion.p>

            {/* ── 4. THREE MAIN ACTION BUTTONS ── */}
            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row flex-wrap gap-3.5 sm:gap-4 mb-8">
              
              {/* Button 1: Resume */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Madhushree_Mandokar_Resume.pdf"
                className="group flex-1 min-w-[140px] bg-white border-2 sm:border-[3px] border-black text-black font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center justify-between gap-2"
              >
                <span className="flex items-center gap-2">
                  <FiFileText className="text-lg" /> RESUME
                </span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-mono">↗</span>
              </a>

              {/* Button 2: GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 min-w-[140px] bg-white border-2 sm:border-[3px] border-black text-black font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center justify-between gap-2"
              >
                <span className="flex items-center gap-2">
                  <FiGithub className="text-lg" /> GITHUB
                </span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-mono">↗</span>
              </a>

              {/* Button 3: LeetCode */}
              <a
                href={LEETCODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 min-w-[140px] bg-white border-2 sm:border-[3px] border-black text-black font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center justify-between gap-2"
              >
                <span className="flex items-center gap-2">
                  <SiLeetcode className="text-lg text-amber-600" /> LEETCODE
                </span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-mono">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Creative Editorial Profile Photo (5 Cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Decorative background shape card */}
              <div className="absolute -inset-3 bg-[#e4d4ff] border-3 sm:border-4 border-black rounded-[2.5rem] shadow-[8px_8px_0px_0px_#000] -rotate-2" />
              
              {/* Secondary accent layer */}
              <div className="absolute -inset-1 bg-[#a8f0d0] border-3 border-black rounded-[2.2rem] rotate-1" />

              {/* Main Photo Container */}
              <div className="relative bg-white border-3 sm:border-4 border-black rounded-[2rem] p-3 sm:p-4 overflow-hidden shadow-[4px_4px_0px_0px_#000]">
                
                {/* Photo Header bar */}
                <div className="flex items-center justify-between pb-3 px-1 border-b-2 border-black/10 mb-3 font-mono text-xs font-bold text-black/70">
                  <span>MADHU_PROFILE.PNG</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 border border-black" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-black" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-black" />
                  </div>
                </div>

                {/* Profile Image */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-black bg-slate-100">
                  <img
                    src={profileImg}
                    alt="Madhushree Mandokar Profile"
                    className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02]"
                  />
                  {/* Subtle paper grain / gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating brutalist badges on photo */}
                <div className="mt-3 flex flex-wrap gap-2 justify-between items-center text-xs font-extrabold">
                  <span className="bg-[#a8f0d0] text-black border-2 border-black px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000]">
                    🎓 B.Tech CSE (AI)
                  </span>
                  <span className="bg-white text-black border-2 border-black px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000]">
                    📍 Parul University '27
                  </span>
                </div>
              </div>

              {/* Subtle decorative editorial accent star */}
              <div className="absolute -top-6 -right-6 text-black text-4xl select-none font-bold animate-bounce hidden xs:block">
                ✦
              </div>
              <div className="absolute -bottom-5 -left-5 text-black text-3xl select-none font-bold hidden xs:block">
                ✚
              </div>
            </div>
          </motion.div>
        </motion.main>

        {/* ── 5. ENTER PORTFOLIO CTA (FOOTER / NAVIGATION) ── */}
        <motion.footer 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 sm:pt-10 pb-4 flex flex-col sm:flex-row items-center justify-between gap-5 border-t-2 border-black/10"
        >
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-black/60">
            <span>© {new Date().getFullYear()} MADHUSHREE MANDOKAR</span>
            <span>•</span>
            <span>AI / ML DEVELOPER</span>
          </div>

          {/* Prominent CTA */}
          <button
            onClick={onEnterPortfolio}
            className="group relative w-full sm:w-auto bg-[#a8f0d0] hover:bg-[#97ebd2] text-black border-3 sm:border-4 border-black font-black text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>ENTER PORTFOLIO</span>
            <FiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300 stroke-[3]" />
          </button>
        </motion.footer>

      </div>
    </div>
  );
}
