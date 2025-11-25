
import React from 'react';
import { OPERATORS } from '../constants';
import { BookOpen, Info } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { EnhancedOperatorCard } from '../components/EnhancedOperatorCard';

export const Reviews: React.FC = () => {
  // Structured Data for Reviews Page (Collection)
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Recensioni Bookmaker ADM",
    "description": "Elenco completo delle recensioni tecniche degli operatori scommesse italiani legali.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": OPERATORS.map((op, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://italiascommesse.com/reviews/${op.id}`
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Recensioni Siti Scommesse ADM 2026 - Classifica Completa"
        description="Analisi tecnica e imparziale dei migliori bookmaker legali in Italia. Clicca su un operatore per leggere la recensione dettagliata, vedere i grafici di performance e i bonus attivi."
        schema={schema}
      />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hub Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 mb-6 shadow-sm">
                <BookOpen size={14} className="text-brand-600" />
                <span>Archivio Ufficiale 2026</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
               Le Nostre <span className="text-brand-600 dark:text-brand-400">Recensioni</span>
             </h1>
             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
               Non ci limitiamo a guardare la home page. Apriamo conti reali, depositiamo, testiamo l'assistenza e verifichiamo le quote. Scegli un operatore per vedere l'analisi completa.
             </p>
          </div>

          {/* Filter/Intro Bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <h2 className="font-bold text-xl text-slate-900 dark:text-white">Classifica Operatori ({OPERATORS.length})</h2>
              <Link to="/guides" className="text-sm font-bold text-brand-600 hover:underline flex items-center gap-1">
                 <Info size={16}/> Metodologia di Test
              </Link>
          </div>

          {/* Enhanced List */}
          <div className="space-y-6">
            {OPERATORS.map((op, index) => (
               <EnhancedOperatorCard key={op.id} operator={op} index={index + 1} />
            ))}
          </div>

          {/* SEO Footer Text */}
          <div className="mt-20 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Come valutiamo i siti scommesse?</h3>
              <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">1. Sicurezza & Licenza</h4>
                      <p>Verifichiamo prima di tutto la concessione GAD sul sito dell'Agenzia Dogane e Monopoli. Se non è legale, non lo recensiamo.</p>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">2. Payout e Quote</h4>
                      <p>Analizziamo la lavagna (aggio) sui principali campionati. Un payout sotto il 93% penalizza pesantemente il voto finale.</p>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">3. User Experience</h4>
                      <p>Testiamo l'app mobile su iOS e Android. La velocità di caricamento e la facilità di piazzare una live bet sono cruciali.</p>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </>
  );
};
