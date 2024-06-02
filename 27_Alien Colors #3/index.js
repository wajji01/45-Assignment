// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// version 1
var alien_color = "green";
console.log("\nVersion 1");
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color === "green") {
    console.log("\nplayer just earned 5 points for shooting the alien.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === "yellow") {
    console.log("\nplayer just earned 10 points for shooting the alien.");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color === "red") {
    console.log("\nplayer just earned 15 points for shooting the alien.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 2
alien_color = "yellow";
console.log("\nVersion 2");
if (alien_color === "green") {
    console.log("\nplayer just earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("\nplayer just earned 10 points for shooting the alien.");
}
else if (alien_color === "red") {
    console.log("\nplayer just earned 15 points for shooting the alien.");
}
// version 3
alien_color = "red";
console.log("\nVersion 3");
if (alien_color === "green") {
    console.log("\nplayer just earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("\nplayer just earned 10 points for shooting the alien.");
}
else if (alien_color === "red") {
    console.log("\nplayer just earned 15 points for shooting the alien.");
}
