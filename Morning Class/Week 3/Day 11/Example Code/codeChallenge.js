const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter((i) => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] > data[j]) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return clean(data);
}

// Should return array
function sortDecending(data) {
  // Code Here
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] < data[j]) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return clean(data);
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
