
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { OPERATORS } from '../constants';
import { getExitLink } from '../services/linkManager';
import { SEO } from '../components/SEO';
import { Copy, CheckCircle, ShieldCheck, ArrowRight, GitCompare, UserPlus, CreditCard, PlayCircle } from 'lucide-react';

export const PromoCodeDetail: React.FC = () => {
  const { operatorId } = useParams<{ operatorId: string }>();
  const operator = OPERATORS.find(op => op.id === operatorId);
  const [copied, setCopied] = useState(false);

  if (!operator) {
    return <Navigate to="/promo-codes" />;
  }

  const exitLink = getExitLink(operator.id);
  
  const handleCopy = () => {
    if (operator.promoCode) {
        navigator.clipboard.writeText(operator.promoCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper to get brand colors
  const getBrandStyle = (id: string) => {
      if (id.includes('bet365')) return 'from-[#007d65] to-[#005847] text-white'; 
      if (id.includes('stake')) return 'from-[#141829] to-[#090f1e] text-white'; 
      if (id.includes('betway')) return 'from-black to-slate-800 text-white'; 
      if (id.includes('snai')) return 'from-[#ff7b00] to-[#cc6200] text-white';
      if (id.includes('eurobet')) return 'from-[#004d99] to-[#003366] text-white';
      return 'from-slate-900 to-slate-800 text-white';
  };

  const brandStyle = getBrandStyle(operator.id);

  return (
    <>
      <SEO 
        title={`Codice Promozionale ${operator.name} 2026: "${operator.promoCode || 'NEWBONUS'}" - Guida e Recensioni`}
        description={`Guida completa all'uso del codice promozionale ${operator.name}. Scopri come attivare il bonus di ${operator.bonusOffer}, leggi le opinioni degli utenti reali e confronta i requisiti di puntata.`}
      />
      <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300 font-sans">
        
        {/* Compact Brand Header with Background Logo */}
        <div className={`bg-gradient-to-br ${brandStyle} relative overflow-hidden`}>
            {/* Background Blurred Logo */}
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] opacity-10 pointer-events-none z-0">
                <img src={operator.logoUrl} alt="" className="w-full h-full object-contain grayscale invert rotate-12 blur-sm" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="bg-white p-4 rounded-2xl shadow-lg w-32 h-32 flex items-center justify-center flex-shrink-0">
                        <img src={operator.logoUrl} alt={operator.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-4xl md:text-5xl font-black mb-2 text-white leading-none">
                            {operator.name}
                        </h1>
                        <p className="text-lg text-white/90 font-medium opacity-90">
                            Bonus di Benvenuto Ufficiale 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Interaction Card */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 mb-16">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 md:p-10 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 w-full text-center lg:text-left">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Offerta Attiva</p>
                        <div className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            {operator.bonusOffer}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <div className="bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl px-6 py-3 flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                                <span className="font-mono text-xl font-bold text-slate-900 dark:text-white tracking-wider">
                                    {operator.promoCode || 'NESSUN CODICE'}
                                </span>
                                <button onClick={handleCopy} className="text-xs font-bold bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded uppercase hover:bg-slate-300 transition-colors">
                                    {copied ? 'Copiato' : 'Copia'}
                                </button>
                            </div>
                            <a 
                                href={exitLink} 
                                target="_blank" 
                                rel="nofollow noopener"
                                className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg w-full sm:w-auto text-center"
                            >
                                Visita {operator.name}
                            </a>
                        </div>
                    </div>
                    
                    {/* Visual Process Steps */}
                    <div className="w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-10">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Come attivare il bonus:</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <div className="w-6 h-6 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><UserPlus size={12}/></div>
                                <span>Registrati inserendo <strong>{operator.promoCode}</strong></span>
                            </li>
                            <li className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <div className="w-6 h-6 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><ShieldCheck size={12}/></div>
                                <span>Invia il documento (Verifica ADM)</span>
                            </li>
                            <li className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <div className="w-6 h-6 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><CreditCard size={12}/></div>
                                <span>Effettua il primo deposito qualificante</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
            <div className="grid md:grid-cols-12 gap-12">
                
                {/* Main Text */}
                <div className="md:col-span-8 space-y-10">
                    <div className="prose prose-slate dark:prose-invert max-w-none text-sm md:text-base
                        prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50 
                        prose-blockquote:border-l-4 prose-blockquote:border-brand-500 
                        prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                        prose-h3:text-2xl prose-h3:font-black prose-h3:text-slate-900 dark:prose-h3:text-white
                        prose-h4:text-lg prose-h4:font-bold prose-h4:text-slate-800 dark:prose-h4:text-slate-200
                        prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed">
                        {/* Render Description */}
                        <div dangerouslySetInnerHTML={{__html: operator.promoLongDescription || operator.fullReview}}></div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-4 space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 sticky top-24">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Dettagli Chiave</h4>
                        <ul className="space-y-3 text-xs">
                            <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="text-slate-500">Licenza GAD</span>
                                <span className="font-mono text-slate-900 dark:text-white">{operator.licenseNumber.split(' ')[2]}</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="text-slate-500">Deposito Minimo</span>
                                <span className="font-bold text-slate-900 dark:text-white">10€</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="text-slate-500">Scadenza Promo</span>
                                <span className="font-bold text-slate-900 dark:text-white">31 Dic 2026</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </>
  );
};
