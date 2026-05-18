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

/*
--> While Loop
Syntax:
initialize;
while(condition){
part of code;
updatation;
}
*/

var i = 1;
while(i<=5){
    console.log("Radhe Radhe");
    i++;
}

/*
--> Do while loop
Syntax :
initialize;
do{
part of code;
updatation;
}while(condition);
*/

i = 1;
do{
    console.log("Radhe Radhe");
    i++;
}while(i<=5);

/*
--> For of loop(generally for string and arrays)
iterator -> character
Syntax:for(let val of strVal){
part of code;
}
*/

str = "Radhe Radhe";
i = 0;
for(let j of str){
    console.log(j);
    i++;
}
console.log("The length of str = ",i);

/*
--> For in loop(generally for objects and arrays)
Syntax : for(let key in objVal){
part of code;
}
*/

var team = {
    name : "RCB",
    captian : "Rajat Patidar",
    championYear : 2025,
    trophy : 1,
    fighter : true,
    fanbase : 1000000000000000
}

for(let i in team){
    console.log(i," : ",team[i]);
}

// Q.1 -> Print all even number from 0 to 100
for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i=0; i<=100; i+=2){
    console.log(i);
}