function User (name, email) {
    this.name = name;
    this.email = email;

    this.getInfo = function() {
        return `${this.name}, ${this.email}`;
    }
}

const user = new User('Larissa', 'larissa@gmail.com');

console.log(user.getInfo());