let students = ['Dhea', 'Hardi', 'Adi', 'Falah'];
exports.thisClass = 'Backend';

/* The first way */
// module.exports = {
//   students,
//   thisClass,
// };
// Or
// module.exports.students = students;
// Or
// module.exports = students;

/* The second way */
exports.students = students;
// exports.thisClass = thisClass;
