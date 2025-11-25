
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { NEWS_ARTICLES, OPERATORS } from '../constants';
import { SEO } from '../components/SEO';
import { EnhancedOperatorCard } from '../components/EnhancedOperatorCard';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';

export const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = NEWS_ARTICLES.find(a => a.slug === slug);
  
  if (!article) return <Navigate to="/news" />;

  const relatedOperator = OPERATORS.find(op => op.id === article.relatedOperatorId);

  return (
    <>
      <SEO 
        title={`${article.title} - ItaliaScommesse`}
        description={article.excerpt}
      />
      
      <div className="bg-white dark:bg-slate-950 min-h-screen pb-16 transition-colors duration-300">
         {/* Article Header */}
         <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
               <Link to="/news" className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-brand-600 mb-6 transition-colors">
                  <ChevronLeft size={16}/> Torna alle News
               </Link>
               
               <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wide">
                     {article.category}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">•</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-1">
                     <Calendar size={12}/> {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric'})}
                  </span>
               </div>

               <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                  {article.title}
               </h1>
               
               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  {article.excerpt}
               </p>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
               <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                  prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-strong:text-brand-600 dark:prose-strong:text-brand-400
                  prose-a:text-brand-600 hover:prose-a:text-brand-500
               ">
                  <div dangerouslySetInnerHTML={{__html: article.content}} />
               </div>
            </div>

            {/* Sidebar with Related Operator */}
            <div className="lg:col-span-4 space-y-8">
               {relatedOperator && (
                  <div className="sticky top-24">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Operatore Correlato</h3>
                     <EnhancedOperatorCard operator={relatedOperator} variant="promo" />
                     
                     <div className="mt-8 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Perché leggere questa guida?</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                           I nostri articoli sono scritti da esperti che testano manualmente i processi di registrazione per garantire che tu non perda il bonus.
                        </p>
                     </div>
                  </div>
               )}
            </div>

         </div>
      </div>
    </>
  );
};
