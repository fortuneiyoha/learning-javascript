# Lesson 8 - Pure & Impure Function

## Pure Function

In JavaScript, a pure function is a function that produce the same output for the same input.

#### Example

```js
function sayGreeting(name) {
  return `Hello ${name}`;
}

sayGreeting("Fortune"); // Outputs: Hello Fortune
```

## Impure Function

In JavaScript, a impure function is a function that does not produce the same output for the same input.

#### Example

```js
let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`;
}

sayGreeting("Fortune"); // Outputs: Hello Fortune

greeting = "Hola";
sayGreeting("Fortune"); // Outputs: Hola Fortune
```
