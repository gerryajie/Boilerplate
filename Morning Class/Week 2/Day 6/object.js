let person = {
  name: 'Fahmi Alfareza',
  address: 'Magelang, Central Java',
  isMarried: false,
  age: 24,
};

// It will print detail of person
console.log(person);

// It will print the name of person
console.log(person.name);
// Or
console.log(person['name']);

if (person.isMarried) {
  console.log(person.name + ' has been married');
} else {
  console.log(`${person.name} has not been married`);
}
