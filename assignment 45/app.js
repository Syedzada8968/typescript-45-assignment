"use strict";
function make_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
;
const mycar = make_car("Toyota", "Corolla", { color: "Silver", year: "2020" });
console.log(mycar);
