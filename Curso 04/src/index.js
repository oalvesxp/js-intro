export function countWords(text) {
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