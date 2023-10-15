"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician names
const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Modify the magician names to add "the Great"
makeGreat(magicianNames);
// Call the function to show the modified magician names
showMagicians(magicianNames);
