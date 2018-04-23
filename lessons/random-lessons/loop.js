// for loop

/*vfor (ariable initiator;, conintue/stop condition (should I run this code one more time? yes/no);, last second code;) {

}*/

/*var powerRangers = ["blue", "red", "yellow", "pink", "black", "white", "green"];

for (var i = 0; i < powerRangers.length; i++) {
    console.log(powerRangers[i]);
} */

//while loop

/*var playerIsAlive = true

while (playerIsAlive) {
    playRoundOfGame();
} */
/*
var powerRangers = ["blue", "red guy slayed someone with a sword!", "yellow", "pink", "black", "white", "green"];

for (var i = 0; i < 5; i++) {
    console.log(powerRangers[1]);
}

var petNames = ["Nelson Meowndela", "Luna"];

for (var i = 0; i < petNames.length; i++) {
    console.log(petNames[i]);
}
*/
for (var i = 0; i < 15; i++) {
    console.log(i);
    if (i === 15) {
        console.log("We found the answer to life, the universe, and everything!");
        continue;
        console.log("I'm after continue!");
    }
}