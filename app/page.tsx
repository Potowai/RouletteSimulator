'use client';

import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Roulette from './components/Roulette';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col items-center p-4 ${darkMode ? 'dark' : ''} text-black dark:text-white`}>
      <button
        className="absolute top-4 right-4 p-2 rounded-full focus:outline-none"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
      </button>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Simulation de Roulette</h1>
      <Roulette />
    </div>
  );
};

export default Home;
