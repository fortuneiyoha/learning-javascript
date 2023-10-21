# Lesson 6 - Callback Function

Callback functions are passed to other functions to execute a task.

#### Example

The `bar` function parameter takes a function as a callback.

```js
function foo(bar) {
  bar();
}

// Method 1
foo(function () {
  console.log("bar");
});

// Method 2
function named() {
  console.log("bar");
}

foo(named);
```

## Callback based on a condition

A callback was termed because, it can be executed based on certain conditions.

#### Example

```js
function foo(bar) {
  const itsNight = false;
  const itsDay = false;

  if (itsNight) {
    bar();
  } else if (itsDay) {
    bar();
  } else {
    console.log("Neither is online");
  }
}

function named() {
  console.log("bar is called");
}

foo(named);
```
