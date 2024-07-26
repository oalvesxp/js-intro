const names = ['Ana', 'Ana', 'Marcos', 'Daniel', 'Daniel', 'Paula'];

/** Removendo dados repetidos */
const newNames = new Set(names);
console.log(newNames);

/** transformando conjunto Set em array novamente */
const namesArray = [...newNames];
console.log(namesArray);

/** fazendo todo o processo em uma unica variável */
const setToArray = [...new Set(names)];
console.log(setToArray);