// Less strict
let a = 1 == 1; // true
let b = 1 != 1; // false
let c = 1 == '1'; // true

console.log(a);
console.log(b);
console.log(c);

// Strict
let d = 1 === '1'; // false
let e = 1 === 1; // true
let f = 1 !== 1; // false

console.log(d);
console.log(e);
console.log(f);
