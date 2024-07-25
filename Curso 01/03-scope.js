if (1 > 0) {
    var student = 'Caroline';   /** Escopo privado do bloco */
    console.log('O nome da estudante é ' + student);
}

student = 'Ana';    /** Escopo global */
console.log('O nome da estudante agora é ' + student + '\n');


let teacher;    /** Escopo global */
if (1 > 0) {
    teacher = 'Fábio';
    console.log('O nome do professor é ' + teacher);
}

console.log('O nome do professor continua sendo ' + teacher);