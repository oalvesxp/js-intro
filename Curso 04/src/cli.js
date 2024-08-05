import fs from 'fs'
import errors from './entity/errors.js'
import { countWords } from './index.js';

const dir = process.argv;
const link = dir[2];
const path = dir[3];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
        const result = countWords(data);
        saveFile (result, path);
    } catch (err){
        errors(err);
    }
    
});

/** Salvando arquivo com async e await */
/** Forma mais simples de fazer (conhecido como açucar sintático) */
// async function saveFile(wordsList, path) {
//     const newFile = `${path}/result.txt`;
//     const words = JSON.stringify(wordsList);
    
//     try {
//         await fs.promises.writeFile(newFile, words);
//         console.log('Arquivo salvo');
//     } catch (err) {
//         throw err;
//     }
// }

/** requisição asincrona com then */
function saveFile(wordsList, path) {
    const newFile = `${path}/result.txt`;
    const words = JSON.stringify(wordsList);

    fs.promises.writeFile(newFile, words)
        .then(() => {
            /** processamento realizado com o resultado do promise */
            console.log('Arquivo criado');
        })
        .catch((err) => {
            throw err;
        })
        .finally(() => console.log('Operação finalizada'));
}

/** node .\src\cli.js '.\files\texto-kanban.txt' */
