// Import readline
const index = require("../index"); // Import index to run rl on this file

// Function to calculate beam volume
function beam(length, width, height) {
  return length * width * height;
}

/* Way 1 */
// Function for inputing length of beam
function inputLength() {
  index.rl.question(`Length: `, (length) => {
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
  index.rl.question(`Width: `, (width) => {
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
  index.rl.question(`Height: `, (height) => {
    if (!isNaN(height)) {
      console.log(`\nBeam: ${beam(length, width, height)}\n`);
      index.rl.close();
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
  index.rl.question("Length: ", (length) => {
    index.rl.question("Width: ", (width) => {
      index.rl.question("Height: ", (height) => {
        if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
          console.log(`\nBeam: ${beam(length, width, height)} \n`);
          index.rl.close();
        } else {
          console.log(`Length, Width and Height must be a number\n`);
          input();
        }
      });
    });
  });
}
/* End Alternative Way */

module.exports = { input, inputLength }; // Export inputLength and input function, so another file can call it
