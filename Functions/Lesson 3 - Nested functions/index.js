// Nested functions

function outer() {
  console.log("Outer");

  function inner() {
    console.log("Inner");
  }

  inner();
}

outer();
