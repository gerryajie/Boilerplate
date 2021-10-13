let students = ['Daniel', 'Yosias', 'Mishar', 'Gerry'];
exports.thisClass = 'Backend';

/* The first way */
// module.exports = {
//   students,
//   thisClass,
// };
// Or
// module.exports.students = students;
// module.exports.athisClass = thisClass;
// Or
// module.exports = students;

/* The second way */
exports.students = students;
