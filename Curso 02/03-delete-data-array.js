const rates = [10, 6.5, 8, 7.5, 9.2];   /** notas */
rates.pop();                            /** Removendo dados de uma lista */

const avg = (rates[0] + rates[1] + rates[2] + rates[3]) / rates.length;   /** média */

console.log(rates);
console.log(avg.toFixed(2));