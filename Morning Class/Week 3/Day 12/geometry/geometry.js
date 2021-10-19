class Geometry {
  constructor(name, type) {
    // Make abstract
    if (this.constructor === Geometry) {
      throw new Error('Cannot instantiate from Abstract Class'); // Because it's abstract
    }

    this.name = name;
    this.type = type;
  }

  hello() {
    console.log(`I'm geometry`);
  }
}

module.exports = Geometry;
