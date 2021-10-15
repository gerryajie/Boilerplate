const EventEmitter = require('events'); // Import event
const readline = require('readline'); // Import readline

// Make event instance
const my = new EventEmitter();
// Make readline
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
  console.log(`${email} is success to login!`);
  rl.close();
});

// Function to login
function login(email, password) {
  const passwordStoredInDatabase = '123456';

  if (password !== passwordStoredInDatabase) {
    my.emit('login:failed', email); // Pass the email to the listener
  } else {
    // Do something
    my.emit('login:success', email);
  }
}

// Input email and password
rl.question('Email: ', function (email) {
  rl.question('Password: ', function (password) {
    login(email, password); // Run login function
  });
});
