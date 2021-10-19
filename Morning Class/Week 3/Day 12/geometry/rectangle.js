const TwoDimention = require('./twoDimention');

class Rectangle extends TwoDimention {
  constructor(width, length) {
    super('Rectangle');
    this.width = width;
    this.length = length;
  }

  // Overridding method
  calculateArea() {
    super.calculateArea(); // Call parent class that closest
    return this.width * this.length;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(`Who you are? ${who}`);
  calculateCircumference() {
    super.calculateCircumference();
    return (this.width + this.length) * 2;
  }
}

module.exports = Rectangle;
