import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiPhone } from 'react-icons/fi';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Languages', id: 'languages' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/purplemadhu2910', label: 'GitHub', hover: 'hover:text-white hover:border-white/25' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/madhushree-m-1544a42b5/', label: 'LinkedIn', hover: 'hover:text-blue-400 hover:border-blue-500/30' },
  { icon: FiMail, href: 'mailto:madhu.mandokar29@gmail.com', label: 'Email', hover: 'hover:text-violet-400 hover:border-violet-500/30' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Aurora top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-violet-600/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk' }}>M</span>
              </div>
              <span className="font-bold text-[#F3F4F6] text-base" style={{ fontFamily: 'Space Grotesk' }}>Madhushree Mandokar</span>
            </div>
            <p className="text-xs text-[#6B7280] max-w-[220px] text-center md:text-left leading-relaxed">
              Building AI-powered products with clean user experiences.
            </p>
            {/* Contact quick links */}
            <div className="flex flex-col gap-1.5">
              <a href="mailto:madhu.mandokar29@gmail.com" className="flex items-center gap-2 text-xs transition-colors duration-200" style={{ color: '#4b5563' }}
                onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                <FiMail size={11} /> madhu.mandokar29@gmail.com
              </a>
              <a href="tel:+919870099043" className="flex items-center gap-2 text-xs transition-colors duration-200" style={{ color: '#4b5563' }}
                onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
                onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                <FiPhone size={11} /> +91 98700 99043
              </a>
            </div>
            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-400/80">Open to work</span>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-xs text-[#6B7280] hover:text-[#E5E7EB] transition-colors duration-200 hover:underline underline-offset-4 decoration-violet-500/40"
              >
                {l.label}
              </button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-xl glass-light border border-white/8 flex items-center justify-center text-[#6B7280] transition-all duration-200 ${s.hover}`}
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4B5563]">
            © {new Date().getFullYear()} Madhushree Mandokar. All rights reserved.
          </p>
          <p className="text-xs text-[#4B5563] flex items-center gap-1.5">
            Crafted with <FiHeart size={11} className="text-pink-500 fill-pink-500" /> using
            <span className="text-gradient font-semibold">React + Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
