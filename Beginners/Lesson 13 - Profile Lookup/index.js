//  Profile Lookup Challenge

var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: 2348085321138,
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Amy",
    lastName: "Sanil",
    number: 2348311235808,
    likes: ["Magic", "Tennis", "Harp"],
  },
];

function lookupProfile(arr, name, prop) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].firstName === name) {
      return arr[i][prop] || "No such property";
    }
  }

  return "No such contact";
}

var data = lookupProfile(contacts, "Amy", "likes");

console.log(data); // Outputs: [ 'Magic', 'Tennis', 'Harp' ]
