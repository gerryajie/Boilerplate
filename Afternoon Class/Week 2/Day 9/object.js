let people = {
  1234567890: {
    name: 'Yosias Ignatius',
    address: ['Jakarta', 'Denpasar'],
    pets: [
      { name: 'Gery', type: 'Cat' },
      { name: 'Daniel', type: 'Cow' },
    ],
  },
  2345678901: {
    name: 'Fidoni Agusta',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Dena', type: 'Cat' },
      { name: 'Muhazi', type: 'Cat' },
    ],
  },
  3456789012: {
    name: 'Fahmi Alfareza',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Syafa', type: 'Cat' },
      { name: 'Yusril', type: 'Cat' },
    ],
  },
};

let peopleArray = [];
for (property in people) {
  peopleArray.push({ id: property, ...people[property] });
}
console.log(peopleArray);

let student = { name: 'Dena' };
student = {
  address: 'Cianjur',
  age: 27,
  ...student,
};
console.log(student);

let students = ['Yosias', 'Daniel'];
students = ['Mishar', ...students, 'Gery'];
console.log(students);
