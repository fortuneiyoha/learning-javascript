# Lesson 18 - Class

## Definition

The `class` keyword in ES6 is used to create objects. The `new` keyword is used to instantiate an object.

### Example

```js
// Old method
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet); // outputs: Jupiter

// New method
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet); // outputs: Jupiter

// Example
function makeClass() {
  class Vegetable {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }

  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot", "orange");

console.log(carrot);
```

## Use getters and setters to Control Access to an Object

With a class object, you often want to obtain values of a object and set the value of a property within an object. These are often called "getter" and "setter". To achieve this you'll use `get` and `set`.

`get` - getter functions are meant to simply return or get the value of an object private variable to the user without the user directly accessing the private variable (\_nameOfPrivateVariable).

### Example

```js
class Book {
  constructor(author) {
    this._author = author;
  }

  // getter
  get writer() {
    return this._author;
  }

  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

// ========================================================

// Use getters and setters to Control Access to an Object
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;

// thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
```
