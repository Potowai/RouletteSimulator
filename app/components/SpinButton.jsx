'use client';

import React from 'react';

const SpinButton = ({ spinRoulette }) => {
  return (
    <button onClick={spinRoulette} className="px-4 py-2 bg-yellow-500 text-white rounded">
      Lancer la roulette
    </button>
  );
};

export default SpinButton;
