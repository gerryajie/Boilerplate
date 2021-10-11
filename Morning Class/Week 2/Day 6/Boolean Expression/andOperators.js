let a = 5;
let b = 5;
let c = 6;
let d = 6;

if (a === b && c === d) {
  console.log('a, b is equal and c, d is equal');
} else if (a === b && c !== d) {
  console.log('a, b is equal and c, d is not equal');
} else if (a !== b && c === d) {
  console.log('a, b is not equal and c, d is equal');
} else {
  console.log('a, b is not equal and c, d is not equal');
}

let e = 1 === 1 && 1 !== 1;
console.log(e);

let f = 1 === 1 && 2 === 2 && 'Rahmat Adi Wijaya' && 'Sagipul Ahyar';
console.log(f);
