import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, BrainCircuit, Rocket, Globe, Shield } from 'lucide-react';

export function CourseDetails() {
  const features = [
    {
      icon: Globe,
      title: "Contesto Internazionale",
      description: "Parte del progetto ESG Erasmus+ promosso da Innocenzo Gasparini APS per la mobilità studentesca."
    },
    {
      icon: Users,
      title: "25 Studenti",
      description: "Un gruppo eterogeneo proveniente da licei scientifici, linguistici e istituti alberghieri."
    },
    {
      icon: BrainCircuit,
      title: "Metodo Blockly",
      description: "Utilizzo di Blockly IDE, sviluppato dal docente per rendere il Machine Learning accessibile visivamente."
    },
    {
      icon: Shield,
      title: "Etica e Critica",
      description: "Riflessione profonda su bias, trasparenza e impatto sociale delle tecnologie emergenti."
    }
  ];

  return (
    <section id="course-details" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
              <GraduationCap className="w-4 h-4" />
              Report Attività Formativa
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
              Più di una semplice lezione: un percorso interdisciplinare
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Svolto presso la Scuola Sacra Famiglia di Castelletto di Brenzone, il corso intensivo di 7 ore ha preparato gli studenti per lo stage all'estero (Cork, Malaga, Francoforte). Un approccio che unisce teoria, discussione etica e laboratorio pratico.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-slate-100"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-600" />
                Risultati Formativi
              </h3>
              <ul className="space-y-4">
                {[
                  "Acquisizione basi di Neural Networks e ML",
                  "Comprensione delle applicazioni quotidiane dell'IA",
                  "Consapevolezza critica su rischi e opportunità",
                  "Miglioramento capacità di problem solving e collaborazione",
                  "Esperienza pratica di training modelli con Blockly"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                  <img src="/assets/photos/Fulvio Pavan docente.png" alt="Docente" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Fulvio Pavan</p>
                  <p className="text-slate-500 text-xs tracking-wide">Docente del Corso / Sviluppatore Blockly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
