const students = require( './12-students.json');

function orderBy(list, property) {
    return list.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;

        return 0;
    });
}

const listOrderBy = orderBy(students, 'nome');
console.log(listOrderBy);