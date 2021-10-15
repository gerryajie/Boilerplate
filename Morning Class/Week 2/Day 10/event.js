const EventEmitter = require('events');
// Initialize an instance because events is a class
const my = new EventEmitter();

// add Listener
my.on('khairul', function (name, age, address) {
  console.log(`You're ${name}, ${age} years old, your city is ${address}`);
});

// Emit a listener
my.emit('khairul', 'Reza', 24, 'Magelang');
