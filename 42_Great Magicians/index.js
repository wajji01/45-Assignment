// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magician) {
    magician.forEach(function (show) { return console.log(show); });
}
;
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
;
var magicians = ["Harry Potter", "Lucifer", "professor"];
var Great = make_great(magicians);
show_magicians(Great);
