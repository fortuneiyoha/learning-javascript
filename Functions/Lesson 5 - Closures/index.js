// Lesson 5 - Closures

function outer(x) {
  function inner(y) {
    return x + y;
  }

  return inner;
}

const outerReturn = outer(10);

console.log(outerReturn(2));
