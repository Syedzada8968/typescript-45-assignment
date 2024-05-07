function make_great2(magician: string[]) :string[] {
   let greatMagicians: string[] = [];
   for (let i =0; i< magician.length; i++) {
    greatMagicians.push(magician[i] +  `The Great`);
   }
   return greatMagicians;
}
const Magicians3: string[]= ["Usman", "Haseeb", "Wajahat"];

const greatMagicians2: string[] = make_great2(Magicians3);
console.log(Magicians3);
console.log(greatMagicians2);