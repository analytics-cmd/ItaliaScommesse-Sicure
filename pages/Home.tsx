
import React from 'react';
import { EnhancedOperatorCard } from '../components/EnhancedOperatorCard';
import { OPERATORS, TESTIMONIALS, NEWS_ARTICLES } from '../constants';
import { ArrowRight, ShieldCheck, Lock, BookOpen, Zap, MousePointerClick, UserPlus, CreditCard, TrendingUp, PieChart, Star, Activity, Clock, Newspaper, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <>
    <SEO 
      title="ItaliaScommesse Sicure 2026 - Analisi Brutalmente Oneste"
      description="Non le solite recensioni copia-incolla. Analizziamo i bookmaker ADM con dati reali, testiamo i prelievi e smascheriamo i bonus impossibili."
    />
    <div className="dark:bg-slate-950 transition-colors duration-300 font-sans">
      {/* Modern Clean Hero - Pro Betting Terminal Visual */}
      <section className="relative pt-6 pb-10 md:pt-12 md:pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-[10px] font-bold mb-4 border border-slate-200 dark:border-slate-700 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="tracking-wide uppercase">Analisi Live: Marzo 2026</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-[1.1] tracking-tight">
                  Basta scommettere <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">a caso.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Analizziamo i bookmaker legali (ADM) senza peli sulla lingua. Smontiamo i bonus impossibili e ti diciamo dove stanno le quote vere.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link to="/reviews" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold text-base transition-all hover:-translate-y-1 shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2">
                    Classifica Onesta <Zap className="w-4 h-4 fill-current" />
                  </Link>
                  <Link to="/promo-codes" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl font-bold text-base transition-all hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2">
                    Tutti i Bonus
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                   <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-600"/> Solo Siti Legali (ADM)</div>
                   <div className="flex items-center gap-1.5"><Activity size={14} className="text-brand-600"/> Testati con Soldi Veri</div>
                </div>
            </div>

            {/* Pro Betting Terminal Visualization */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000 mt-6 lg:mt-0">
               <div className="relative z-10 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 overflow-hidden transform rotate-y-3 hover:rotate-0 transition-transform duration-500">
                  {/* ... Terminal Content (kept same as previous for brevity) ... */}
                  <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                      <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">ITALIA_SCOMMESSE_SYSTEM_V2.0</div>
                  </div>
                   <div className="grid grid-cols-12 h-[320px]">
                      {/* Left: Match List */}
                      <div className="col-span-4 border-r border-slate-700 bg-slate-900/50 p-3 space-y-3">
                          <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">Partite Live</div>
                          {[
                              { time: '34\'', teams: 'Juve - Milan', score: '1-0', active: true },
                              { time: '12\'', teams: 'Inter - Roma', score: '0-0', active: false },
                              { time: 'HT', teams: 'Napoli - Lazio', score: '2-1', active: false },
                              { time: '88\'', teams: 'Real - Barca', score: '2-2', active: false },
                          ].map((m, i) => (
                              <div key={i} className={`p-2 rounded-lg cursor-pointer transition-colors ${m.active ? 'bg-brand-900/40 border border-brand-500/50' : 'hover:bg-slate-800 border border-transparent'}`}>
                                  <div className="flex justify-between text-[10px] mb-1">
                                      <span className={m.active ? 'text-green-400 animate-pulse' : 'text-slate-400'}>{m.time}</span>
                                      <span className="font-bold">{m.score}</span>
                                  </div>
                                  <div className="text-xs font-medium truncate">{m.teams}</div>
                              </div>
                          ))}
                      </div>

                      {/* Middle: Odds & Graph */}
                      <div className="col-span-5 p-4 bg-slate-900 relative">
                          <div className="text-xs font-bold text-slate-300 mb-1">Juventus vs Milan</div>
                          <div className="text-[10px] text-slate-500 mb-4">Serie A • Live Betting</div>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-slate-800 rounded p-1.5 text-center border border-slate-700 hover:bg-slate-700 cursor-pointer">
                                  <div className="text-[9px] text-slate-400">1</div>
                                  <div className="text-sm font-bold text-green-400">1.85 <span className="text-[8px]">▲</span></div>
                              </div>
                              <div className="bg-slate-800 rounded p-1.5 text-center border border-slate-700 hover:bg-slate-700 cursor-pointer">
                                  <div className="text-[9px] text-slate-400">X</div>
                                  <div className="text-sm font-bold text-slate-200">3.40</div>
                              </div>
                              <div className="bg-slate-800 rounded p-1.5 text-center border border-slate-700 hover:bg-slate-700 cursor-pointer">
                                  <div className="text-[9px] text-slate-400">2</div>
                                  <div className="text-sm font-bold text-red-400">4.50 <span className="text-[8px]">▼</span></div>
                              </div>
                          </div>
                          <div className="h-24 w-full flex items-end gap-1 border-b border-l border-slate-700 pb-1 pl-1">
                              {[20, 40, 35, 50, 65, 60, 80, 75, 90, 85, 95, 80, 70, 85, 90].map((h, i) => (
                                  <div key={i} className="flex-1 bg-brand-500/40 hover:bg-brand-400 transition-all rounded-t-[1px]" style={{height: `${h}%`}}></div>
                              ))}
                          </div>
                      </div>

                      {/* Right: Bet Slip */}
                      <div className="col-span-3 bg-slate-100 text-slate-900 p-3 flex flex-col">
                          <div className="text-[9px] font-bold uppercase tracking-wider mb-3 text-slate-500">Schedina</div>
                          <div className="flex-1">
                             <div className="bg-white p-2 rounded shadow-sm border border-slate-200 mb-2 relative">
                                 <div className="absolute -right-1 -top-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[8px]">×</div>
                                 <div className="text-[9px] font-bold text-slate-800">Juventus Vincente</div>
                                 <div className="flex justify-between items-center mt-1">
                                    <span className="text-[9px] text-slate-500">Quota</span>
                                    <span className="text-xs font-bold text-brand-600">1.85</span>
                                 </div>
                             </div>
                          </div>
                          <div className="mt-auto">
                              <div className="flex justify-between text-[9px] mb-1 font-medium">
                                  <span>Puntata:</span>
                                  <span>10€</span>
                              </div>
                              <div className="flex justify-between text-xs font-bold mb-2 text-green-700">
                                  <span>Vincita:</span>
                                  <span>18.50€</span>
                              </div>
                              <button className="w-full bg-brand-600 text-white text-[10px] font-bold py-2 rounded shadow-md hover:bg-brand-700">
                                  SCOMMETTI
                              </button>
                          </div>
                      </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* BEST ITALIAN BETTING SITES - Detailed List */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-600 dark:text-brand-400 font-bold uppercase text-xs tracking-widest">Top List</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Migliori Siti Scommesse Italiani (2026)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Abbiamo selezionato solo gli operatori che offrono un reale valore aggiunto: quote più alte, app più veloci o bonus più onesti. Ecco la classifica definitiva.
            </p>
          </div>

          <div className="space-y-6">
            {OPERATORS.slice(0, 5).map((op, index) => (
              <EnhancedOperatorCard key={op.id} operator={op} index={index + 1} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 font-bold text-brand-600 dark:text-brand-400 hover:underline">
              Vedi la classifica completa ({OPERATORS.length} Operatori) <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Latest News & Guides */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-brand-600"/> Ultime News & Guide
              </h2>
            </div>
            <Link to="/news" className="text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
               Vedi tutte <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ARTICLES.slice(0, 3).map((article) => (
              <Link key={article.id} to={`/news/${article.slug}`} className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                   <span className="bg-slate-100 dark:bg-slate-800 text-[10px] font-bold px-2 py-1 rounded uppercase text-slate-500">{article.category}</span>
                   <span className="text-[10px] text-slate-400">{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-brand-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ TEASER */}
      <section className="py-16 bg-brand-600 relative overflow-hidden text-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <BrainCircuit size={48} className="mx-auto mb-6 text-brand-200" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">Pensi di essere un esperto?</h2>
            <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
              Mettiti alla prova con il nostro Quiz sul Betting. Solo il 10% degli utenti risponde correttamente a tutte le domande su RTP, Rollover e Quote.
            </p>
            <Link to="/quiz" className="inline-block bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors shadow-xl">
               Inizia il Quiz
            </Link>
         </div>
      </section>

      {/* LONG FORM SEO CONTENT - "Betting in General" */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate dark:prose-invert">
          <h2>Scommesse Online in Italia: La Guida Definitiva</h2>
          <p>
            Il mercato delle scommesse sportive in Italia è uno dei più regolamentati e sicuri d'Europa. Grazie al lavoro dell'<strong>ADM (Agenzia delle Dogane e dei Monopoli)</strong>, gli scommettitori italiani possono godere di un ambiente di gioco legale, trasparente e controllato.
          </p>
          <h3>Come scegliere il miglior sito scommesse?</h3>
          <p>
            Non esiste il "miglior sito" in assoluto, ma esiste il miglior sito per <em>te</em>. Ecco i fattori chiave che consideriamo nelle nostre analisi:
          </p>
          <ul>
            <li><strong>Quote e Payout:</strong> Un payout del 95% significa che il bookmaker trattiene solo il 5% di margine. Più alto è il payout, più soldi vinci a lungo termine.</li>
            <li><strong>Palinsesto:</strong> Oltre alla Serie A, un buon bookmaker deve offrire mercati su tennis, basket e sport minori, con profondità di opzioni (Asian Handicap, Combo, ecc.).</li>
            <li><strong>Bonus Onesti:</strong> Diffida dalle cifre enormi con requisiti di puntata impossibili (es. Rollover 30x). Meglio un bonus piccolo ma sbloccabile (es. 100€ con Rollover 6x).</li>
            <li><strong>App Mobile:</strong> Nel 2026, scommettere da smartphone deve essere fluido. Le app di operatori come Stake e Eurobet hanno settato nuovi standard di velocità.</li>
          </ul>
          <h3>Sicurezza e Gioco Responsabile</h3>
          <p>
            ItaliaScommesse Sicure promuove solo ed esclusivamente operatori con licenza GAD. Questo significa che i tuoi fondi sono segregati dai conti aziendali dell'operatore e che le probabilità di vincita sono certificate. Giocare su siti illegali (.com) espone al rischio di chiusura del conto e mancato pagamento delle vincite, oltre a essere un reato amministrativo.
          </p>
        </div>
      </section>

    </div>
    </>
  );
};
