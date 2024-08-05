import fs from 'fs'
import errors from './entity/errors.js'
import { countWords } from './index.js';

const dir = process.argv;
const link = dir[2];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
        countWords(data);

    } catch (err){
        errors(err);
    }
    
});

/** node .\src\cli.js '.\files\texto-kanban.txt' */
