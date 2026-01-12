'use client';

import React from 'react';

const History = ({ spins }) => {
  // Limiter les spins aux 100 derniers
  const limitedSpins = spins.slice(0, 100);

  const getHotAndColdNumbers = (numbers) => {
    const counts = {};
    for (let i = 0; i <= 36; i++) {
      counts[i] = 0;
    }

    for (const number of numbers) {
      if (counts[number] !== undefined) {
        counts[number]++;
      }
    }

    const sortedNumbers = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const hotNumbers = sortedNumbers.slice(0, 5).map((item) => parseInt(item[0]));
    const coldNumbers = sortedNumbers.slice(-5).map((item) => parseInt(item[0]));
    return { hotNumbers, coldNumbers };
  };

  const getColor = (number) => {
    if (number === 0) return 'text-green-500';
    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    return redNumbers.includes(number) ? 'text-red-500' : 'text-black';
  };

  const { hotNumbers, coldNumbers } = getHotAndColdNumbers(limitedSpins);

  return (
    <div className="card-minimal p-8 w-full max-w-md my-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-6 text-slate-800 uppercase tracking-wide text-center">Historique</h2>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {limitedSpins.map((spin, index) => (
          <span key={index} className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg border-2 ${spin === 0 ? 'border-emerald-100 bg-emerald-50 text-emerald-600' :
              getColor(spin) === 'text-red-500' ? 'border-rose-100 bg-rose-50 text-rose-500' :
                'border-slate-200 bg-slate-100 text-slate-600'
            }`}>{spin}</span>
        ))}
      </div>
      {limitedSpins.length > 0 && (
        <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-50">
          <div>
            <h2 className="text-sm font-bold mb-3 text-rose-500 text-center uppercase tracking-wider">Chauds</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {hotNumbers.map((number, index) => (
                <span key={index} className="text-base font-semibold text-rose-400 bg-rose-50 px-2 py-1 rounded-md">{number}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-3 text-slate-400 text-center uppercase tracking-wider">Froids</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {coldNumbers.map((number, index) => (
                <span key={index} className="text-base font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{number}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
