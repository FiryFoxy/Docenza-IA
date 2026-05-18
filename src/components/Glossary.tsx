import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Term {
  id: string;
  word: string;
  definition: string;
}

const INITIAL_TERMS: Term[] = [
  { id: '1', word: 'Accuracy (Accuratezza)', definition: 'Percentuale di previsioni corrette fatte dal modello. Se il modello riconosce correttamente 90 numeri su 100, ha un’accuracy del 90%. È la metrica principale per valutare quanto è bravo il nostro modello.' },
  { id: '2', word: 'AGI (Artificial General Intelligence)', definition: 'Intelligenza Artificiale Generale - un’IA ipotetica del futuro che potrebbe fare qualsiasi compito intellettuale come un essere umano. Oggi non esiste ancora.' },
  { id: '3', word: 'Algoritmo', definition: 'Una sequenza di istruzioni precise che il computer segue per risolvere un problema, come una ricetta di cucina ma per i computer.' },
  { id: '4', word: 'Allucinazione', definition: 'Quando un’IA genera informazioni false o inventate presentandole come vere. Ad esempio, ChatGPT che inventa citazioni o fatti storici inesistenti.' },
  { id: '5', word: 'Analisi', definition: 'Il processo di esaminare i dati per trovare informazioni utili, pattern o relazioni. Come guardare i voti di tutti gli studenti per capire quali materie sono più difficili.' },
  { id: '6', word: 'Apprendimento', definition: 'Il processo con cui un modello di IA migliora le sue prestazioni studiando esempi. Simile a come uno studente impara studiando molti esercizi.' },
  { id: '7', word: 'Architettura', definition: 'La struttura e l’organizzazione di una rete neurale: quanti livelli ha, quanti neuroni per livello, come sono connessi. Come il progetto di un edificio.' },
  { id: '8', word: 'Bias (Pregiudizio)', definition: 'Errore sistematico in un modello di IA che favorisce certi risultati rispetto ad altri, spesso riflettendo pregiudizi presenti nei dati di training. Esempio: un sistema di riconoscimento facciale che funziona peggio con persone di colore perché è stato addestrato principalmente su volti bianchi.' },
  { id: '9', word: 'Bias (parametro tecnico)', definition: 'Un valore numerico aggiunto nella rete neurale che permette di spostare la funzione di attivazione. Aiuta il modello a essere più flessibile nell’apprendimento.' },
  { id: '10', word: 'Broad AI', definition: 'IA Ampia - sistemi attuali che possono fare più compiti correlati. Esempio: un assistente vocale che può rispondere a domande, impostare sveglie e controllare dispositivi smart.' },
  { id: '11', word: 'Classification (Classificazione)', definition: 'Tipo di problema dove il modello deve assegnare un’etichetta a un input. Esempio: decidere se un’email è spam o non spam, o riconoscere se un’immagine contiene un gatto o un cane.' },
  { id: '12', word: 'Clustering', definition: 'Tecnica di machine learning non supervisionato che raggruppa dati simili insieme senza etichette predefinite. Come organizzare automaticamente le foto per persone senza dire al computer chi è chi.' },
  { id: '13', word: 'CNN (Convolutional Neural Network)', definition: 'Rete Neurale Convoluzionale - tipo di rete neurale specializzata nell’analisi di immagini. Estrae caratteristiche visive come bordi, forme e texture. Usata per riconoscimento facciale, scrittura a mano, oggetti.' },
  { id: '14', word: 'Computer Vision', definition: 'Capacità dei computer di “vedere” e interpretare immagini e video come fanno gli umani. Usata in Face ID, auto autonome, filtri Instagram.' },
  { id: '15', word: 'Confusion Matrix', definition: 'Tabella che mostra quante previsioni corrette e sbagliate ha fatto il modello per ogni classe. Aiuta a capire quali numeri vengono confusi tra loro.' },
  { id: '16', word: 'Data (Dati)', definition: 'Informazioni che diamo al computer per imparare. Possono essere numeri, testo, immagini, audio. Sono il “cibo” dell’IA.' },
  { id: '17', word: 'Dataset', definition: 'Insieme organizzato di dati usati per addestrare o testare un modello. Nel laboratorio, il dataset è la collezione di tutti i numeri disegnati.' },
  { id: '18', word: 'Data Driven', definition: 'Approccio dove le decisioni sono guidate dai dati piuttosto che da regole predefinite. L’unsupervised learning è data driven.' },
  { id: '19', word: 'Deep Learning (DL)', definition: 'Apprendimento Profondo - sottocampo del machine learning che usa reti neurali con molti livelli (profonde). Può imparare rappresentazioni complesse dei dati.' },
  { id: '20', word: 'Deepfake', definition: 'Video o audio falsi creati con IA che sembrano realistici. Possono far sembrare che una persona dica o faccia cose mai fatte realmente.' },
  { id: '21', word: 'DFF (Deep Feedforward Network)', definition: 'Rete neurale con molti livelli nascosti che elabora informazioni in una sola direzione, dall’input all’output.' },
  { id: '22', word: 'Early Stopping', definition: 'Tecnica che ferma il training quando il modello smette di migliorare, evitando di sprecare tempo e risorse.' },
  { id: '23', word: 'Epoca (Epoch)', definition: 'Un ciclo completo di training dove il modello vede tutti i dati del dataset una volta. Se abbiamo 60 immagini e facciamo 100 epoche, il modello vedrà quelle 60 immagini 100 volte.' },
  { id: '24', word: 'ETL (Extract, Transform, Load)', definition: 'Processo di estrazione, trasformazione e caricamento dei dati. Come preparare gli ingredienti prima di cucinare.' },
  { id: '25', word: 'Etica dell’IA', definition: 'Studio delle implicazioni morali e sociali dell’intelligenza artificiale: privacy, bias, trasparenza, responsabilità.' },
  { id: '26', word: 'Feature (Caratteristica)', definition: 'Una proprietà misurabile dei dati che il modello usa per fare previsioni. Nel riconoscimento della scrittura: altezza, larghezza, pixel neri in alto/basso/centro.' },
  { id: '27', word: 'Feedback', definition: 'Informazione che dice al modello se la sua previsione era corretta o sbagliata, permettendogli di migliorare. Come quando un insegnante corregge un compito.' },
  { id: '28', word: 'Feedforward', definition: 'Tipo di rete neurale dove i dati fluiscono in una sola direzione: dall’input attraverso i livelli nascosti fino all’output, senza cicli.' },
  { id: '29', word: 'Few-shot Learning', definition: 'Capacità di un modello di imparare da pochi esempi. I moderni LLM possono capire un nuovo compito con solo 2-3 esempi.' },
  { id: '30', word: 'GAN (Generative Adversarial Network)', definition: 'Rete Generativa Avversaria - due reti neurali che competono: una genera dati falsi, l’altra cerca di distinguerli da quelli veri. Usata per creare immagini realistiche.' },
  { id: '31', word: 'General AI', definition: 'Vedi AGI - intelligenza artificiale che può fare qualsiasi compito intellettuale umano.' },
  { id: '32', word: 'Generalizzazione', definition: 'Capacità del modello di funzionare bene su dati nuovi mai visti prima, non solo su quelli di training. Un buon modello generalizza bene.' },
  { id: '33', word: 'Hidden Layer (Livello Nascosto)', definition: 'Livelli intermedi della rete neurale tra input e output. Qui avviene l’elaborazione e l’apprendimento delle caratteristiche complesse.' },
  { id: '34', word: 'IA Decisionale', definition: 'Intelligenza Artificiale che supporta o prende decisioni basandosi su dati e regole. Usata in diagnosi mediche, approvazione prestiti, strategie aziendali.' },
  { id: '35', word: 'IA Generativa', definition: 'Intelligenza Artificiale che crea nuovi contenuti: testo, immagini, musica, video. Esempi: ChatGPT, DALL-E, Midjourney.' },
  { id: '36', word: 'IA Predittiva', definition: 'Intelligenza Artificiale che fa previsioni sul futuro basandosi su dati storici. Usata per previsioni meteo, raccomandazioni prodotti, analisi finanziarie.' },
  { id: '37', word: 'In-context Learning', definition: 'Capacità dei LLM di imparare nuovi compiti semplicemente leggendo esempi nel prompt, senza bisogno di training aggiuntivo.' },
  { id: '38', word: 'Input', definition: 'I dati che diamo in ingresso al modello. Nel nostro caso, l’immagine del numero disegnato.' },
  { id: '39', word: 'Input Layer (Livello di Input)', definition: 'Primo livello della rete neurale che riceve i dati iniziali. Nel progetto riceve le 5 features estratte dal disegno.' },
  { id: '40', word: 'Label (Etichetta)', definition: 'L’informazione corretta associata a un dato nel supervised learning. Se mostro un’immagine di un “3”, l’etichetta è “3”.' },
  { id: '41', word: 'Learning Rate', definition: 'Velocità con cui il modello impara. Un valore troppo alto fa imparare velocemente ma in modo impreciso; troppo basso rende l’apprendimento lentissimo.' },
  { id: '42', word: 'LLM (Large Language Model)', definition: 'Modello Linguistico di Grandi Dimensioni - IA addestrata su enormi quantità di testo che può comprendere e generare linguaggio naturale. Esempi: GPT-4, Claude, Gemini.' },
  { id: '43', word: 'Loss (Perdita)', definition: 'Misura di quanto il modello sta sbagliando. Durante il training vogliamo che il loss diminuisca. È l’opposto dell’accuracy.' },
  { id: '44', word: 'Machine Learning (ML)', definition: 'Apprendimento Automatico - campo dell’IA dove i computer imparano dai dati senza essere esplicitamente programmati per ogni situazione.' },
  { id: '45', word: 'Metrica', definition: 'Misura usata per valutare le prestazioni del modello: accuracy, loss, precision, recall.' },
  { id: '46', word: 'Modello', definition: 'Il sistema di IA addestrato che fa previsioni. È il risultato del processo di training. Come uno studente che dopo aver studiato può fare gli esami.' },
  { id: '47', word: 'Narrow AI', definition: 'IA Ristretta - sistemi attuali specializzati in un compito specifico. Esempio: un’IA che gioca solo a scacchi o riconosce solo volti.' },
  { id: '48', word: 'Neural Network (Rete Neurale)', definition: 'Modello di machine learning ispirato al cervello umano, composto da neuroni artificiali organizzati in livelli che elaborano informazioni.' },
  { id: '49', word: 'Neurone (Artificiale)', definition: 'Unità base di una rete neurale che riceve input, li elabora con pesi e bias, e produce un output. Ispirato ai neuroni biologici.' },
  { id: '50', word: 'NLP (Natural Language Processing)', definition: 'Elaborazione del Linguaggio Naturale - capacità dell’IA di comprendere, interpretare e generare linguaggio umano. Usato in assistenti vocali, traduttori, chatbot.' },
  { id: '51', word: 'Output', definition: 'Il risultato prodotto dal modello. Nel nostro caso, quale numero (0-9) il modello pensa che abbiamo disegnato.' },
  { id: '52', word: 'Output Layer (Livello di Output)', definition: 'Ultimo livello della rete neurale che produce il risultato finale. Nel progetto ha 3 neuroni, uno per ogni numero scelto.' },
  { id: '53', word: 'Overfitting', definition: 'Quando il modello impara troppo bene i dati di training, memorizzandoli invece di generalizzare. Funziona perfettamente sui dati di training ma male su dati nuovi.' },
  { id: '54', word: 'Pattern (Schema)', definition: 'Regolarità o struttura ricorrente nei dati che il modello impara a riconoscere. Esempio: tutti i “3” hanno due curve, tutti gli “8” hanno due cerchi sovrapposti.' },
  { id: '55', word: 'Percettrone', definition: 'La rete neurale più semplice, con un solo neurone. È il mattone base delle reti neurali moderne.' },
  { id: '56', word: 'Peso (Weight)', definition: 'Valore numerico che determina l’importanza di una connessione tra neuroni. Durante il training, i pesi vengono aggiustati per migliorare le previsioni.' },
  { id: '57', word: 'Pipeline', definition: 'Sequenza di passaggi per elaborare i dati: raccolta → pulizia → trasformazione → training → valutazione.' },
  { id: '58', word: 'Predizione (Previsione)', definition: 'L’output del modello quando gli diamo nuovi dati. È la “risposta” del modello.' },
  { id: '59', word: 'Preprocessing', definition: 'Preparazione e pulizia dei dati prima del training: ridimensionamento, normalizzazione, rimozione errori.' },
  { id: '60', word: 'Prompt', definition: 'L’input testuale dato a un’IA generativa per ottenere una risposta. La qualità del prompt influenza la qualità della risposta.' },
  { id: '61', word: 'Prompt Engineering', definition: 'L’arte di scrivere prompt efficaci per ottenere i migliori risultati da un’IA generativa.' },
  { id: '62', word: 'Regression (Regressione)', definition: 'Tipo di problema dove il modello deve prevedere un valore numerico continuo. Esempio: prevedere il prezzo di una casa, la temperatura domani.' },
  { id: '63', word: 'Reinforcement Learning', definition: 'Apprendimento per Rinforzo - il modello impara provando azioni e ricevendo ricompense o punizioni. Come addestrare un cane con premi.' },
  { id: '64', word: 'RNN (Recurrent Neural Network)', definition: 'Rete Neurale Ricorrente - tipo di rete con connessioni cicliche, specializzata in dati sequenziali come testo o serie temporali.' },
  { id: '65', word: 'Robustezza', definition: 'Capacità del modello di funzionare bene anche con dati imperfetti, rumorosi o in condizioni diverse da quelle di training.' },
  { id: '66', word: 'Supervised Learning', definition: 'Apprendimento Supervisionato - tipo di ML dove il modello impara da dati etichettati. Sappiamo già le risposte corrette e le usiamo per insegnare.' },
  { id: '67', word: 'Task Driven', definition: 'Approccio dove l’obiettivo è completare un compito specifico. Il supervised learning è task driven.' },
  { id: '68', word: 'Test', definition: 'Fase dove valutiamo il modello su dati nuovi mai visti durante il training, per verificare se generalizza bene.' },
  { id: '69', word: 'Training (Addestramento)', definition: 'Processo di apprendimento dove il modello studia i dati del dataset e aggiusta i suoi pesi per migliorare le previsioni.' },
  { id: '70', word: 'Training Data', definition: 'I dati usati per addestrare il modello. Nel laboratorio, i numeri disegnati dagli studenti.' },
  { id: '71', word: 'Transfer Learning', definition: 'Tecnica dove un modello addestrato su un compito viene riutilizzato per un compito simile, risparmiando tempo e dati.' },
  { id: '72', word: 'Transformer', definition: 'Architettura di rete neurale moderna basata sul meccanismo di attenzione, alla base dei LLM come GPT e BERT.' },
  { id: '73', word: 'Trasparenza', definition: 'Capacità di capire come un modello di IA prende le sue decisioni. Importante per fiducia e responsabilità.' },
  { id: '74', word: 'Underfitting', definition: 'Quando il modello è troppo semplice e non riesce a imparare nemmeno i pattern base dei dati di training.' },
  { id: '75', word: 'Unsupervised Learning', definition: 'Apprendimento Non Supervisionato - tipo di ML dove il modello trova pattern nei dati senza etichette. Non sappiamo le risposte corrette in anticipo.' },
  { id: '76', word: 'Validazione', definition: 'Processo di verifica delle prestazioni del modello durante il training, usando dati separati dal training set.' },
  { id: '77', word: 'Varietà dei Dati', definition: 'Diversità negli esempi di training. Più varietà = modello più robusto. Esempio: disegnare numeri grandi, piccoli, inclinati, centrati.' },
  { id: '78', word: 'Weight (Peso)', definition: 'Vedi “Peso” - parametro della rete neurale che viene ottimizzato durante il training.' },
];

