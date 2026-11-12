import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiChevronLeft,
  HiChevronRight,
  HiPlay,
  HiPause,
} from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';
import { timelineData } from '../data/timeline';

const iconMap = {
  education: HiOutlineAcademicCap,
  project: HiOutlineCode,
  achievement: HiOutlineStar,
};

const colorMapDark = {
  violet: {
    bar: 'from-violet-500 to-purple-500',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    dot: 'bg-violet-400',
    ring: 'ring-violet-500/30',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    glow: 'hover:shadow-violet-500/15',
    activeNode: 'bg-violet-500 ring-4 ring-violet-500/35 text-white',
    iconBg: 'bg-violet-500/15 border-violet-500/25 text-violet-300',
  },
  cyan: {
    bar: 'from-cyan-500 to-teal-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    dot: 'bg-cyan-400',
    ring: 'ring-cyan-500/30',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    glow: 'hover:shadow-cyan-500/15',
    activeNode: 'bg-cyan-500 ring-4 ring-cyan-500/35 text-white',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25 text-cyan-300',
  },
  indigo: {
    bar: 'from-indigo-500 to-blue-500',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    dot: 'bg-indigo-400',
    ring: 'ring-indigo-500/30',
    tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    glow: 'hover:shadow-indigo-500/15',
    activeNode: 'bg-indigo-500 ring-4 ring-indigo-500/35 text-white',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-300',
  },
  pink: {
    bar: 'from-pink-500 to-rose-500',
    badge: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    dot: 'bg-pink-400',
    ring: 'ring-pink-500/30',
    tag: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    glow: 'hover:shadow-pink-500/15',
    activeNode: 'bg-pink-500 ring-4 ring-pink-500/35 text-white',
    iconBg: 'bg-pink-500/15 border-pink-500/25 text-pink-300',
  },
  emerald: {
    bar: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-500/30',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    glow: 'hover:shadow-emerald-500/15',
    activeNode: 'bg-emerald-500 ring-4 ring-emerald-500/35 text-white',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-300',
  },
};

const colorMapLight = {
  violet: {
    bar: 'from-[#2A493C] to-emerald-600',
    badge: 'bg-[#D9E6DF] text-[#2A493C] border-[#2A493C]/30',
    dot: 'bg-[#2A493C]',
    ring: 'ring-[#2A493C]/20',
    tag: 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15',
    glow: 'hover:shadow-md',
    activeNode: 'bg-[#2A493C] ring-4 ring-[#2A493C]/25 text-white',
    iconBg: 'bg-[#D9E6DF] border-[#2A493C]/30 text-[#2A493C]',
  },
  cyan: {
    bar: 'from-teal-600 to-cyan-600',
    badge: 'bg-teal-50 text-teal-800 border-teal-200',
    dot: 'bg-teal-600',
    ring: 'ring-teal-600/20',
    tag: 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15',
    glow: 'hover:shadow-md',
    activeNode: 'bg-teal-700 ring-4 ring-teal-700/25 text-white',
    iconBg: 'bg-teal-50 border-teal-300 text-teal-800',
  },
  indigo: {
    bar: 'from-indigo-600 to-blue-600',
    badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    dot: 'bg-indigo-600',
    ring: 'ring-indigo-600/20',
    tag: 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15',
    glow: 'hover:shadow-md',
    activeNode: 'bg-indigo-700 ring-4 ring-indigo-700/25 text-white',
    iconBg: 'bg-indigo-50 border-indigo-300 text-indigo-800',
  },
  pink: {
    bar: 'from-rose-600 to-pink-600',
    badge: 'bg-rose-50 text-rose-800 border-rose-200',
    dot: 'bg-rose-600',
    ring: 'ring-rose-600/20',
    tag: 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15',
    glow: 'hover:shadow-md',
    activeNode: 'bg-rose-700 ring-4 ring-rose-700/25 text-white',
    iconBg: 'bg-rose-50 border-rose-300 text-rose-800',
  },
  emerald: {
    bar: 'from-emerald-600 to-teal-600',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dot: 'bg-emerald-600',
    ring: 'ring-emerald-600/20',
    tag: 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15',
    glow: 'hover:shadow-md',
    activeNode: 'bg-emerald-700 ring-4 ring-emerald-700/25 text-white',
    iconBg: 'bg-emerald-50 border-emerald-300 text-emerald-800',
  },
};

