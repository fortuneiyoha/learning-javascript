# Lesson 7 - Higher Order Function

A higher order function is a regular function that takes one or more function as an argument and or returns the function as the value of the argument.

## Principles

1. It takes one or more function as an argument
2. It may return a function

> Not all of these condition has to be met

#### Example

```js
function getCapture(camera) {
  camera();
}

getCapture(function () {
  console.log("Canon");
});
```

#### Example

```js
function returnFn() {
  return function () {
    console.log("Returning");
  };
}

returnFn();
```
