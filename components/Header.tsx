
import React, { useState } from 'react';
import { Menu, X, ShieldCheck, MessageCircleQuestion, Moon, Sun, Zap, ArrowRight, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OPERATORS } from '../constants';
import { getExitLink } from '../services/linkManager';

interface HeaderProps {
  onOpenAi: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAi, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stakeOperator = OPERATORS.find(op => op.id === 'stake-it');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recensioni', path: '/reviews' },
    { name: 'Codici Promo', path: '/promo-codes' },
    { name: 'News', path: '/news' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Guide', path: '/guides' },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800 sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative">
               <ShieldCheck className="h-9 w-9 text-brand-600 dark:text-brand-500 transition-transform group-hover:scale-110 duration-300" />
               <div className="absolute inset-0 bg-brand-400 blur-xl opacity-20 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">
                Italia<span className="text-brand-600 dark:text-brand-400">Scommesse</span>
              </h1>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Portale Autorizzato 2026</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm"
                >
                    {link.name}
                </Link>
                ))}
            </div>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              onClick={onOpenAi}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-95"
            >
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Assistente</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-200 hover:text-slate-900 focus:outline-none p-1"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-xl animate-in slide-in-from-top-5 z-50 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                {/* Exclusive Mobile Menu Offer: Stake.it */}
                {stakeOperator && (
                    <div className="mb-4 p-5 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg relative overflow-hidden border border-slate-700">
                        {/* Background Decorative Icon */}
                        <div className="absolute -top-2 -right-2 opacity-10 text-white">
                            <Gift size={100} />
                        </div>
                        
                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <span className="bg-brand-500 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">Esclusivo</span>
                            <img src={stakeOperator.logoUrl} alt="Stake" className="h-8 object-contain bg-white rounded px-2 py-1" />
                        </div>
                        
                        <h4 className="text-white font-bold text-lg mb-1 relative z-10">Bonus Benvenuto Stake</h4>
                        <p className="text-slate-300 text-xs mb-4 relative z-10">Ottieni il 100% fino a 500€ con il codice ufficiale.</p>
                        
                        <div className="flex gap-3 relative z-10">
                            <div className="bg-black/40 text-white font-mono font-bold px-3 py-2.5 rounded-xl border border-white/10 flex-1 text-center tracking-wider text-sm flex items-center justify-center">
                                {stakeOperator.promoCode}
                            </div>
                            <a 
                                href={getExitLink(stakeOperator.id)} 
                                target="_blank" 
                                rel="nofollow noopener" 
                                className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2.5 rounded-xl font-bold flex items-center justify-center transition-colors"
                            >
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                )}

                <button
                onClick={() => {
                    onOpenAi();
                    setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors"
                >
                <MessageCircleQuestion className="w-5 h-5" /> Chiedi all'Assistente AI
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
