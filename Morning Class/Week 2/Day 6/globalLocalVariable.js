// Global variable
let message = 'My name is global';

function hello() {
  // This variable is only running when you call this function
  let message = 'My name is local';

  console.log(message);
}

hello();

// Because message is local variable you can not access
console.log(message);
