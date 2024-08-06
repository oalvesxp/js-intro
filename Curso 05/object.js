const user = {
    name:       'Juliana',
    email:      'juliana@email.com',
    birthdate:  '1997-02-26',
    role:       'student',
    status:     true,   // default
    getInfo: function() {
        console.log(
            this.name, 
            this.email, 
            this.birthdate,
            this.role,
            this.status
        );
    }
}