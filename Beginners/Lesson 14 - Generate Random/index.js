// Generate Random Fractions
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

// Generate Random Whole Numbers
function randomWholeNum(num) {
  return Math.round(Math.random() * num);
}

console.log(randomWholeNum(30));

// Generate Random Whole Numbers within a Range
function randomRange(minNum, maxNum) {
  return Math.round(Math.random() * (maxNum - minNum + 1)) + minNum;
}

var rangeNum = randomRange(2, 8);

console.log(rangeNum);
