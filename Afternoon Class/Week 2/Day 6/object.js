let person = {
  name: 'Daniel Togar Harianja',
  address: 'Karawang, West Java',
  age: 22,
  isMarried: false,
};

// print all detail of person
console.log(person);

// print name of person
console.log(person.name);
// Or
console.log(person['name']);

if (person.isMarried) {
  console.log(`${person.name} (${person.age}) has been married`);
} else {
  console.log(`${person.name} (${person.age}) has not been married`);
}
