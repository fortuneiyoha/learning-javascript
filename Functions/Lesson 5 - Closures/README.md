# Lesson 5 - Closures

Closures can be termed nested functions. Closures is the variable and environment that can be executed freely. Variables and arguments passed to closures can be stored and accessed in multiple execution.

#### Example

```js
function outer(x) {
  function inner(y) {
    return x + y;
  }

  return inner;
}

const outerReturn = outer(10);

outerReturn(2);
```
