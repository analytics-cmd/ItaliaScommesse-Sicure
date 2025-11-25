
import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ChevronRight, Newspaper } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <>
      <SEO 
        title="News e Guide Scommesse 2026 - ItaliaScommesse"
        description="Ultime notizie, guide alla registrazione e aggiornamenti sui bonus dei migliori siti scommesse italiani."
      />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6">
             <div>
                <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs">Magazine</span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">News & Guide</h1>
             </div>
             <div className="hidden md:block h-1 w-full max-w-xs bg-slate-200 dark:bg-slate-800 rounded-full mb-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {NEWS_ARTICLES.map((article) => (
                <article key={article.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                   {/* Image Container with Brand Logo */}
                   <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center p-8 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                       <img src={article.imageUrl} alt="" className="max-h-24 w-auto object-contain z-10 relative transition-transform duration-500 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <span className="absolute top-4 left-4 bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm text-brand-600 dark:text-brand-400">
                          {article.category}
                       </span>
                   </div>

                   <div className="p-6 flex-1 flex flex-col">
                       <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                          <span className="flex items-center gap-1"><Clock size={12}/> {new Date(article.date).toLocaleDateString()}</span>
                          <span className="flex items-center gap-1"><User size={12}/> Redazione</span>
                       </div>
                       
                       <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          <Link to={`/news/${article.slug}`}>
                            {article.title}
                          </Link>
                       </h2>
                       
                       <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6">
                          {article.excerpt}
                       </p>

                       <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                          <Link to={`/news/${article.slug}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600 flex items-center gap-2">
                             Leggi Articolo <ChevronRight size={16} className="text-brand-500" />
                          </Link>
                       </div>
                   </div>
                </article>
             ))}
          </div>

        </div>
      </div>
    </>
  );
};
