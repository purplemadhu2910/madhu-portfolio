import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  { id: 1, title: 'Artificial Intelligence', issuer: 'Infosys Springboard', date: 'April 2026', color: 'from-violet-500 to-purple-600', link: 'https://drive.google.com/file/d/1SAOpgGTBUf1cwShS0Xq0mXWG1yjoilGh/view?usp=drive_link' },
  { id: 2, title: 'Deep Learning', issuer: 'Infosys Springboard', date: 'April 2026', color: 'from-indigo-500 to-violet-500', link: 'https://drive.google.com/file/d/1NS9COI6AeETcdR-bkG8f4A8rs3uoSiKG/view?usp=drive_link' },
  { id: 3, title: 'Natural Language Processing (NLP)', issuer: 'Infosys Springboard', date: ' April2026', color: 'from-purple-500 to-pink-500', link: 'https://drive.google.com/file/d/1odwaCvHBTPmY7qKHVTiLopZznooBJ-Ev/view?usp=drive_link' },
  { id: 4, title: 'Python Programming', issuer: 'Infosys Springboard', date: 'April 2026', color: 'from-blue-500 to-indigo-500', link: 'https://drive.google.com/file/d/1YANREvWVI0u0olkAgogMiJINCKZy6jwE/view?usp=drive_link' },
  { id: 5, title: 'Python Developer', issuer: 'SoloLearn', date: 'Feb 2025', color: 'from-blue-400 to-cyan-400', link: 'https://drive.google.com/open?id=1zM0bFka5l-KeWmHw7YfBbBodOYOGitUJ' },
  { id: 6, title: 'SQL and Relational Databases', issuer: 'IBM SkillsBuild', date: 'Oct 2025', color: 'from-blue-500 to-teal-500', link: 'https://drive.google.com/open?id=15nHOdxvPz7xXLTyLgP-hcJYREE8KMxj0' },
  { id: 7, title: 'MATLAB for AI', issuer: 'IEEE', date: 'Sept 2024', color: 'from-orange-400 to-amber-400', link: 'https://drive.google.com/open?id=1DawKnAyW3dIWhzGA-RG5vAU96IkiB44m' },
];

export default function Certificates() {
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
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Focused on AI, Deep Learning, and NLP through structured programs at Infosys Springboard,
          complemented by hands-on certifications in Python and databases.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-violet-100 dark:hover:shadow-violet-950 transition-all duration-300"
          >
            <div className={`h-28 bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
              <Award size={48} className="text-white opacity-80" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                <ExternalLink size={14} className="text-gray-400 mt-1 shrink-0" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{cert.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
