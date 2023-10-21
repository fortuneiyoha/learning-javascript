# Lesson 15 - Ternary Operator

The ternary operator aids a one line `if-else` expression.

## Syntax

```js
// condition ? statement-if-true : statement-if-false
```

### Example [ if-else ]

```js
function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEqual(1, 2));
```

### Example [ ternary ]

```js
function checkEqual(a, b) {
  // Same as :
  // return a === b;

  return a === b ? true : false;
}

console.log(checkEqual(1, 2));
```

## Use Multiple Conditional (Ternary Operators)

Ternary operators can be nested to check for multiple conditions.

```js
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
```
