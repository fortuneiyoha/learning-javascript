# Lesson 2 - Arrow function

Arrow functions are functions written with without the `function` keyword.

## Syntax

The parameter parenthesis `()` must be present, followed by an arrow `=>`, and then the return block `{}`

```js
(param) => {
  // returned statement
};
```

## Return

The `return` keyword can be exempted if the block is absent. And if the function has one statement.

#### Example

```js
const multiply = (x, y) => x * y;

console.log(multiply(3, 4)); // Outputs: 12
```

The `return` keyword cannot be exempted if the block is present. And if the function has multiple statement.

#### Example

```js
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(3, 4)); // Outputs: 12
```
