//-------------------------------------
/*
-->Inheritance
Inheritance is passing down properties and methods from parent class to child class.

-->Syntax:
class Parent{
}

class Child extends Parent{
}

-->Note:
If child and parent have same method, child's method will be used(method overriding)
*/

//----------------------------------------
class parent{
    constructor(){
        this.species = "Homo sapiens"
    }

    hello(){
        console.log("Hi! I am your AI Assistant.")
    }

    power(){
        console.log("Power level - 10")
    }
}

class child extends parent{
    gm(){
        console.log("Hi! Beta Good Morning")
    }

    //method overriding
    power(){
        console.log("Power level - 100")
    }
}

let child1 = new child()
console.log(child1)
console.log(child1.hello())
console.log(child1.gm())
console.log(child1.power())
