'use client';

import React from 'react';

const ResetButton = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="px-8 py-3 bg-slate-200 text-slate-600 font-bold uppercase tracking-wider rounded-full shadow hover:bg-slate-300 hover:text-slate-800 hover:scale-105 active:scale-95 transition-all duration-200"
    >
      Réinitialiser
    </button>
  );
};

export default ResetButton;
