// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var UserName = ["Admin", "Wajahat", "Shayan", "Uzair", "Faizan"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
UserName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
