/** Declarando a função */
function getName () {
    console.log('Osvaldo A. Neto');
}

getName();  /** Executando a função */


/** Função com parâmetros | argumentos e retornos */
/** Funções declaradas possuem um recurso interno chamado Hoisting */
function sum (x, y) {
    return console.log(`${x} + ${y} = ${x + y}`);
}

sum(10, 15);    /** Passando valores para os parâmetros */

/** Expressão de função */
/** Expressão de funão não possuem o recurso de Hoisting */
const multiply = function (x, y) {
    return console.log(`${x} * ${y} = ${x * y}`);
}

multiply(4, 8);