const readline = require("readline-sync");

const nr = [];

nr.push(readline.question(`Enter Number #1: `));
nr.push(readline.question(`Enter Number #2: `));
nr.push(readline.question(`Enter Number #3: `));
nr.push(readline.question(`Enter Number #4: `));
nr.push(readline.question(`Enter Number #5: `));
const even = (element) => element % 2 == 0;
console.log(`Even numbers: ${nr.filter(even)}`)