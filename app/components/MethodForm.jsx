// app/components/MethodForm.js
'use client';

import React, { useState } from 'react';

const MethodForm = ({ addMethod }) => {
  const [type, setType] = useState('number');
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setValue(e.target.value === 'color' ? 'red' : 0); // Définit la valeur par défaut en fonction du type
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMethod({ type, value, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md text-black space-y-4">
      <div>
        <label className="block text-gray-700">Type de Pari:</label>
        <select value={type} onChange={handleTypeChange} className="mt-1 block w-full">
          <option value="number">Numéro</option>
          <option value="color">Couleur</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Valeur:</label>
        {type === 'number' ? (
          <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value, 10))} className="mt-1 block w-full"/>
        ) : (
          <select value={value} onChange={(e) => setValue(e.target.value)} className="mt-1 block w-full">
            <option value="red">Rouge</option>
            <option value="black">Noir</option>
          </select>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Mise:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value, 10))} className="mt-1 block w-full"/>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded">Parier !</button>
    </form>
  );
};

export default MethodForm;
