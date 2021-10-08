// With return
function beamReturn(width, length, height) {
  console.log('return: ' + width * length * height); // Usually return no needs console.log, but if you want to debug it you can use it
  return width * length * height;
}

// No return
function beamNoReturn(width, length, height) {
  console.log('no return: ' + width * length * height);
}

let beamOne = beamReturn(1, 2, 3);
let beamTwo = beamReturn(4, 5, 6);
console.log('one + two: ' + (beamOne + beamTwo));

let beamThree = beamNoReturn(7, 8, 9);
let beamFour = beamNoReturn(10, 11, 12);
console.log('three + four: ' + (beamThree + beamFour));
