"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let apple = "apple";
let upercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let cars = ["BMW", "Audi", "Civic"];
// • Tests for equality and inequality with strings
console.log("\nIs apple equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to APPLE");
console.log(apple != "apple");
// • Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting lowerCase");
console.log(upercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting lowerCase");
console.log(upercaseApple.toLowerCase() != "apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n10 is equal to 20");
console.log(ten == twenty);
console.log("\n10 is not equal to 20");
console.log(ten != twenty);
console.log("\n10 is greater than 0");
console.log(ten > 0);
console.log("\n10 is small than 0");
console.log(ten < 0);
console.log("\n10 is small than equal to 5");
console.log(ten <= 5);
console.log("\n10 is greater than equal to 5");
console.log(ten >= 5);
// • Tests using "and" and "or" operators
console.log("\n20 isnot equal to 10 and 20 is greater than 10");
console.log(twenty != ten && twenty > ten);
console.log("\n20 isnot equal to 10 and 20 is greater than 30");
console.log(twenty != ten && twenty > 30);
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n20 is greater than 50 or 20 is not equal to 20");
console.log(twenty > 50 || twenty != 20);
// • Test whether an item is in a array
console.log("\nIs BWM in my cars arry");
console.log(cars.includes("BMW"));
// • Test whether an item is not in a array
console.log("\nIs BWM is not in my cars arry");
console.log(!cars.includes("BMW"));
