# Lesson 11 - Recursion

Recursion is a function that calls or invoke itself.

> Whenever recursion is used, a _base_ condition is required.

Base condition is the condition met to stop the execution of a recurring function, so that it can be exited or do something else.

## Method 1

#### Example

```js
function foo() {
  console.log("foo");
  foo();
}

// Runs foo until maximum call stack is exceeded
foo();
```

## Method 2

#### Example

```js
const foo = function bar() {
  foo();
};

// Runs foo until maximum call stack is exceeded
foo();
```

## Appropriate Method of Recursion

The proper way of doing recursion is to have a base condition. This base condition stops the recurring function from executing and exceeding maximum call stack.

```js
function recurse() {
  if (base_condition) {
    // do something
    return;
  }

  recurse();
}
```

#### Example

```js
function fetchWater(count) {
  if (count === 0) {
    console.log("No more water left");
    return;
  }

  console.log("Fetching Water...");
  fetchWater(count - 1);
}

fetchWater(5);
```
