let current_users: string[]= ['saba','muzzi','baber','ahmed','admin']
let new_users: string[] = ['fawad','tooba','afzal','hunain','admin']

new_users.forEach((newUser) => {
    if(
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);
    } else{
        console.log(`${newUser} is availible`)
    }
});