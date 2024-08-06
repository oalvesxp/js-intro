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

    /** Private */
    #getObject() {
        return ({
            "nome": this.#name,
            "email": this.#email,
            "nasc": this.#birthdate,
            "grupo": this.#role,
            "status": this.#active
        })
    }

    getInfo() {
        const object = this.#getObject();

        return `
            Nome:   ${object.nome}
            E-mail: ${object.email}
            Nasc.:  ${object.nasc}
            Grupo:  ${object.grupo}
            Ativo:  ${object.status}
        `;
    }

    getName() {
        return this.#name;
    }
}
