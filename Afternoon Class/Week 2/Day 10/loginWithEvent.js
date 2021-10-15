const EventEmitter = require('events'); // Import events
const readline = require('readline');

// Instance of event
const my = new EventEmitter();
// Make rl
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Listener
my.on('login:failed', function (email) {
  console.log(`${email} is failed to login!`);
  rl.close();
});

my.on('login:success', function (email) {
  console.log(`${email} is success to login`);
  rl.close();
});

// Function to login
function login(email, password) {
  const passwordInDatabase = '123456';

  if (password !== passwordInDatabase) {
    my.emit('login:failed', email);
  } else {
    my.emit('login:success', email);
  }
}

rl.question('Email: ', (email) => {
  rl.question('Password: ', (password) => {
    login(email, password);
  });
});
