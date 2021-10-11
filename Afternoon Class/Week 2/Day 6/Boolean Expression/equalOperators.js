// Less strict
let a = 1 == 1; // true
let b = 1 != 1; // false
let e = 1 == '1'; // true

console.log(a);
console.log(b);
console.log(e);

// Strict
let c = 1 === 1; // true
let d = 1 !== 1; // false
let f = 1 === '1'; // false, because different data types

console.log(c);
console.log(d);
console.log(f);
