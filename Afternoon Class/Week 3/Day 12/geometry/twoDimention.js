const Geometry = require('./geometry');

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, 'Two Dimention');
    // new Geometry('Square', 'Two Dimention')

    // Make abstract
    if (this.constructor === TwoDimention) {
      throw new Error('Cannot instantiate from Abstract Class'); // Because it's abstract
    }
  }

  // #calculateArea() { // private
  calculateArea() {
    console.log(`${this.name} is calculating area!`);
  }

  // Call the private funtion
  // calArea() {
  //   this.#calculateArea();
  // }

  calculateCircumference() {
    console.log(`${this.name} is calculating area!`);
  }
}

module.exports = TwoDimention;
