const ratesJS       = [7, 8, 6.5, 10, 4, 5.8, 8.3, 5.7, 9.2, 8.4];
const ratesJava     = [9, 4, 6.5, 5.4, 4, 6.8, 8.3, 5.7, 9.2, 8.4];
const ratesPython   = [5, 7, 6.5, 9, 4, 5.8, 3.3, 5.7, 7.2, 8.4];

/** Reduce precisa de um segundo parâmetro além da função */
function average(rates) {
    const total = rates.reduce(
        (acm, num) => {
            return acm + num;
        }, 0    /** Valor inicial do acumulador : acm */
    );

    const avg = total / rates.length;
    return avg.toFixed(2);
}

console.log(`Nota média da sala de JavaScript: ${average(ratesJS)}`);
console.log(`Nota média da sala de Java: ${average(ratesJava)}`);
console.log(`Nota média da sala de Python: ${average(ratesPython)}`);