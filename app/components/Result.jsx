'use client';

import React from 'react';

const Result = ({ results }) => {
  const total = results.wins - results.losses;
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-black">
      <h2 className="text-xl font-bold mb-4">Résultats</h2>
      <div className="text-lg">
        <p className="mb-2"><span className="font-bold">Gains:</span> {results.wins}€</p>
        <p className="mb-2"><span className="font-bold">Pertes:</span> {results.losses}€</p>
        <p className={`font-bold ${total >= 0 ? 'text-green-500' : 'text-red-500'}`}>Total: {total}€</p>
      </div>
    </div>
  );
};

export default Result;
