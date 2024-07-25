const a = 'A';
const b = 'B';
const c = 10;
const d = 2;
const bool = false;

console.log('Operadores de comparação:')

console.log(`${a} == ${b}: ${a == b}`);     /** igual */
console.log(`${a} != ${b}: ${a != b}`);     /** diferente */
console.log(`${a} === ${b}: ${a === b}`);   /** estritamente igual */
console.log(`${a} !== ${b}: ${a !== b}`);   /** estritamente diferente */
console.log(`${c} > ${d}: ${c > d}`);       /** maior */
console.log(`${c} >= ${d}: ${c >= d}`);     /** maior ou igual */
console.log(`${c} < ${d}: ${c < d}`);       /** menor */
console.log(`${c} <= ${d}: ${c <= d}`);     /** menor ou igual */

console.log('\nOperadores lógicos:')

if (a != b && c > d) {
    console.log(`${a} != ${b} && ${c} > ${d} = true`);      /** AND : true + true = true */
    console.log(`${a} != ${b} && ${c} < ${d} = false`);     /** AND : true + false = false */
}

if (a == b || c > d) {
    console.log(`${a} == ${b} || ${c} > ${d} = true`);      /** OR : true + false = true */
    console.log(`${a} == ${b} || ${c} < ${d} = false`);     /** OR : false + false = false */
}

if (!bool) {
    console.log(`!true = false`);                           /** NOT : !true = false */
    console.log(`!false = true`);                           /** NOT : !false = true */
}