import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'AI/ML',
    title: 'UPI Fraud Detection System',
    description: 'Built a machine learning model to detect fraudulent UPI transactions using classification techniques and data preprocessing.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/purplemadhu2910/upi_fraud_detection',
    demo: 'https://upifrauddetection.streamlit.app/',
  },
  {
    category: 'AI/ML',
    title: 'ML Rainfall Prediction',
    description: 'Predicted rainfall using machine learning regression models trained on historical weather data.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/purplemadhu2910/ml_rainfall_prediction',
    demo: null,
  },
  {
    category: 'AI/ML',
    title: 'California Housing Dataset Analysis',
    description: 'Performed exploratory data analysis and built predictive models on the California housing dataset.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/purplemadhu2910/california_housing_dataset',
    demo: null,
  },
  {
    category: 'Web Development',
    title: 'Algorithm Visualizer',
    description: 'An interactive web app to visualize sorting and searching algorithms step-by-step for educational purposes.',
    tech: ['React.js', 'JavaScript'],
    github: 'https://github.com/purplemadhu2910/algorithm_visualizer',
    demo: 'https://purplemadhu2910.github.io/algorithm_visualizer/',
  },
  {
    category: 'Others',
    title: 'Calculator App',
    description: 'A clean, functional calculator with keyboard support.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/thecalculator',
    demo: 'https://purplemadhu2910.github.io/thecalculator/',
  },
  {
    category: 'Others',
    title: 'Stopwatch App',
    description: 'A precise stopwatch with start, stop, and reset functionality.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/thestopwatch',
    demo: 'https://purplemadhu2910.github.io/thestopwatch/',
  },
  {
    category: 'Others',
    title: 'Todo List App',
    description: 'A simple and clean todo list app to manage daily tasks.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/todo-list',
    demo: 'https://purplemadhu2910.github.io/todo-list/',
  },
  {
    category: 'Others',
    title: 'Guess the Game',
    description: 'A fun number guessing game with hints and score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/guesstheGame',
    demo: 'https://purplemadhu2910.github.io/guesstheGame/',
  },
  {
    category: 'Others',
    title: 'Rock Paper Scissors',
    description: 'Classic Rock Paper Scissors game against the computer with score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/rock_paper_scissor_game',
    demo: null,
  },
  {
    category: 'Others',
    title: 'Even and Odd Checker',
    description: 'A simple utility app to check whether a number is even or odd.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purplemadhu2910/evenandodd',
    demo: 'https://purplemadhu2910.github.io/evenandodd/',
  },
];

const tabs = ['All', 'AI/ML', 'Web Development', 'Others'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-3">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400">Things I've built</p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === tab
                ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md'
                : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:text-violet-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-violet-100 dark:hover:shadow-violet-950 transition-shadow duration-300 flex flex-col gap-4"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-500 bg-violet-50 dark:bg-violet-950 px-2 py-1 rounded-full">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-500 transition-colors">
                    <GitBranch size={15} /> GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed">
                    <GitBranch size={15} /> GitHub
                  </span>
                )}
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-500 transition-colors">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed">
                    <ExternalLink size={15} /> Live Demo
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
