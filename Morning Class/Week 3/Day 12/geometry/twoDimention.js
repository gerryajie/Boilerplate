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

  // #calculateArea() { // Private method/function
  calculateArea() {
    console.log(`Calculate ${this.name} Area!`);
  }

  // To call private method
  // callCalArea() {
  //   this.#calculateArea();
  // }

  calculateCircumference() {
    console.log(`Calculate ${this.name} Circumference!`);
  }
}

module.exports = TwoDimention;
