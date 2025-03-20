const { question, questionInt } = require("readline-sync");
const { bold, green, red, yellow, blue, cyan } = require('kleur');


number = question("Enter a number: ")
console.log(bold().red(number + bold().yellow().italic(" x")+ bold().blue(" 1") + bold().green().italic(" = ") + bold().cyan(number * 1)));
console.log(bold().cyan().italic(number + bold().red(" x")+ bold().yellow().italic(" 2") + bold().blue(" = ") + bold().green().italic(number * 2)));
console.log(bold().green(number + bold().cyan().italic(" x")+ bold().red(" 3") + bold().yellow().italic(" = ") + bold().blue(number * 3)));
console.log(bold().blue().italic(number + bold().green(" x")+ bold().cyan().italic(" 4") + bold().red(" = ") + bold().yellow().italic(number * 4)));
console.log(bold().yellow(number + bold().blue().italic(" x")+ bold().green(" 5") + bold().cyan().italic(" = ") + bold().red(number * 5)));
console.log(bold().red().italic(number + bold().yellow(" x")+ bold().blue().italic(" 6") + bold().green(" = ") + bold().cyan().italic(number * 6)));
console.log(bold().cyan(number + bold().red().italic(" x")+ bold().yellow(" 7") + bold().blue().italic(" = ") + bold().green(number * 7)));
console.log(bold().green().italic(number + bold().cyan(" x")+ bold().red().italic(" 8") + bold().yellow(" = ") + bold().blue().italic(number * 8)));
console.log(blue().blue(number + bold().green(" x")+ bold().cyan(" 9") + bold().red(" = ") + bold().yellow().italic(number * 9)));
console.log(bold().yellow().italic(number + bold().blue(" x")+ bold().green().italic(" 10") + bold().cyan(" = ") + bold().red().italic(number * 10)));