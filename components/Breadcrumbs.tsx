import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { OPERATORS } from '../constants';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on home page
  if (pathnames.length === 0) {
    return null;
  }

  const getName = (path: string, isLast: boolean) => {
    // Check if it's an operator ID
    const operator = OPERATORS.find(op => op.id === path);
    if (operator) return operator.name;

    // Translation map
    switch (path) {
        case 'reviews': return 'Recensioni';
        case 'promo-codes': return 'Codici Promo';
        case 'guides': return 'Guide Scommesse';
        case 'legal': return 'Legale';
        case 'author': return 'Autori';
        case 'terms': return 'Termini e Condizioni';
        case 'privacy': return 'Privacy Policy';
        case 'responsible': return 'Gioco Responsabile';
        case 'cookies': return 'Cookie Policy';
        default: return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-slate-400 hover:text-brand-600 transition-colors">
                <Home size={16} />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const name = getName(value, last);

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 mx-1" />
                  {last ? (
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-none">
                      {name}
                    </span>
                  ) : (
                    <Link to={to} className="text-xs font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};