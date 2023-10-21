# Lesson 2 - Destructuring Objects

Destructuring in javascript allows the extraction of properties in objects and flexible usage of them.

#### Example

```js
const personalInformation = {
  firstName: "Fortune",
  lastName: "Iyoha",
  city: "Benin",
  state: "Edo",
};

// Destructuring the properties
const { firstName, lastName } = personalInformation;

console.log(`${firstName} ${lastName}`); // Outputs: Fortune Iyoha

// =============================================

// Assigning the properties to another variable
const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);
```

> When naming identifiers, always follow best practices and scope new identifiers in the same context as previous identifiers.
