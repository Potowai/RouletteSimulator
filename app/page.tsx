'use client';

import React from 'react';
import Roulette from './components/Roulette';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-slate-800 bg-slate-50 relative">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-slate-900 drop-shadow-sm uppercase">
        Roulette <span className="text-blue-600">Simulator</span>
      </h1>
      <Roulette />
    </div>
  );
};

export default Home;
