'use client';

import React, { useState } from 'react';

const Roulette = ({ methods, updateResults, updateHistory }) => {
  const [numSpins, setNumSpins] = useState(1);
  const [deposit, setDeposit] = useState(50);
  const [balance, setBalance] = useState(50);

  const spinRoulette = () => {
    let newResults = [];
    for (let i = 0; i < numSpins; i++) {
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

    const getDozen = (number) => {
      if (number === 0) return '0';
      if (number >= 1 && number <= 12) return '1st12';
      if (number >= 13 && number <= 24) return '2nd12';
      return '3rd12';
    };

    const isInSection = (number, section) => {
      switch (section) {
        case 'red':
          return getColor(number) === 'red';
        case 'black':
          return getColor(number) === 'black';
        case '1to18':
          return number >= 1 && number <= 18;
        case '19to36':
          return number >= 19 && number <= 36;
        case 'EVEN':
          return number !== 0 && number % 2 === 0;
        case 'ODD':
          return number % 2 !== 0;
        default:
          return false;
      }
    };

    methods.forEach(method => {
      spins.forEach(number => {
        if (method.type === 'number' && method.value === number) {
          wins += method.amount * 35;
        } else if (method.type === 'dozen' && method.value === getDozen(number)) {
          wins += method.amount * 3; // Pari douzaine paie 2 pour 1
        } else if (method.type === 'section' && isInSection(number, method.value)) {
          wins += method.amount * 2; // Exemple de paiement pour une section, ajustez selon vos besoins
        } else {
          losses += method.amount;
        }
      });
    });

    // Mettre à jour les résultats dans le parent
    updateResults({ wins, losses });
    setBalance(balance + wins - losses);
  };

  const handleDepositChange = (e) => {
    setDeposit(parseInt(e.target.value, 10));
    setBalance(parseInt(e.target.value, 10));
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-black">
      <div>
        <h2 className='text-xl font-bold mb-2'>Montant de Dépôt:</h2>
        <input
          type="number"
          value={deposit}
          onChange={handleDepositChange}
          className="mt-1 block w-full"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">Nombre de Tours:</h2>
      <select
        value={numSpins}
        onChange={(e) => setNumSpins(parseInt(e.target.value, 10))}
        className="mt-1 block w-full"
      >
        {[1, 5, 10, 15, 20, 30, 50, 100].map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
      <button onClick={spinRoulette} className="w-full px-4 py-2 my-2 bg-blue-500 text-white rounded">
        Lancer la Roulette
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Solde: {balance} €</h2>
      </div>
    </div>
  );
};

export default Roulette;
