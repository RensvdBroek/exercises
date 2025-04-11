const readline = require("readline-sync");

const groceries = [];
groceries.push(readline.question("Enter item to add to grocery list: "));
groceries.push(readline.question("Enter item to add to grocery list: "));
groceries.push(readline.question("Enter item to add to grocery list: "));
console.log(`Your grocery list: ${groceries[0]}, ${groceries[1]}, ${groceries[2]}`);