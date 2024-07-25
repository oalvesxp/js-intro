const rates = [8, 6.7, 9.2, 7.9];
let total = 0;

/** Bem diferente do foreach do PHP */
rates.forEach (
    function(rate) {
        total += rate;
    }
)

const avg = total / rates.length;

console.log(`A média de notas é: ${avg.toFixed(2)}`);