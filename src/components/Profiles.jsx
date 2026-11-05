import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiGlobe, FiCode, FiTerminal } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';

const profilesList = [
  {
    name: 'GitHub',
    icon: FiGithub,
    subtitle: personalInfo.socials.github.label,
    url: personalInfo.socials.github.url,
    username: personalInfo.socials.github.username,
    bgColor: 'bg-stone-900 text-white',
    darkBorder: 'hover:border-violet-500/40',
    lightBorder: 'hover:border-stone-900',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    subtitle: personalInfo.socials.linkedin.label,
    url: personalInfo.socials.linkedin.url,
    username: personalInfo.socials.linkedin.username,
    bgColor: 'bg-[#0A66C2] text-white',
    darkBorder: 'hover:border-blue-500/40',
    lightBorder: 'hover:border-[#0A66C2]',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    subtitle: personalInfo.socials.leetcode.label,
    url: personalInfo.socials.leetcode.url,
    username: personalInfo.socials.leetcode.username,
    bgColor: 'bg-[#FFA116] text-[#1D1D1F]',
    darkBorder: 'hover:border-amber-500/40',
    lightBorder: 'hover:border-[#FFA116]',
  },
  {
    name: 'HackerRank',
    icon: SiHackerrank,
    subtitle: personalInfo.socials.hackerrank.label,
    url: personalInfo.socials.hackerrank.url,
    username: personalInfo.socials.hackerrank.username,
    bgColor: 'bg-[#2EC4B6] text-white',
    darkBorder: 'hover:border-emerald-500/40',
    lightBorder: 'hover:border-[#2EC4B6]',
  },
  {
    name: 'Email',
    icon: FiMail,
    subtitle: personalInfo.socials.email.label,
    url: personalInfo.socials.email.url,
    username: personalInfo.socials.email.display,
    bgColor: 'bg-[#2A493C] text-white',
    darkBorder: 'hover:border-cyan-500/40',
    lightBorder: 'hover:border-[#2A493C]',
  },
];

export default function Profiles() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 ${isDark ? 'bg-[#060912]' : 'bg-white/80 border-b border-[#1D1D1F]/10'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-current/10 pb-5">
          <div>
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 ${
              isDark ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20' : 'bg-[#D9E6DF] text-[#2A493C]'
            }`}>
              <FiGlobe className="w-3.5 h-3.5" />
              Online Presence
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white font-tech' : 'text-[#1D1D1F] font-serif-display'}`}>
              Coding & Social Profiles
            </h2>
          </div>
          <p className={`text-xs sm:text-sm max-w-md ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
            Connect with me on coding platforms, professional networks, or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {profilesList.map((profile, idx) => {
            const IconComp = profile.icon;
            return (
              <AnimatedSection key={profile.name} direction="scale" delay={idx * 0.07}>
                <motion.a
                  href={profile.url}
                  target={profile.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`group rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between h-full ${
                    isDark
                      ? `glass border-white/5 ${profile.darkBorder} shadow-lg`
                      : `bg-[#FAF8F5] border-[#1D1D1F]/15 ${profile.lightBorder} shadow-sm`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${profile.bgColor}`}>
                        <IconComp size={18} />
                      </span>
                      <FiArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-current" />
                    </div>

                    <h3 className={`text-base font-bold ${isDark ? 'text-[#f0f2f5] font-tech' : 'text-[#1D1D1F] font-serif-display text-lg'}`}>
                      {profile.name}
                    </h3>

                    <p className={`text-[11px] mt-0.5 ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/60'}`}>
                      "{profile.subtitle}"
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between">
                    <span className={`text-[11px] font-semibold truncate max-w-[120px] ${isDark ? 'text-violet-300' : 'text-[#2A493C]'}`}>
                      {profile.username}
                    </span>
                    <span className="text-xs font-bold">→</span>
                  </div>
                </motion.a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
