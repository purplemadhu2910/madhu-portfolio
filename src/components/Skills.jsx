import { useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import {
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNumpy, SiPandas,
  SiScikitlearn, SiMysql, SiGit, SiGithub, SiHtml5, SiCss,
  SiStreamlit, SiOpenai, SiFastapi, SiFlask, SiMongodb, SiVercel,
} from 'react-icons/si';
import { TbBrandCpp, TbVectorBezier2 } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { FaJava, FaDatabase, FaBrain } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skillsData } from '../data/skills';

const iconMap = {
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNumpy, SiPandas,
  SiScikitlearn, SiMysql, SiGit, SiGithub, SiHtml5, SiCss,
  SiStreamlit, SiOpenai, SiFastapi, SiFlask, SiMongodb, SiVercel,
  TbBrandCpp, TbVectorBezier2, VscCode, FaJava, FaDatabase, FaBrain,
  MdOutlineBarChart, BsGrid3X3Gap,
};

const colorMap = {
  violet: {
    badge: 'text-violet-300 bg-violet-500/10 border-violet-500/25',
    pill: 'hover:border-violet-500/50 hover:bg-violet-500/12 hover:text-violet-200 hover:shadow-violet-500/20',
    icon: 'text-violet-400 group-hover/badge:text-violet-300',
    dot: 'bg-violet-400 shadow-violet-500/50',
    glow: 'rgba(124, 58, 237, 0.25)',
    spotlight: 'rgba(167, 139, 250, 0.18)',
    bar: 'from-violet-500 via-purple-500 to-indigo-500',
    accent: '#a78bfa',
  },
  cyan: {
    badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/25',
    pill: 'hover:border-cyan-500/50 hover:bg-cyan-500/12 hover:text-cyan-200 hover:shadow-cyan-500/20',
    icon: 'text-cyan-400 group-hover/badge:text-cyan-300',
    dot: 'bg-cyan-400 shadow-cyan-500/50',
    glow: 'rgba(6, 182, 212, 0.25)',
    spotlight: 'rgba(34, 211, 238, 0.18)',
    bar: 'from-cyan-500 via-teal-500 to-emerald-500',
    accent: '#22d3ee',
  },
  indigo: {
    badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/25',
    pill: 'hover:border-indigo-500/50 hover:bg-indigo-500/12 hover:text-indigo-200 hover:shadow-indigo-500/20',
    icon: 'text-indigo-400 group-hover/badge:text-indigo-300',
    dot: 'bg-indigo-400 shadow-indigo-500/50',
    glow: 'rgba(99, 102, 241, 0.25)',
    spotlight: 'rgba(129, 140, 248, 0.18)',
    bar: 'from-indigo-500 via-blue-500 to-violet-500',
    accent: '#818cf8',
  },
  pink: {
    badge: 'text-pink-300 bg-pink-500/10 border-pink-500/25',
    pill: 'hover:border-pink-500/50 hover:bg-pink-500/12 hover:text-pink-200 hover:shadow-pink-500/20',
    icon: 'text-pink-400 group-hover/badge:text-pink-300',
    dot: 'bg-pink-400 shadow-pink-500/50',
    glow: 'rgba(236, 72, 153, 0.25)',
    spotlight: 'rgba(244, 114, 182, 0.18)',
    bar: 'from-pink-500 via-rose-500 to-purple-500',
    accent: '#f472b6',
  },
  emerald: {
    badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
    pill: 'hover:border-emerald-500/50 hover:bg-emerald-500/12 hover:text-emerald-200 hover:shadow-emerald-500/20',
    icon: 'text-emerald-400 group-hover/badge:text-emerald-300',
    dot: 'bg-emerald-400 shadow-emerald-500/50',
    glow: 'rgba(16, 185, 129, 0.25)',
    spotlight: 'rgba(52, 211, 153, 0.18)',
    bar: 'from-emerald-500 via-teal-500 to-cyan-500',
    accent: '#34d399',
  },
  sky: {
    badge: 'text-sky-300 bg-sky-500/10 border-sky-500/25',
    pill: 'hover:border-sky-500/50 hover:bg-sky-500/12 hover:text-sky-200 hover:shadow-sky-500/20',
    icon: 'text-sky-400 group-hover/badge:text-sky-300',
    dot: 'bg-sky-400 shadow-sky-500/50',
    glow: 'rgba(14, 165, 233, 0.25)',
    spotlight: 'rgba(56, 189, 248, 0.18)',
    bar: 'from-sky-500 via-blue-500 to-indigo-500',
    accent: '#38bdf8',
  },
};

