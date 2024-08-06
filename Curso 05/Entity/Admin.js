import User from "./User.js";

export default class Admin extends User {
    constructor(
        name
        , email 
        , birthdate
        , role = "admin"
        , active = true
    ) {
        super(
            name
            , email
            , birthdate
            , role
            , active
        );
    }

    addCourse(name, vacancies){
        return `
            Curso: ${name}
            Vagas: ${vacancies}
        `;
    }

    /** Override */
    getInfo() {
        const info = super.getInfo();
        return `Usuário Admin : ${info}`;
    }
}
