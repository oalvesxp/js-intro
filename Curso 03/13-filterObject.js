const students = require( './12-students.json');

function filterProperties(list, property) {
    return list.filter((student) => {
        /*** Verifica a propriedade que nao tem valor dentro do endereço */
        return !student.endereco.hasOwnProperty(property)
    });
}

const withoutCPF = filterProperties(students, 'cep');
console.log(withoutCPF);