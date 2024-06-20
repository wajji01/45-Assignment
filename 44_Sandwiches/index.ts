// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches(...items:string[]){
    console.log("\nMaking a Sandwiche with the following items: \n");

    items.forEach(single => console.log(`=> ${single}`));

    console.log("\nNow Enjoy Sandwich");

}

Sandwiches("sugar", "egg", "Butter");
Sandwiches("Bread", "Souce");
Sandwiches("sugar", "egg", "Butter","Bread", "Souce");