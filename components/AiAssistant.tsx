import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, ShieldAlert } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToAssistant } from '../services/geminiService';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Ciao! Sono il tuo Assistente per il Gioco Sicuro. Posso spiegarti termini come RTP, Rollover o darti informazioni sugli strumenti di autolimitazione. Come posso aiutarti oggi?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToAssistant(input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Servizio momentaneamente non disponibile. Verifica la chiave API o la connessione.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 pointer-events-none">
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm" onClick={onClose} style={{pointerEvents: 'auto'}} />
      
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto max-h-[85vh] sm:max-h-[600px] border border-slate-200 dark:border-slate-700">
        {/* Header */}
        <div className="bg-brand-600 dark:bg-brand-700 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Assistente Gioco Sicuro</h3>
              <p className="text-xs text-brand-100">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={onClose} className="text-brand-100 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 border-b border-yellow-100 dark:border-yellow-900/50 flex gap-2 text-xs text-yellow-800 dark:text-yellow-400">
          <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>Questo è un assistente automatico. Per emergenze legate alla dipendenza, contatta il numero verde 800 558 822.</p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-brand-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm'}
                ${msg.isError ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800' : ''}
              `}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm flex gap-1">
                 <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                 <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                 <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Es: Cos'è l'autoesclusione?"
              className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-900 dark:text-white placeholder-slate-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};