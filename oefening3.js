const { questionInt } = require("readline-sync");

const celsius = questionInt("Enter temperatu(re in Celsuis: ");
console.log("Temperature in Fahrenheit: " + ((celsius * 9 / 5) + 32));