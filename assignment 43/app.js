"use strict";
function make_great2(magician) {
    let greatMagicians = [];
    for (let i = 0; i < magician.length; i++) {
        greatMagicians.push(magician[i] + `The Great`);
    }
    return greatMagicians;
}
const Magicians3 = ["Usman", "Haseeb", "Wajahat"];
const greatMagicians2 = make_great2(Magicians3);
console.log(Magicians3);
console.log(greatMagicians2);
