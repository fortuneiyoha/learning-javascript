// Functions Fundamentals
//
// A functions is a block of code used for repeating task

// Functions Declaration
//
// Example
function printMe() {
  console.log("Printing...");
}

printMe();

// Example 2
// Parameters `text` passed to the function
function printThis(text) {
  console.log(text);
}

// Arguments "Hello World!" passed to the function call
printThis("Hello World!");

// ========================================================

// Default Parameters
function calc(a = 0, b = 1) {
  return 2 * (a + b);
}

console.log(calc(3, 4));

// ========================================================

// Rest Parameters
function numberedList(...numbers) {
  console.log(numbers);
}

numberedList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
