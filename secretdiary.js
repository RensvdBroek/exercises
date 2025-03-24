const { timeLog, timeStamp } = require("console");
const fs = require("fs");
const { question, questionInt, questionNewPassword, prompt } = require("readline-sync");

const username = question("Username: ");
if (fs.existsSync(username + ".txt")){
  const password = fs.readFileSync(username + ".txt", "utf8");
  const attempt = question("Enter password: ")
  if (attempt === password){
    const choice = question("Would you like to read or write in your diary? ");
    if (choice === ("write")){
        const write = question("Please enter your text here: ");
        fs.appendFileSync(username + "'s_diary.txt", " " + write + Date(), "utf8")
        console.log("Your entry is saved, thank you!")
    }
    if (choice === ("read")){
        console.log(fs.readFileSync(username + "'s_diary.txt", "utf8"));
    }
  } else {
    console.log("Sorry, that's incorrect - bye!")
  }
} else {
    console.log("Looks like you're a new user, want to make an account? (yes/no): ")
   const newaccount = prompt("yes/no")
    if (newaccount == "yes"){
  const password = questionNewPassword("To finish creating your account, enter a new password: ");
fs.writeFileSync(username + ".txt", password, "utf8");
fs.writeFileSync(username + "'s_diary.txt", "utf8");
    console.log("Your diary is stored in " + username + "'s_diary.txt")
console.log("Thanks for using secret diary, please restart the program to log in")
}}