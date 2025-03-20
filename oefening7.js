const { question, questionInt } = require("readline-sync");

const score = question("Enter your score: ")
if(score <= 100 && score >= 97){
    console.log("A+")
}
if(score <= 96 && score >= 93){
    console.log("A")
}
if(score <= 92 && score >= 90){
    console.log("A-")
}
if(score <= 89 && score >= 87){
    console.log("B+")
}
if(score <= 86 && score >= 83){
    console.log("B")
}
if(score <= 82 && score >= 80){
    console.log("B-")
}
if(score <= 79 && score >= 77){
    console.log("C+")
}
if(score <= 76 && score >= 73){
    console.log("C")
}
if(score <= 72 && score >= 70){
    console.log("C-")
}
if(score <= 69 && score >= 67){
    console.log("D+")
}
if(score <= 66 && score >= 63){
    console.log("D")
}
if(score <= 62 && score >= 60){
    console.log("D-")
}
if(score <= 60 && score >= 0){
    console.log("F-")
}
if(score > 100 || score < 0){
    console.log("Error")
}