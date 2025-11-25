
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { SEO } from '../components/SEO';
import { CheckCircle, XCircle, Trophy, RefreshCw, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  return (
    <>
      <SEO 
        title="Quiz Scommesse: Quanto ne sai di Betting? - ItaliaScommesse"
        description="Mettiti alla prova con il nostro quiz sul betting. Conosci il significato di Over 2.5, Rollover e Betting Exchange? Scoprilo ora."
      />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               <BrainCircuit size={16}/> Academy
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">Quiz Scommesse</h1>
            <p className="text-slate-600 dark:text-slate-400">Dimostra di essere un vero esperto.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden relative min-h-[400px]">
            
            {showScore ? (
              <div className="p-12 text-center h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-yellow-500 mb-6 mx-auto">
                   <Trophy size={48} fill="currentColor" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Quiz Completato!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                   Hai risposto correttamente a <strong className="text-brand-600 dark:text-brand-400">{score}</strong> su <strong>{QUIZ_QUESTIONS.length}</strong> domande.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto">
                    <button onClick={resetQuiz} className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <RefreshCw size={18}/> Riprova
                    </button>
                    <Link to="/guides" className="flex-1 bg-brand-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 transition-colors">
                        Studia le Guide
                    </Link>
                </div>
              </div>
            ) : (
              <div className="p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                   <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                      <span>Domanda {currentQuestion + 1} di {QUIZ_QUESTIONS.length}</span>
                      <span>{Math.round(((currentQuestion) / QUIZ_QUESTIONS.length) * 100)}%</span>
                   </div>
                   <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-600 transition-all duration-500" style={{width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`}}></div>
                   </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 leading-relaxed">
                   {QUIZ_QUESTIONS[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => {
                     let stateClass = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800";
                     if (isAnswered) {
                         if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
                             stateClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                         } else if (index === selectedOption) {
                             stateClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
                         } else {
                             stateClass = "border-slate-200 dark:border-slate-800 opacity-50";
                         }
                     } else if (selectedOption === index) {
                         stateClass = "border-brand-500 bg-brand-50";
                     }

                     return (
                        <button
                          key={index}
                          onClick={() => handleAnswerOptionClick(index)}
                          disabled={isAnswered}
                          className={`w-full text-left p-4 rounded-xl border-2 font-medium text-sm transition-all duration-200 flex items-center justify-between ${stateClass}`}
                        >
                          {option}
                          {isAnswered && index === QUIZ_QUESTIONS[currentQuestion].correctAnswer && <CheckCircle size={18} className="text-green-600" />}
                          {isAnswered && index === selectedOption && index !== QUIZ_QUESTIONS[currentQuestion].correctAnswer && <XCircle size={18} className="text-red-600" />}
                        </button>
                     );
                  })}
                </div>

                {isAnswered && (
                   <div className="mt-6 animate-in fade-in slide-in-from-bottom-4">
                       <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 text-sm text-blue-800 dark:text-blue-300 mb-4">
                          <strong>Spiegazione:</strong> {QUIZ_QUESTIONS[currentQuestion].explanation}
                       </div>
                       <button onClick={handleNextQuestion} className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
                          {currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'Vedi Risultato' : 'Prossima Domanda'}
                       </button>
                   </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
