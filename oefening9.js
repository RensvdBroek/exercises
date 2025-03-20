const { question, questionInt } = require("readline-sync");
const { bold, green, black, bgWhite } = require('kleur');

age = questionInt(bgWhite().bold().black("Enter your age: "));
if(age < 0 || age > 150){
    console.log(bgWhite().bold().black("Error"))
}
if(age >= 0 && age <=11){
    console.log(bgWhite().bold().black("Your ticket price is: $8"))
}
if(age >= 12 && age <=59){
    console.log(bgWhite().bold().black("Your ticket price is: $12"))
}
if(age >= 60 && age <=150){
    console.log(bgWhite().bold().black("Your ticket price is: $10"))
}