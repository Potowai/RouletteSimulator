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
  const [results, setResults] = useState({ wins: 0, losses: 0 });
  const [history, setHistory] = useState([]);
  const [balance, setBalance] = useState(50); // Solde initial
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

  const resetMethods = () => {
    setMethods([]);
  };

  const handleClick = (type, value) => {
    addMethod({ type, value, amount: 1 });
    setBalance(balance - 1); // Déduire 1 euro pour chaque mise
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
    setBalance(50); // Réinitialiser le solde
    setResults({ wins: 0, losses: 0 });
    setHistory([]);
  };

  const handleSpinRoulette = () => {
    let updatedHistory = [...history];
    let updatedResults = { ...results };
    let updatedBalance = balance;

    for (let i = 0; i < numSpins; i++) {
      const { newSpins, newResults } = spinRoulette(methods, updatedHistory, updatedResults);
      updatedHistory = newSpins;
      updatedResults = newResults;
      updatedBalance += newResults.wins - newResults.losses;
    }

    setHistory(updatedHistory);
    setResults(updatedResults);
    setBalance(updatedBalance);
  };

  return (
    <div className="flex flex-col items-center">
      <RouletteTable handleClick={handleClick} renderBet={renderBet} />
      <div className="flex justify-between items-center mt-4 bg-gray-600 ">
        <ResetButton handleReset={handleReset} />
        <div className="text-white text-xl">Solde: {balance}€</div>
        <SpinButton spinRoulette={handleSpinRoulette} />
      </div>
      <div className="mt-4">
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
