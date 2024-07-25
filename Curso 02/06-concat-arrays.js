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

const masterClass = classOne.concat(classTwo);

console.log(masterClass);
