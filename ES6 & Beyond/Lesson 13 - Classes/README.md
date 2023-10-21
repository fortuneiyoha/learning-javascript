# Lesson 13 - Classes

Classes enhances javascript and enables it to behave in an object oriented way.

## Syntax

1. `class` - This block contains the instances
2. `constructor` - This creates an instance of the class identifier. It accepts the value used to create the object
3. `this` - It references the current constructor props.
4. `get` - This creates a private property
5. `set` - This changes the value of a private property
6. `static` - It creates a function in a class without instantiation
7. `extends` - Inherits the properties of an already existing **class**
8. `super()` - Takes the value passed in the class arguments. Used when `extends` exist

#### Example

```js
class Animal {
  constructor(type, skinColor) {
    this.type = type;
    this.skinColor = skinColor;
  }

  get metaData() {
    return `Type: ${this.type}, Skin Color: ${this.skinColor}`;
  }
}

const parrot = new Animal("Parrot", "Blue");

console.log(parrot); // Outputs: Animal { type: 'Parrot', skinColor: 'Blue' }
```

## Sharing Properties

#### Example

Let's say we want to create another animal object from the above. To do that we'll extend from the `Animal` Object.

```js

```
