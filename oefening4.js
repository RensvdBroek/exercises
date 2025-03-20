const { questionInt } = require("readline-sync");

const number1 = questionInt("Enter first number ");
const number2 = questionInt("Enter second number ");
if(number1 > number2) {
    console.log("Is the first number greater? true")
}
if(number2 >= number1) {
    console.log("Is the first number greater? False")
}
