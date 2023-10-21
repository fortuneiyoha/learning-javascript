// Arrow Functions

// Example [Old Method]
// function add(...nums) {
//   let total = nums.reduce(function (x, y) {
//     return x + y;
//   });

//   console.log(total);
// }

// add(2, 3, 4);

// Example [New Method]
function add(...nums) {
  return nums.reduce((x, y) => x + y);
}

console.log(add(2, 3, 4));
