const fruits = ['Apple', 'Banana', 'Chocholate', 'Lemon', 'Melon'];

// Loop
// for (let i = 0; i < fruits.length; i++) {
//   fruits[i] = 'a' + fruits[i] + 'b';
// }
// Or
// fruits.forEach((fruit) => console.log(fruit));
// Or
let newFruits = fruits.map((fruit) => {
  return 'a' + fruit + 'b';
});

console.log(newFruits);
console.log(fruits);

// Reverse
fruits.reverse();
console.log(fruits);

// Sort
fruits.sort(); // Ascending
console.log(fruits);
fruits.sort().reverse(); // Descending
console.log(fruits);
