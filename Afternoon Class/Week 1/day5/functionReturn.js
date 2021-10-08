// Return
function beamReturn(width, length, height) {
  console.log('return: ' + width * length * height);
  return width * length * height;
}

// No return
function beamNoReturn(width, length, height) {
  console.log('no return: ' + width * length * height);
  // return undefined;
}

let beamOne = beamReturn(10, 11, 12);
let beamTwo = beamReturn(13, 14, 15);
console.log('one + two: ' + (beamOne + beamTwo));

let beamThree = beamNoReturn(1, 2, 3);
let beamFour = beamNoReturn(4, 5, 6);
console.log('three + four: ' + (beamThree + beamFour));
