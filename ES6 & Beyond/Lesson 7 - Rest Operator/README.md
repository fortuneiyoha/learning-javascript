# Lesson 7 - Rest Operator

The rest operator is used to get the arguments of a function. Its best use case is when the number of inputs is not known.

#### Example

```js
function add(...nums) {
  return nums.reduce((x, y) => x + y);
}

console.log(add(2, 3, 4));
```
