# Code Challenge Week 01

# Number 1

Make two functions to calculate volume of geometry (such as cube, beam, tube, and so on)! You just need to choose two of those function! You need to upload to your repository on Gitlab!

Once you've done with it, submit your task (geometry.js) and .gif result of your task program in your repository `GlintsXBinar`, and it should follow this folder structure:

```bash
/Week 1/Code Challenge/geometry.js
/Week 1/Code Challenge/geometry.gif
```

# Number 2

Hello guys, looks like you've learned a little bit about Javascript. Now, I give you a challenge to sharpen your knowledge about what we have learn in this week!

Let's get started!

## Requirements

You must create `greet()` function declaration. That function will return a string and log it to the terminal, and it should be like this:

```bash
Hello, Reza! Looks like you're 20 years old, and you lived in Magelang!
```

Once you've done with it, submit your task (greet.js) and .gif result of your task program in your repository `GlintsXBinar`, and it should follow this folder structure:

```bash
/Week 1/Code Challenge/greet.js
/Week 1/Code Challenge/greet.gif
```

## Source Code

```javascript
// Importing Module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code here!

/*
 * This function is being used to greet people
 * The result of that function should be:
 * "Hello, <name>, looks like you're <age>! And you lived in <city>!"
 *
 * HINT:
 * To get the current year, let say 2020;
 * You can use this code
 *
 * const currentDate = new Date();
 * const currentYear = currentDate.getFullYear();
 * */
function greet(name, address, birthday) {
  // Insert your code here!
}

// DON'T CHANGE
console.log("Goverment Registry\n");
// GET User's Name
rl.question("What is your name? ", (name) => {
  // GET User's Address
  rl.question("Which city do you live? ", (address) => {
    // GET User's Birthday
    rl.question("When was your birthday year? ", (birthday) => {
      greet(name, address, birthday);

      rl.close();
    });
  });
});

rl.on("close", () => {
  process.exit();
});
```
