class Address {
  constructor(district, city, province) {
    this.district = district;
    this.city = city;
    this.province = province;
  }
}

/* Class Person */
class Person {
  // Static property
  static isBreath = true;

  // Property/identity that person has
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  // Instance method/function
  greet() {
    return `${this.name}, ${this.age} years old, live in ${this.address.city}!`;
  }

  // Call another method/function
  greetAndBye() {
    return `${this.greet()} And bye!`;
  }

  // Static method
  static run() {
    return `${this.name} is running!`;
  }

  static jogging() {
    return `${this.run()} And walk! `;
  }
}

// Add instance method in Person outside class
Person.prototype.kick = function () {
  return `${this.name} kick someone!`;
};

// Add static method in Person outside class
Person.punch = function () {
  return `${this.name} punch someone!`;
};

/* Object */
let dena = new Person(
  'Dena',
  new Address('Karang Tengah', 'Cianjur', 'Jawa Barat'),
  27
);
let doni = new Person(
  'Doni',
  new Address('Magelang Selatan', 'Magelang', 'Jawa Tengah'),
  22
);

console.log(dena.greetAndBye());
console.log(doni.kick());
// console.log(Person.address); // It will be undefined
// console.log(doni.run()) // It will be error

/* Static */
console.log(Person.isBreath); // The correct way
// console.log(dena.isBreath); // It will be undefined
console.log(Person.punch()); // Run properly
// console.log(dena.run()) // It will be error
