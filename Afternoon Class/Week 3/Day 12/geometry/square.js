const TwoDimention = require('./twoDimention');

class Square extends TwoDimention {
  constructor(width) {
    super('Square');
    // new TwoDimention('Square')

    this.width = width;
  }

  // Overriding
  calculateArea() {
    super.calculateArea(); // call function in parent class
    return this.width ** 2;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(who);
  calculateCircumference() {
    super.calculateCircumference();
    return this.width * 4;
  }
}

module.exports = Square;
