// Pure Function

// function sayGreeting(name) {
//   return `Hello ${name}`;
// }

// sayGreeting("Fortune"); // Outputs: Hello Fortune

// Impure Function
let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`;
}

sayGreeting("Fortune"); // Outputs: Hello Fortune

greeting = "Hola";
sayGreeting("Fortune"); // Outputs: Hola Fortune
