const { questionInt } = require("readline-sync");

const bill = questionInt("Enter the bill amount: ");
const tip = questionInt("Enter the tip amount: ");
console.log("Total amount to be paid: " + (bill * (1+(tip*0.01))))