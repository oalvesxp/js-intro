const student = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript',
    addresses: [{
        road: 'Rua Dom pedro II',
        number: '64',
        cep: '15134186',
        neighborhood: 'Jd. Amanda',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        info: 'Próximo ao bar do Zé.'
    }]
};

/** Adicionando um Endereço Secundário a lista de objetos 'addresses' do 'student' */
student.addresses.push({
    road: 'Rua Papa II',
    number: '32',
    cep: '25136189',
    neighborhood: 'Jd. Carlos',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'Brasil',
    info: null
});

console.log(student.addresses);
console.log(student.addresses[0]);

const addressWithoutInfo = student.addresses.filter((adress) => !adress.info);

console.log(addressWithoutInfo);
