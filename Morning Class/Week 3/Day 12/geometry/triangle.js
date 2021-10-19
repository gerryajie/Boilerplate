const TwoDimention = require('./twoDimention');

class Triangle extends TwoDimention {
  constructor(base, height) {
    super('Triangle');
    this.base = base;
    this.height = height;
  }

  // Overridding method
  calculateArea() {
    super.calculateArea(); // Call parent class that closest
    return (this.base * this.height) / 2;
  }

  // Overloading
  // calculateCircumference(who) {
  //   console.log(`Who you are? ${who}`);
  calculateCircumference() {
    super.calculateCircumference();
    return this.base * 3;
  }
}

module.exports = Triangle;
