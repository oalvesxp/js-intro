const rates = [10, 6.5, 8];     /** notas */
rates.push(8.5);                /** Adicionando dados em uma lista */

const avg = (rates[0] + rates[1] + rates[2] + rates[3]) / rates.length;   /** média */


console.log(avg.toFixed(2));