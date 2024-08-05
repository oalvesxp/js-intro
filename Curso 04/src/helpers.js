function objectFilter(paragraph) {
    return Object.keys(paragraph).filter((key) => paragraph[key] > 1);
}

function output(wordsList) {
    let text = '';
    wordsList.forEach((paragraph, i) => {
        const double = objectFilter(paragraph).join(', ');
        text += `Palavras duplicadas no parágrafo ${i + 1}: ${double} \n`;
    });
    
    return text;
}

export { output };