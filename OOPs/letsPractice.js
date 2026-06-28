//-----------------------------------------
//lets practice 1
let data = "Secret Information"
class user{
    constructor(name,email){
        this.name = name
        this.email = email
    }

    viewData(){
        console.log(`Name: ${this.name}`)
        console.log(`Email: ${this.email}`)
        console.log("Data:",data)
    }
}

let obj1 = new user("Adarsh","badboy@gmail.com")
console.log(obj1)
console.log(obj1.viewData())

//-------------------------------------------
//lets practice 2
class admin extends user{
    constructor(name,email){
        super(name,email)
    }

    editData(){
        data = "Very Important Secret Information"
        super.viewData()
    }
}

let admin1 = new admin("Boss","boss@gmail.com");
console.log(admin1)
console.log(admin1.editData())