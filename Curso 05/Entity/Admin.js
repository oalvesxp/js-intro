import User from "./User.js";

class Admin extends User {
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
}


const admin = new Admin(
    'Ricardo J. Tedeschi'
    , 'ricardo@gmail.com'
    , '1986-09-23'    
);

console.log(admin);
console.log(admin.getInfo());