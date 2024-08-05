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

/** node .\src\cli.js '.\files\texto-kanban.txt' */

/** Salvando arquivo */
async function saveFile(wordsList, path) {
    const newFile = `${path}/result.txt`;
    const words = JSON.stringify(wordsList);
    
    try {
        await fs.promises.writeFile(newFile, words);
        console.log('Arquivo salvo');
    } catch (err) {
        throw err;
    }
}
