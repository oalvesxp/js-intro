export default class User {
    constructor(
        name
        , email 
        , birthdate
        , role
        , active = true
    ) {
        this.name       = name
        this.email      = email
        this.birthdate  = birthdate
        this.role       = role || 'student'
        this.active     = active
    }

    getInfo() {
        return `
            Nome:   ${this.name}
            E-mail: ${this.email}
            Nasc.:  ${this.birthdate}
            Grupo:  ${this.role}
            Ativo:  ${this.active}
        `;
    }
}

const user = new User(
    'Osvaldo A. Neto'
    , 'oalves.neto@outlook.com'
    , '1997-02-26'
);

console.log(user);
console.log(user.getInfo());
console.log(User.prototype.isPrototypeOf(user));