const students = ['Ana', 'Marcos', 'Daniel', 'Paula']; 
const rates = [9.5, 4.5, 6.5, 7.5];

/** Filtrando naomes menores que 4 caracteres */
const names = students.filter((name) => name.length < 4);
console.log(names);

/** Filtrando alunos aprovados */
const approve = students.filter((name, i) => rates[i] >= 7.5);
console.log(approve);