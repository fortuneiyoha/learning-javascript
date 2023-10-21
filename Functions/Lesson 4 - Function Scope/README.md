# Lesson 4 - Function Scope

There are principles to function declarations.

1. Variables declared inside a function block cannot be accessed outside that function.
2. A function can access all variables declared in the global scope, i.e. _(variables defined outside the function)_.
   > This rule is applicable to nested functions

#### Example 1 [function accessing local scope]

The variables declared inside the function are locally scoped, which means they cannot be accessed outside the `doSomething` function.

```js
function doSomething() {
  const x = 10;
  let y = 20;
  var z = 30;

  console.log(x, y, z);
}

doSomething(); // Outputs: 10 20 30
```

#### Example 2 [function accessing global scope]

```js
const x = 10;
let y = 20;
var z = 30;

function doSomething() {
  console.log(x, y, z);
}

doSomething(); // Outputs: 10 20 30
```
