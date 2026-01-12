const RouletteTable = ({ handleClick, renderBet }) => {
  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

  const getCellClass = (number) => {
    if (number === 0) return 'bg-emerald-100 text-emerald-800 shadow-sm';
    if (redNumbers.includes(number)) return 'bg-rose-100 text-rose-800 shadow-sm';
    return 'bg-slate-200 text-slate-800 shadow-sm';
  };

  const numberRows = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  ];

  // Helper to render hitboxes
  const RenderHitbox = ({ type, value, className, children }) => (
    <div
      className={`absolute z-10 cursor-pointer ${className} bg-transparent hover:bg-blue-400/40 transition-all duration-200 rounded-sm`}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(type, value);
      }}
    >
      {children}
      {renderBet(type, value)}
    </div>
  );

  return (
    <div className="flex justify-center mt-6 font-semibold select-none">
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100/50 inline-block">

        <div className="grid grid-cols-[max-content_repeat(12,1fr)] gap-1 text-slate-800">
          {/* 0 Section - Spans 3 Rows */}
          <div className={`row-span-3 relative flex items-center justify-center ${getCellClass(0)} w-12 sm:w-16 md:w-20 lg:w-24 rounded-l-xl shadow-sm cursor-pointer transition-transform hover:scale-[1.02] active:scale-95`}
            onClick={() => handleClick('number', 0)}>
            <span className="md:-rotate-90 text-xl md:text-3xl drop-shadow-sm">0</span>
            {renderBet('number', 0)}
          </div>

          {/* Grid Rows */}
          {numberRows.map((row, rowIndex) => (
            row.map((number, colIndex) => {
              const isTopRow = rowIndex === 0;
              const isBottomRow = rowIndex === 2;
              const isLastCol = colIndex === 11;

              return (
                <div key={number}
                  className={`relative ${getCellClass(number)} flex items-center justify-center transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:z-10 rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer`}
                  onClick={() => handleClick('number', number)}
                >
                  <span className="text-xl md:text-3xl drop-shadow-sm">{number}</span>
                  {renderBet('number', number)}

                  {/* Hitboxes (Splits, Corners, etc.) */}
                  {!isLastCol && (
                    <RenderHitbox type="split" value={[number, number + 3]} className="top-[10%] bottom-[10%] -right-2 w-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  )}
                  {!isBottomRow && (
                    <RenderHitbox type="split" value={[number, number - 1]} className="left-[10%] right-[10%] -bottom-2 h-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  )}
                  {!isLastCol && !isBottomRow && (
                    <RenderHitbox type="corner" value={[number, number - 1, number + 3, number + 2]} className="-bottom-3 -right-3 w-6 h-6 rounded-full hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  )}
                  {isTopRow && (
                    <RenderHitbox type="street" value={[number, number - 1, number - 2]} className="left-0 right-0 -top-3 h-4" />
                  )}
                  {isTopRow && !isLastCol && (
                    <RenderHitbox type="line" value={[number, number - 1, number - 2, number + 3, number + 2, number + 1]} className="-top-4 -right-3 w-6 h-6 rounded-full" />
                  )}

                  {/* 0 Adjacency Hitboxes */}
                  {colIndex === 0 && (
                    <>
                      <RenderHitbox type="split" value={[0, number]} className="top-[10%] bottom-[10%] -left-2 w-4" />
                      {!isBottomRow && (
                        <RenderHitbox type="trio" value={rowIndex === 0 ? [0, 2, 3] : [0, 1, 2]} className="-bottom-3 -left-3 w-6 h-6 rounded-full" />
                      )}
                      {number === 3 && (
                        <RenderHitbox type="basket" value={[0, 1, 2, 3]} className="-top-3 -left-3 w-6 h-6 rounded-full" />
                      )}
                    </>
                  )}
                </div>
              );
            })
          ))}
        </div>

        {/* Outside Bets Section */}
        <div className="grid grid-cols-[max-content_repeat(12,1fr)] gap-1 mt-1">
          {/* Spacer for 0 column */}
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 opacity-0 pointer-events-none"></div>

          {/* Dozens */}
          <div className="col-span-12 grid grid-cols-12 gap-1">
            {['1st12', '2nd12', '3rd12'].map(d => (
              <div key={d} className="col-span-4 bg-slate-50 border border-slate-200 py-3 flex justify-center items-center hover:bg-slate-100 hover:text-blue-600 cursor-pointer transition-all duration-200 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md text-sm md:text-base font-bold text-slate-600"
                onClick={() => handleClick('dozen', d)}>
                {d}
                {renderBet('dozen', d)}
              </div>
            ))}
          </div>

          {/* Spacer for 0 column (Row 2 of bets) */}
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 opacity-0 pointer-events-none"></div>

          {/* Even/Odd etc */}
          <div className="col-span-12 grid grid-cols-12 gap-1">
            {[
              { label: '1to18', type: 'section' }, { label: 'EVEN', type: 'section' },
              { label: 'RED', type: 'color', val: 'red', bg: 'bg-rose-500 text-white hover:bg-rose-600 border-none' },
              { label: 'BLACK', type: 'color', val: 'black', bg: 'bg-slate-800 text-white hover:bg-slate-900 border-none' },
              { label: 'ODD', type: 'section' }, { label: '19to36', type: 'section' }
            ].map(b => (
              <div key={b.label} className={`col-span-2 ${b.bg || 'bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200'} py-3 flex justify-center items-center cursor-pointer transition-all duration-200 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md uppercase tracking-wider text-xs md:text-sm font-bold text-slate-600`}
                onClick={() => handleClick(b.type, b.val || b.label)}>
                {b.label}
                {renderBet(b.type, b.val || b.label)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
