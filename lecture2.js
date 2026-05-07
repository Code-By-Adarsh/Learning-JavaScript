// Comments
console.log("Comments in JS - Parts of code which not runs");
// single line comment

/*
Multiple line comments 
*/

// Operators
// Arithmetic Operator
let a = 7;
let b = 5;
let c = a + b;
console.log("a = ",a,"& b = ",b);
console.log("a + b = ",c);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b); // Modulus operator -> Remainder
console.log("a ** b = ",a ** b); // Exponentiation operator

// Unary Operator
a++; // a = a + 1;
console.log("a = ",a);

a--; // a = a - 1;
console.log("a = ",a);

console.log("++a = ",++a);

// Assignment Operators
let d = 5; // =
console.log("d = ",d);
d += 5; // d = d + 5
console.log("d = ",d);
// same we use : -=,*=,/=,**=

// Comparison Operators
b = "8";
console.log("a == b ->",a==b);
console.log("a != b ->",a!=b);
console.log("a === b ->",a===b);
console.log("a !== b ->",a!==b);
//In same way we use >,<,>=,<=

// Logical Operator
let cond1 = a == b; //true
let cond2 = a > b; //false
console.log("cond1 && cond2 -> ",cond1 && cond2);
console.log("cond1 || cond2 -> ",cond1 || cond2);
console.log("!(a>b) -> ",!(a>b));