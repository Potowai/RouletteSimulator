// app/components/Roulette.js
'use client';

import React, { useState } from 'react';

const Roulette = ({ methods, updateResults }) => {
  const [results, setResults] = useState([]);

  const spinRoulette = () => {
    let newResults = [];
    for (let i = 0; i < 100; i++) {
      const number = Math.floor(Math.random() * 37); // 0 à 36
      newResults.push(number);
    }
    setResults(newResults);
    calculateResults(newResults);
  };

  const calculateResults = (spins) => {
    let wins = 0;
    let losses = 0;

    methods.forEach(method => {
      spins.forEach(number => {
        if (method.type === 'number' && method.value === number) {
          wins += method.amount * 35;
        } else {
          losses += method.amount;
        }
      });
    });

    // Mettre à jour les résultats dans le parent
    updateResults({ wins, losses });
  };

  return (
    <div className="my-4">
      <button onClick={spinRoulette} className="px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700">
        Lancer la Roulette
      </button>
    </div>
  );
};

export default Roulette;
