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
];

console.log(
  `${people[0].pets[1].name} is a master of ${people[0].pets[1].type}`
);
