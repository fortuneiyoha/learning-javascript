# Lesson 3 - Nested functions

The prerequisite knowledge to understanding closures is nested functions.

> NOTE: The concept of understanding closures === The understanding of nested functions and function scope

#### Example

In this example, the `inner` function defined inside the `outer` function is nested. Since `inner` is nested it has to be invoked outside its preceding function to execute.

```js
function outer() {
  console.log("Outer");

  function inner() {
    console.log("Inner");
  }

  inner();
}

outer();
```
