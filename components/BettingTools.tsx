
import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, AlertTriangle } from 'lucide-react';

export const OddsConverter: React.FC = () => {
    const [decimal, setDecimal] = useState<string>('2.00');
    const [fractional, setFractional] = useState<string>('1/1');
    const [probability, setProbability] = useState<string>('50.0');

    // Helper: GCD for fractions
    const gcd = (a: number, b: number): number =>  b ? gcd(b, a % b) : a;

    const handleDecimal = (val: string) => {
        setDecimal(val);
        const d = parseFloat(val);
        if (!isNaN(d) && d > 1) {
            setProbability((100 / d).toFixed(1));
            // Fraction approx
            const top = (d - 1) * 100;
            const bot = 100;
            const common = gcd(Math.round(top), Math.round(bot));
            setFractional(`${Math.round(top)/common}/${Math.round(bot)/common}`);
        } else {
             setProbability('');
             setFractional('');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
             <div className="flex items-center gap-2 mb-4 text-brand-600 dark:text-brand-400 font-bold uppercase text-xs tracking-wider">
                 <RefreshCw size={14}/> Convertitore Quote
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div>
                     <label className="block text-xs font-bold text-slate-500 mb-1">Decimale (EU)</label>
                     <input 
                       type="number" 
                       value={decimal}
                       onChange={(e) => handleDecimal(e.target.value)}
                       className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 font-mono font-bold text-slate-900 dark:text-white"
                       step="0.01"
                     />
                 </div>
                 <div>
                     <label className="block text-xs font-bold text-slate-500 mb-1">Probabilità %</label>
                     <div className="w-full bg-slate-100 dark:bg-slate-700 border border-transparent rounded-lg px-3 py-2 font-mono text-slate-600 dark:text-slate-300">
                        {probability ? `${probability}%` : '-'}
                     </div>
                 </div>
                 <div>
                     <label className="block text-xs font-bold text-slate-500 mb-1">Frazionario (UK)</label>
                     <div className="w-full bg-slate-100 dark:bg-slate-700 border border-transparent rounded-lg px-3 py-2 font-mono text-slate-600 dark:text-slate-300">
                        {fractional || '-'}
                     </div>
                 </div>
             </div>
        </div>
    );
};

export const KellyCalculator: React.FC = () => {
    const [bankroll, setBankroll] = useState(1000);
    const [odds, setOdds] = useState(2.00);
    const [winProb, setWinProb] = useState(55); // Your estimate
    const [kellyStake, setKellyStake] = useState(0);

    useEffect(() => {
        // Formula: (bp - q) / b
        // b = odds - 1
        // p = probability (0.55)
        // q = 1 - p
        const b = odds - 1;
        const p = winProb / 100;
        const q = 1 - p;
        const f = (b * p - q) / b;
        
        let stake = f * bankroll;
        if (stake < 0) stake = 0;
        setKellyStake(stake);

    }, [bankroll, odds, winProb]);

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-xl border border-slate-700">
             <div className="flex items-center gap-2 mb-4 font-bold uppercase text-xs tracking-wider text-brand-400">
                 <Calculator size={14}/> Kelly Criterion Calculator
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                 <div>
                     <label className="block text-xs text-slate-400 mb-1">Bankroll (€)</label>
                     <input type="number" value={bankroll} onChange={e => setBankroll(Number(e.target.value))} className="w-full bg-slate-700 border-slate-600 rounded px-2 py-1 text-sm"/>
                 </div>
                 <div>
                     <label className="block text-xs text-slate-400 mb-1">Quota (Decimale)</label>
                     <input type="number" value={odds} onChange={e => setOdds(Number(e.target.value))} className="w-full bg-slate-700 border-slate-600 rounded px-2 py-1 text-sm" step="0.01"/>
                 </div>
                 <div>
                     <label className="block text-xs text-slate-400 mb-1">Tua Stima % Vittoria</label>
                     <input type="number" value={winProb} onChange={e => setWinProb(Number(e.target.value))} className="w-full bg-slate-700 border-slate-600 rounded px-2 py-1 text-sm"/>
                 </div>
             </div>

             <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600 flex justify-between items-center">
                 <div>
                     <div className="text-xs text-slate-400">Puntata Suggerita (Full Kelly)</div>
                     <div className="text-2xl font-bold font-mono text-green-400">€{kellyStake.toFixed(2)}</div>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-slate-400">% del Bankroll</div>
                    <div className="text-xl font-bold">{(kellyStake/bankroll * 100).toFixed(1)}%</div>
                 </div>
             </div>
             <div className="mt-3 flex gap-2 text-[10px] text-yellow-400 items-start bg-yellow-900/20 p-2 rounded">
                <AlertTriangle size={12} className="mt-0.5 flex-shrink-0"/>
                <p>Consiglio: I professionisti usano spesso il "Fractional Kelly" (dividi il risultato per 2 o 4) per ridurre la volatilità.</p>
             </div>
        </div>
    );
};

export const AsianHandicapVisualizer: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        <th className="p-3 rounded-tl-lg">Handicap</th>
                        <th className="p-3">Risultato Team</th>
                        <th className="p-3">Esito Scommessa</th>
                        <th className="p-3 rounded-tr-lg">Profitto</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                        <td className="p-3 font-bold text-brand-600">0 (DNB)</td>
                        <td className="p-3">Pareggio</td>
                        <td className="p-3"><span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">Void</span></td>
                        <td className="p-3 text-slate-500">Torna la puntata</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <td className="p-3 font-bold text-brand-600">-0.5</td>
                        <td className="p-3">Vince di 1</td>
                        <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Vinta</span></td>
                        <td className="p-3 text-green-600">100% Profitto</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                        <td className="p-3 font-bold text-brand-600">-1.0</td>
                        <td className="p-3">Vince di 1</td>
                        <td className="p-3"><span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">Void</span></td>
                        <td className="p-3 text-slate-500">Torna la puntata</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
