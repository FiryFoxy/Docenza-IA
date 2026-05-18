import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseDetails } from './components/CourseDetails';
import { Association } from './components/Association';
import { Competencies } from './components/Competencies';
import { Resources } from './components/Resources';
import { Glossary } from './components/Glossary';
import { Gallery } from './components/Gallery';
import { motion, useScroll, useSpring } from 'motion/react';
import { BrainCircuit } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[70] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <CourseDetails />
        <Resources />
        <Competencies />
        <Gallery />
        <Association />
        <Glossary />
      </main>

      <footer className="py-16 px-4 border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">
              Docenza<span className="text-blue-600"> IA</span>
            </span>
          </div>
          <p>© 2026 - Creato per scopi educativi. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Fulvio Pavan - <a href="mailto:fulvio.giulio.pavan@icloud.com" className="hover:text-blue-600 transition-colors underline underline-offset-4 font-medium">fulvio.giulio.pavan@icloud.com</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
