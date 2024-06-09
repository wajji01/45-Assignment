// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    magician.forEach(function (show) { return console.log(show); });
}
;
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
;
var magicians = ["Harry Potter", "Lucifer", "professor"];
var copy_magician = magicians.slice();
var Great = make_great(copy_magician);
console.log("\n Original Arry\n");
show_magicians(magicians);
console.log("\n Copied Arry\n");
show_magicians(Great);
