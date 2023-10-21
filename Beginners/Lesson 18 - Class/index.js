// // Example
// function makeClass() {
//   class Vegetable {
//     constructor(name, color) {
//       this.name = name;
//       this.color = color;
//     }
//   }

//   return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable("carrot", "orange");

// console.log(carrot);

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
