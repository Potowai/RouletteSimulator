// app/components/Roulette.js
'use client';

import React, { useState } from 'react';

const Roulette = ({ methods, updateResults, updateHistory }) => {
  const spinRoulette = () => {
    let newResults = [];
    for (let i = 0; i < 100; i++) {
      const number = Math.floor(Math.random() * 37); // 0 à 36
      newResults.push(number);
    }
    updateHistory(newResults);
    calculateResults(newResults);
  };

  const calculateResults = (spins) => {
    let wins = 0;
    let losses = 0;

    const getColor = (number) => {
      if (number === 0) return 'green';
      const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
      return redNumbers.includes(number) ? 'red' : 'black';
    };

    methods.forEach(method => {
      spins.forEach(number => {
        if (method.type === 'number' && method.value === number) {
          wins += method.amount * 35;
        } else if (method.type === 'color' && method.value === getColor(number)) {
          wins += method.amount * 1; // Pari couleur paie 1 pour 1
        } else {
          losses += method.amount;
        }
      });
    });

    // Mettre à jour les résultats dans le parent
    updateResults({ wins, losses });
  };

  return (
    <div className="my-4 text-black">
      <button onClick={spinRoulette} className="px-4 py-2 bg-blue-500 text-white rounded">
        Lancer la Roulette
      </button>
    </div>
  );
};

export default Roulette;
