/* The first way */
const fileA = require('../Export/fileA');
console.log(fileA.students);
console.log(fileA.thisClass);

/* The second way */
// const { students, thisClass } = require('./fileA');
// console.log(students);
// console.log(thisClass);
