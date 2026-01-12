'use client';

import React, { useState } from 'react';
import SpinButton from './SpinButton';
import ResetButton from './ResetButton';
import RouletteTable from './RouletteTable';
import Result from './Result';
import History from './History';
import { spinRoulette } from '../utils/gameUtils';

const Roulette = () => {
  const [methods, setMethods] = useState([]);
  const [results, setResults] = useState({ mise: 0, gains: 0, solde: 50 });
  const [history, setHistory] = useState([]);
  const [numSpins, setNumSpins] = useState(1); // Nombre de lancers
  const [strategy, setStrategy] = useState('none'); // Stratégie sélectionnée

  const addMethod = (method) => {
    const existingMethodIndex = methods.findIndex(
      (m) => m.type === method.type && JSON.stringify(m.value) === JSON.stringify(method.value)
    );

    if (existingMethodIndex !== -1) {
      const updatedMethods = [...methods];
      updatedMethods[existingMethodIndex].amount += method.amount;
      updatedMethods[existingMethodIndex].initialBet += method.initialBet;
      setMethods(updatedMethods);
    } else {
      setMethods([...methods, method]);
    }
  };

  const handleClick = (type, value) => {
    addMethod({ type, value, amount: 1, win: true, initialBet: 1 });
  };

  const renderBet = (type, value) => {
    const key = `${type}-${JSON.stringify(value)}`;
    const bet = methods.find((m) => m.type === type && JSON.stringify(m.value) === JSON.stringify(value));
    if (bet) {
      return (
        <div key={key} className="absolute top-0 right-0 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-white z-20 pointer-events-none transform -translate-y-1/3 translate-x-1/3">
          {bet.amount}
        </div>
      );
    }
    return null;
  };

  const handleReset = () => {
    setMethods([]);
    setResults({ mise: 0, gains: 0, solde: 50 });
    setNumSpins(1);
  };

  const handleSpinRoulette = () => {
    let updatedHistory = [...history];
    let updatedResults = { ...results };
    console.log(strategy)
    for (let i = 0; i < numSpins; i++) {
      // Stop if balance is too low for current bet
      if (updatedResults.solde < currentMise) {
        break;
      }

      const { winningNumber, newResults, stop } = spinRoulette(methods, updatedHistory, updatedResults, strategy);
      updatedHistory.unshift(winningNumber);
      updatedResults = newResults;

      if (stop) {
        break;
      }
    }

    setHistory(updatedHistory);
    setResults(updatedResults);
  };

  const currentMise = methods.reduce((acc, m) => acc + m.amount, 0);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-7xl mx-auto p-4 transition-all duration-300">
      {/* Left Column: Table & Controls */}
      <div className="flex-1 flex flex-col items-center w-full">
        {/* Scaled Table Container using zoom for real layout scaling */}
        <div className="w-full flex justify-center" style={{ zoom: 0.65 }}>
          <RouletteTable handleClick={handleClick} renderBet={renderBet} />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4 w-full z-10 relative">
          <ResetButton handleReset={handleReset} />
          <SpinButton spinRoulette={handleSpinRoulette} />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-full max-w-2xl transition-all hover:shadow-md z-10 relative">
          <div className="flex items-center space-x-3">
            <label className="text-slate-700 font-medium">Nombre de lancers:</label>
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-2 bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-colors hover:bg-white"
                value={numSpins}
                onChange={(e) => setNumSpins(parseInt(e.target.value))}
              >
                {[1, 5, 10, 15, 20, 30, 50, 100].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <label className="text-slate-700 font-medium">Stratégie:</label>
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-2 bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-colors hover:bg-white"
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
              >
                <option value="none">Aucune</option>
                <option value="martingale">Martingale</option>
                <option value="fibonacci">Fibonacci</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Key Outputs */}
      <div className="w-full lg:w-[24rem] flex flex-col gap-6 shrink-0 lg:mt-6 transition-all duration-300">
        <Result results={{ ...results, mise: currentMise }} />
        <History spins={history} />
      </div>
    </div>
  );
};

export default Roulette;
