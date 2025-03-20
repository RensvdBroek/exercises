const { question, questionInt } = require("readline-sync");

const name = question("Enter your name: ");
const age = questionInt("Enter your age: ");
console.log("Hello, "  + name + "! You are " + age + " years old.");
