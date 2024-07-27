const student = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript'
};

/** Aninhando outro objeto dentro do objeto 'student' */
student.address = {
    road: 'Rua Dom pedro II',
    number: '64',
    cep: '15134186',
    neighborhood: 'Jd. Amanda',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil'
}

console.log(student);
console.log(student.address);