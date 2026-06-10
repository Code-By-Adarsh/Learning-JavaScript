//Strings are immutable

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

//Methods --> These are the built in methods to manipulate a string
let str = " Radhe Radhe";
let str2 = "Tax are very good. Tax is important."

let upperStr = str.toUpperCase();
console.log(upperStr); // for all capital letter

console.log(str.toLowerCase()); // for all smaller letter

console.log(str.trim()); // for removing whitespace for starting and ending

console.log(str.slice(1,6)); // return part of string end part is inclusive

let str1 = " Jay Shree Krishna"
console.log(str.concat(str1)) //for joining the two string
console.log(str + str1) // another way

console.log(str2.replace("T","M")) //for replacing the first occurence of value

// Replace all occurrences of the word "cats" (case-sensitive)
console.log(str2.replaceAll("Tax","Max"))

// If you want to handle case insensitivity, you can use a regular expression. However, you must include the global flag (/g), otherwise JavaScript will throw a TypeError.
// Use the /g (global) and /i (case-insensitive) flags
console.log(str2.replaceAll(/tax/gi,"Max"))

// Use replace() when you only want to change the first occurrence of a word.

// Use replaceAll() when you want to change every single occurrence of a word across the entire string without messing with complex regular expressions.

console.log(str.charAt(1)) //to find the character at the given index