// Interactive 3D Tilt Card with Floating Motion and Dynamic Spotlight Border
function TechCard({ cat, ci, colorStyle, shouldReduceMotion }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt and Spotlight coordinates
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(150);
  const glowY = useMotionValue(150);

  const springRotX = useSpring(rotateX, { stiffness: 220, damping: 22 });
  const springRotY = useSpring(rotateY, { stiffness: 220, damping: 22 });

  // Dynamically constructed spotlight gradient
  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${glowX}px ${glowY}px, ${colorStyle.spotlight}, transparent 70%)`;

  // Gentle, customized floating animation parameters for each card
  const floatTimings = [
    { duration: 4.8, delay: 0 },
    { duration: 5.6, delay: 0.9 },
    { duration: 5.0, delay: 1.8 },
    { duration: 5.4, delay: 0.4 },
    { duration: 4.9, delay: 1.3 },
    { duration: 5.2, delay: 2.1 },
  ];
  const { duration: floatDuration, delay: floatDelay } = floatTimings[ci % floatTimings.length];

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7.5; // -7.5 to +7.5 deg
    const rotY = ((x - centerX) / centerX) * 7.5;
    rotateX.set(rotX);
    rotateY.set(rotY);
    glowX.set(x);
    glowY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: isHovered ? -8 : [0, -6, 0],
            }
      }
      transition={{
        y: {
          duration: isHovered ? 0.3 : floatDuration,
          delay: isHovered ? 0 : floatDelay,
          repeat: isHovered ? 0 : Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      }}
      className="h-full [perspective:1000px]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX: springRotX,
                rotateY: springRotY,
                transformStyle: 'preserve-3d',
              }
        }
        className={`relative glass rounded-2xl border border-white/8 h-full overflow-hidden transition-all duration-300 group shadow-lg ${
          isHovered ? 'border-white/20' : ''
        }`}
      >
        {/* Dynamic cursor-following spotlight border glow */}
        <motion.div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: spotlightBg,
          }}
        />

        {/* Ambient colored shadow glow on hover */}
        <div
          className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"
          style={{ background: colorStyle.glow }}
        />

        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />

        {/* Top colored animated gradient bar with light sweep */}
        <div className="relative z-10 overflow-hidden">
          <div className={`h-1 w-full bg-gradient-to-r ${cat.bar || colorStyle.bar}`} />
          {/* Light sweep shimmer across the bar on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-6 relative z-10 flex flex-col justify-between h-[calc(100%-4px)]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-2.5 h-2.5 rounded-full ${colorStyle.dot} shadow-lg`} />
              <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${colorStyle.badge}`}>
                {cat.category}
              </span>
              <span className="ml-auto text-xs text-[#9CA3AF] font-medium font-mono">
                {cat.skills.length} tools
              </span>
            </div>

            {cat.description && (
              <p className="text-xs text-[#8b95a5] mb-5 leading-relaxed">
                {cat.description}
              </p>
            )}

            {/* Skills Badges Grid */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, i) => {
                const IconComp = iconMap[skill.icon] || Wrench;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.88, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion ? 0 : 0.15 + i * 0.035,
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.05 }}
                    className={`group/badge flex items-center gap-2 px-3.5 py-2 rounded-xl glass-light border border-white/8 text-[#9CA3AF] text-sm font-medium cursor-default transition-all duration-200 ${colorStyle.pill}`}
                  >
                    <IconComp
                      size={15}
                      className={`${colorStyle.icon} transition-transform duration-200 group-hover/badge:scale-120 group-hover/badge:-rotate-6`}
                    />
                    <span className="group-hover/badge:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // Parallax mouse tracking for the background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  // Floating orbs parallax offsets
  const purpleOrbX = useTransform(springX, (v) => v * -38);
  const purpleOrbY = useTransform(springY, (v) => v * -38);

  const cyanOrbX = useTransform(springX, (v) => v * 32);
  const cyanOrbY = useTransform(springY, (v) => v * 32);

  const blueOrbX = useTransform(springX, (v) => v * -22);
  const blueOrbY = useTransform(springY, (v) => v * 24);

  const pinkOrbX = useTransform(springX, (v) => v * 28);
  const pinkOrbY = useTransform(springY, (v) => v * -28);

  // Moving faint grid offset
  const gridX = useTransform(springX, (v) => v * -12);
  const gridY = useTransform(springY, (v) => v * -12);

  const handleSectionMouseMove = (e) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX * 100);
    mouseY.set(normY * 100);
  };

  const handleSectionMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Light Mode Layout
  if (theme === 'light') {
    return (
      <section id="skills" className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 border-b border-[#1D1D1F]/10 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9E6DF] border border-[#2A493C]/30 text-[#2A493C] text-xs font-semibold uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5 text-[#2A493C]" />
                Technical Skillset
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif-display font-bold text-[#1D1D1F]">
                Things I Work With
              </h2>
            </div>
            <p className="text-[#1D1D1F]/70 text-sm sm:text-base max-w-md">
              Languages, frameworks, and specialized AI tools I use to build working software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="bg-white border border-[#1D1D1F]/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1D1D1F] font-serif-display tracking-wide">
                    {category.category}
                  </h3>
                  <span className="text-xs font-semibold text-[#1D1D1F]/50 px-2.5 py-1 rounded-full bg-stone-100">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-[#1D1D1F]/60 mb-5">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, bi) => {
                    const IconComp = iconMap[skill.icon] || Wrench;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + bi * 0.03 }}
                        whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.04 }}
                        className={`group/badge flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-default ${
                          skill.highlight
                            ? 'bg-[#D9E6DF]/40 border-[#2A493C]/40 text-[#2A493C] font-semibold'
                            : 'bg-[#FAF8F5] border-[#1D1D1F]/15 text-[#1D1D1F] hover:border-[#1D1D1F]/40'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 transition-transform duration-200 group-hover/badge:scale-115 group-hover/badge:-rotate-6" />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-handwriting text-xl text-[#1D1D1F]/80 inline-block bg-[#FAF2DA] px-5 py-2 rounded-lg border border-[#1D1D1F]/10">
              💡 "Tool selection depends on the problem — I always pick the right technology for the task."
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Dark Mode Tech Stack (Premium Cybernetic Aesthetics with Interactive Parallax)
  return (
    <section
      id="skills"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="section-padding relative bg-[#060912] overflow-hidden"
    >
      {/* ── 1. Interactive Parallax Background ── */}
      {/* Faint moving grid with radial vignette */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={
          shouldReduceMotion
            ? {}
            : {
                x: gridX,
                y: gridY,
              }
        }
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          }}
        />
      </motion.div>

      {/* Subtle vertical background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/3 to-transparent pointer-events-none z-0" />

      {/* Floating Glowing Orbs responding to cursor parallax */}
      {/* Purple Glowing Orb */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: purpleOrbX, y: purpleOrbY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.18, 1],
                opacity: [0.18, 0.28, 0.18],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-[450px] h-[450px] bg-violet-600/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* Cyan Glowing Orb */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: cyanOrbX, y: cyanOrbY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.22, 1],
                opacity: [0.14, 0.24, 0.14],
              }
        }
        transition={{ duration: 9, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-20 w-[420px] h-[420px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Blue / Indigo Glowing Orb */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: blueOrbX, y: blueOrbY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.14, 0.22, 0.14],
              }
        }
        transition={{ duration: 10, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/16 rounded-full blur-[150px] pointer-events-none z-0"
      />

      {/* Pink Accent Glowing Orb */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: pinkOrbX, y: pinkOrbY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.14, 1],
                opacity: [0.08, 0.16, 0.08],
              }
        }
        transition={{ duration: 7, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 right-1/4 w-[380px] h-[380px] bg-pink-500/12 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* ── 2. Section Heading with Smooth Scroll Reveal ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16 relative z-10"
      >
        <span className="section-eyebrow">What I Use</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-divider"><span /></div>
        <p className="text-sm text-[#8b95a5] max-w-lg mx-auto mt-3">
          Modern programming languages, intelligent frameworks, and scalable cloud tools engineered for high-performance software.
        </p>
      </motion.div>

      {/* ── 3. Six 3D Floating Tech Cards Grid ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {skillsData.map((cat, ci) => {
          const colorStyle = colorMap[cat.color] || colorMap.violet;
          return (
            <TechCard
              key={cat.category}
              cat={cat}
              ci={ci}
              colorStyle={colorStyle}
              shouldReduceMotion={shouldReduceMotion}
            />
          );
        })}
      </div>
    </section>
  );
}
