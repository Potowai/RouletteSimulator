'use client';

import React from 'react';

const ResetButton = ({ handleReset }) => {
  return (
    <button onClick={handleReset} className="px-4 py-2 bg-red-500 text-white rounded">
      Réinitialiser
    </button>
  );
};

export default ResetButton;
