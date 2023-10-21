# Lesson 1 - Functions Fundamentals

JavaScript functions is a block of code used for repeating task. Functions should ideally have a name but the name can be exempted. Functions with names can be called or invoked as at when needed.

## Terminologies

- Functions & Methods
- Declaration & Definition
- Arguments & Parameters
- Callback & Higher Order Function

## Functions Declaration

A function can be declared in the following method

#### Example

```js
function printMe() {
  console.log("Printing...");
}

printMe();
```

Functions can take in values and these values are known as parameters.

Parameters are placeholder variables which is passed where the function is declared.

Arguments are values passed when the function is called or invoked.

#### Example 2

```js
// Parameters `text` passed to the function
function printThis(text) {
  console.log(text);
}

// Arguments "Hello World!" passed to the function call
printThis("Hello World!");
```

Functions can be anonymous and declared using expressions

#### Example

```js
const printThis = function (text) {
  console.log(text);
};

printThis("Hello World!");
```

## Default Parameters

Default parameters are safeguard values that aids a function to execute and return information when an argument is not passed to it.

To set a default parameters for a function the name of a param is preceded by `=` and a value.

#### Example

```js
function calc(a = 0, b = 1) {
  return 2 * (a + b);
}

calc(4, 3); // Outputs: 14
```

## Rest Parameters

The rest parameter allows a function to accept an infinite number
of arguments.

To accept an infinite number of arguments `...` is used before the name of the parameter Eg. `...nameOfParam`.

> NOTE: A function can only have one rest parameter. And the rest parameter must be the last parameter of the function.

#### Example

```js
function numberedList(...numbers) {
  console.log(numbers);
}

numberedList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
```
