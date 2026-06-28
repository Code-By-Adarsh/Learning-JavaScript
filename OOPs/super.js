//-----------------------------------------
/*
-->Super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

*/

//---------------------------------------
class parent{
    constructor(name){
        this.species = "Homo sepians"
        this.name = name
    }

    eat(){
        console.log("Eating...")
    }
}

class child extends parent{
    constructor(gender,name){
        super(name)  //to invoke parent constructor
        this.gender = gender
    }

    sleep(){
        super.eat()
        console.log("Sleeping...")
    }
}

let child1 = new child("Male","Adarsh")
console.log(child1)
console.log(child1.sleep())