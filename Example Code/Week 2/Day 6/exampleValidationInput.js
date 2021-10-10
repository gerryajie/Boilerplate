/* If we use callback function, we can't add another logic outside the function */

// Import readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate beam volume
function beam(length, width, height) {
  return length * width * height;
}

/* Way 1 */
// Function for inputing length of beam
function inputLength() {
  rl.question(`Length: `, (length) => {
    if (!isNaN(length)) {
      inputWidth(length);
    } else {
      console.log(`Length must be a number\n`);
      inputLength();
    }
  });
}

// Function for inputing width of beam
function inputWidth(length) {
  rl.question(`Width: `, (width) => {
    if (!isNaN(width)) {
      inputHeight(length, width);
    } else {
      console.log(`Width must be a number\n`);
      inputWidth(length);
    }
  });
}

// Function for inputing height of beam
function inputHeight(length, width) {
  rl.question(`Height: `, (height) => {
    if (!isNaN(height)) {
      console.log(`\nBeam: ${beam(length, width, height)}`);
      rl.close();
    } else {
      console.log(`Height must be a number\n`);
      inputHeight(length, width);
    }
  });
}
/* End Way 1 */

/* Alternative Way */
// All input just in one code
function input() {
  rl.question('Length: ', function (length) {
    rl.question('Width: ', (width) => {
      rl.question('Height: ', (height) => {
        if (length > 0 && width > 0 && height > 0) {
          console.log(`\nBeam: ${beam(length, width, height)}`);
          rl.close();
        } else {
          console.log(`Length, Width and Height must be a number\n`);
          input();
        }
      });
    });
  });
}
/* End Alternative Way */

console.log(`Rectangle`);
console.log(`=========`);
inputLength(); // Call way 1
// input(); // Call Alternative Way
