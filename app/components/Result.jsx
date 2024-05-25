// app/components/Result.js
'use client';

import React from 'react';

const Result = ({ results }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-4 w-full max-w-md text-black">
      <h2 className="text-xl font-bold mb-2">Résultats</h2>
      <p>Gains : {results.wins}</p>
      <p>Pertes : {results.losses}</p>
      <p>Total : {results.wins - results.losses}</p>
    </div>
  );
};

export default Result;
