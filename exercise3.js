const readline = require("readline-sync");

const animal = ["cat", "dog", "bird"];
const choice = (readline.question(`0 = ${animal[0]}
1 = ${animal[1]}
2 = ${animal[2]}
Enter the index of the animal you'd like to replace: `));
animal[choice] = (readline.question(`Enter the new animal: `))
console.log(`Updated animals: ${animal[0]}, ${animal[1]}, ${animal[2]}`);