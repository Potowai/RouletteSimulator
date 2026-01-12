const Result = ({ results }) => {
  return (
    <div className="card-minimal p-8 w-full max-w-md mt-8 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-wide text-center">Résultats</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <span className="text-slate-500 font-medium tracking-wide">Solde</span>
          <span className={`text-2xl font-bold ${results.solde >= 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
            {results.solde} €
          </span>
        </div>
        <div className="flex justify-between text-slate-600">
          <p><span className="font-semibold text-slate-400">Mise:</span> {results.mise}€</p>
          <p><span className="font-semibold text-slate-400">Gains:</span> {results.gains}€</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
