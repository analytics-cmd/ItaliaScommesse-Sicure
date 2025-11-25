import React, { useState, useEffect } from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';
import { getExitLink } from '../services/linkManager';

export const StickyAd: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl p-1 flex items-center max-w-lg w-full border border-slate-700 dark:border-slate-200 relative overflow-hidden">
        
        {/* Glowing Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-white to-brand-500 animate-pulse"></div>

        <button 
          onClick={() => setIsClosed(true)}
          className="absolute top-1 right-1 p-1 text-slate-400 hover:text-white dark:hover:text-slate-600 bg-black/20 rounded-full z-50"
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-4 p-3 pr-10 w-full">
           <div className="bg-brand-600 text-white p-3 rounded-xl flex-shrink-0">
              <Zap size={24} fill="currentColor" />
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 dark:text-brand-600 mb-0.5">
                La Scelta 2026
              </p>
              <p className="font-extrabold text-sm leading-tight truncate">
                Visita Stake.it: l'operatore più veloce {'>>'}
              </p>
           </div>
           <a 
             href={getExitLink('stake-it')} 
             target="_blank" 
             rel="nofollow noopener"
             className="whitespace-nowrap bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-1 shadow-lg shadow-brand-500/20"
           >
             Vai al Sito <ArrowRight size={12} />
           </a>
        </div>
      </div>
    </div>
  );
};