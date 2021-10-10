const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here

  return data;
}

// Should return array
function sortDecending(data) {
  // Code Here

  return data;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
