let car : string = "subaru"
let age : number = 25;
let number: number[] = [1,2,3,4];
//string test;
//test 1: equality (true)
console.log("Is car == 'Subaru'? I predict true.");
console.log(car == 'Subaru')//true (case-insensitive)

//test 2: strict equality (False)
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru')// False (case-sensitive)

//test 3: inequality (true)
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota')//true

//test 4: inequality (false)
console.log("Is car !== 'Subaru'? I predict false.");
console.log(car !== 'Subaru')//false (case-insensitive)

//**lowercase Function Tests**

//test 5: Lowercase conversion (true)
console.log("Is car.tolowercase() == 'Subaru'? I predict true.");
console.log(car.toLowerCase() == 'Subaru');//true converted to lower case

//test 6: lowercase conversion(false)
console.log("Is car === car.tolowercase? I predict false.");
console.log(car === car.toLowerCase());//false (original value remains uppercase)

//**numerical tests**
//test 7: equality (true)
console.log("Is age == 25? I predict true.");
console.log(age == 25);//true

//test 8: inequality (false)
console.log("Is age != 30? I predict true.");
console.log(age != 30);//true

//test: 9 Greater than (false)
console.log("Is age > 25? I predict false.");
console.log(age > 25);//false

//test: 10 less than or equal (true)
console.log("Is age <= 25? I predict true.");
console.log(age <= 24);//true

//**logical operators**
//test: 11 And (true)
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);//true both conditions meet

//Test: 12 Or (false)
console.log("Is age > 30 || age < 18? I predict true.");
console.log(age > 30 || age < 18); //False (neither condition meet)

//**Array Tests**
//Test:13 in array(true)
console.log("Is 3 is number? I predict true.");
console.log(3 in number)//true (check for index existance)

//test: 14 not in array(false)
console.log("Is 5 not in numbers? I predict true.");
console.log(5 in number)//true (negation of "in" operator)
