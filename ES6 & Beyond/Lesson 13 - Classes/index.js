// Classes

class Animal {
  constructor(type, skinColor) {
    this.type = type;
    this.skinColor = skinColor;
  }

  get metaData() {
    return `Type: ${this.type}, Skin Color: ${this.skinColor}`;
  }

  makeNoise(sound = "Loud Sound") {
    console.log(sound);
  }
}

const parrot = new Animal("Parrot", "Blue");

console.log(parrot);

// Outputs: Animal { type: 'Parrot', skinColor: 'Blue' }

// ================================================================

// Sharing Properties

class Cat extends Animal {
  constructor(type, skinColor, tail) {
    super(type, skinColor);
    this.tail = tail;
  }

  makeNoise(sound = "meow") {
    return sound;
  }
}

const cat = new Cat("Cat", "Blue", true);

console.log(cat.makeNoise());
