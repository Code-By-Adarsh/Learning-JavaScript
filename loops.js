/*
--> Loops
Loops are used to execute a piece of code again and again
*/

console.log("Radhe Radhe");

/*
--> For loop
Syntax: for(initialize;stopping cond;updatation){
        part of code;
        }
*/

for(let i=1; i<=5; i++){
    console.log("Radhe Radhe");
}

var number = prompt("Enter your number: ");
let sum = 0;
for(let i=1; i<=number; i++){
    sum += i;
}
console.log("The sum of first ",number,"number : ",sum);