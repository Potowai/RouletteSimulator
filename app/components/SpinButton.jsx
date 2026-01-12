'use client';

import React from 'react';

const SpinButton = ({ spinRoulette }) => {
  return (
    <button
      onClick={spinRoulette}
      className="px-8 py-3 bg-blue-600 text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
    >
      Lancer la roulette
    </button>
  );
};

export default SpinButton;
