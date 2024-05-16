let GuestName: string[] = ["Wajahat", "Mustafa", "Ali", "Shayan"];
let donCome: string = GuestName[2];

console.log(`${donCome} Nh a raha ha`)

GuestName.splice(2, 1, "Arman")

GuestName.forEach(fname => console.log(`Salam ${fname}, would you like to dinner with me?`));