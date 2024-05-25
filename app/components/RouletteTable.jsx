'use client';

import React from 'react';

const RouletteTable = ({ addMethod }) => {
  const handleCellClick = (number) => {
    addMethod({ type: 'number', value: number, amount: 1 });
  };

  const handleSectionClick = (section) => {
    addMethod({ type: 'section', value: section, amount: 1 });
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="flex">
          <div className="flex flex-col items-center justify-center bg-green-600 w-12 h-full rounded-l-lg">
            <div className="roulette-cell text-white text-lg font-bold p-4 cursor-pointer" onClick={() => handleCellClick(0)}>0</div>
          </div>
          <div className="grid grid-cols-12 gap-2 p-2 bg-gray-700 rounded-r-lg">
            {[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].map((number) => (
              <div key={number} className="roulette-cell bg-red-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer" onClick={() => handleCellClick(number)}>{number}</div>
            ))}
            {[2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].map((number) => (
              <div key={number} className="roulette-cell bg-black text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer" onClick={() => handleCellClick(number)}>{number}</div>
            ))}
            {[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].map((number) => (
              <div key={number} className="roulette-cell bg-red-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer" onClick={() => handleCellClick(number)}>{number}</div>
            ))}
            <div className="col-span-4 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('1st12')}>1st12</div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('2nd12')}>2nd12</div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('3rd12')}>3rd12</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('1to18')}>1to18</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('EVEN')}>EVEN</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-red-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('red')}>RED</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-black text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('black')}>BLACK</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('ODD')}>ODD</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="roulette-cell bg-gray-600 text-white text-lg font-bold flex items-center justify-center rounded cursor-pointer w-full py-4" onClick={() => handleSectionClick('19to36')}>19to36</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
