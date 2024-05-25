// app/page.tsx
'use client';

import React, { useState } from 'react';
import Roulette from './components/Roulette';
import MethodForm from './components/MethodForm';
import Result from './components/Result';
import History from './components/History';

const Home = () => {
  const [methods, setMethods] = useState([]);
  const [results, setResults] = useState({ wins: 0, losses: 0 });
  const [history, setHistory] = useState([]);

  const addMethod = (method) => {
    setMethods([...methods, method]);
  };

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  const updateHistory = (newSpins) => {
    setHistory(newSpins);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 text-black">
      <h1 className="text-3xl font-bold mb-8">Simulation de Roulette</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <MethodForm addMethod={addMethod} />
          <Roulette methods={methods} updateResults={updateResults} updateHistory={updateHistory} />
          <Result results={results} />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <History spins={history} />
        </div>
      </div>
    </div>
  );
};

export default Home;
