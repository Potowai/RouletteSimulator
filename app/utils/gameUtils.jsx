export const MAX_BET = 50000;

export const getColor = (number) => {
  if (number === 0) return 'green';
  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  return redNumbers.includes(number) ? 'red' : 'black';
};

export const getDozen = (number) => {
  if (number === 0) return '0';
  if (number >= 1 && number <= 12) return '1st12';
  if (number >= 13 && number <= 24) return '2nd12';
  return '3rd12';
};

export const isInSection = (number, section) => {
  switch (section) {
    case 'red':
      return getColor(number) === 'red';
    case 'black':
      return getColor(number) === 'black';
    case '1to18':
      return number >= 1 && number <= 18;
    case '19to36':
      return number >= 19 && number <= 36;
    case 'EVEN':
      return number !== 0 && number % 2 === 0;
    case 'ODD':
      return number % 2 !== 0;
    default:
      return false;
  }
};

const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

const getNextMartingaleBet = (initialBet, currentBet, win) => {
  const nextBet = win ? initialBet : currentBet * 2;
  return Math.min(nextBet, MAX_BET);
};

const getNextFibonacciBet = (history, initialBet) => {
  const losses = history.filter(h => h.win === false).length;
  const index = Math.max(0, losses - 2);
  return fibonacciSequence[index] * initialBet;
};


export const spinRoulette = (methods, history, results, strategy) => {
  const newResults = { ...results, gains: 0, mise: 0 };
  const winningNumber = Math.floor(Math.random() * 37);

  methods.forEach((method) => {
    let methodGains = 0;
    let amount = method.amount;

    if (method.type === 'number' && method.value === winningNumber) {
      methodGains = amount * 36;
    } else if (method.type === 'dozen' && method.value === getDozen(winningNumber)) {
      methodGains = amount * 3;
    } else if (method.type === 'section' && isInSection(winningNumber, method.value)) {
      methodGains = amount * 2;
    } else if (method.type === 'color' && method.value === getColor(winningNumber)) {
      methodGains = amount * 2;
    } else if (['split', 'street', 'corner', 'line', 'trio', 'top_line'].includes(method.type)) {
      if (method.value.includes(winningNumber)) {
        const multipliers = {
          split: 18,
          street: 12,
          corner: 9,
          line: 6,
          trio: 12,
          top_line: 9
        };
        methodGains = amount * multipliers[method.type];
      }
    }

    newResults.gains += methodGains;
    newResults.mise += amount;
    newResults.solde += methodGains - amount;

    method.win = methodGains > 0;

    // Strategy Logic
    if (strategy === 'martingale') {
      amount = getNextMartingaleBet(method.initialBet, method.amount, method.win);
    } else if (strategy === 'fibonacci') {
      // Note: Fibonacci logic might still be incomplete but user focused on Martingale.
      // Keeping existing structure but fixing potential NaN if needed (not requested).
      amount *= getNextFibonacciBet(history);
    }

    method.amount = Math.min(amount, MAX_BET);  // Mettez à jour la mise pour la prochaine rotation
    console.log(JSON.stringify(method))
  });

  const nextTotalBet = methods.reduce((acc, m) => acc + m.amount, 0);
  const stop = nextTotalBet > newResults.solde;

  return { winningNumber, newResults, stop };
};
