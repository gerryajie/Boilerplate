const EventEmitter = require('events'); // Import events

// Make event instance
const my = new EventEmitter();

// Listener
my.on('dena:eka', function (name, age, address) {
  console.log(`You are ${name}, ${age} years old live in ${address}`);
});

// Emitter
my.emit('dena:eka', 'Gerry Pratama', 15, 'Jakarta');
