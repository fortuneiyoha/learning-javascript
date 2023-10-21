// Recursion

function fetchWater(count) {
  if (count === 0) {
    console.log("No more water left");
    return;
  }

  console.log("Fetching Water");
  fetchWater(count - 1);
}

fetchWater(5);
