// Class
class Person {
  // Static property
  static isBreath = true;

  // Constructor is an identity of class (instance property)
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  // Function, class can do something
  // Instance method
  greet() {
    return `${this.name}, ${this.age} years old, live in ${this.address}!`;
  }

  // Call another method inside class (instance)
  greetAndBye() {
    return `${this.greet()} And bye!`;
  }

  // Static method
  static run() {
    return `${this.name} is running!`;
  }

  // Call another method inside class (static)
  static jogging() {
    return this.run();
  }
}

// Add instance method to Person
Person.prototype.kick = function () {
  return `${this.name} kick someone!`;
};

// Add static method to Person
Person.punch = function () {
  return `${this.name} punch someone!`;
};

/* Object (Instance) */
let dhea = new Person('Dhea', 'Padang', 24); // name: Dhea, address: Padang, age: 24
let adi = new Person('Adi', 'Situbondo', 25); // name: Adi, address: Situbondo, age: 25

console.log(adi); // This will be object that you can call it

console.log(dhea.greetAndBye());
console.log(adi.kick());
// console.log(Person.greet()); // It will error

/* Static */
console.log(Person.isBreath); // It will work
// console.log(dhea.isBreath); // It will undefined
console.log(Person.punch()); // It will work
// console.log(adi.run()); // Iw will error
