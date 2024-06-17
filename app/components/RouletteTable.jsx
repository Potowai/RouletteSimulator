'use client';

import React from 'react';

const RouletteTable = ({ handleClick, renderBet }) => {
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
    <div className="flex justify-center mt-2">
      <div className="bg-gray-800 p-2 rounded-lg">
        <div className="flex justify-center items-center bg-gray-700 rounded-r-lg relative">
          <div className="relative flex items-center justify-center bg-green-600 rounded cursor-pointer m-1 w-10 lg:h-80 md:h-60 h-52" onClick={() => handleClick('number', 0)}>
            <div className="text-white md:text-2xl font-bold p-2">0</div>
            {renderBet('number', 0)}
          </div>
          <div className="grid grid-cols-12 gap-2 p-1">
            {numberRows[0].map((number) => (
              <div key={number} className={`relative ${getColorClass(number)} text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} onClick={() => handleClick('number', number)}>
                {number}
                {renderBet('number', number)}
              </div>
            ))}
            {numberRows[1].map((number) => (
              <div key={number} className={`relative ${getColorClass(number)} text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} onClick={() => handleClick('number', number)}>
                {number}
                {renderBet('number', number)}
              </div>
            ))}
            {numberRows[2].map((number) => (
              <div key={number} className={`relative ${getColorClass(number)} text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} onClick={() => handleClick('number', number)}>
                {number}
                {renderBet('number', number)}
              </div>
            ))}
            <div className="col-span-4 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('dozen', '1st12')}>
                1st12
                {renderBet('dozen', '1st12')}
              </div>
            </div>
            <div className="col-span-4 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('dozen', '2nd12')}>
                2nd12
                {renderBet('dozen', '2nd12')}
              </div>
            </div>
            <div className="col-span-4 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('dozen', '3rd12')}>
                3rd12
                {renderBet('dozen', '3rd12')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('section', '1to18')}>
                1to18
                {renderBet('section', '1to18')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('section', 'EVEN')}>
                EVEN
                {renderBet('section', 'EVEN')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-red-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('color', 'red')}>
                RED
                {renderBet('color', 'red')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-black text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('color', 'black')}>
                BLACK
                {renderBet('color', 'black')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('section', 'ODD')}>
                ODD
                {renderBet('section', 'ODD')}
              </div>
            </div>
            <div className="col-span-2 relative flex items-center justify-center">
              <div className="bg-gray-600 text-white md:text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full h-8 md:h-10 lg:h-16" onClick={() => handleClick('section', '19to36')}>
                19to36
                {renderBet('section', '19to36')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
