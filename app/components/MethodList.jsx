'use client';

import React from 'react';

const MethodList = ({ methods }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-black">
      <h2 className="text-xl font-bold mb-2">Méthodes Jouées</h2>
      {methods.length > 0 && (
        <ul>
          {methods.map((method, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">Type:</span> {method.type === 'number' ? `Numéro ${method.value}` : `Couleur ${method.value}`}, <span className="font-bold">Mise:</span> {method.amount}€
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MethodList;
