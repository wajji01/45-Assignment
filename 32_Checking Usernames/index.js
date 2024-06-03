// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["Wajahat", "Mustafa", "Ali", "Aiman", "Laiba"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Faizan", "Ashir", "wajahat", "bisma", "aiman"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (new_one) {
    var our_cond = current_users.some(function (cur_one) { return cur_one.toLowerCase() === new_one.toLowerCase(); });
    if (our_cond) {
        console.log("Sorry ".concat(new_one, " is alredy taken!"));
    }
    else {
        console.log("This user ".concat(new_one, " is available"));
    }
});
