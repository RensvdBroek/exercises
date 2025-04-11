const readline = require("readline-sync");

const nr = [];

nr.push(readline.question(`Enter Number #1: `));
nr.push(readline.question(`Enter Number #2: `));
nr.push(readline.question(`Enter Number #3: `));
nr.push(readline.question(`Enter Number #4: `));
nr.push(readline.question(`Enter Number #5: `));
const positive = (element) => element > 0;
console.log(`You entered ${nr.filter(positive).length} positive numbers.`)