let name;
console.log(name);          /** Undefined */
console.log(typeof name);   /** Verificar o tipo da variável */

let age = null;
console.log(age);           /** Null */
console.log(typeof age);    /** Quando for Null é do tipo Object */

console.log(age + 27);      /** Quando for Null ele aceita atribuições numéricas */
console.log(name + 27);     /** Quando for Undefined ele não aceita atribuições numéricas, return NaN */