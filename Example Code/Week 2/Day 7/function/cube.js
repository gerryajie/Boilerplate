const index = require('../index'); // Import index to run rl on this file

// Function to calculate cube volume
function calculateVolumeCube(length) {
  return length ** 3;
}

// Function to input the length
function input() {
  index.rl.question(`Length: `, (length) => {
    if (!isNaN(length) && !index.isEmptyOrSpaces(length)) {
      console.log(`Cube's volume is ${calculateVolumeCube(length)}\n`);
      index.rl.close();
    } else {
      console.log(`Length must be number`);
      input();
    }
  });
}

module.exports = { input }; // Export the input, so the another file can run this code
