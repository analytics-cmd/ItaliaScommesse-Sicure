import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, ExternalLink, Map } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t-4 border-brand-600 font-sans">
      {/* ADM/Compliance Top Bar */}
      <div className="bg-black py-4 px-4 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center bg-white shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              <span className="text-black font-bold text-sm">18+</span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Il gioco d'azzardo è vietato ai minori
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-slate-800"></div>
          <p className="text-xs text-slate-500 max-w-xl leading-snug">
            Gioca responsabilmente. Il gioco può causare dipendenza patologica. Consulta le probabilità di vincita sul sito ufficiale dell'Agenzia delle Dogane e dei Monopoli (www.adm.gov.it).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xl font-extrabold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-500" /> ItaliaScommesse Sicure
            </h3>
            <p className="text-sm leading-relaxed mb-8 text-slate-400">
              Il portale di riferimento per la comparazione legale dei siti di scommesse in Italia. 
              Analizziamo solo operatori con regolare concessione GAD per garantire la tua sicurezza finanziaria e legale.
              Tutti i marchi citati appartengono ai legittimi proprietari.
            </p>
            <div className="text-xs bg-slate-900/50 p-5 rounded-xl border border-slate-800">
              <p className="font-bold text-slate-300 mb-1 uppercase tracking-wide text-[10px]">Operato da:</p>
              <p className="text-white font-semibold">NWG Ltd</p>
              <p>27 Mount Street Upper, Dublin 2, D02 F890, Ireland</p>
              <p className="mt-2 text-slate-500 font-mono">Email: italia@gamingmedia.com</p>
            </div>
          </div>
          
          {/* Links Column 1: Mappa del Sito */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-wider flex items-center gap-2">
                <Map size={14}/> Mappa del Sito
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Recensioni Bookmaker</Link></li>
              <li><Link to="/promo-codes" className="hover:text-white transition-colors">Codici Promozionali</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Guide Scommesse</Link></li>
              <li><Link to="/author/matteo-rinaldi" className="hover:text-white transition-colors">Chi Siamo (Redazione)</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Legal */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-wider flex items-center gap-2">
                <Scale size={14}/> Legale & Compliance
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/terms" className="hover:text-brand-400 transition-colors">Termini e Condizioni</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy (GDPR)</Link></li>
              <li><Link to="/legal/cookies" className="hover:text-brand-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/legal/responsible" className="hover:text-brand-400 transition-colors font-bold text-brand-500">Gioco Responsabile</Link></li>
              <li className="pt-2 border-t border-slate-900 mt-2">
                  <a href="https://www.adm.gov.it" target="_blank" rel="noreferrer nofollow" className="hover:text-white transition-colors flex items-center gap-2 text-xs">
                    Sito Ufficiale ADM <ExternalLink size={10}/>
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logos Bar (Translated) */}
        <div className="border-t border-slate-900 pt-10 flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="h-12 w-28 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] font-bold border border-slate-800 text-slate-500 uppercase">Certificato ADM</div>
           <div className="h-12 w-28 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] font-bold border border-slate-800 text-slate-500 uppercase">Solo 18+</div>
           <div className="h-12 w-28 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] font-bold border border-slate-800 text-slate-500 uppercase">Gioca Giusto</div>
           <div className="h-12 w-28 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] font-bold border border-slate-800 text-slate-500 uppercase">Sicurezza SSL</div>
        </div>

        <div className="mt-10 text-center text-[10px] text-slate-600 border-t border-slate-900 pt-6">
          <p>&copy; 2026 NWG Ltd. Tutti i diritti riservati. Vietata la riproduzione anche parziale dei contenuti.</p>
        </div>
      </div>
    </footer>
  );
};