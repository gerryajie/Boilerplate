let people = [
  {
    name: 'Yosias Ignatius',
    address: ['Jakarta', 'Denpasar'],
    pets: [
      { name: 'Gery', type: 'Cat' },
      { name: 'Daniel', type: 'Cow' },
    ],
  },
  {
    name: 'Fidoni Agusta',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Dena', type: 'Cat' },
      { name: 'Muhazi', type: 'Cat' },
    ],
  },
  {
    name: 'Fahmi Alfareza',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Syafa', type: 'Cat' },
      { name: 'Yusril', type: 'Cat' },
    ],
  },
];

let magelangPeople = people.filter((person) =>
  person.pets.some((pet) => pet.name === 'Syafa')
);

console.log(magelangPeople);

// let magelangPeopleFor = [];

// for (let i = 0; i < people.length; i++) {
//   for (let j = 0; j < people[i].pets.length; j++) {
//     if (people[i].pets[j].name === 'Dena') {
//       magelangPeopleFor.push(people[i]);
//     }
//   }
// }
// console.log(magelangPeopleFor);
