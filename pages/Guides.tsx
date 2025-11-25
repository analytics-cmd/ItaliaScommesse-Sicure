
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { TrendingUp, PieChart, BookOpen, BrainCircuit, Target, AlertTriangle, Calculator, CheckCircle, HelpCircle, ArrowRight, MousePointerClick, Lock, Zap, Book, ChevronDown, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BETTING_GLOSSARY } from '../constants';
import { OddsConverter, KellyCalculator, AsianHandicapVisualizer } from '../components/BettingTools';

export const Guides: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'novice' | 'pro' | 'expert' | 'glossary'>('novice');
  const [fakeRichClicked, setFakeRichClicked] = useState(false);
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const toggleTerm = (term: string) => {
    if (expandedTerm === term) {
        setExpandedTerm(null);
    } else {
        setExpandedTerm(term);
    }
  };

  return (
    <>
      <SEO 
        title="La Scienza della Scommessa - Masterclass Completa 2026"
        description="La risorsa più completa sul web italiano per imparare a scommettere in modo professionale. Matematica, Psicologia, Strategie Avanzate e Strumenti Interattivi."
      />
      
      {/* Easter Egg Modal */}
      {fakeRichClicked && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300">
             <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl max-w-md text-center border-4 border-brand-600 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse"></div>
                 <AlertTriangle size={48} className="mx-auto text-yellow-500 mb-4" />
                 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">ERRORE 404: SOLDI FACILI NON TROVATI</h3>
                 <p className="text-slate-600 dark:text-slate-300 mb-6">
                     Se esistesse un bottone per diventare ricchi, non saremmo qui a scrivere guide. Le scommesse sono matematica, non magia. Torna a studiare!
                 </p>
                 <button 
                    onClick={() => setFakeRichClicked(false)}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
                 >
                    Ho capito, scusa Matteo.
                 </button>
             </div>
         </div>
      )}

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 font-sans pb-20">
        
        {/* HERO SECTION */}
        <div className="bg-slate-900 text-white relative overflow-hidden py-20 border-b border-slate-800">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-600 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 border border-brand-500/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                    <GraduationCap size={16}/> Academy Ufficiale
                 </div>
                 <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                    Scommettere non è <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">solo fortuna.</span>
                 </h1>
                 <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                    Benvenuto nel corso definitivo. Qui smontiamo i miti, analizziamo la matematica e ti diamo gli strumenti per non farti spennare dal banco.
                 </p>
                 
                 <div className="flex flex-wrap justify-center gap-4">
                     {['novice', 'pro', 'expert', 'glossary'].map((tab) => (
                         <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2
                                ${activeTab === tab 
                                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105' 
                                    : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
                         >
                            {tab === 'novice' && '1. Le Basi'}
                            {tab === 'pro' && '2. Strategia'}
                            {tab === 'expert' && '3. Avanzato'}
                            {tab === 'glossary' && 'Dizionario'}
                         </button>
                     ))}
                 </div>
             </div>
        </div>

        {/* CONTENT AREA */}
        <div className="max-w-5xl mx-auto px-4 py-16">
            
            {/* --- LEVEL 1: NOVICE --- */}
            {activeTab === 'novice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-center mb-12">
                        <h2>Capitolo 1: La Matematica (Noiosa ma Utile)</h2>
                        <p>Prima di mettere 1€, devi capire cosa stai comprando. Una quota non è un numero magico, è una probabilità prezzata.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 relative z-10">Cos'è una Quota?</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 relative z-10">
                                    È l'inverso della probabilità. Se la Juve ha il 50% di chance di vincere, la quota "onesta" sarebbe 2.00 (100/50).
                                    Il bookmaker però ti offre 1.90. Quel divario? È il loro profitto (Aggio).
                                </p>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl relative z-10">
                                    <p className="font-mono text-sm font-bold text-slate-700 dark:text-slate-200">Formula: 100 / Quota = Probabilità %</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* INTERACTIVE TOOL */}
                        <div>
                            <OddsConverter />
                            <p className="text-xs text-center text-slate-400 mt-2">Gioca con i numeri per capire la relazione.</p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/10 p-8 rounded-3xl border border-yellow-100 dark:border-yellow-900/30 flex gap-6 items-start">
                        <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-400 mb-2">L'Errore del Principiante</h3>
                            <p className="text-yellow-900/80 dark:text-yellow-200/80 leading-relaxed">
                                Molti pensano: "Ah, quota 1.10 è sicura!". Sbagliato. A quota 1.10 devi vincere il 91% delle volte solo per andare in pari. 
                                Nello sport, nulla è sicuro al 91%. Le "quote basse" sono spesso le trappole più grandi.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* --- LEVEL 2: PRO (STRATEGY) --- */}
            {activeTab === 'pro' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Capitolo 2: Gestione del Denaro</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Puoi essere il miglior pronosticatore del mondo, ma senza <span className="text-brand-600 font-bold">Bankroll Management</span> andrai rotto.
                        </p>
                    </div>

                    {/* KELLY CALCULATOR SECTION */}
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7 space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Il Criterio di Kelly</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                John Kelly Jr. era un fisico dei Bell Labs che ha inventato una formula per massimizzare la crescita del capitale a lungo termine. 
                                In parole povere: ti dice quanto puntare in base a <strong>quanto vantaggio hai sul banco</strong>.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500 flex-shrink-0" />
                                    <span className="text-slate-600 dark:text-slate-300">Se non hai vantaggio (Value), Kelly ti dice di puntare 0.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500 flex-shrink-0" />
                                    <span className="text-slate-600 dark:text-slate-300">Più alta è la tua sicurezza, più alta la puntata.</span>
                                </li>
                            </ul>
                            
                            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-2xl mt-6">
                                <h4 className="font-bold mb-2">La Regola del 3%</h4>
                                <p className="text-sm text-slate-500">
                                    Anche se Kelly dice di puntare il 20%, non farlo. La varianza ti ucciderà. I pro usano il "Kelly Frazionato" o un semplice tetto massimo (max 3% del bankroll per bet).
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <KellyCalculator />
                        </div>
                    </div>

                    {/* ASIAN HANDICAP EXPLAINER */}
                    <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Capire l'Asian Handicap</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                            È il segreto dei pro. Elimina il pareggio e riduce le opzioni a 2. Ecco come funziona visivamente:
                        </p>
                        <AsianHandicapVisualizer />
                    </div>
                </div>
            )}

            {/* --- LEVEL 3: EXPERT --- */}
            {activeTab === 'expert' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="bg-brand-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden text-center">
                        <div className="relative z-10">
                             <BrainCircuit size={48} className="mx-auto mb-4 text-brand-400" />
                             <h2 className="text-3xl md:text-5xl font-black mb-4">Benvenuto nel 1%</h2>
                             <p className="text-brand-200 max-w-2xl mx-auto text-lg">
                                 Qui non parliamo di "sensazioni". Parliamo di dati. Se sei qui per giocare la schedina della domenica, torna indietro.
                             </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                         {/* xG Card */}
                         <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-colors cursor-default group">
                             <TrendingUp className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Expected Goals (xG)</h3>
                             <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                 Il risultato finale mente. Gli xG no. Misurano la qualità delle occasioni create. Se una squadra perde 1-0 ma ha un xG di 2.45 contro 0.15, è stata sfortunata. 
                                 Nel lungo periodo, la fortuna svanisce e i dati restano. Scommetti sulla prestazione (xG), non sul risultato passato.
                             </p>
                         </div>

                         {/* CLV Card */}
                         <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-colors cursor-default group">
                             <Lock className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Closing Line Value (CLV)</h3>
                             <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                 Hai giocato la Juve a 2.00. La partita inizia e la quota è scesa a 1.80. Hai battuto il banco. 
                                 La "Closing Line" è la quota più precisa al mondo perché incorpora tutti i soldi e le info del mercato. Se batti costantemente la CLV, vincerai matematicamente nel lungo periodo.
                             </p>
                         </div>
                    </div>

                    {/* EASTER EGG BUTTON */}
                    <div className="text-center py-10">
                        <button 
                            onClick={() => setFakeRichClicked(true)}
                            className="text-xs text-slate-400 hover:text-red-500 transition-colors underline decoration-dotted"
                        >
                            Metodo segreto per vincere al 100% (Clicca qui)
                        </button>
                    </div>
                </div>
            )}

            {/* --- GLOSSARY --- */}
            {activeTab === 'glossary' && (
                <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center gap-3 mb-8">
                        <Book className="w-8 h-8 text-brand-600" />
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Il Vocabolario dello Scommettitore</h2>
                    </div>
                    
                    <div className="space-y-3">
                        {BETTING_GLOSSARY.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300
                                    ${expandedTerm === item.term ? 'border-brand-500 shadow-md ring-1 ring-brand-500' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}
                            >
                                <button 
                                    onClick={() => toggleTerm(item.term)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-bold text-slate-900 dark:text-white">{item.term}</span>
                                    <ChevronDown 
                                        className={`text-slate-400 transition-transform duration-300 ${expandedTerm === item.term ? 'rotate-180' : ''}`} 
                                    />
                                </button>
                                {expandedTerm === item.term && (
                                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm animate-in slide-in-from-top-2">
                                        {item.def}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA FOOTER */}
            <div className="mt-24 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">Hai studiato abbastanza?</h3>
                    <p className="text-slate-300 mb-8">Metti alla prova la tua conoscenza con il Quiz Ufficiale.</p>
                    <Link to="/quiz" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-xl hover:scale-105 transform duration-200">
                        Fai il Quiz <ArrowRight size={20}/>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};
