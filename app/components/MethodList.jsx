'use client';

import React from 'react';

const MethodList = ({ methods }) => {
  const getMethodDescription = (method) => {
    switch (method.type) {
      case 'number':
        return `Numéro ${method.value}`;
      case 'color':
        return `Couleur ${method.value}`;
      case 'section':
        return `Section ${method.value}`;
      case 'dozen':
        return `Douzaine ${method.value}`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">Méthodes Jouées</h2>
      {methods.length > 0 && (
        <ul>
          {methods.map((method, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">Type:</span> {getMethodDescription(method)} <span className="font-bold">Mise:</span> {method.amount}€
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MethodList;
