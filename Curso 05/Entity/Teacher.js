import User from "./User.js";

export default class Teacher extends User {
    constructor(
        name
        , email 
        , birthdate
        , role = "teacher"
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

    approveStudent(student, curso){
        return `
            Aluno:      ${student}
            Vagas:      ${curso}
            Docente:    ${this.name}
            Status:     Aprovado!
        `;
    }
}
