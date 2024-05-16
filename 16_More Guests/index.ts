let GuestName: string[] = ["Wajahat", "Mustafa", "Ali", "Shayan"];
let donCome: string = GuestName[2];

console.log(`${donCome} Nh a raha ha`)

GuestName.splice(2, 1, "Arman")

console.log("Good News ! We have found a Bigger table for Dinner.");

GuestName.unshift("Moiz");
GuestName.push("Aliyan");

let midleNum: number = Math.floor(GuestName.length / 2);
GuestName.splice(midleNum, 0, "Izhan")

console.log("updated list of our guest")


GuestName.forEach(fname => console.log(`Salam ${fname}, would you like to dinner with me?`));