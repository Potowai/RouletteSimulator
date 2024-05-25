// app/page.tsx
'use client';

import React, { useState } from 'react';
import Roulette from './components/Roulette';
import MethodForm from './components/MethodForm';
import Result from './components/Result';
import useDarkMode from './hooks/useDarkMode';

const Home = () => {
  const [methods, setMethods] = useState([]);
  const [results, setResults] = useState({ wins: 0, losses: 0 });
  const [theme, setTheme] = useDarkMode();

  const addMethod = (method) => {
    setMethods([...methods, method]);
  };

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Basculer Mode {theme === 'dark' ? 'Clair' : 'Sombre'}
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Simulation de Roulette</h1>
      <MethodForm addMethod={addMethod} />
      <Roulette methods={methods} updateResults={updateResults} />
      <Result results={results} />
    </div>
  );
};

export default Home;
