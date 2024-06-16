'use client';

import React from 'react';

const Result = ({ results }) => {
  console.log(results.gains)
  console.log(results.solde)
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Résultats</h2>
      <div className="text-lg">
        <p className={`font-bold ${results.solde >= 0 ? 'text-green-500' : 'text-red-500'}`}>Solde: {results.solde}€</p>
        <p className="mb-2"><span className="font-bold">Mise:</span> {results.mise}€</p>
        <p className="mb-2"><span className="font-bold">Gains:</span> {results.gains}€</p>
      </div>
    </div>
  );
};

export default Result;
