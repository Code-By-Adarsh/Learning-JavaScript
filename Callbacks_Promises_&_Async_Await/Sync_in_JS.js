//-------------------------------------
/*
-->Synchronous
Synchronous means the code runs in particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its exceution.

-->Asynchronous
Due to synchronous programming, somtimes important instructions get blocked due to some previous instructions, which causes a delay in ui. Asynchronous code exceution allows to next instructions immediately and doesn't block the flow.
*/

//---------------------------------------
//Synchronous Programming
console.log("One")
console.log("Two")
console.log("Three")

//------------------------------------------
//Asynchronous Programming
//setTimeout()
function hello(){
    console.log("Hello")
}

//console.log(typeof hello) --->function
//cons.log(typeof hello()) --->undefined

setTimeout(hello,3000)

console.log("One")
console.log("Two")
console.log("Three")