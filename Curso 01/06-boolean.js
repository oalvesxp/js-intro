const student = 'Fernando C.';
let approve;

const rate01 = 5.5;
const rate02 = 7.6;
const rate03 = 8.2;
const rate04 = 9;

const avg = (rate01 + rate02 + rate03 + rate04) / 4;

if (avg >= 7.5) {
    approve = true;
    console.log(`Parabéns ${student}, você foi aprovado!`);
    console.log(`Sua nota média foi: ${avg.toFixed(2)}\n`);
} else {
    approve = false;
    console.log(`Sentimos muito ${student}, você foi reprovado!`);
    console.log(`Sua nota média foi: ${avg.toFixed(2)}\n`);
}

console.log(`Status: ${approve}`);