const objStudent = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript'
};

function getObject(object, info) {
    return object[info];
}

console.log(getObject(objStudent, 'name'));
console.log(getObject(objStudent, 'age'));
console.log(getObject(objStudent, 'pet'));  /** undefined : Propriedades que não são definidas não retornam erro */