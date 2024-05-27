'use client';

import React from 'react';

const History = ({ spins }) => {
  // Limiter les spins aux 100 derniers
  const limitedSpins = spins.slice(0, 100);

  const countOccurrences = (numbers) => {
    const counts = {};
    for (const number of numbers) {
      counts[number] = counts[number] ? counts[number] + 1 : 1;
    }
    return counts;
  };

  const getHotAndColdNumbers = (numbers) => {
    const counts = countOccurrences(numbers);
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
    <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded shadow-md w-full max-w-md ">
      <h2 className="text-xl font-bold mb-2">Historique</h2>
      <div className="flex flex-wrap">
        {limitedSpins.map((spin, index) => (
          <span key={index} className={`mr-2 font-black ${getColor(spin)}`}>{spin}</span>
        ))}
      </div>
      {limitedSpins.length > 0 && (
        <>
          <h2 className="text-xl font-bold mt-4">Numéros Chauds</h2>
          <div className="flex flex-wrap">
            {hotNumbers.map((number, index) => (
              <span key={index} className={`mr-2 font-black ${getColor(number)}`}>{number}</span>
            ))}
          </div>
          <h2 className="text-xl font-bold mt-4">Numéros Froids</h2>
          <div className="flex flex-wrap">
            {coldNumbers.map((number, index) => (
              <span key={index} className={`mr-2  font-black ${getColor(number)}`}>{number}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default History;
