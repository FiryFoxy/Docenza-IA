import React from 'react';
import { ExternalLink, ShieldCheck, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Association() {
  return (
    <section id="association" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-100 rounded-[2.5rem] -z-10" />
              <div className="rounded-[2.5rem] shadow-2xl shadow-blue-500/10 border border-slate-100 bg-white p-12 aspect-square flex items-center justify-center">
                <img 
                  src="https://www.gasparini-esg-erasmus.it/wp-content/uploads/2026/01/gasparini-logo-transparent.png" 
                  alt="Logo Gasparini" 
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <p className="font-black text-blue-600 text-sm">PROGETTO ESG</p>
                <p className="text-slate-500 text-xs">Erasmus+ 2026</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                L'associazione
              </div>
            </div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
              <span className="text-blue-600">Innocenzo Gasparini APS</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Associazione Innocenzo Gasparini APS</h4>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Promuove la crescita culturale e sociale dei giovani attraverso progetti di mobilità internazionale e formazione d'eccellenza, supportando attivamente il percorso educativo degli studenti.
                  </p>
                  <a 
                    href="https://www.innocenzogaspariniaps.it/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:underline group/link"
                  >
                    Visita il sito istituzionale 
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Globe2 className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Progetto ESG Erasmus+</h4>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Un'iniziativa europea dedicata allo sviluppo di competenze chiave (Environmental, Social, Governance) che offre agli studenti esperienze di stage all'estero in contesti professionali dinamici.
                  </p>
                  <a 
                    href="https://www.gasparini-esg-erasmus.it/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-600 font-bold hover:underline group/link"
                  >
                    Scopri il progetto ESG 
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
