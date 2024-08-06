const user = {
    name:       'Juliana',
    email:      'juliana@email.com',
    birthdate:  '1997-02-26',
    role:       'student',
    status:     true,   // default
    getInfo:    function() {
        console.log(
            this.name, 
            this.email, 
            this.birthdate,
            this.role,
            this.status
        );
    },
};

const admin = {
    name:       'Patricia',
    email:      'patricia@email.com',
    birthdate:  '1993-06-17',
    role:       'admin',
    status:     true,   // default
    addCourse:  function() {
        console.log('Criando curso');
    },
};

Object.setPrototypeOf(admin, user);
admin.addCourse();
admin.getInfo();
