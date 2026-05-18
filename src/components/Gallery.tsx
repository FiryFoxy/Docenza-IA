import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: '/assets/photos/apertura formazione con inno europeo e italiano.png', caption: 'Inno Europeo e Italiano' },
    { url: '/assets/photos/Brainstorming con idee di IA del futuro degli studenti.png', caption: 'Idee IA del Futuro' },
    { url: '/assets/photos/Fulvio Pavan docente.png', caption: 'Fulvio Pavan docente' },
    { url: '/assets/photos/docente e studenti arc. castelli.png', caption: 'Docente e studenti' },
    { url: '/assets/photos/piano orario del corso.png', caption: 'Piano Orario' },
    { url: '/assets/photos/Studenti del corso IA e partecipanti al progetto ESG.png', caption: 'Studenti Partecipanti' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-md border border-white/20">
            <Camera className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-center">Momenti del Corso</h2>
          <p className="text-slate-400 mt-2 text-center max-w-xl">I ricordi e le attività svolte durante il percorso formativo.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(img.url)}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-zoom-in"
            >
              <img 
                src={img.url} 
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ImageIcon className="w-4 h-4" />
                  <span>{img.caption}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm italic">
              * Tutte le immagini sono soggette alla policy sulla privacy.
            </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-colors z-[60]"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
