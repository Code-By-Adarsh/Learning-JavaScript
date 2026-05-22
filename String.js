//Create string
let person = "Adarsh";
for(let p of person){
    console.log(p);
}

//length of string
console.log(person.length); //6
console.log(typeof(person));

//Indices
console.log(person[5]); //h
console.log(person[9]) //undefined

//Template literal
let specialString = `This is a template literal.`;
console.log(specialString);

const obj = {
    item : "Pen",
    price : 10
};

console.log("The cost of 1",obj.item,"is",obj.price,"rupees.");
console.log(`The cost of 1 ${obj.item} is ${obj.price} rupees.`)

// Escape character
// \n --> for new line
// \t --> tab space
console.log("Adarsh \nMishra");