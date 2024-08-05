import fs from 'fs'
import path from 'path';
import errors from './entity/errors.js'

import { countWords } from './index.js';
import { output } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --file <string>', 'Arquivo para ser processado')
    .option('-d, --filePath <string>', 'Destino para salvar os resultados')
    .action((options) => {
        const {file, filePath} = options;

        if (!file || !filePath) {
            console.error('ERRO - Inserir arquivo e destino:\n -t [dir/arquivo.txt] -d [dir/]');
            program.help();
            return;
        }

        const origin = path.resolve(file);
        const destiny = path.resolve(filePath);

        try{
            processFile(origin, destiny);
            console.log(chalk.green('Texto processado com sucesso'));
        } catch(err){
            console.log(chalk.red('Ocorreu um erro no processamento', err));
        };
    }
);

program.parse();

/** Processando arquivo */
function processFile(file, filePath) {
    fs.readFile(file, 'utf-8', (err, data) => {
        try {
            if (err) throw err;
            const result = countWords(data);
            saveFile (result, filePath);
        } catch (err){
            errors(err);
        }
        
    });
};

/** Salvando resultado em arquivo */
async function saveFile(wordsList, filePath) {
    const newFile = `${filePath}/result.txt`;
    const words = output(wordsList);
    
    try {
        await fs.promises.writeFile(newFile, words);
        console.log(chalk.green('Arquivo salvo'));
    } catch (err) {
        throw err;
    }
}

/** exec: node .\src\cli.js -t '.\files\texto-kanban.txt' -d .\results\ */