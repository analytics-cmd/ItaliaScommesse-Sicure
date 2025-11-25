
import React from 'react';
import { Operator } from '../types';
import { Star, Check, ExternalLink, Gift, ChevronRight, Ticket, ShieldCheck, Zap } from 'lucide-react';
import { getExitLink } from '../services/linkManager';
import { Link } from 'react-router-dom';

interface EnhancedOperatorCardProps {
  operator: Operator;
  variant?: 'review' | 'promo';
  index?: number;
}

export const EnhancedOperatorCard: React.FC<EnhancedOperatorCardProps> = ({ operator, variant = 'review', index = 0 }) => {
  const exitLink = getExitLink(operator.id);
  const reviewLink = `/reviews/${operator.id}`;
  const promoLink = `/promo-codes/${operator.id}`;

  // Helper to determine brand colors/gradients dynamically based on ID could go here, 
  // but we'll use a sophisticated neutral + brand accent approach.

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden mb-6">
      
      {/* Background Brand Logo Decoration */}
      <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rotate-12">
         <img src={operator.logoUrl} className="w-full h-full object-contain grayscale" alt="" />
      </div>

      <div className="flex flex-col md:flex-row">
        
        {/* Left: Brand Identity & Rank */}
        <div className="md:w-64 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 relative">
           {index > 0 && (
             <div className="absolute top-4 left-4 text-[10px] font-black text-slate-300 dark:text-slate-700">
               #{index}
             </div>
           )}
           
           <div className="w-24 h-24 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-4 flex items-center justify-center relative z-10">
              <img src={operator.logoUrl} alt={operator.name} className="max-w-full max-h-full object-contain" />
           </div>
           
           <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
                 <span className="text-xl font-black text-slate-900 dark:text-white">{operator.rating}</span>
                 <span className="text-xs text-slate-400">/5</span>
              </div>
              <Link to={reviewLink} className="text-xs font-bold text-slate-500 hover:text-brand-600 underline decoration-dotted">
                Leggi Recensione
              </Link>
           </div>
        </div>

        {/* Center: Content & Features */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative z-10">
           <div className="flex flex-wrap gap-2 mb-3">
              {operator.badges?.map(badge => (
                 <span key={badge} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-brand-100 dark:border-brand-900 text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">
                    {badge}
                 </span>
              ))}
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 dark:border-slate-700">
                {operator.licenseNumber.split(' ')[2]}
              </span>
           </div>

           <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              {variant === 'promo' ? `Bonus ${operator.name}` : operator.name}
           </h3>
           
           {variant === 'promo' ? (
              <div className="mb-4">
                 <div className="text-3xl font-black text-brand-600 dark:text-brand-400 mb-1">{operator.bonusOffer}</div>
                 <p className="text-sm text-slate-500 dark:text-slate-400">Valido per nuovi account con codice <strong>{operator.promoCode}</strong></p>
              </div>
           ) : (
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed font-medium">
                {operator.description}
              </p>
           )}

           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {operator.features.slice(0, 4).map((feat, i) => (
                 <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center flex-shrink-0">
                       <Check size={10} strokeWidth={4} />
                    </div>
                    {feat}
                 </div>
              ))}
           </div>
        </div>

        {/* Right: CTA Section */}
        <div className="md:w-72 p-6 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
           
           {variant === 'promo' && operator.promoCode && (
              <div className="text-center mb-2">
                 <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Codice Attivo</div>
                 <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 p-2 rounded-lg font-mono font-bold text-lg text-slate-800 dark:text-slate-200 tracking-wider">
                    {operator.promoCode}
                 </div>
              </div>
           )}

           <a 
             href={exitLink} 
             target="_blank" 
             rel="nofollow noopener" 
             className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
           >
             {variant === 'promo' ? 'Attiva Bonus' : 'Visita Sito'} <ExternalLink size={16} />
           </a>
           
           <div className="grid grid-cols-2 gap-2">
              <Link to={promoLink} className="flex items-center justify-center gap-1 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                 <Gift size={12} /> Promo
              </Link>
              <Link to={reviewLink} className="flex items-center justify-center gap-1 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                 <ShieldCheck size={12} /> Info
              </Link>
           </div>
           
           <div className="text-center mt-1">
             <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
               <Zap size={10} className="text-yellow-500 fill-current" /> Verifica: Oggi
             </span>
           </div>
        </div>

      </div>
    </div>
  );
};
