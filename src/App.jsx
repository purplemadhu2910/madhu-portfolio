import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
