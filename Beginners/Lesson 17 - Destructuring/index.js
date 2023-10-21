// Destructuring

// Example
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTomorrow(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES));

// ========================================================

// Destructuring Assignment with Nested Objects
const LOCAL_FORCAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

// ========================================================

// Destructuring Assignment to Assign Variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8,
  b = 6;

(() => {
  "use strict";
  [a, b] = [b, a];
})();

console.log(a);
console.log(b);

// ========================================================

// Destructuring Assignment with the Rest Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// ========================================================

// Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));
