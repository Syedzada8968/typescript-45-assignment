"use strict";
let magician = ["DON", "Rameez", "Chris"];
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " the Great";
    }
}
make_great(magician);
console.log(magician);
