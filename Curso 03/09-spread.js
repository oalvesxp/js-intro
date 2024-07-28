const student = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript',
    cellphones: ['11912345678', '1150050330'],
    rateAverage: 7.9,
    approve: function(avg){return this.rateAverage >= avg ? true : false} ,
    addresses: [{
        road: 'Rua Dom pedro II',
        number: '64',
        cep: '15134186',
        neighborhood: 'Jd. Amanda',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        info: 'Próximo ao bar do Zé.'
    },
    {
        road: 'Rua Papa II',
        number: '32',
        cep: '25136189',
        neighborhood: 'Jd. Carlos',
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brasil',
        info: null
    }]
};

function getCellphone(num01, num02) {
    console.log(`Ligar para: ${num01}`);
    console.log(`Ligar para: ${num02}`);
}

getCellphone(...student.cellphones);    /** spread */

const recipient = {
    name: student.name,
    // address: student.addresses[0]    /** em formato de objeto */
    ... student.addresses[0]            /** dados espalhados */
}

console.log(recipient);