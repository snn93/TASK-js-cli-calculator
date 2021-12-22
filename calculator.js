const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number1 = prompt("type the first number");
const number2 = prompt("type the second number");
const operation = prompt("type the operation:+,-,*,/");

if (operation == "+") {
  let sum = +number1 + +number2;
  console.log(number1, " ", operation, " ", number2, "=", sum);
}
if (operation == "/") {
  let sum = +number1 / +number2;
  console.log(number1, " ", operation, " ", number2, "=", sum);
}
if (operation == "*") {
  let sum = +number1 * +number2;
  console.log(number1, " ", operation, " ", number2, "=", sum);
}
if (operation == "-") {
  let sum = +number1 - +number2;
  console.log(number1, " ", operation, " ", number2, "=", sum);
}
