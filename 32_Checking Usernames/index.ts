// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

let current_users: string[] = ["Wajahat", "Mustafa", "Ali", "Aiman", "Laiba"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users : string[] = ["Faizan", "Ashir", "wajahat", "bisma", "aiman"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

new_users.forEach(new_one => {
    let our_cond = current_users.some(cur_one => cur_one.toLowerCase() === new_one.toLowerCase());

    if(our_cond){
        console.log(`Sorry ${new_one} is alredy taken!`);
    }
    else {
        console.log(`This user ${new_one} is available`);
    }
})