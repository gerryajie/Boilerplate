let people = [
  {
    name: 'Pranidya Luigi',
    address: ['Padang, West Sumatera', 'Batam, Riau'],
    pets: [
      { name: 'Agif', type: 'Cat' },
      { name: 'Hardi', type: 'Cow' },
    ],
  },
  {
    name: 'Khairul Umam',
    address: ['Medan, North Sumatera', 'Sleman, Yogyakarta'],
    pets: [
      { name: 'Dhea', type: 'Cat' },
      { name: 'Fajar', type: 'Cat' },
    ],
  },
  {
    name: 'Fahmi Alfareza',
    address: ['Magelang, Central Java', 'Sleman, Yogyakarta'],
    pets: [
      { name: 'Falah', type: 'Cat' },
      { name: 'Arsyad', type: 'Cat' },
    ],
  },
];

// Filter
let slemanPeople = people.filter((person) =>
  person.address.includes('Sleman, Yogyakarta')
);
// slemanPeople = slemanPeople.map((person) => person.name);
console.log(slemanPeople);

// For
// let slemanPeopleFor = [];
// for (let i = 0; i < people.length; i++) {
//   for (let j = 0; j < people[i].address.length; j++) {
//     if (people[i].address[j] === 'Sleman, Yogyakarta') {
//       slemanPeopleFor.push(people[i]);
//     }
//   }
// }
// console.log(slemanPeopleFor);
