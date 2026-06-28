//------------------------------
/*
-->Constructor:
Constructor() method is:
-automatically invoked by new
-initializes object
*/

//------------------------------
class pc{
    
    constructor(brand,ram){
        this.brand = brand
        this.ram = ram
    }

    start(){
        console.log("PC starting...")
    }

    stop(){
        console.log("PC stopping...")
    }

    
}

let pc1 = new pc("Lenovo",5)
console.log(pc1)

let pc2 = new pc()
console.log(pc2)

pc2.brand = "Asus"
pc2.ram = 8
console.log(pc2)