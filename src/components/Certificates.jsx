import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';

const certificates = [
  { id: 1, title: 'Python Developer', issuer: 'SoloLearn', date: 'Feb 2025', color: 'from-blue-400 to-cyan-400', link: 'https://drive.google.com/open?id=1zM0bFka5l-KeWmHw7YfBbBodOYOGitUJ' },
  { id: 2, title: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild', date: 'Oct 6, 2025', color: 'from-violet-400 to-purple-500', link: 'https://drive.google.com/open?id=1BJqk6PWJAMtQI1oL6M293JW8YgTyFHxB' },
  { id: 3, title: 'SQL and Relational Databases', issuer: 'IBM SkillsBuild', date: 'Oct 24, 2025', color: 'from-blue-500 to-indigo-500', link: 'https://drive.google.com/open?id=15nHOdxvPz7xXLTyLgP-hcJYREE8KMxj0' },
  { id: 4, title: 'MATLAB for AI', issuer: 'IEEE', date: 'Sept 27–28, 2024', color: 'from-orange-400 to-amber-400', link: 'https://drive.google.com/open?id=1DawKnAyW3dIWhzGA-RG5vAU96IkiB44m' },
  { id: 5, title: 'React Bootcamp', issuer: 'LetsUpgrade · NSDC & ITM Edutech', date: 'Coming Soon', color: 'from-cyan-400 to-teal-400', link: null },
  { id: 6, title: 'Foundation Course on Green Skills & AI', issuer: 'Skills4Future', date: 'Coming Soon', color: 'from-green-400 to-emerald-500', link: null },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3">Certificates</h2>
        <p className="text-gray-500 dark:text-gray-400">Credentials & achievements</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setSelected(cert)}
            className="cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-violet-100 dark:hover:shadow-violet-950 transition-all duration-300"
          >
            <div className={`h-28 bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
              <Award size={48} className="text-white opacity-80" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
            >
              <div className={`h-48 bg-gradient-to-br ${selected.color} flex items-center justify-center relative`}>
                <Award size={80} className="text-white opacity-80" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
              <div className="p-8 text-center space-y-2">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{selected.issuer}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{selected.date}</p>
                <div className="pt-4 flex flex-col items-center gap-3">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-semibold">
                    ✓ Verified Certificate
                  </span>
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-full border border-violet-400 text-violet-500 text-sm font-semibold hover:bg-violet-50 dark:hover:bg-violet-950 transition-colors"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
