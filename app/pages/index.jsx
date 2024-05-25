// pages/index.js
import React, { useState } from 'react';
import Roulette from '../components/Roulette';
import MethodForm from '../components/MethodForm';
import Result from '../components/Result';

const Home = () => {
  const [methods, setMethods] = useState([]);
  const [results, setResults] = useState({ wins: 0, losses: 0 });

  const addMethod = (method) => {
    setMethods([...methods, method]);
  };

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div>
      <h1>Simulation de Roulette</h1>
      <MethodForm addMethod={addMethod} />
      <Roulette methods={methods} updateResults={updateResults} />
      <Result results={results} />
    </div>
  );
};

export default Home;
