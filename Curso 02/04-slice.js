const students = [
    'João V.',
    'Maria J.',
    'Julia B.',
    'Ana C.',
    'Fábio A.',
    'Renan C.',
    'Patrick R.',
    'Karen S.',
    'Luan C.',
    'Wellington C.'
];

const classOne = students.slice(0, students.length / 2);
const classTwo = students.slice(students.length / 2);

console.log(`Alunos da Sala 01: ${classOne}`);
console.log(`Alunos da Sala 02: ${classTwo}`);