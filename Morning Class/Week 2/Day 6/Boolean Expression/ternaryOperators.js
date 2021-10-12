let a = 11;

let b = a === 10 ? 'a is 10' : 'a is not 10';
console.log(b);

let name = 'Umami';

name === 'Umam' ? console.log('He is Umam') : console.log('He is not Umam');

let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
