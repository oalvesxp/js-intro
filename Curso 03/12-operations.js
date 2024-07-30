const students = require( './12-students.json');

function getInfo(list, key, value) {
    /** Busca o valor da string ou entra no array para procurar o valor */
    return list.find((student) => student[key].includes(value));
}

const student = getInfo(students, 'nome', 'Olva');
console.log(student);

const phone = getInfo(students, 'telefone', '58996279799');
console.log(phone);