//-------------------------------------
/*
-->Error Handling
try-catch

try{
...normal code
}catch(err){ //err is error object
...handling error
}
*/

//-------------------------------------
let a = 5
let b = 10

console.log(a+b)
try{
    console.log(a+c)
}catch(err){
    console.log(err)
}
console.log(a+b)