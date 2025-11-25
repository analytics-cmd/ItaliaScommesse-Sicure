
import React from 'react';
import { Operator } from '../types';
import { Star, Check, ExternalLink, Gift, Eye, Flame, Zap, Trophy } from 'lucide-react';
import { getExitLink } from '../services/linkManager';
import { Link } from 'react-router-dom';

interface OperatorCardProps {
  operator: Operator;
  compact?: boolean;
  hideBadges?: boolean;
}

export const OperatorCard: React.FC<OperatorCardProps> = ({ operator, compact = false, hideBadges = false }) => {
  const exitLink = getExitLink(operator.id);
  const reviewLink = `/reviews/${operator.id}`;

  const getBadgeIcon = (type: string) => {
    switch(type) {
        case 'HOT': return <Flame size={12} className="mr-1" />;
        case 'NEW': return <Zap size={12} className="mr-1" />;
        case 'TOP': return <Trophy size={12} className="mr-1" />;
        default: return null;
    }
  };

  const getBadgeColor = (type: string) => {
      switch(type) {
          case 'HOT': return 'bg-red-50 text-red-700 border-red-200';
          case 'NEW': return 'bg-blue-50 text-blue-700 border-blue-200';
          case 'TOP': return 'bg-amber-50 text-amber-700 border-amber-200';
          case 'ESCLUSIVO': return 'bg-purple-50 text-purple-700 border-purple-200';
          default: return 'bg-slate-100 text-slate-700';
      }
  };

  if (compact) {
    // Compact View for Lists (Mobile optimized, Google-style list item)
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 flex flex-col sm:flex-row items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
        
        {!hideBadges && operator.badges && operator.badges.length > 0 && (
            <div className="absolute top-4 left-4 z-10 flex gap-1">
                {operator.badges.map(b => (
                    <span key={b} className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center border ${getBadgeColor(b)}`}>
                        {getBadgeIcon(b)}{b}
                    </span>
                ))}
            </div>
        )}

        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex-shrink-0 flex items-center justify-center shadow-sm">
          <img src={operator.logoUrl} alt={operator.name} className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="flex-1 text-center sm:text-left w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 justify-center sm:justify-start">
             <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">{operator.name}</h3>
             <div className="flex items-center justify-center sm:justify-start gap-1 text-sm text-slate-600 dark:text-slate-400">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="font-bold">{operator.rating}</span>
             </div>
          </div>
          <p className="text-xs text-slate-500 mb-3 truncate">{operator.licenseNumber} • {operator.features[0]}</p>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
             {operator.features.slice(0, 2).map((f, i) => (
                 <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {f}
                 </span>
             ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto min-w-[140px]">
           {operator.promoCode && (
             <Link to={`/promo-codes/${operator.id}`} className="text-center text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 py-2 rounded-xl hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors">
                Codice: <span className="font-mono text-sm">{operator.promoCode}</span>
             </Link>
           )}
           <a href={exitLink} target="_blank" rel="nofollow noopener" className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 text-white py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
             Visita <ExternalLink size={14} />
           </a>
        </div>
      </div>
    );
  }

  // Full Featured Card (Home / Grid) - Google Store / Material 3 Style
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 group relative">
       {!hideBadges && operator.badges && operator.badges.length > 0 && (
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1 items-end">
                {operator.badges.map(b => (
                    <span key={b} className={`text-[10px] font-bold px-3 py-1 rounded-full flex items-center border backdrop-blur-sm ${getBadgeColor(b)}`}>
                        {getBadgeIcon(b)}{b}
                    </span>
                ))}
            </div>
        )}

      <div className="p-6 flex items-start gap-4 pb-0">
        <div className="w-16 h-16 bg-white border border-slate-100 dark:border-slate-700 rounded-2xl p-2 flex items-center justify-center shadow-sm flex-shrink-0">
           <img src={operator.logoUrl} alt={operator.name} className="max-w-full max-h-full object-contain" />
        </div>
        <div>
           <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{operator.name}</h3>
           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{operator.licenseNumber}</p>
           <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">{operator.rating}</span>
           </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Clean Bonus Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 mb-5">
          <div className="flex items-start gap-3">
            <Gift className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-0.5">Bonus 2026</p>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">{operator.bonusOffer}</p>
            </div>
          </div>
          {operator.promoCode && (
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2">
               <span className="text-xs font-medium text-slate-500">Codice:</span>
               <Link 
                 to={`/promo-codes/${operator.id}`}
                 className="font-mono font-bold text-brand-600 dark:text-brand-400 text-sm hover:underline"
               >
                 {operator.promoCode}
               </Link>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-8 flex-1">
          {operator.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <a href={exitLink} target="_blank" rel="nofollow noopener" className="flex-1 bg-brand-600 hover:bg-brand-700 text-white py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center shadow-md">
            Visita
          </a>
          <Link to={reviewLink} className="px-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Recensione
          </Link>
        </div>
      </div>
    </div>
  );
};
