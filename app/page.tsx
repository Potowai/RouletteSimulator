'use client';

import React, { useState } from 'react';
import Roulette from './components/Roulette';
import MethodForm from './components/MethodForm';
import Result from './components/Result';
import History from './components/History';
import MethodList from './components/MethodList';
import RouletteTable from './components/RouletteTable';

const Home = () => {
  const [methods, setMethods] = useState([]);
  const [results, setResults] = useState({ wins: 0, losses: 0 });
  const [history, setHistory] = useState([]);

  const addMethod = (method) => {
    setMethods([...methods, method]);
  };

  const resetMethods = () => {
    setMethods([]);
  };

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  const updateHistory = (newSpins) => {
    setHistory(newSpins);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 text-black">
      <h1 className="text-3xl font-bold mb-8">Simulation de Roulette</h1>
      <RouletteTable addMethod={addMethod} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="space-y-4">
          <MethodForm addMethod={addMethod} resetMethods={resetMethods} />
          <Roulette methods={methods} updateResults={updateResults} updateHistory={updateHistory} />
        </div>
        <div className="space-y-4">
          <MethodList methods={methods} />
          <Result results={results} />
          <History spins={history} />
        </div>
      </div>
    </div>
  );
};

export default Home;
