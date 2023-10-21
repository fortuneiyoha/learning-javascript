// Callback Function

// function foo(bar) {
//   bar();
// }

// // Method 1
// foo(function () {
//   console.log("bar");
// });

// // Method 2
// function named() {
//   console.log("bar");
// }

// foo(named);

// ========================================================

function foo(bar) {
  const itsNight = false;
  const itsDay = false;

  if (itsNight) {
    bar();
  } else if (itsDay) {
    bar();
  } else {
    console.log("Neither is online");
  }
}

function named() {
  console.log("bar is called");
}

foo(named);
