const students = ['Osvaldo A. Neto', 'Patrick Rodrigues', 'Luan Cardoso', 'Karen Silva'];
const rates = [8.2, 7.5, 8.5, 7.8];

/**             []         [] */
const list = [students, rates];

console.log(list + '\n');
console.log(`${list[0][0]} sua nota é: ${list[1][3]}`);
console.log(`${list[0][1]} sua nota é: ${list[1][2]}`);
console.log(`${list[0][2]} sua nota é: ${list[1][0]}`);
console.log(`${list[0][3]} sua nota é: ${list[1][1]}`);