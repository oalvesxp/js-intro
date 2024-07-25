const student = 'Osvaldo A. Neto';
const username = 'oalvesxp';
const text = 'Nosso lema é estudar bastante!';

/** console.log(student + " diz: '" + text + "'.");      Concatenando com + */
console.log(`${student} diz: '${text}'.`);          /** Concatenando com Template String */

const passwd = '@Senha123' + username.toUpperCase();
console.log(`Senha: ${passwd}`);