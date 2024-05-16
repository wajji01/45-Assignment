let GuestName: string[] = ["Wajahat", "Mustafa", "Ali", "Shayan"];
let donCome: string = GuestName[2];

console.log(`${donCome} Nh a raha ha`)

GuestName.splice(2, 1, "Arman")

console.log("\n Good News ! We have found a Bigger table for Dinner.");
//adding in start in an arry
GuestName.unshift("Moiz");
//adding in last in an arry
GuestName.push("Aliyan");

let midleNum: number = Math.floor(GuestName.length / 2);
GuestName.splice(midleNum, 0, "Izhan")

console.log("\n updated list of our guest")


GuestName.forEach(fname => console.log(`\n Salam ${fname}, would you like to dinner with me?`));

console.log("\n I can invite only two people for dinner.")

while(GuestName.length > 2){
    let remove = GuestName.pop();
    console.log(`\n Sorry ${remove} you are not invited`)
}

GuestName.forEach(fname => console.log(`\n Salam ${fname}, you are lucky to invite`));
// remove last thing in an arry
GuestName.pop();
GuestName.pop();

console.log("\n Empty List", GuestName);