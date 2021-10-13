/* The first way */
// const fileA = require('../Export/fileA');
// console.log(fileA.thisClass);
// console.log(fileA.students[1]);

/* The second way */
const { students } = require('../Export/fileA');
console.log(students);
