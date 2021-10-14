let people = {
  1234567890: {
    name: 'Pranidya Luigi',
    address: ['Padang, West Sumatera', 'Batam, Riau'],
    pets: [
      { name: 'Agif', type: 'Cat' },
      { name: 'Hardi', type: 'Cow' },
    ],
  },
  2345678901: {
    name: 'Khairul Umam',
    address: ['Medan, North Sumatera', 'Sleman, Yogyakarta'],
    pets: [
      { name: 'Dhea', type: 'Cat' },
      { name: 'Fajar', type: 'Cat' },
    ],
  },
  3456789012: {
    name: 'Fahmi Alfareza',
    address: ['Magelang, Central Java', 'Sleman, Yogyakarta'],
    pets: [
      { name: 'Falah', type: 'Cat' },
      { name: 'Arsyad', type: 'Cat' },
    ],
  },
};

let newPeople = [];

for (const property in people) {
  newPeople.push({ id: property, ...people[property] });
}
console.log(newPeople);

/* ... */
let person = { name: 'Falah' };
person = {
  address: 'Jakarta',
  age: 10,
  ...person,
};
console.log(person);

let students = ['Dhea', 'Falah', 'Hardi'];
students = ['Fajar', ...students, 'Umam'];
console.log(students);
