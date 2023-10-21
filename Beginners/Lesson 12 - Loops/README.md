# Lesson 12 - Loops

Loops in JavaScript are used to iterate through values and run the same code multiple times.

## While loop

A while loop runs a block of code infinitely as long as a condition is true.

### Example

Let's say we have an empty array and we want to add numbers from 0-10. To do this we create a while that checks if an iterator value is equal to the the condition and increment it by one.

```js
var myArray = [];

var i = 0;

while (i < 10) {
  myArray.push(i);
  i++;
}

console.log(myArray);
```

### Do While loop

A `do ... while` loop runs at least once before checking the condition.

#### Example

```js
var myArray = [];
var i = 0;

do {
  myArray.push(i);
  i++;
} while (i < 10);

console.log(myArray);
```

## For Loop

A for loop is a common loop type in JavaScript. It runs a block of code as long as a condition within the expressions are true.

### Syntax

1. First you initial a variable that holds the base condition value
2. Next, you declare the condition to iterate to
3. Lastly, we have the final expression.

```js
for (var i = 0; i < 10; i++) {
  // Runs the code
}
```

### Example

```js
var myArray = [];

for (var i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log(myArray);
```

### Iterate Even / Odd Numbers with a For Loop

`for` loops can be incremented by odd or even numbers.

#### Example [ Even Number ]

```js
var myArray = [];

for (var i = 0; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
```

#### Example [ Odd Number ]

Since the assigned iterator value start from 1, it increments `i` and returns the odd numbers.

```js
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
```

### Count Backwards with a For Loop

A `for` loop can be used to count backwards.

#### Example

```js
var myArray = [];

for (var i = 10; i > 0; i -= 1) {
  myArray.push(i);
}

console.log(myArray);
```

### Iterate Through an Array with a For Loop

#### Example

```js
var myArray = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
  total += myArray[i];
}

console.log(total);
```

### Nesting For Loops

Let's say we have a function that has a single parameter. It's main usage is to to multiply element pass to it.
We can achieve this by nesting `for` loops.

#### Example

```js
function multiplyAll(array) {
  var product = 1;

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);
```
