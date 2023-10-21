var collection = {
  1: {
    artist: "Asake",
    album: "Work of Art",
    tracks: ["Amapiano", "Basquiat"],
  },
  2: {
    artist: "Rema",
    album: "Ravers",
    tracks: ["Holiday", "Charms"],
  },
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(updateRecords(1, "album", "Joha"));
