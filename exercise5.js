const readline = require("readline-sync");

const number = [];
number.push(readline.question("Enter number #1: "));
number.push(readline.question("Enter number #2: "));
number.push(readline.question("Enter number #3: "));
number.push(readline.question("Enter number #4: "));
console.log(number.reverse());
// kan ook met console.log(`${number[3]}, ${number[2]}, ${number[1]}, ${number[0]}`); 
// Dit is makkelijk om de formatting zo te krijgen als ik wil. Maar misschien is er met de reverse manier ook een manier om formatting te veranderen. Het is in ieder geval voor grotere lijsten of lijsten die veranderen van grootte fijner om reverse te gebruiken.