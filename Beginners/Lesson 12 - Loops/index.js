// Loops

// While Loop
var myArray = [];

var i = 0;

while (i < 10) {
  myArray.push(i);
  i++;
}

console.log(myArray);

// Do While Loop
var myArray = [];
var i = 0;

do {
  myArray.push(i);
  i++;
} while (i < 10);

console.log(myArray);

// For Loops
var myArray = [];

for (var i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log(myArray);

// For Loop - Even Numbers
var myArray = [];

for (var i = 0; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

// For Loop - Odd Numbers
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

// Count Backwards with a for loop
var myArray = [];

for (var i = 10; i > 0; i -= 1) {
  myArray.push(i);
}

console.log(myArray);

// Iterate Through an Array with a For Loop
var myArray = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
  total += myArray[i];
}

console.log(total);

// Nesting For Loops
function multiplyAll(array) {
  var product = 1;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      product *= array[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);
