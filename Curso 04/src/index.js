const fs = require('fs');

const dir = process.argv;
const link = dir[2];

/** node '.\Curso 04\src\index.js' '.\Curso 04\files\texto-web.txt' */
/** lendo arquivo */
fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
        countWords(data);

    } catch (err){
        if (err.code === 'ENOENT') console.log('Digite o caminho de um arquivo válido!');
        else console.log(err);
        
    }
    
});

function countWords(text) {
    const paragraphs = extractParagraphs(text);
    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];
        return wordsDoble(paragraph);
    });

    console.log(count);
}

function extractParagraphs(text) {
    return text.toLowerCase().split('\n');
}

/** Removendo caracteres especias por nada */
function cleanUp(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}  

/** Criando um array de palavras repetidas */
function wordsDoble(text) {
    const listWords = text.split(' ');
    const result = {};

    listWords.forEach(word => {
        if (word.length >= 3) {
            const clean = cleanUp(word);
            result[clean] = (result[clean] || 0) + 1;
        }
    });

    return result;
}