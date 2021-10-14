let fruits = ['Apple', 'Banana', 'Orange', 'Watermelon', 'Melon', 'Mango'];

console.log(fruits.includes('Apple'));
console.log(fruits.includes('Egg'));

/* Loop */
// Foreach
// fruits.forEach((fruit) => console.log(fruit));
// Map
let newFruits = fruits.map((fruit) => {
  return fruit + 'a';
});
// For
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

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
