const student = require('./10-student.json');

/** convertendo para string */
const stringStudent = JSON.stringify(student);
console.log(stringStudent);
console.log(typeof stringStudent);

/** convertendo para json */
const ObjectJson = JSON.parse(stringStudent); 
console.log(ObjectJson.nome);
console.log(typeof ObjectJson);