export default function Journey() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const colorMaps = isDark ? colorMapDark : colorMapLight;

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const targetCard = container.children[index];
    if (targetCard) {
      const containerLeft = container.getBoundingClientRect().left;
      const targetLeft = targetCard.getBoundingClientRect().left;
      const offset = targetLeft - containerLeft;
      container.scrollBy({ left: offset, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? timelineData.length - 1 : currentIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % timelineData.length;
    scrollToIndex(nextIdx);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerLeft = container.getBoundingClientRect().left;
    const children = Array.from(container.children);
    if (!children.length) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    children.forEach((child, idx) => {
      const diff = Math.abs(child.getBoundingClientRect().left - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  // Auto-slide effect (slides one card after the other)
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIdx = (prev + 1) % timelineData.length;
        if (scrollRef.current && scrollRef.current.children[nextIdx]) {
          const container = scrollRef.current;
          const target = container.children[nextIdx];
          const offset = target.getBoundingClientRect().left - container.getBoundingClientRect().left;
          container.scrollBy({ left: offset, behavior: 'smooth' });
        }
        return nextIdx;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered]);

  return (
    <section
      id="journey"
      className={`relative ${
        isDark ? 'section-padding bg-[#060912]' : 'py-24 bg-white/70 border-b border-[#1D1D1F]/10'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className={isDark ? 'max-w-7xl mx-auto px-4 sm:px-6' : 'max-w-7xl mx-auto px-4 sm:px-6'}>
        <AnimatedSection className="text-center mb-10">
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${isDark ? 'text-violet-400' : 'text-[#2A493C]'}`}>
            My Path
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#F3F4F6] font-tech' : 'text-[#1D1D1F] font-serif-display'}`}>
            Academic & Technical Journey
          </h2>
          {isDark ? (
            <div className="section-divider"><span /></div>
          ) : (
            <div className="w-16 h-1 bg-[#2A493C] mx-auto rounded-full mt-2" />
          )}
          <p className={`text-sm max-w-xl mx-auto mt-4 leading-relaxed ${isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/70'}`}>
            A chronological timeline of milestones, practical experience, technical certifications, and academic progress.
          </p>
        </AnimatedSection>

        {/* Horizontal Timeline Progress Track (Clickable nodes) */}
        <div className="hidden md:block mb-10">
          <div className="relative max-w-4xl mx-auto px-4">
            {/* Base line */}
            <div
              className={`absolute top-4 left-8 right-8 h-0.5 ${
                isDark ? 'bg-white/10' : 'bg-[#2A493C]/20'
              }`}
            />
            {/* Active progress bar line */}
            <div
              className={`absolute top-4 left-8 h-0.5 transition-all duration-500 ease-out ${
                isDark ? 'bg-gradient-to-r from-violet-500 via-cyan-500 to-indigo-500' : 'bg-[#2A493C]'
              }`}
              style={{
                width: `${(currentIndex / (timelineData.length - 1)) * 100 * 0.92}%`,
              }}
            />

            {/* Nodes */}
            <div className="relative flex justify-between items-start">
              {timelineData.map((item, idx) => {
                const isActive = currentIndex === idx;
                const isPast = currentIndex >= idx;
                const palette = colorMaps[item.color] || colorMaps.violet;

                return (
                  <button
                    key={item.title}
                    onClick={() => scrollToIndex(idx)}
                    className="group flex flex-col items-center focus:outline-none transition-transform hover:scale-105"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? palette.activeNode
                          : isPast
                          ? isDark
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40'
                            : 'bg-[#D9E6DF] text-[#2A493C] border border-[#2A493C]/40'
                          : isDark
                          ? 'bg-[#0f172a] text-[#6B7280] border border-white/10 hover:border-white/30'
                          : 'bg-white text-[#1D1D1F]/50 border border-[#1D1D1F]/20'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`text-xs font-bold mt-2 transition-colors ${
                        isActive
                          ? isDark ? 'text-violet-300' : 'text-[#2A493C]'
                          : isDark ? 'text-[#6B7280] group-hover:text-white' : 'text-[#1D1D1F]/60 group-hover:text-[#1D1D1F]'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`text-[11px] max-w-[100px] text-center truncate mt-0.5 ${
                        isActive
                          ? isDark ? 'text-[#E5E7EB] font-medium' : 'text-[#1D1D1F] font-semibold'
                          : isDark ? 'text-[#6B7280]' : 'text-[#1D1D1F]/50'
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Header Controls */}
        <div className="flex items-center justify-between mb-4 px-2">
          {/* Milestone Step Counter */}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${
                isDark
                  ? 'bg-white/5 border-white/10 text-violet-300'
                  : 'bg-[#D9E6DF]/60 border-[#2A493C]/20 text-[#2A493C]'
              }`}
            >
              Milestone {currentIndex + 1} of {timelineData.length}
            </span>

            {/* Auto-play toggle button */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              title={isAutoPlay ? 'Pause sliding' : 'Auto-slide'}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                isAutoPlay
                  ? isDark
                    ? 'bg-violet-500/10 border-violet-500/25 text-violet-300 hover:bg-violet-500/20'
                    : 'bg-[#2A493C]/10 border-[#2A493C]/20 text-[#2A493C]'
                  : isDark
                  ? 'bg-white/5 border-white/10 text-[#6B7280] hover:text-white'
                  : 'bg-white border-[#1D1D1F]/15 text-[#1D1D1F]/60'
              }`}
            >
              {isAutoPlay ? <HiPause size={13} /> : <HiPlay size={13} />}
              <span>{isAutoPlay ? 'Auto-sliding' : 'Paused'}</span>
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous milestone"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-white hover:bg-violet-600/30 hover:border-violet-500/40 shadow-sm active:scale-95'
                  : 'bg-white border border-[#1D1D1F]/15 text-[#1D1D1F] hover:bg-[#2A493C] hover:text-white shadow-sm active:scale-95'
              }`}
            >
              <HiChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next milestone"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-white hover:bg-violet-600/30 hover:border-violet-500/40 shadow-sm active:scale-95'
                  : 'bg-white border border-[#1D1D1F]/15 text-[#1D1D1F] hover:bg-[#2A493C] hover:text-white shadow-sm active:scale-95'
              }`}
            >
              <HiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Cards Row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {timelineData.map((item, idx) => {
            const IconComp = iconMap[item.type] || HiOutlineLightBulb;
            const palette = colorMaps[item.color] || colorMaps.violet;
            const isActive = currentIndex === idx;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`w-[86vw] sm:w-[360px] md:w-[410px] shrink-0 snap-start flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? isDark
                      ? 'glass border-violet-500/40 shadow-xl shadow-violet-500/10'
                      : 'bg-white border-[#2A493C]/50 shadow-lg ring-1 ring-[#2A493C]/20'
                    : isDark
                    ? 'glass border-white/8 hover:border-white/20'
                    : 'bg-white border-[#1D1D1F]/15 hover:border-[#2A493C]/30 shadow-sm'
                } ${palette.glow}`}
              >
                {/* Top colored accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${palette.bar} -mx-6 -mt-6 mb-5`} />

                <div className="space-y-4">
                  {/* Card Header: Step & Year + Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-[#9CA3AF]'
                            : 'bg-[#1D1D1F]/5 border-[#1D1D1F]/10 text-[#1D1D1F]/70'
                        }`}
                      >
                        Step 0{idx + 1}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full border ${palette.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${palette.dot}`} />
                        {item.year}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${palette.iconBg}`}
                    >
                      <IconComp size={20} />
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3
                      className={`font-bold text-lg leading-snug ${
                        isDark ? 'text-[#F3F4F6] font-tech' : 'text-[#1D1D1F] font-serif-display text-xl'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 ${isDark ? 'text-violet-400' : 'text-[#2A493C]'}`}>
                      {item.org}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-[#8b95a5]' : 'text-[#1D1D1F]/80'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Tags at bottom */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                        isDark
                          ? palette.tag
                          : 'bg-[#FAF8F5] text-[#1D1D1F] border-[#1D1D1F]/15'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {timelineData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? isDark
                    ? 'w-6 bg-violet-400'
                    : 'w-6 bg-[#2A493C]'
                  : isDark
                  ? 'w-2 bg-white/20'
                  : 'w-2 bg-[#1D1D1F]/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
