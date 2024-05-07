"use strict";
let guesslist = ['ali', 'muneb', 'mubashir', 'tooba'];
// for(let i=0; i<guesslist.length; i++){
//     console.log('I am invited to dinner \n' + guesslist[i] + '\nthankyou\n')
// }
let not_present = 'mubashir';
let new_guest = 'arshmaan';
guesslist[2] = new_guest;
for (let i = 0; i < guesslist.length; i++) {
    console.log('Respected Sir/Madam.\n' + guesslist[i] + '.\n we invited for dinner tomorrow.\n thankyou \n');
}
guesslist.unshift('shaheen', 'sarfraz', 'rizwan');
for (let i = 0; i < guesslist.length; i++) {
    console.log('Respected Sir/Madam.\n' + guesslist[i] + '.\n we invited for dinner tomorrow.we found big table so we dicided to invite three more guest\n thankyou \n');
}
