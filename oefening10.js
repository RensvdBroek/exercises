const { question, questionInt } = require("readline-sync");
const { bold, green } = require('kleur');

const JPYRate = 159.24;
const BRLRate = 6.2088;
const INRRate = 94.0080;
const ZARRate = 19.7579;
const THBRate = 36.399;

console.log(bold().italic("Currency   Full Name           Symbol      Rate"));
console.log(bold().italic("JPY        Japanese yen        ¥           159.24"));
console.log(bold().italic("BRL        Brazilian real      R$          6.2088"));
console.log(bold().italic("INR        Indian rupee        ₹           94.0080"));
console.log(bold().italic("ZAR        South African rand  R           19.7579"));
console.log(bold().italic("THB        Thai baht           ฿           36.399"));

let amount = questionInt(bold().yellow().italic("Enter amount in EUR: "));
let currency = question(bold().yellow().italic("Enter a currency to receive: "));

if(currency == "JPY"){
    console.log(green().bold().underline("You will receive ¥: " + amount * JPYRate))
}
if(currency == "BRL"){
    console.log(green().bold().underline("You will receive R$: "+ amount * BRLRate))
}
if(currency == "INR"){
    console.log(green().bold().underline("You will receive ₹: " + amount * INRRate))
}
if(currency == "ZAR"){
    console.log(green().bold().underline("You will receive R: " + amount * ZARRate))
}
if(currency == "THB"){
    console.log(green().bold().underline("You will receive ฿: " + amount * THBRate))
}