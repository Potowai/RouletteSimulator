'use client';

import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
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
  const [darkMode, setDarkMode] = useState(true);

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

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  const updateHistory = (newSpins) => {
    setHistory(newSpins);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-4 ${darkMode ? 'dark' : ''} text-black dark:text-white`}>
      <button
        className="absolute top-4 right-4 p-2 rounded-full focus:outline-none"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
      </button>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Simulation de Roulette</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-6xl">
        <div className="space-y-4 col-span-1 md:col-span-1">
          <MethodList methods={methods} />
          <Roulette methods={methods} updateResults={updateResults} updateHistory={updateHistory} resetMethods={resetMethods} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center">
          <RouletteTable addMethod={addMethod} />
        </div>
        <div className="space-y-4 col-span-1 md:col-span-1">
          <Result results={results} />
          <History spins={history} />
        </div>
      </div>
    </div>
  );
};

export default Home;
