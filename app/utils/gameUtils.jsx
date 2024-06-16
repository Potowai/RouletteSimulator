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
  
  export const spinRoulette = (methods, history, results) => {
  const newResults = { ...results, gains: 0, mise: 0 };
  const winningNumber = Math.floor(Math.random() * 37);

  methods.forEach((method) => {
    let methodGains = 0;
    if (method.type === 'number' && method.value === winningNumber) {
      methodGains = method.amount * 36;
    } else if (method.type === 'dozen' && method.value === getDozen(winningNumber)) {
      methodGains = method.amount * 3; // Pari douzaine paie 2 pour 1
    } else if (method.type === 'section' && isInSection(winningNumber, method.value)) {
      methodGains = method.amount * 2;
    } else if (method.type === 'color' && method.value === getColor(winningNumber)) {
      methodGains = method.amount * 2;
    }
    newResults.gains += methodGains;
    newResults.mise += method.amount;
    newResults.solde += methodGains - method.amount;
  });

  return { winningNumber, newResults };
};

  