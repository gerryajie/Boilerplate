const TwoDimention = require('./twoDimention');

class Rectangle extends TwoDimention {
  constructor(width, length) {
    super('Rectangle');
    // new TwoDimention('Square')

    this.width = width;
    this.length = length;
  }

  // Overriding
  calculateArea() {
    super.calculateArea(); // call function in parent class
    return this.width * this.length;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(who);
  calculateCircumference() {
    super.calculateCircumference();
    return (this.width + this.length) * 2;
  }
}

module.exports = Rectangle;
