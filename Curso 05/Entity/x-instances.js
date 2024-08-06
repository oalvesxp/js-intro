import User from './User.js';
import Admin from './Admin.js';
import Teacher from './Teacher.js';

/** Instanciando um usuário ESTUDANTE */
const user = new User(
    'Osvaldo A. Neto'
    , 'oalves.neto@outlook.com'
    , '1997-02-26'
);

console.log(user.getInfo());
user.active = false;
console.log(`
            Ativo: ${user.active}
`);


/** Instanciando um usuário ADMIN */
const admin = new Admin(
    'Ricardo J. Tedeschi'
    , 'ricardo@gmail.com'
    , '1986-09-23'    
);

console.log(admin.getInfo());
console.log(
    admin.addCourse(
        'JavaScript - Orientação a Objetos'
        , 30
    )
);

/** Instanciando um usuário DOCENTE */
const teacher = new Teacher(
    'Giusepina T. Adele'
    , 'osvaldo@gmail.com'
    , '1977-03-12'    
);

console.log(teacher.getInfo());
console.log(
    teacher.approveStudent(
        user.name
        , 'JavaScript - Orientação a Objetos'
    )
);