// console

console.log("RCB - IPL 2026 Champion");
console.log("RCB - IPL 2025 Champion");
console.log("Adarsh Mishra");

// variable

King = "Virat Kohli";
console.log(King);
HighestScore = 973;
console.log(HighestScore);
Duck = null;
console.log(Duck);
RetirementYear = undefined;
console.log(RetirementYear);
Choker = false;
console.log(Choker);

fan1 = "Adarsh";
console.log(fan1);

// let,var and const
var age1 = 21; // can be re-declared or update
let age2 = 22; // cannot be re-declared but can be update
const age3 = 23; // cannot be re-declared or update
console.log(age1);

let age4;
age4 = 10;
console.log(age4);

var age5 = 17;
{
    let age5 = 15;
    console.log(age5);
}
age5 = 16;
console.log(age5);

// data types
console.log(typeof(age1));
console.log(typeof(King));
console.log(typeof(Choker));
console.log(typeof(RetirementYear));
console.log(typeof(Duck));
let x = BigInt("100");
console.log(x);
console.log(typeof(x));
let y = Symbol("RCB");
console.log(y);
console.log(typeof(y));

// object
const team = {
    name : "RCB",
    captian : "Rajat Patidar",
    championYear : 2025,
    trophy : 1,
    fighter : true,
    fanbase : 1000000000000000
}
console.log(team);
console.log(typeof(team));
console.log("Captian = ",team.captian);
console.log("Captian = ",team["captian"]);

team.captian = "Virat Kohli";
console.log("Captian = ",team.captian);

team["captian"] = "Faf du plesis";
console.log("Captian = ",team.captian);