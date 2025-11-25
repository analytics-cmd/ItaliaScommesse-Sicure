
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { OPERATORS, AUTHORS } from '../constants';
import { getExitLink } from '../services/linkManager';
import { SEO } from '../components/SEO';
import { Star, Check, BarChart2, User, Calendar, X, Zap, ArrowRight, Ticket, Quote, AlertCircle } from 'lucide-react';

export const ReviewDetail: React.FC = () => {
  const { operatorId } = useParams<{ operatorId: string }>();
  const operator = OPERATORS.find(op => op.id === operatorId);
  const author = AUTHORS[operator?.authorId || 'matteo-rinaldi'];

  if (!operator) {
    return <Navigate to="/reviews" />;
  }

  const exitLink = getExitLink(operator.id);
  
  // Helper for stat bar colors
  const getBarColor = (val: number) => {
      if (val >= 4.8) return 'bg-green-500';
      if (val >= 4.5) return 'bg-brand-500';
      if (val >= 4.0) return 'bg-yellow-400';
      return 'bg-red-500';
  };

  const ratingMap: Record<string, string> = {
      odds: 'Quote & Payout',
      app: 'App Mobile',
      support: 'Assistenza Clienti',
      bonuses: 'Bonus & Promo'
  };

  return (
    <>
      <SEO 
        title={`Recensione ${operator.name} (2026) - Opinione Onesta e Bonus`}
        description={`Recensione senza filtri di ${operator.name}. ${operator.bottomLine} Scopri pregi, difetti e il codice promozionale ${operator.promoCode || ''}.`}
      />
      
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 transition-colors duration-300 font-sans">
        
        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
             {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/50 dark:bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="bg-white border border-slate-100 dark:border-slate-700 p-6 rounded-3xl shadow-lg w-32 h-32 md:w-40 md:h-40 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        <img src={operator.logoUrl} alt={operator.name} className="max-w-full max-h-full object-contain relative z-10" />
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-3 justify-center md:justify-start">
                             <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{operator.name}</h1>
                             {operator.badges?.map(b => (
                                <span key={b} className="bg-brand-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                    {b}
                                </span>
                            ))}
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-6 max-w-2xl">{operator.description}</p>
                        
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
                            <div className="flex items-center gap-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-black text-lg shadow-lg">
                                <Star size={20} fill="currentColor" className="text-yellow-400 dark:text-yellow-500" /> {operator.rating}
                                <span className="text-[10px] font-normal opacity-70 ml-1">/ 5.0</span>
                            </div>
                            <span className="text-sm font-mono text-slate-400 dark:text-slate-500 border-l border-slate-300 dark:border-slate-700 pl-4">
                                Licenza: {operator.licenseNumber}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[200px] w-full md:w-auto">
                        <a href={exitLink} target="_blank" rel="nofollow noopener" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-xl font-bold text-center shadow-xl shadow-brand-600/20 transition-all hover:-translate-y-1">
                            Visita Sito Ufficiale
                        </a>
                        {operator.promoCode && (
                            <Link to={`/promo-codes/${operator.id}`} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 px-6 py-3 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 group text-sm">
                                <Ticket size={16} className="text-brand-500" />
                                <span>Codice: <span className="font-mono bg-slate-100 dark:bg-slate-700 px-1 rounded">{operator.promoCode}</span></span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
                
                {/* EXPERT TAKE CALL-OUT - NEW FEATURE */}
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                     <div className="absolute -top-4 -left-2 bg-brand-600 text-white p-2 rounded-xl shadow-lg rotate-3">
                        <Quote size={24} fill="currentColor" />
                     </div>
                     <div className="flex flex-col sm:flex-row gap-6">
                         <div className="flex-shrink-0 text-center sm:text-left">
                             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-200 dark:border-brand-900 mx-auto sm:mx-0">
                                 <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover" />
                             </div>
                             <p className="text-[10px] font-bold uppercase mt-2 text-slate-400">L'Esperto</p>
                             <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{author.name.split(' ')[0]}</p>
                         </div>
                         <div className="flex-1">
                             <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">L'Opinione Senza Filtri</h3>
                             <p className="text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed">
                                 "{operator.expertTake}"
                             </p>
                         </div>
                     </div>
                </div>

                {/* Main Review Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                    prose-headings:font-black prose-headings:tracking-tight 
                    prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-2xl">
                     <div dangerouslySetInnerHTML={{__html: operator.fullReview}} />
                </div>

                {/* Pros & Cons Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-6 border border-green-100 dark:border-green-900/30">
                        <h3 className="font-bold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <Check className="w-5 h-5"/> Cosa Spacca
                        </h3>
                        <ul className="space-y-3">
                            {operator.pros.map((p, i) => (
                                <li key={i} className="text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2 font-medium">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
                        <h3 className="font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <X className="w-5 h-5"/> Cosa Manca
                        </h3>
                        <ul className="space-y-3">
                            {operator.cons.map((c, i) => (
                                <li key={i} className="text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2 font-medium">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Compliance Box */}
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex gap-4 items-start text-xs text-slate-500 dark:text-slate-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>
                        Ricorda: {operator.name} opera con concessione ADM {operator.licenseNumber}. Il gioco è vietato ai minori e può causare dipendenza. 
                        Le valutazioni espresse in questa pagina sono soggettive e basate sull'esperienza dell'analista. Verifica sempre T&C sul sito ufficiale.
                    </p>
                </div>
            </div>

            {/* Right Column: Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Scorecard Widget */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none lg:sticky lg:top-24">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-brand-600" />
                            Pagella
                        </h3>
                        <span className="text-xs font-bold text-slate-400 uppercase">Aggiornata Marzo '26</span>
                    </div>
                    
                    <div className="space-y-5">
                        {Object.entries(operator.ratingBreakdown).map(([key, value]) => (
                            <div key={key}>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-slate-600 dark:text-slate-400">{ratingMap[key] || key}</span>
                                    <span className="font-black text-slate-900 dark:text-white">{value}</span>
                                </div>
                                <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${getBarColor(value)}`}
                                        style={{width: `${(value/5)*100}%`}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                         <p className="text-sm font-medium text-slate-500 mb-2">Verdetto Finale:</p>
                         <p className="font-bold text-slate-900 dark:text-white leading-tight">
                             "{operator.bottomLine || 'Solido e affidabile.'}"
                         </p>
                    </div>

                    <div className="mt-6">
                        <a href={exitLink} target="_blank" rel="nofollow noopener" className="block w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl text-center hover:opacity-90 transition-opacity">
                            Prova {operator.name}
                        </a>
                    </div>
                </div>

                {/* Author Mini Profile */}
                <div className="flex items-center gap-4 p-5 bg-transparent border border-slate-200 dark:border-slate-800 rounded-2xl">
                     <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover"/>
                     </div>
                     <div>
                         <p className="text-[10px] text-slate-500 uppercase font-bold">Analisi a cura di</p>
                         <Link to={`/author/${operator.authorId}`} className="font-bold text-sm text-slate-900 dark:text-white hover:underline">
                             {author.name}
                         </Link>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </>
  );
};
