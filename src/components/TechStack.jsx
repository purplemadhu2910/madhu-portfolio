import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: '⚙️' },
      { name: 'JavaScript', icon: '🟨' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'Scikit-learn', icon: '🤖' },
      { name: 'Seabordn', icon: '📊' },
    ],
  },
  {
    label: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Jupyter Notebook', icon: '📓' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3">Tech Stack</h2>
        <p className="text-gray-500 dark:text-gray-400">Technologies I work with</p>
      </motion.div>

      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <div key={cat.label}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="text-sm font-semibold uppercase tracking-widest text-violet-500 mb-5"
            >
              {cat.label}
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 + ci * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
