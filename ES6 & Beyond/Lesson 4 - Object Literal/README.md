# Lesson 4 - Object Literal

Object literal sets a property and the value of arguments passed in as arguments.

#### Example

```js
function addressMaker(city, state) {
  const newAddress = { city, state };

  console.log(newAddress);
}

addressMaker("Benin", "Edo"); // Outputs: { city: 'Benin', state: 'Edo' }
```
