const TwoDimention = require('./twoDimention');

class Square extends TwoDimention {
  constructor(width) {
    super('Square');
    this.width = width;
  }

  // Overridding method
  calculateArea() {
    super.calculateArea(); // Call parent class that closest
    return this.width ** 2;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(`Who you are? ${who}`);
  calculateCircumference() {
    super.calculateCircumference();
    return this.width * 4;
  }
}

module.exports = Square;
