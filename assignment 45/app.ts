type car ={
    manufacturer:string
    model: string
    [key: string]:any;
}

function make_car(manufacturer: string, model: string, optional: Record<string, any>): car {
     return{
        manufacturer,
        model,
        ...optional
     }
    
 };

 const mycar: car = make_car("Toyota","Corolla", {color: "Silver", year: "2020"})
 console.log(mycar)

 
