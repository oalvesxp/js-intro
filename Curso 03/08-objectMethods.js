const student = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript',
    // cellphones: ['11912345678', '1150050330'],
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

/** Métodos de objetos: key */
const keysObject = Object.keys(student);
console.log(keysObject);

if (!keysObject.includes('cellphones')) {
    console.error(`ERROR: é necessário cadastrar um endereço.`);
}

/** Array de valores do objetos */
const valuesObject = Object.values(student);
console.log(valuesObject);

/** Array de Chaves e Valores e objetos */
const entriesObject = Object.entries(student);
console.log(entriesObject);