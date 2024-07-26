const rates = [10, 8.5, 9.5, 4.5, 6.5];

/** diferente do foreach, precisa fazer o callback manual com return */
// const newRates = rates.map(
//     function (rate) {
//         return rate + 1;
//     }
// )

/** callback com arrow function */
// const newRates = rates.map((rate) => rate + 1); 

/** Operador ternário */
const newRates = rates.map((rate) => rate + 1 >= 10 ? 10 : rate + 1); 

console.log(newRates);