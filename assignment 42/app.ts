let magician:string[] = ["DON", "Rameez", "Chris"]

function make_great(magician: string[]){
    for(let i=0; i < magician.length; i++){
        magician[i] = magician[i] + " the Great";
    }
}
make_great(magician);
console.log(magician)