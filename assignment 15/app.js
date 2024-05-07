"use strict";
let guesslist = ['ali', 'muneb', 'mubashir', 'tooba'];
for (let i = 0; i < guesslist.length; i++) {
    console.log('I am invited to dinner \n' + guesslist[i] + '\nthankyou\n');
}
let not_present = 'mubashir';
let new_guest = 'arshmaan';
guesslist[2] = new_guest;
for (let i = 0; i < guesslist.length; i++) {
    console.log('I am invited to dinner \n' + guesslist[i] + '\nthankyou\n');
}
console.log(`Mr ${not_present} will not coming tomorrow`);
