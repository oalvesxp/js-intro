const rates = [8, 6.7, 9.2, 7.3];
let total = 0;

for (i = 0; i < rates.length; i++) {
    total += rates[i];
}

const avg = total / rates.length;

console.log(`A média de notas é: ${avg}`);