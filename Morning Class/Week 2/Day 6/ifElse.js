function getScore(value) {
  if (value >= 80) {
    return 'A';
  } else if (value >= 70) {
    return 'B';
  } else if (value >= 60) {
    return 'C';
  } else if (value >= 40) {
    return 'D';
  } else {
    return 'E';
  }
}

console.log(getScore(90));
console.log(getScore(60));
console.log(getScore(30));
