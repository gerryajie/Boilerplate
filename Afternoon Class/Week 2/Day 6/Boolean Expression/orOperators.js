let a = 1;
let b = 1;
let c = 3;
let d = 3;

if (a === b || c === d) {
  console.log('ab is equal or cd is equal');
} else {
  console.log('ab is not equal or cd is not equal');
}

let e = a === b || c === d; // true
let f = a !== b || c !== d || 'Kevin Marchiano' || 'Daniel';

console.log(e);
console.log(f);
