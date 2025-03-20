const { question, questionInt } = require("readline-sync");

const password = "secret123";
const attempt = question("Enter the password: ");
if (attempt === password) {
    console.log("Acces Granted")
} else {
    console.log("Access Denied!")
}