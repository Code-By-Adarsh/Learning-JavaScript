//function
function ipl2024(){
    console.log("KKR")
}

function ipl2025(){
    console.log("RCB")
}

function ipl2026(){
    console.log("RCB")
}

//Passing value to function
function ipl2027(a){
    console.log(a)
}

function ipl2028(){
    console.log("RCB")

    return "Adarsh";
}

//2nd type function
var ipl2029 = function(){
    console.log("RCB")
}

//3rd type function - Arrow function(ES6)
var ipl2030 = ()=>{
    console.log("RCB")
}

function papa(){
    console.log("Papa")

    function bachha(){
        console.log("Bachha")
    }

   return bachha;
}

//Calling function
ipl2024()
ipl2025()
ipl2026()
ipl2027("RCB")
ipl2028()
console.log(`Boss ${ipl2028()}`)
ipl2029()
ipl2030()
const genericChild = papa()
genericChild()