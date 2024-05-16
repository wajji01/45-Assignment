var GuestName = ["Wajahat", "Mustafa", "Ali", "Shayan"];
var donCome = GuestName[2];
console.log("".concat(donCome, " Nh a raha ha"));
GuestName.splice(2, 1, "Arman");
GuestName.forEach(function (fname) { return console.log("Salam ".concat(fname, ", would you like to dinner with me?")); });
