var GuestName = ["Wajahat", "Mustafa", "Ali", "Shayan"];
var donCome = GuestName[2];
console.log("".concat(donCome, " Nh a raha ha"));
GuestName.splice(2, 1, "Arman");
console.log("Good News ! We have found a Bigger table for Dinner.");
GuestName.unshift("Moiz");
GuestName.push("Aliyan");
var midleNum = Math.floor(GuestName.length / 2);
GuestName.splice(midleNum, 0, "Izhan");
console.log("updated list of our guest");
GuestName.forEach(function (fname) { return console.log("Salam ".concat(fname, ", would you like to dinner with me?")); });
