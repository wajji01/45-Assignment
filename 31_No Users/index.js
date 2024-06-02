// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var UserName = ["Admin", "Wajahat", "Shayan", "Uzair", "Faizan"];
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
function usercheck() {
    if (UserName.length === 0) {
        console.log("\nWe need to find some users! our arry is empty");
    }
    else {
        UserName.forEach(function (oneuser) {
            if (oneuser === "Admin") {
                console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
            }
            else {
                console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
            }
        });
    }
}
usercheck();
UserName = [];
usercheck();
