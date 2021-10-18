let fruits = ['Apple', 'Banana', 'Melon', 'Watermelon', 'Chocholate'];

/* The way 1 */
// let temp = fruits[0];
// fruits[0] = fruits[1];
// fruits[1] = temp;

/* The second way */
[fruits[0], fruits[1], fruits[2], fruits[3]] = [
  fruits[1],
  fruits[0],
  fruits[3],
  'Daniel',
];

console.log(fruits);
