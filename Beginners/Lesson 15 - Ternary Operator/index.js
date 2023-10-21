// Ternary Operator

// condition ? statement-if-true : statement-if-false

// Example
function checkEqual(a, b) {
  // Same as :
  // return a === b;

  return a === b ? true : false;
}

console.log(checkEqual(1, 2)); // Outputs: false

// Example - Multiple Conditions
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10)); // Outputs: positive
