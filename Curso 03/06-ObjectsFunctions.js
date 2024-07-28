const student = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript',
    cellphones: ['11912345678', '1150050330'],
    rateAverage: 7.9,
    approve: function(avg){return this.rateAverage >= avg ? true : false}   /** Não da para ser uma arrow function por causa do this. (arrow functions não conseguem lidar com contextos) */
};

/** Passando a média para aprovação por parâmetro */
console.log(student.approve(7));