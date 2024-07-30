const fs = require('fs');

const dir = process.argv;
const link = dir[2];

/** Criando um array de palavras */
/** Contar as ocorrências */
/** Montar um objeto com um resultado */
function wordsDoble(text) {
    const listWords = text.split(' ');
    const result = {};

    listWords.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    });

    console.log(result);
}

/** node '.\Curso 04\src\index.js' '.\Curso 04\files\texto-web.txt' */
/** lendo arquivo */
fs.readFile(link, 'utf-8', (err, data) => {
    if (err) throw err;
    wordsDoble(data);
});