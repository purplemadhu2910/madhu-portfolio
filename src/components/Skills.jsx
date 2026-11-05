import { motion } from 'framer-motion';
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
import AnimatedSection from './AnimatedSection';
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
  violet:  { badge: 'text-violet-300 bg-violet-500/10 border-violet-500/20',   pill: 'hover:border-violet-500/50 hover:bg-violet-500/8 hover:text-violet-300',   icon: 'text-violet-400',  dot: 'bg-violet-500' },
  cyan:    { badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',         pill: 'hover:border-cyan-500/50 hover:bg-cyan-500/8 hover:text-cyan-300',         icon: 'text-cyan-400',    dot: 'bg-cyan-500' },
  indigo:  { badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',   pill: 'hover:border-indigo-500/50 hover:bg-indigo-500/8 hover:text-indigo-300',   icon: 'text-indigo-400',  dot: 'bg-indigo-500' },
  pink:    { badge: 'text-pink-300 bg-pink-500/10 border-pink-500/20',         pill: 'hover:border-pink-500/50 hover:bg-pink-500/8 hover:text-pink-300',         icon: 'text-pink-400',    dot: 'bg-pink-500' },
  emerald: { badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20', pill: 'hover:border-emerald-500/50 hover:bg-emerald-500/8 hover:text-emerald-300', icon: 'text-emerald-400', dot: 'bg-emerald-500' },
  sky:     { badge: 'text-sky-300 bg-sky-500/10 border-sky-500/20',            pill: 'hover:border-sky-500/50 hover:bg-sky-500/8 hover:text-sky-300',            icon: 'text-sky-400',     dot: 'bg-sky-500' },
};

export default function Skills() {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <section id="skills" className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Light Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 border-b border-[#1D1D1F]/10 pb-6">
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
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
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

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const IconComp = iconMap[skill.icon] || Wrench;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-default ${
                          skill.highlight
                            ? 'bg-[#D9E6DF]/40 border-[#2A493C]/40 text-[#2A493C] font-semibold'
                            : 'bg-[#FAF8F5] border-[#1D1D1F]/15 text-[#1D1D1F] hover:border-[#1D1D1F]/40'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-12 text-center">
            <p className="font-handwriting text-xl text-[#1D1D1F]/80 inline-block bg-[#FAF2DA] px-5 py-2 rounded-lg border border-[#1D1D1F]/10">
              💡 "Tool selection depends on the problem — I always pick the right technology for the task."
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Dark Mode Skills (portfolio identity)
  return (
    <section id="skills" className="section-padding relative bg-[#060912]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/4 rounded-full blur-[140px] pointer-events-none" />

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">What I Use</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-divider"><span /></div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((cat, ci) => {
          const c = colorMap[cat.color] || colorMap.violet;
          return (
            <AnimatedSection key={cat.category} direction="scale" delay={ci * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative glass rounded-2xl border border-white/5 hover:border-white/10 h-full overflow-hidden transition-all duration-300 group shadow-lg"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${cat.bar}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot} shadow-lg`} />
                    <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${c.badge}`}>
                      {cat.category}
                    </span>
                    <span className="ml-auto text-xs text-[#9CA3AF]">{cat.skills.length} tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, i) => {
                      const IconComp = iconMap[skill.icon] || Wrench;
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -3, scale: 1.05 }}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl glass-light border border-white/8 text-[#9CA3AF] text-sm font-medium cursor-default transition-all duration-200 ${c.pill}`}
                        >
                          <IconComp size={15} className={c.icon} />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
