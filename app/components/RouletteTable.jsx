'use client';

import React from 'react';

const RouletteTable = ({ addMethod }) => {
  const handleCellClick = (number) => {
    addMethod({ type: 'number', value: number, amount: 1 });
  };

  const handleSectionClick = (section) => {
    addMethod({ type: 'section', value: section, amount: 1 });
  };

  const handleDozenClick = (dozen) => {
    addMethod({ type: 'dozen', value: dozen, amount: 1 });
  };

  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

  const getColorClass = (number) => {
    if (number === 0) return 'bg-green-600';
    return redNumbers.includes(number) ? 'bg-red-600' : 'bg-black';
  };

  const numberRows = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  ];

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex bg-gray-700 rounded-r-lg">
          <div className="row-span-3 flex items-center justify-center bg-green-600 rounded cursor-pointer h-full" onClick={() => handleCellClick(0)}>
            <div className="text-white text-2xl font-bold p-8">0</div>
          </div>
        <div className="grid grid-cols-12 gap-2 p-4 ">
          {numberRows[0].map((number) => (
            <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer h-24`} onClick={() => handleCellClick(number)}>{number}</div>
          ))}
          {numberRows[1].map((number) => (
            <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer h-24`} onClick={() => handleCellClick(number)}>{number}</div>
          ))}
          {numberRows[2].map((number) => (
            <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer h-24`} onClick={() => handleCellClick(number)}>{number}</div>
          ))}
        </div>
      </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleDozenClick('1st12')}>1st12</div>
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleDozenClick('2nd12')}>2nd12</div>
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleDozenClick('3rd12')}>3rd12</div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('1to18')}>1to18</div>
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('EVEN')}>EVEN</div>
            <div className="bg-red-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('red')}>RED</div>
            <div className="bg-black text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('black')}>BLACK</div>
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('ODD')}>ODD</div>
            <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full py-8" onClick={() => handleSectionClick('19to36')}>19to36</div>
          </div>
        </div>
    </div>
  );
};

export default RouletteTable;
