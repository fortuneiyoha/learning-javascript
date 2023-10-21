// Rest Operator

function add(...nums) {
  return nums.reduce((x, y) => x + y);
}

console.log(add(2, 3, 4));
