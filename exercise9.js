const readline = require("readline-sync");
const fruits = ["apple", "banana", "apple", "pear"]
console.log(`Current fruits: ${fruits}`)
const oldfruit = readline.question(`Fruit to replace: `)
const newfruit = readline.question(`New fruit: `);
for (let index = 0; index < fruits.length; index++) {
const fruit = fruits[index]
    if (fruits[index] == oldfruit) {
    fruits[index] = newfruit
}}
console.log(fruits)