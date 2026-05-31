import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Languages, Calculator, Monitor, 
  UserCircle, Building2, Lightbulb, Palette, 
  GraduationCap
} from 'lucide-react';

export function Competencies() {
  const competencies = [
    {
      title: "Competenza alfabetica funzionale",
      badge: "/assets/badges/Competenza alfabetica funzionale.png",
      description: "Capacità di individuare, comprendere, esprimere, creare e interpretare concetti, sentimenti, fatti e opinioni, in forma sia orale sia scritta."
    },
    {
      title: "Competenza multilinguistica",
      badge: "/assets/badges/Competenza multilinguistica.png",
      description: "Capacità di utilizzare diverse lingue in modo appropriato ed efficace allo scopo di comunicare in una gamma appropriata di contesti."
    },
    {
      title: "Competenza STEM",
      badge: "/assets/badges/Competenza matematica e competenza in scienze, tecnologie e ingegneria.png",
      description: "Capacità di risolvere problemi quotidiani usando osservazione e sperimentazione per trarre conclusioni basate su fatti empirici."
    },
    {
      title: "Competenza digitale",
      badge: "/assets/badges/Competenza digitale.png",
      description: "Utilizzo delle tecnologie digitali con spirito critico e responsabile per apprendere, lavorare e partecipare alla società."
    },
    {
      title: "Personale e Sociale",
      badge: "/assets/badges/Competenza personale, sociale e capacità di imparare a imparare.png",
      description: "Capacità di riflettere su sé stessi, gestire il tempo e le informazioni, lavorare con gli altri in maniera costruttiva e resiliente."
    },
//    {
//      title: "Materia di cittadinanza",
//      badge: "/assets/badges/Competenza in materia di cittadinanza.png",
//      description: "Agire da cittadini responsabili e partecipare pienamente alla vita civica e sociale, comprendendo le strutture globali e la sostenibilità."
//    },
    {
      title: "Competenza imprenditoriale",
      badge: "/assets/badges/Competenza imprenditoriale.png",
      description: "Capacità di agire sulla base di idee e opportunità e di trasformarle in valori per gli altri, fondata sulla creatività e risoluzione di problemi."
    },
//    {
//      title: "Espressione culturale",
//      badge: "/assets/badges/Competenza in materia di consapevolezza ed espressione culturali.png",
//      description: "Comprensione e rispetto di come le idee e i significati vengono espressi creativamente e comunicati in diverse culture."
//    }
  ];

  return (
    <section id="capolavoro" className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <div className="w-16 h-1 w-20 bg-blue-600 rounded-full mb-8" />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 text-sm font-black border border-slate-200 mb-6 shadow-sm">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            UNICA - CAPOLAVORO DELLO STUDENTE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Obiettivi e Competenze Raggiunte
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Il percorso formativo è stato strutturato per favorire lo sviluppo delle competenze chiave per l'apprendimento permanente, certificate nel profilo e-Portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-[1.25rem] bg-white border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm overflow-hidden p-2">
                <img src={c.badge} alt={c.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-black text-slate-900 mb-4 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {c.title}
              </h4>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {c.description}
              </p>
              <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
