const TwoDimention = require('./twoDimention');

class Triangle extends TwoDimention {
  constructor(base, height) {
    super('Triangle');
    // new TwoDimention('Square')

    this.base = base;
    this.height = height;
  }

  // Overriding
  calculateArea() {
    super.calculateArea(); // call function in parent class
    return (this.base * this.height) / 2;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(who);
  calculateCircumference() {
    super.calculateCircumference();
    return this.base * 3;
  }
}

module.exports = Triangle;
