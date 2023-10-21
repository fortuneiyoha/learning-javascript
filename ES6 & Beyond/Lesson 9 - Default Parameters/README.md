# Lesson 9 - Default Parameters

Default parameters provides optional values that saves error/false checking.

#### Example

Let's say we want to add numbers in an array passed to a function.

The `= []`sets an empty array as the default value.

```js
function add(numArray = []) {
  let total = 0;

  numArray.forEach((element) => {
    total += element;
  });

  console.log(total);
}

add([2, 3, 5]);
```
