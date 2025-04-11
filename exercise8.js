const readline = require("readline-sync");

const number = [2, 5, 9, 5];
const remove = readline.questionInt(`Enter a number to remove: `)
const indexremove = (element) => element === (remove);
const find = number.findIndex(indexremove)
if (number.includes(remove)) {
    number.splice(find,1)
}
console.log(number)
