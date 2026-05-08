import { motion } from 'framer-motion';

const filters = ['All', 'AI & ML', 'Programming', 'Web Development', 'Competitive Programming'];

export default function CertificateFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none"
        >
          {active === f && (
            <motion.span
              layoutId="cert-filter-pill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active === f ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}>
            {f}
          </span>
        </button>
      ))}
    </div>
  );
}
