//---------------------------------------
/*
-->Classes in JS:
Class is program-code template for creating objects.
Those objects will have some states(properties/variables) & some behavior(functions/methods) inside it.

*/

//--------------------------------------
class toyotaCar{
    start(){
        console.log("Car Starting.....")
    }

    stop(){
        console.log("Car Stopping.....")
    }

    setBrandName(brand){
        this.brand = brand
    }
}

console.log(typeof toyotaCar)  //-->function
//console.log(toyotaCar)

//----------------------------------------
//Syntax for creating the object from class
//let myObj = new myClass();

let car1 = new toyotaCar();

console.log(typeof car1) //-->object
console.log(car1)
console.log(car1.start()) //Car Starting.....

//-------------------------------------------
//dealing with properties
let car2 = new toyotaCar();

car2.setBrandName("luxury")
console.log(car2)
