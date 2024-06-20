// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwiche with the following items: \n");
    items.forEach(function (single) { return console.log("=> ".concat(single)); });
    console.log("\nNow Enjoy Sandwich");
}
Sandwiches("sugar", "egg", "Butter");
Sandwiches("Bread", "Souce");
Sandwiches("sugar", "egg", "Butter", "Bread", "Souce");
