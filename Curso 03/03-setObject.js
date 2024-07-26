const objStudent = {
    name: 'Luan Cardoso',
    age: 23,
    cpf: '74514512553',
    class: 'JavaScript'
};

objStudent.birthdate = '26/07/2000';    /** Criando nova propriedada */
console.log(objStudent);

objStudent.birthdate = '12/04/1998';    /** Alterando propriedade */
console.log(objStudent);

const newOBJ = {};                      /** Criando objeto vazio */
newOBJ.name = 'Paulo Freitas';          /** Atribuindo propriedades */
console.log(newOBJ);