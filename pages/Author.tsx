import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AUTHORS, OPERATORS } from '../constants';
import { SEO } from '../components/SEO';
import { Twitter, Linkedin, Award, PenTool, BookOpen, Star } from 'lucide-react';
import { OperatorCard } from '../components/OperatorCard';

export const AuthorPage: React.FC = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const author = authorId ? AUTHORS[authorId] : null;

  if (!author) {
    return <Navigate to="/" />;
  }

  const authorReviews = OPERATORS.filter(op => op.authorId === author.id);

  return (
    <>
      <SEO 
        title={`${author.name} - Esperto Scommesse | ItaliaScommesse Sicure`}
        description={`Profilo e recensioni di ${author.name}, ${author.role}. Scopri l'esperienza e la metodologia di analisi dietro le recensioni di ItaliaScommesse.`}
      />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            
            {/* Profile Header */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 mb-16">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <img 
                                src={author.imageUrl} 
                                alt={author.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-3 -right-3 bg-brand-600 text-white p-2.5 rounded-full shadow-lg">
                            <Award className="w-6 h-6" />
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <div className="inline-block px-3 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                            {author.role}
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{author.name}</h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                            {author.bio}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                            {author.expertise.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href={author.socialLinks.twitter} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-brand-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href={author.socialLinks.linkedin} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-brand-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Reviews */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                    <PenTool className="w-6 h-6 text-brand-600" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recensioni Recenti</h2>
                </div>
                
                <div className="grid gap-6">
                    {authorReviews.length > 0 ? (
                        authorReviews.map(op => (
                            <div key={op.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6">
                                <img src={op.logoUrl} alt={op.name} className="w-16 h-16 object-contain p-2 bg-white rounded-lg shadow-sm" />
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{op.name}</h3>
                                    <p className="text-sm text-slate-500">Recensito il {new Date(op.reviewDate).toLocaleDateString('it-IT')}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <span className="font-bold text-lg dark:text-white">{op.rating}</span>
                                </div>
                                <Link to="/reviews" className="px-5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg font-bold text-sm transition-colors">
                                    Leggi
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 italic">Nessuna recensione pubblicata al momento.</p>
                    )}
                </div>
            </div>

            {/* Editorial Standards */}
            <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/20 flex gap-6">
                 <div className="shrink-0">
                     <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                 </div>
                 <div>
                     <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Garanzia Editoriale</h3>
                     <p className="text-sm text-blue-800 dark:text-blue-200/80 leading-relaxed">
                         Tutti gli articoli pubblicati da {author.name} sono sottoposti a un rigoroso processo di verifica fattuale. ItaliaScommesse Sicure garantisce che le opinioni espresse siano indipendenti e basate su test reali delle piattaforme di gioco.
                     </p>
                 </div>
            </div>
        </div>
      </div>
    </>
  );
};