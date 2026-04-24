import { motion } from 'framer-motion';
import { Mail, Link2, GitBranch, Code2, BookOpen, LayoutGrid } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    icon: Link2,
    href: 'https://www.linkedin.com/in/madhushree-m-1544a42b5/',
    color: 'hover:text-blue-500 hover:border-blue-400',
    desc: 'Connect professionally',
  },
  {
    label: 'GitHub',
    icon: GitBranch,
    href: 'https://github.com/purplemadhu2910',
    color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400',
    desc: 'See my code',
  },
  {
    label: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/u/purplemadhu2910/',
    color: 'hover:text-orange-500 hover:border-orange-400',
    desc: 'Problem solving',
  },
  {
    label: 'HackerRank',
    icon: BookOpen,
    href: 'https://www.hackerrank.com/madhu_mandokar29',
    color: 'hover:text-green-500 hover:border-green-400',
    desc: 'Coding challenges',
  },
  {
    label: 'Codolio',
    icon: LayoutGrid,
    href: 'https://codolio.com/profile/madhu2910',
    color: 'hover:text-violet-500 hover:border-violet-400',
    desc: 'Dev portfolio',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-10">
        {/* Email CTA */}
        <motion.a
          href="mailto:madhu.mandokar29@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:shadow-violet-300 dark:hover:shadow-violet-900 transition-all duration-300"
        >
          <Mail size={22} />
          madhu.mandokar29@gmail.com
        </motion.a>

        {/* Social Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-200 ${s.color} group`}
            >
              <s.icon size={28} className="transition-colors duration-200" />
              <span className="font-semibold text-sm">{s.label}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{s.desc}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-sm text-gray-400 dark:text-gray-600 mt-16"
      >
        Designed & Built by{' '}
        <span className="text-violet-500 font-semibold">Madhushree Mandokar</span> · {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}
