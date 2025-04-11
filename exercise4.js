const readline = require("readline-sync");

var movie = ["Matrix", "Inception", "Titanic"];
const choice = (readline.question(`0 = ${movie[0]}
1 = ${movie[1]}
2 = ${movie[2]}
Enter the index of the movie you'd like to remove: `));
movie.splice((choice), 1)
console.log(`Updated movies: ${movie[0]}, ${movie[1]}`)
