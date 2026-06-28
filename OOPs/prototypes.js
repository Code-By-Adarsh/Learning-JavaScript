/*
-->Prototypes in js
A js object is an entity having state and behavior (properties and methods).
Js objects have a special property called prototype.
We can set prototype using _ _ proto _ _

-->Note:
If object and prototype have same method, object's method will be used.
*/

//---------------------------
/*
const student = {
    fullName : "Adarsh Mishra",
    rollNo : 66062,
    address : "Pam, Boisar, Maharashtra",
    percent : '89%',
    printPercent : ()=>{
        console.log(`Student ${this.fullName} has scored ${this.percent} in current exam.`)
    },
}

student.printPercent()

//-->Arrow functions don't have their own this — they inherit this from the surrounding scope (which here is the global/window object, not the student object). So this.fullName and this.percent are both undefined.*/

//--------------------------------------
const student = {
    fullName : "Adarsh Mishra",
    rollNo : 66062,
    address : "Pam, Boisar, Maharashtra",
    percent : '89%',
    printPercent : function(){
        console.log(`Student ${this.fullName} has scored ${this.percent} in current exam.`)
    }
}

student.printPercent()
console.log(student)

//-------------------------------------------
const employee = {
    calcTax : function(){
        console.log("Tax to katega lala")
    }
}

console.log(employee)

const karanArjun = {
    salary : 22000
}

console.log(karanArjun)

//----------------------------------------
//for adding the property of 1 object to another we use syntax : 
//obj1.__proto__ = obj2

karanArjun.__proto__ = employee

karanArjun.calcTax()

//--------------------------------------
//If object and prototype have same method, object's method will be used.

const karanArjun1 = {
    salary : 25000,
    calcTax(){
        console.log("Tera tax nhi katega bete")
    }
}

karanArjun1.__proto__ = employee

console.log(karanArjun1.calcTax())