# Lesson 8 - Arrow Functions

Arrow functions aids defining function more easily by excluding some of the syntax of a regular function.

> NOTE: Arrow function do not have an instance of `this`

#### Example [Old Method]

Let's say we want to sum the numbers passed as arguments to a function.

```js
function add(...nums) {
  let total = nums.reduce(function (x, y) {
    return x + y;
  });

  console.log(total);
}

add(2, 3, 4);
```

#### Example [New Method]

```js
function add(...nums) {
  return nums.reduce((x, y) => x + y);
}

console.log(add(2, 3, 4));
```
