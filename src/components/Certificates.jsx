import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateCard from './CertificateCard';
import CertificateFilter from './CertificateFilter';

const certificates = [
  {
    id: 1,
    title: 'Artificial Intelligence Course',
    description: 'Comprehensive AI course covering core concepts, algorithms, and real-world applications.',
    issuer: 'Infosys Springboard',
    date: 'April 29, 2026',
    domain: 'AI & ML',
    link: 'https://drive.google.com/file/d/1SAOpgGTBUf1cwShS0Xq0mXWG1yjoilGh/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Deep Learning',
    description: 'Neural networks, CNNs, RNNs, and deep learning architectures for intelligent systems.',
    issuer: 'Infosys Springboard',
    date: 'April 2026',
    domain: 'AI & ML',
    link: 'https://drive.google.com/file/d/1NS9COI6AeETcdR-bkG8f4A8rs3uoSiKG/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'Natural Language Processing (NLP)',
    description: 'Text processing, sentiment analysis, transformers, and language model fundamentals.',
    issuer: 'Infosys Springboard',
    date: 'April 2026',
    domain: 'AI & ML',
    link: 'https://drive.google.com/file/d/1odwaCvHBTPmY7qKHVTiLopZznooBJ-Ev/view?usp=drive_link',
  },
  {
    id: 4,
    title: 'MATLAB Basics for Artificial Intelligence',
    description: 'Hands-on MATLAB programming for AI applications, signal processing, and data analysis.',
    issuer: 'IEEE Gujarat Section',
    date: 'Sept 2024',
    domain: 'AI & ML',
    link: 'https://drive.google.com/open?id=1DawKnAyW3dIWhzGA-RG5vAU96IkiB44m',
  },
  {
    id: 5,
    title: 'Python Programming',
    description: 'Core Python programming including OOP, data structures, and scripting fundamentals.',
    issuer: 'Infosys Springboard',
    date: 'April 2026',
    domain: 'Programming',
    link: 'https://drive.google.com/file/d/1YANREvWVI0u0olkAgogMiJINCKZy6jwE/view?usp=drive_link',
  },
  {
    id: 6,
    title: 'Python Developer Certification',
    description: 'Industry-recognized Python developer credential validating practical coding proficiency.',
    issuer: 'SoloLearn',
    date: 'Feb 2025',
    domain: 'Programming',
    link: 'https://drive.google.com/open?id=1zM0bFka5l-KeWmHw7YfBbBodOYOGitUJ',
  },
  {
    id: 7,
    title: 'Introduction to C Programming',
    description: 'Foundational C programming covering syntax, memory management, and problem-solving.',
    issuer: 'Infosys Springboard',
    date: null,
    domain: 'Programming',
    link: '#',
  },
  {
    id: 8,
    title: 'SQL and Relational Databases',
    description: 'Relational database design, SQL queries, joins, and data management best practices.',
    issuer: 'IBM SkillsBuild',
    date: 'Oct 2025',
    domain: 'Programming',
    link: 'https://drive.google.com/open?id=15nHOdxvPz7xXLTyLgP-hcJYREE8KMxj0',
  },
  {
    id: 9,
    title: 'React JS Bootcamp',
    description: 'Intensive bootcamp on React fundamentals, hooks, state management, and modern UI development.',
    issuer: 'Bootcamp',
    date: 'Sept 4–6, 2025',
    domain: 'Web Development',
    link: '#',
  },
  {
    id: 10,
    title: 'Dynamic Programming Camp',
    description: 'Advanced competitive programming covering Matrix Exponentiation, SQRT Decomposition, and complex problem-solving strategies.',
    issuer: 'AlgoUniversity',
    date: 'April 2026',
    domain: 'Competitive Programming',
    link: 'https://drive.google.com/file/d/15bazG0qrTdnRLzlcLGD2E7QIQmu_BL2j/view?usp=sharing',
  },
];

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? certificates
    : certificates.filter((c) => c.domain === activeFilter);

  return (
    <section id="certificates" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-3">Certificates</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Verified credentials across AI, programming, web development, and competitive programming
          from globally recognized platforms.
        </p>
      </motion.div>

      <CertificateFilter active={activeFilter} onChange={setActiveFilter} />

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <CertificateCard cert={cert} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
