const readline = require("readline-sync");

const naam = ["Alice", "Bob", "Charlie"]

let starperson = (readline.question(`0 = ${naam[0]}
1 = ${naam[1]}
2 = ${naam[2]}
Enter the index of the name to star: `));
naam[starperson] = (naam[starperson] + " ★");
console.log(`Updated names: ${naam[0]}, ${naam[1]}, ${naam[2]}`)