export default class User {
    #name;
    #email;
    #birthdate;
    #role;
    #active;
    
    constructor(
        name
        , email 
        , birthdate
        , role
        , active = true
    ) {
        this.#name       = name
        this.#email      = email
        this.#birthdate  = birthdate
        this.#role       = role || 'student'
        this.#active     = active
    }

    getInfo() {
        return `
            Nome:   ${this.#name}
            E-mail: ${this.#email}
            Nasc.:  ${this.#birthdate}
            Grupo:  ${this.#role}
            Ativo:  ${this.#active}
        `;
    }

    getName() {
        return this.#name;
    }
}
