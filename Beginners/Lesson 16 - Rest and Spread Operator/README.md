# Lesson 16 - Rest and Spread Operator

The `rest` and `spread` operator look similar but have different functionalities.

## Rest Operator

The `rest` operator allows you to create a function that takes a variable number of arguments. The rest operator is `...`

### Example

```js
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));
```

## Spread Operator

The `spread` operator looks just like the `rest` operator, but its function is to expand an already existing array or it spreads out an array.

It can only be used as an argument to a function or an array literal.

```js
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1, "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  arr1[0] = "Potato";
})();

console.log(arr2);
```
