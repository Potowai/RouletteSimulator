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
  const [results, setResults] = useState({mise : 0, gains : 0, solde: 50});
  const [history, setHistory] = useState([]);
  const [numSpins, setNumSpins] = useState(1); // Nombre de lancers

  const addMethod = (method) => {
    const existingMethodIndex = methods.findIndex(
      (m) => m.type === method.type && m.value === method.value
    );

    if (existingMethodIndex !== -1) {
      const updatedMethods = [...methods];
      updatedMethods[existingMethodIndex].amount += method.amount;
      setMethods(updatedMethods);
    } else {
      setMethods([...methods, method]);
    }
  };

  const handleClick = (type, value) => {
    addMethod({ type, value, amount: 1 });
  };

  const renderBet = (type, value) => {
    const key = `${type}-${value}`;
    const bet = methods.find((m) => m.type === type && m.value === value);
    if (bet) {
      return (
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm">
          {bet.amount}
        </div>
      );
    }
    return null;
  };

  const handleReset = () => {
    setMethods([]);
    setResults({ mise: 0, gains: 0, solde: 1 });
    setHistory([]);
    setNumSpins(1);
  };

  const handleSpinRoulette = () => {
    let updatedHistory = [...history];
    let updatedResults = { ...results };

    for (let i = 0; i < numSpins; i++) {
      const { winningNumber, newResults } = spinRoulette(methods, updatedHistory, updatedResults);
      updatedHistory.unshift(winningNumber);
      updatedResults = newResults;
    }

    setHistory(updatedHistory);
    setResults(updatedResults);
  };

  return (
    <div className="flex flex-col items-center">
      <RouletteTable handleClick={handleClick} renderBet={renderBet} />
      <div className="flex justify-between items-center mt-4 w-[100%]">
        <ResetButton handleReset={handleReset} />
        <SpinButton spinRoulette={handleSpinRoulette} />
      </div>
      <div className="my-4">
        <label className="text-white">Nombre de lancers:</label>
        <select
          className="ml-2 p-2 bg-gray-600 text-white rounded"
          value={numSpins}
          onChange={(e) => setNumSpins(parseInt(e.target.value))}
        >
          {[1, 5, 10, 15, 20, 30, 50, 100].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <Result results={results} />
      <History spins={history} />
    </div>
  );
};

export default Roulette;
