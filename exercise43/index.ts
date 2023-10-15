//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Create a new array with "the Great" added to magician names
const greatMagicians = makeGreat(magicianNames);

// Call the function to show the original magician names
showMagicians(magicianNames);

// Call the function to show the modified magician names in the new array
showMagicians(greatMagicians);