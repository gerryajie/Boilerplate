// Importing Module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

console.log('Your Full Name\n');
rl.question('What is your first name? ', (firstName) => {
  rl.question('What is your last name? ', (lastName) => {
    fullName(firstName, lastName);

    rl.close();
  });
});

rl.on('close', () => {
  process.exit();
});
