
import React from 'react';
import { OPERATORS } from '../constants';
import { CheckCircle, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { EnhancedOperatorCard } from '../components/EnhancedOperatorCard';

export const PromoCodes: React.FC = () => {
  return (
    <>
    <SEO 
      title="Codici Promo Scommesse ADM 2026 - Lista Ufficiale NEWBONUS"
      description="Tutti i codici promozionali attivi per Stake.it, bet365, Snai e altri bookmaker legali. Copia il codice NEWBONUS per attivare le offerte di benvenuto esclusive."
    />
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Codici Bonus 2026</h1>
          <div className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-100 dark:border-green-900/30">
             <CheckCircle size={12} /> Ultima verifica: Oggi
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {/* Active Codes - Using Promo Variant */}
          {OPERATORS.filter(op => op.promoCode).map((op, index) => (
            <EnhancedOperatorCard key={op.id} operator={op} variant="promo" index={index + 1} />
          ))}
        </div>

        {/* Compact Disclaimer */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center md:text-left">
             <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Termini Importanti</h4>
             <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                I codici promozionali (es. NEWBONUS) permettono l'adesione alle offerte di benvenuto. Il gioco è riservato ai maggiori di 18 anni. I bonus sono soggetti a requisiti di puntata (Rollover). 
                Consulta sempre i T&C sul sito ufficiale dell'operatore. ItaliaScommesse Sicure promuove solo concessionari ADM.
             </p>
        </div>
      </div>
    </div>
    </>
  );
};
