// Default Parameters

function add(numArray = []) {
  let total = 0;

  numArray.forEach((element) => {
    total += element;
  });

  console.log(total);
}

add([2, 3, 5]);
