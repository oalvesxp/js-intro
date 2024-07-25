const calcIMC = (x, y) => {
    var z = (x / (y * y)).toFixed(2);
    return console.log(`IMC 01 (Peso / Altura²) = ${z}`);
}

calcIMC(65, 1.79);

/** Maneira simplificada de fazer arrow functions */
const imc = (x, y) => console.log(`IMC 02 (Peso / Altura²) = ${(x / (y * y)).toFixed(2)}`);     /** Não é necessário abrir um bloco e nem colocar o return */

imc(71.4, 1.83);