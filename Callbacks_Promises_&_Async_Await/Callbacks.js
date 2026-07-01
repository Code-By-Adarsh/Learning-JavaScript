//---------------------------------------
//Callback function - are the functions that are passed as a parameter to another function.

//Synchronous Callback
function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,operation){
    return operation(a,b)
}

calculator(4,3,sum)

//-------------------------------------
//Asynchronous Callback
//setTimeout ko ek function chahiye, function ka result nahi. 👍
function greet(a){
    console.log("Hello "+a)
}

//here as callback function demand argument we use arrow function wrapper that is also a callback function
setTimeout(()=>{greet("Rony")},7000)