const { timeLog, timeStamp } = require("console");
const fs = require("fs");
const readline = require("readline-sync");

let username = "";
let password = "";

logIn();
function logIn() {
 username = readline.question("Username: ");
    if (fs.existsSync(username + ".txt")){ 
        knownUser();
    } else {
        console.log("Looks like you're a new user, want to make an account? (yes/no): ")
        const newaccount = readline.prompt("yes/no")
         if (newaccount == "yes"){
       const password = readline.questionNewPassword(`To finish creating your account with username: ${username}, enter a new password: `);
     fs.writeFileSync(username + ".txt", password);
     fs.writeFileSync(username + "'s_diary.txt", "");
     // ik had eerst achter de komma geen "" staan. Toen maakte het programma geen file aan. terwijl dit bij mijn vorige versie wel werkte.
         console.log(`Your diary is stored in ${username}'s_diary.txt`) 
         logIn();
        }
     // if (newaccount == "no") {
     // logIn();
     // }   zou kunnen om het programma draaiende te houden. Dit zou ik op elke plek kunnen doen waar het programma nu afsluit.
    }
    }

function knownUser() {
  password = fs.readFileSync(username + ".txt", "utf8");
  // ik snap niet waarom ik hier geen const voor het password mocht zetten.(door let password boven aan toe te voegen werkt t wel) Het is de enige plek waar ik password heb staan. Heeft dit met readfile of met global en local te maken?
  const attempt = readline.question("Enter password: ", { hideEchoBack: true })
  if (attempt === password){
    readOrWrite()
  } else {
    knownUser()
}
    }

    function readOrWrite() {
        const choice = readline.question("Would you like to read or write in your diary? ");
   if (choice === ("write")){
        const write = readline.question("Please enter your text here: ");
        fs.appendFileSync(
          `${username}'s_diary.txt` ,
          `
          ${Date()}

           ${write}
           `
        );
        // Ook snap ik bij de formatting niet wanneer ik ` moet zetten en wanneer niet. Het schrijven op 1 regel gaat me beter af met \n\n. Ik gok dat ` de ruimte geeft voor commands en "" dit nooit doet?
        console.log("Your entry is saved, thank you!")
        done();
    }
    if (choice === ("read")){
        console.log(fs.readFileSync(username + "'s_diary.txt", "utf8"));
        done();
    }
    
  }   

  function done() {
    const areYouDone = readline.keyInYN("Are we done looking?")
    if (areYouDone) {
        console.log(`Thank you for using Secret Diary, good bye!`)
    }
    else {
        readOrWrite();
    } 
  }
