# Lesson 5 - For of Loop

The `for of` loop is a great addition to javascript. It allows the iteration of elements in an iterable.

#### Example

Let's say we want to iterate through each value in the iterable and add it to the total variable.

```js
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  total += income;
}

console.log(total); // Outputs: 204000
```
