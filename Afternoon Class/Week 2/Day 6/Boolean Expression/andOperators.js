let a = 1;
let b = 1;
let c = 2;
let d = 2;

if (a === b && c === d) {
  console.log('ab is equal and cd is equal');
} else if (a === b && c !== d) {
  console.log('ab is equal and cd is not equal');
} else if (a !== b && c === d) {
  console.log('ab is not equal and cd is equal');
} else {
  console.log('ab is not equal and cd is not equal');
}

let e = a === b && c === d; // true
let f = a === b && c === d && 'Kevin Marchiano' && 'Daniel';

console.log(e);
console.log(f);
