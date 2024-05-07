"use strict";
function my_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = my_album("Ali", "Rang e muhabbat");
let album2 = my_album("Madad", "Roshan Andhera");
let album3 = my_album("Ayaz", "Mousam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function my_album2(artistName, albumTitle, numberofTracks) {
    return { artistName, albumTitle, numberofTracks };
}
let album4 = my_album2("Ali", "dil hai", 30);
let album5 = my_album2("Madad", "ajeeb kahani", 55);
let album6 = my_album2("Ayaz", "typescript ki coding", 32);
console.log(album4);
console.log(album5);
console.log(album6);
