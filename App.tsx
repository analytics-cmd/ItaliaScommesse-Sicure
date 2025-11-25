
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Reviews } from './pages/Reviews';
import { ReviewDetail } from './pages/ReviewDetail';
import { PromoCodes } from './pages/PromoCodes';
import { PromoCodeDetail } from './pages/PromoCodeDetail';
import { Legal } from './pages/Legal';
import { AuthorPage } from './pages/Author';
import { Guides } from './pages/Guides';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Quiz } from './pages/Quiz';
import { AiAssistant } from './components/AiAssistant';
import { StickyAd } from './components/StickyAd';
import { Breadcrumbs } from './components/Breadcrumbs';

function App() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Header 
          onOpenAi={() => setIsAiOpen(true)} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="flex-grow">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:operatorId" element={<ReviewDetail />} />
            <Route path="/promo-codes" element={<PromoCodes />} />
            <Route path="/promo-codes/:operatorId" element={<PromoCodeDetail />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/legal/:type" element={<Legal />} />
            <Route path="/author/:authorId" element={<AuthorPage />} />
          </Routes>
        </main>

        <StickyAd />
        <Footer />
        <AiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
