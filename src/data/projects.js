export const projectsData = [
  {
    id: 'lexassist',
    category: 'AI/ML',
    featured: true,
    title: 'LexAssist',
    subtitle: 'AI-Powered Legal Assistant Platform',
    shortDescription: 'An intelligent legal assistant leveraging RAG to answer complex tax and legal queries. Built with FastAPI backend, vector search, and a modern React frontend.',
    description: 'LexAssist is an end-to-end legal intelligence system designed to streamline document search, statutory analysis, and legal query resolution using Retrieval-Augmented Generation (RAG). It enables users to upload complex legal files and ask domain-specific questions with precise citation mapping.',
    highlights: [
      'Retrieval-Augmented Generation (RAG) using ChromaDB vector database',
      'FastAPI async backend providing low-latency document query API',
      'Multi-language response support (English, Hindi, Marathi, etc.)',
      'Document parsing for PDF, DOCX, and text formats with instant summaries'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'ChromaDB', 'RAG'],
    githubUrl: 'https://github.com/purplemadhu2910/lexassist',
    liveUrl: 'https://lexassist-1paa.onrender.com/',
    accent: {
      from: '#7c3aed',
      to: '#6366f1',
      glow: 'rgba(124,58,237,0.25)',
      border: 'rgba(124,58,237,0.3)',
      badge: { bg: 'rgba(124,58,237,0.12)', text: '#a78bfa', border: 'rgba(124,58,237,0.25)' }
    },
    lightAccent: 'rose',
    imageBg: 'bg-rose-50'
  },
  {
    id: 'resume-screener',
    category: 'Web Dev',
    featured: false,
    title: 'Resume Screener',
    subtitle: 'AI-Powered Resume Analyzer',
    shortDescription: 'AI-powered resume vs job description compatibility analyzer using TF-IDF and Cosine Similarity. Features drag-and-drop upload, score ring, and skill matching.',
    description: 'A automated resume screening tool that quantifies candidate-job alignment using Natural Language Processing. Calculates similarity scores, highlights keyword gaps, and recommends targeted improvements.',
    highlights: [
      'TF-IDF Vectorization & Cosine Similarity score calculation',
      'Drag-and-drop PDF resume & job description parser',
      'Matched vs missing skill breakdown reports',
      'Actionable recommendations to optimize resume keywords'
    ],
    technologies: ['React', 'Flask', 'Python', 'TF-IDF', 'Cosine Similarity', 'Tailwind CSS'],
    githubUrl: 'https://github.com/purplemadhu2910/resume-screener',
    liveUrl: null,
    accent: {
      from: '#16a34a',
      to: '#15803d',
      glow: 'rgba(22,163,74,0.2)',
      border: 'rgba(74,222,128,0.25)',
      badge: { bg: 'rgba(74,222,128,0.1)', text: '#4ade80', border: 'rgba(74,222,128,0.22)' }
    },
    lightAccent: 'sage',
    imageBg: 'bg-sage-50'
  },
  {
    id: 'upi-fraud-detection',
    category: 'AI/ML',
    featured: false,
    title: 'UPI Fraud Detection',
    subtitle: 'ML-Based Transaction Classifier',
    shortDescription: 'ML model to detect fraudulent UPI transactions using classification techniques, feature engineering, and data preprocessing on real-world financial datasets.',
    description: 'Real-time financial anomaly classifier built to prevent UPI transaction fraud. Implements class-imbalance techniques, feature scaling, and multi-model evaluation to flag suspicious digital payments.',
    highlights: [
      'Supervised classification models (Random Forest, XGBoost)',
      'Feature engineering for transaction frequency & volume spikes',
      'Interactive Web GUI built with Streamlit for live testing',
      'High precision & recall optimization on imbalanced datasets'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    githubUrl: 'https://github.com/purplemadhu2910/upi_fraud_detection',
    liveUrl: 'https://upifrauddetection.streamlit.app/',
    accent: {
      from: '#0891b2',
      to: '#0d9488',
      glow: 'rgba(8,145,178,0.2)',
      border: 'rgba(34,211,238,0.25)',
      badge: { bg: 'rgba(34,211,238,0.1)', text: '#22d3ee', border: 'rgba(34,211,238,0.2)' }
    },
    lightAccent: 'warm',
    imageBg: 'bg-amber-50'
  },
  {
    id: 'sign-language-recognition',
    category: 'AI/ML',
    featured: false,
    title: 'Sign Language Recognition',
    subtitle: 'Real-Time Gesture Detection System',
    shortDescription: 'Real-time sign language recognition using MediaPipe hand landmarks and a trained ML classifier to identify ASL gestures from webcam input.',
    description: 'Computer Vision application translating American Sign Language (ASL) gestures into text in real time. Tracks 21 3D hand landmark coordinates via MediaPipe for precise gesture prediction.',
    highlights: [
      '21-Point 3D hand landmark tracking using MediaPipe Hands',
      'Custom trained gesture classifier using Scikit-learn',
      'Real-time webcam video stream processing via OpenCV',
      'Database logging for user history and gesture vocabulary'
    ],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'Scikit-learn', 'SQLite'],
    githubUrl: 'https://github.com/purplemadhu2910/gesture-detection',
    liveUrl: null,
    accent: {
      from: '#4f46e5',
      to: '#7c3aed',
      glow: 'rgba(99,102,241,0.2)',
      border: 'rgba(99,102,241,0.28)',
      badge: { bg: 'rgba(99,102,241,0.12)', text: '#818cf8', border: 'rgba(99,102,241,0.25)' }
    },
    lightAccent: 'rose',
    imageBg: 'bg-rose-50'
  },
  {
    id: 'air-math-whiteboard',
    category: 'AI/ML',
    featured: false,
    title: 'Air Math Whiteboard',
    subtitle: 'Gesture-Controlled Math Solver',
    shortDescription: 'Draw math expressions in the air via webcam. A CNN model recognizes handwritten digits and operators to evaluate expressions in real time.',
    description: 'Interactive touchless whiteboard application. Users draw mathematical expressions in the air using finger tracking, which are captured, segmented, and evaluated by a Convolutional Neural Network.',
    highlights: [
      'Touchless finger drawing via computer vision tracking',
      'CNN digit and math operator recognition model',
      'Real-time expression parser and evaluator',
      'Canvas reset and gesture command triggers'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'CNN'],
    githubUrl: 'https://github.com/purplemadhu2910',
    liveUrl: null,
    accent: {
      from: '#db2777',
      to: '#e11d48',
      glow: 'rgba(219,39,119,0.2)',
      border: 'rgba(236,72,153,0.25)',
      badge: { bg: 'rgba(236,72,153,0.1)', text: '#f472b6', border: 'rgba(236,72,153,0.22)' }
    },
    lightAccent: 'sage',
    imageBg: 'bg-sage-50'
  },
  {
    id: 'algorithm-visualizer',
    category: 'Web Dev',
    featured: false,
    title: 'Algorithm Visualizer',
    subtitle: 'Interactive Sorting & Searching',
    shortDescription: 'Interactive web app to visualize sorting and searching algorithms step-by-step with speed controls. Supports Bubble, Quick, Merge Sort, Binary Search and more.',
    description: 'Educational web application demonstrating core algorithmic operations visually. Helps students and developers build intuitive understanding of time & space complexities.',
    highlights: [
      'Interactive visual array animation step-by-step',
      'Sorting algorithms: Bubble, Selection, Insertion, Quick, Merge Sort',
      'Searching algorithms: Linear & Binary Search',
      'Customizable array size, animation speed, and random array generation'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/purplemadhu2910/algorithm_visualizer',
    liveUrl: 'https://purplemadhu2910.github.io/algorithm_visualizer/',
    accent: {
      from: '#059669',
      to: '#0d9488',
      glow: 'rgba(5,150,105,0.2)',
      border: 'rgba(52,211,153,0.25)',
      badge: { bg: 'rgba(52,211,153,0.1)', text: '#34d399', border: 'rgba(52,211,153,0.22)' }
    },
    lightAccent: 'sage',
    imageBg: 'bg-sage-50'
  },
  {
    id: 'rainfall-prediction',
    category: 'AI/ML',
    featured: false,
    title: 'Rainfall Prediction',
    subtitle: 'ML Regression on Weather Data',
    shortDescription: 'Predicted rainfall using multiple ML regression models on historical weather data. Includes EDA, feature selection, model comparison, and visualization.',
    description: 'Meteorological predictive model estimating precipitation levels using historical atmospheric telemetry data (temperature, humidity, wind speed, pressure).',
    highlights: [
      'Exploratory Data Analysis (EDA) on weather telemetry datasets',
      'Model benchmarks: Linear Regression, Random Forest, Decision Trees',
      'Feature importance analysis & correlation heatmaps',
      'Evaluation via RMSE, MAE, and R² score metrics'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/purplemadhu2910/ml_rainfall_prediction',
    liveUrl: null,
    accent: {
      from: '#0284c7',
      to: '#0ea5e9',
      glow: 'rgba(2,132,199,0.2)',
      border: 'rgba(56,189,248,0.25)',
      badge: { bg: 'rgba(56,189,248,0.1)', text: '#38bdf8', border: 'rgba(56,189,248,0.22)' }
    },
    lightAccent: 'warm',
    imageBg: 'bg-amber-50'
  }
];

export const projectCategories = ['All', 'AI/ML', 'Web Dev'];
