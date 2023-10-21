// Object Literal

// function addressMaker(city, state) {
//   const newAddress = { city, state };

//   console.log(newAddress);
// }

// addressMaker("Benin", "Edo");

// =========================================

// Challenge

// function addressMaker(address) {
//   const newAddress = {
//     city: address.city,
//     state: address.state,
//     country: "Nigeria",
//   };
// }

// addressMaker({ city: "Benin", state: "Edo" });

function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "Nigeria",
  };

  console.log(newAddress);
}

addressMaker({ city: "Benin", state: "Edo" });
