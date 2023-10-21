# Lesson 1 - Template Literals

Template literals in javascript allows the concatenation of strings and interpolation of variables.

Let's say we want to set a user name to a inputted value.

Before ES6, you'd do something like this

#### Example [Old Method]

```js
let word1 = "Fortune";
let word2 = "Iyoha";

const fullName = word1 + " " + word2;

console.log(fullName); // Outputs: Fortune Iyoha
```

After ES6, you'd do something like this

#### Example [New Method]

```js
let word1 = "Fortune";
let word2 = "Iyoha";

const fullName = `${word1} ${word2}`;

console.log(fullName); // Outputs: Fortune Iyoha
```

You'll notice template literals made it easy to concatenate both variables easily using backticks ` `` `
