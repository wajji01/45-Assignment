// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician:string[]){
    magician.forEach(show => console.log(show));
}

let magicians:string[] = ["Harry Potter", "Lucifer", "professor"];

show_magicians(magicians);