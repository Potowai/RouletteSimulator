// app/components/MethodForm.js
'use client';

import React, { useState } from 'react';

const MethodForm = ({ addMethod }) => {
  const [type, setType] = useState('number');
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMethod({ type, value, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700">Type de Pari:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full">
          <option value="number">Numéro</option>
          <option value="color">Couleur</option>
          {/* Ajouter d'autres types de paris ici */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Valeur:</label>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value, 10))} className="mt-1 block w-full bg-color-black"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Mise:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value, 10))} className="mt-1 block w-full"/>
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded dark:bg-green-700">Ajouter Méthode</button>
    </form>
  );
};

export default MethodForm;
