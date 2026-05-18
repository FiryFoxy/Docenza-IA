import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/10 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-400/10 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-[30%] h-[30%] bg-sky-400/10 rounded-full blur-[60px]" 
        />

        {/* Interactive Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px'
          }} 
        />
      </div>
 
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-10">
          <Sparkles className="w-4 h-4" />
          <span>Capolavoro 2025/2026</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
          Lezione sulla <br/> <span className="text-blue-600">Intelligenza Artificiale</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Con laboratorio pratico di <span className="text-slate-900">Machine Learning</span>.
        </p>
 
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#course-details"
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-2xl shadow-slate-900/20 hover:bg-blue-600 hover:-translate-y-1.5 transition-all active:scale-95 text-lg"
          >
            Scopri il Corso
          </a>
          <a 
            href="#glossary"
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all text-lg"
          >
            Glossario
          </a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 text-slate-300"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </header>
  );
}
