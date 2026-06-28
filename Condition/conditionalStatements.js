// If Statements
let age = 22;
if(age >= 18){
    console.log("Ja hira bete dede vote.");
}

if(age < 18){
    console.log("Tu nhi vote de skta bete.");
}

// If-Else Statements
age = 2;

if(age >= 18){
    console.log("Ja hira bete dede vote.");
}else{
    console.log("Tu nhi vote de skta bete.");
}


//Ques 1 -> To find given number even or odd
let number = 9;

if(number%2 == 0){
    console.log("Given number is even.");
}else{
    console.log("Given number is odd.");
}


// Else-If Statements
age = 52;

if(age >= 18 && age <= 30){
    console.log("Beta tu jawaan hai.");
}else if(age < 18){
    console.log("Beta tu abhi bachha hai.");
}else{
    console.log("Arey uncle aap?");
}


// Ternary Operator (Simpler or compact form of if-else)
// Syntax : condition ? value if true : value if false;
age = 18;
age > 18 ? console.log("adult") : console.log("not adult");


// Ques 2 -> Alert + if-else practice
let user = "Adarsh";
if(user != "Ayush"){
    alert("Not Allowed.");
}else{
    console.log("Allowed.");
}


// prompt
let givenNumber = prompt("Enter your number: ");
if(givenNumber%5 == 0){
    console.log("Given number is multiple of 5");
}else{
    console.log("Given number is not multiple of 5.")
}