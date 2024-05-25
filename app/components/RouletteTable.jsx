'use client';

import React from 'react';

const RouletteTable = ({ addMethod }) => {
  const handleClick = (type, number) => {
    addMethod({ type: type, value: number, amount: 1 });
  };


  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

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
        <div className="flex justify-center items-center bg-gray-700 rounded-r-lg">
            <div className="flex items-center justify-center bg-green-600 rounded cursor-pointer w-10 h-60 " onClick={() => handleClick('number', 0)}>
                <div className="text-white text-2xl font-bold">0</div>
            </div>
          <div className="grid grid-cols-12 gap-2 p-4">
            {numberRows[0].map((number) => (
              <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer`}  onClick={() => handleClick('number', number)}>{number}</div>
            ))}
            {numberRows[1].map((number) => (
              <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer`}  onClick={() => handleClick('number', number)}>{number}</div>
            ))}
            {numberRows[2].map((number) => (
              <div key={number} className={`${getColorClass(number)} text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer`}  onClick={() => handleClick('number', number)}>{number}</div>
            ))}
            <div className="col-span-4 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('dozen', '1st12')}>1st12</div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('dozen', '2nd12')}>2nd12</div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('dozen', '3rd12')}>3rd12</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('section', '1to18')}>1to18</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('section', 'EVEN')}>EVEN</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-red-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('color', 'red')}>RED</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-black text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('color', 'black')}>BLACK</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('section', 'ODD')}>ODD</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="bg-gray-600 text-white text-2xl font-bold flex items-center justify-center rounded cursor-pointer w-full"  onClick={() => handleClick('section', '19to36')}>19to36</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
