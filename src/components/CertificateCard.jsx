import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const domainStyles = {
  'AI & ML': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  'Programming': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Web Development': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  'Competitive Programming': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
};

const domainGradients = {
  'AI & ML': 'from-violet-500 to-purple-600',
  'Programming': 'from-blue-500 to-indigo-500',
  'Web Development': 'from-cyan-500 to-teal-500',
  'Competitive Programming': 'from-pink-500 to-rose-500',
};

export default function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-violet-100/60 dark:hover:shadow-violet-950/60 transition-all duration-300"
    >
      {/* Top gradient banner */}
      <div className={`h-24 bg-gradient-to-br ${domainGradients[cert.domain]} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent)]" />
        <Award size={40} className="text-white/90 drop-shadow" />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badge */}
        <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${domainStyles[cert.domain]}`}>
          {cert.domain}
        </span>

        {/* Title & description */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug mb-1">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-1 border-t border-gray-100 dark:border-gray-800">
          <span className="font-medium text-gray-600 dark:text-gray-300">{cert.issuer}</span>
          {cert.date && <span>{cert.date}</span>}
        </div>

        {/* CTA */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-indigo-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
        >
          View Certificate <ExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  );
}
