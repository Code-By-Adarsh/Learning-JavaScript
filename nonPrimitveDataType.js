var a = [10,20,30,40,50,[60,70,80]]
console.log(a)

a.push(60) // for adding the element in array
console.log(a)

a.pop() // for removing the last element
console.log(a)

console.log("The length of arrary a:",a.length)

for(let b in a){
    console.log(a[b])
}

var b = ["Adarsh",2026,2025.09,true]
for(let a in b){
    console.log(b[a])
}

//higher order function
a.forEach(function(elem){
    console.log("Hello",elem)
})

//--------------------------------

//Object
var team = {
    name : "RCB",
    captian : "Rajat Patidar",
    trophy : 2,
    fighter : true,
    fanbase : 1000000000000000,
    slogan:function(){
        console.log("E sala 3 cup namdu")

        return 18
    },
    championYear1 : [2025,2026],
    obj:{orangeCap:"Virat Kohli",purpleCap:"Bhuvi"}
}

console.log(team)

for(let details in team){
    console.log(`${details} -> ${team[details]}`)
}

console.log(team.slogan())

console.log(team["obj"]["orangeCap"])
console.log(team.obj.purpleCap)

//Important thing--------------------

var a = [
    {user:"Pritam",Age:20},
    {user:"Rohit",Age:21},
    function raj(){
        console.log("Adarsh")

        return 18
    }
]

console.log(a)
console.log(a[1])
console.log(a[1].user)
console.log(a[2]())