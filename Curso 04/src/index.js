const fs = require('fs');

const dir = process.argv;
const link = dir[2];

/** node '.\Curso 04\src\index.js' '.\Curso 04\files\texto-web.txt' */
/** lendo arquivo */
fs.readFile(link, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log(link);