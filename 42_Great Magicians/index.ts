// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magician:string[]){
    magician.forEach(show => console.log(show));
};

function make_great(magician:string[]){
    return magician.map(name => `The Great ${name}`);
};

let magicians:string[] = ["Harry Potter", "Lucifer", "professor"];

let Great:string[] = make_great(magicians);

show_magicians(Great);