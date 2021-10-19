const { Rectangle, Square, Triangle } = require('./geometry');

let rectangleOne = new Rectangle(10, 11);
let squareOne = new Square(12);
let triangleOne = new Triangle(13, 14);

// Calculate area
let a = rectangleOne.calculateArea();
let b = squareOne.calculateArea();
let c = triangleOne.calculateArea();
let d = a + b + c;
console.log(d);

// Calculate circumference
let e = rectangleOne.calculateCircumference();
let f = squareOne.calculateCircumference();
let g = triangleOne.calculateCircumference();
let h = e + f + g;
console.log(h);