export function Glossary() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 6;

  // Filter terms
  const filteredTerms = INITIAL_TERMS.filter(term => {
    const matchesSearch = term.word.toLowerCase().includes(search.toLowerCase()) ||
                          term.definition.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter ? term.word.toUpperCase().startsWith(activeLetter) : true;
    return matchesSearch && matchesLetter;
  });

  // Unique letters for navigation
  const letters = Array.from(new Set(INITIAL_TERMS.map(t => t.word.charAt(0).toUpperCase()))).sort();

  // Pagination
  const totalPages = Math.ceil(filteredTerms.length / ITEMS_PER_PAGE);
  const currentTerms = filteredTerms.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [search, activeLetter]);

  return (
    <section id="glossary" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">Glossario Tecnico</h2>
            <p className="text-slate-500 text-lg">
              Termini e concetti chiave del Machine Learning spiegati in modo semplice.
            </p>
          </div>
          
          <div className="relative group w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Cerca termine..."
              className="pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all w-full text-slate-700 font-medium"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value) setActiveLetter(null);
              }}
            />
          </div>
        </div>

        {/* Letter Selector - Improved visibility */}
        <div className="mb-12 flex flex-wrap items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveLetter(null)}
            className={cn(
              "px-5 py-2.5 rounded-xl font-bold transition-all text-xs uppercase tracking-widest border shrink-0",
              activeLetter === null 
                ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200" 
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            Tutti
          </button>
          {letters.map(letter => (
            <button
              key={letter}
              onClick={() => {
                setActiveLetter(letter);
                setSearch('');
              }}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all text-sm border shrink-0",
                activeLetter === letter 
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-medium text-slate-400">
            {filteredTerms.length} termini trovati
          </p>
          
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5 px-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      i === currentPage ? "bg-blue-500 w-4" : "bg-slate-200"
                    )}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentTerms.map((term) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-7 border border-slate-100 rounded-[2rem] bg-slate-50/30 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group relative border-b-4 border-b-transparent hover:border-b-blue-500"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0 text-xs mb-4">
                  {term.word.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {term.word}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {term.definition}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-20 bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <Info className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-500 text-lg font-medium">Nessun termine trovato</p>
            <button 
              onClick={() => { setSearch(''); setActiveLetter(null); }}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Reset filtri
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
