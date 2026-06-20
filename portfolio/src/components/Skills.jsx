import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import {
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNumpy, SiPandas,
  SiScikitlearn, SiMysql, SiGit, SiGithub, SiHtml5, SiCss,
  SiStreamlit, SiOpenai, SiFastapi, SiFlask, SiMongodb, SiVercel,
} from 'react-icons/si';
import { TbBrandCpp, TbVectorBezier2, TbBrandMysql } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { FaJava, FaDatabase, FaBrain } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';

const categories = [
  {
    label: 'Languages',
    color: 'violet',
    bar: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Python',     icon: SiPython },
      { name: 'Java',       icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C / C++',    icon: TbBrandCpp },
      { name: 'SQL',        icon: FaDatabase },
      { name: 'HTML5',      icon: SiHtml5 },
      { name: 'CSS3',       icon: SiCss },
    ],
  },
  {
    label: 'Frontend & Backend',
    color: 'cyan',
    bar: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'React.js',     icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Flask',        icon: SiFlask },
      { name: 'FastAPI',      icon: SiFastapi },
      { name: 'REST APIs',    icon: BsGrid3X3Gap },
      { name: 'Vercel',       icon: SiVercel },
    ],
  },
  {
    label: 'AI / ML',
    color: 'indigo',
    bar: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Scikit-learn',    icon: SiScikitlearn },
      { name: 'NLP',             icon: FaBrain },
      { name: 'TF-IDF',          icon: MdOutlineBarChart },
      { name: 'Generative AI',   icon: SiOpenai },
      { name: 'RAG',             icon: TbVectorBezier2 },
      { name: 'Streamlit',       icon: SiStreamlit },
    ],
  },
  {
    label: 'Libraries & Tools',
    color: 'pink',
    bar: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'NumPy',      icon: SiNumpy },
      { name: 'Pandas',     icon: SiPandas },
      { name: 'Matplotlib', icon: MdOutlineBarChart },
      { name: 'Seaborn',    icon: MdOutlineBarChart },
      { name: 'Git',        icon: SiGit },
      { name: 'GitHub',     icon: SiGithub },
      { name: 'VS Code',    icon: VscCode },
    ],
  },
  {
    label: 'Databases',
    color: 'emerald',
    bar: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MySQL',            icon: SiMysql },
      { name: 'MongoDB',          icon: SiMongodb },
      { name: 'Vector Databases', icon: TbVectorBezier2 },
    ],
  },
  {
    label: 'Core Concepts',
    color: 'sky',
    bar: 'from-sky-500 to-blue-500',
    skills: [
      { name: 'DSA',                  icon: BsGrid3X3Gap },
      { name: 'OOP',                  icon: FaBrain },
      { name: 'DBMS',                 icon: FaDatabase },
      { name: 'Artificial Intelligence', icon: SiOpenai },
    ],
  },
];

const colorMap = {
  violet:  { badge: 'text-violet-300 bg-violet-500/10 border-violet-500/20',   pill: 'hover:border-violet-500/50 hover:bg-violet-500/8 hover:text-violet-300',   icon: 'text-violet-400',  dot: 'bg-violet-500',  glow: 'group-hover:shadow-violet-500/10'  },
  cyan:    { badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',         pill: 'hover:border-cyan-500/50 hover:bg-cyan-500/8 hover:text-cyan-300',         icon: 'text-cyan-400',    dot: 'bg-cyan-500',    glow: 'group-hover:shadow-cyan-500/10'    },
  indigo:  { badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',   pill: 'hover:border-indigo-500/50 hover:bg-indigo-500/8 hover:text-indigo-300',   icon: 'text-indigo-400',  dot: 'bg-indigo-500',  glow: 'group-hover:shadow-indigo-500/10'  },
  pink:    { badge: 'text-pink-300 bg-pink-500/10 border-pink-500/20',         pill: 'hover:border-pink-500/50 hover:bg-pink-500/8 hover:text-pink-300',         icon: 'text-pink-400',    dot: 'bg-pink-500',    glow: 'group-hover:shadow-pink-500/10'    },
  emerald: { badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20', pill: 'hover:border-emerald-500/50 hover:bg-emerald-500/8 hover:text-emerald-300', icon: 'text-emerald-400', dot: 'bg-emerald-500', glow: 'group-hover:shadow-emerald-500/10' },
  sky:     { badge: 'text-sky-300 bg-sky-500/10 border-sky-500/20',            pill: 'hover:border-sky-500/50 hover:bg-sky-500/8 hover:text-sky-300',            icon: 'text-sky-400',     dot: 'bg-sky-500',     glow: 'group-hover:shadow-sky-500/10'     },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative" style={{ background: 'rgba(17,24,39,0.3)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/4 rounded-full blur-[140px] pointer-events-none" />

      <AnimatedSection className="text-center mb-16">
        <span className="section-eyebrow">What I Use</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-divider"><span /></div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => {
          const c = colorMap[cat.color];
          return (
            <AnimatedSection key={cat.label} direction="scale" delay={ci * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative glass rounded-2xl border border-white/5 hover:border-white/10 h-full overflow-hidden transition-all duration-300 group shadow-lg ${c.glow}`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${cat.bar}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot} shadow-lg`} />
                    <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${c.badge}`}>
                      {cat.label}
                    </span>
                    <span className="ml-auto text-xs text-[#9CA3AF]">{cat.skills.length} tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: ci * 0.08 + i * 0.05 }}
                        whileHover={{ y: -3, scale: 1.07 }}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl glass-light border border-white/8 text-[#9CA3AF] text-sm font-medium cursor-default transition-all duration-200 ${c.pill}`}
                      >
                        <skill.icon size={15} className={c.icon} />
                        {skill.name}
                      </motion.div>
                    ))}
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
