var myObj = {
  gift: "cat",
  pet: "parrot",
  bed: "vita",
};

var myAssets = {
  car: "tesla",
  house: "duplex",
  appliance: "fan",
};

function checkForProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else {
    return "Property not found.";
  }
}

console.log(checkForProp(myObj, "gift")); // Outputs: cat
console.log(checkForProp(myAssets, "car")); // Outputs: tesla
