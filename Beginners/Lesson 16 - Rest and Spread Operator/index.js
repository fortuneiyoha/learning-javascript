// Rest and Spread Operator

// Rest Operator
const sum = function (...args) {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3, 4));

// Spread Operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1, "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  arr1[0] = "Potato";
})();

console.log(arr2);
