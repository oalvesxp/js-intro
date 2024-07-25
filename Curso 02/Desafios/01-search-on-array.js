const students = ['Osvaldo A. Neto', 'Patrick Rodrigues', 'Luan Cardoso', 'Karen Silva'];
const rates = [8.2, 7.5, 8.5, 7.8];

/**             []         [] */
const list = [students, rates];

function getRate (student) {
    /** if false */
    if (!list[0].includes(student)) {
        return console.log(`Não foi localizado o cadastro de '${student}'.`);
    }

    const [names, averages] = list;     /** Desestruturando array de arrays */

    const index = names[0].indexOf(student);
    const avg = averages[1][index];

    return console.log(`${student} sua nota é: ${avg}`);
}

getRate('Osvaldo A. Neto');
getRate('Luan Cardoso');
getRate('Danielle Verissímo');