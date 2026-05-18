import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Presentation, Code2, Download } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: "Presentazione della Lezione",
      description: "Slides complete della presentazione della lezione in formato PDF.",
      icon: Presentation,
      link: "https://drive.google.com/file/d/1dmjKGJgA94QmcFiZU_L0Ms4dhn5MnIQU/view?usp=share_link",
      type: "pdf",
      color: "bg-orange-50 text-orange-600 border-orange-100 ring-orange-500/20"
    },
    {
      title: "Blockly IDE",
      description: "Ambiente di sviluppo Blockly personalizzato per la nostra attività.",
      icon: Code2,
      link: "https://firyfoxy.github.io/Blockly-IDE/",
      type: "link",
      color: "bg-blue-50 text-blue-600 border-blue-100 ring-blue-500/20"
    },
    {
      title: "Syllabus del Corso",
      description: "Programma dettagliato, obiettivi formativi e argomenti trattati.",
      icon: Download,
      link: "https://drive.google.com/file/d/1vz9Y3IktxlAiKXouXQZ0Mc5vb2VaIjuh/view?usp=share_link",
      type: "pdf",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100 ring-emerald-500/20"
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight text-center md:text-left">
          Risorse Principali
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-default overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl ${item.color} border ring-4 transition-transform group-hover:scale-110`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-500 hover:bg-slate-50 rounded-full transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-blue-600 transition-all active:scale-95"
                  >
                    {item.type === 'pdf' ? 'Visualizza PDF' : 'Apri IDE'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
