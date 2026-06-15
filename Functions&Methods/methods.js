// 1. The Return Value (The Dealbreaker)
// map() takes your original array, runs your function on every item, and spits out a completely new array with the transformed items. It doesn't touch the original array.

// forEach() just runs the function for each item and then stops. It returns undefined. If you try to assign its result to a variable, you get nothing.

const numbers = [1, 2, 3];

// Using map()
const doubledWithMap = numbers.map(num => num * 2);
console.log(doubledWithMap); // Output: [2, 4, 6]

// Using forEach()
const doubledWithForEach = numbers.forEach(num => num * 2);
console.log(doubledWithForEach); // Output: undefined

//--------------------------------

// 2. Chainability
// Because map() hands you back a shiny new array, you can immediately chain other array methods onto it. Because forEach() hands you undefined, chaining is impossible.

const numbers1 = [1, 2, 3, 4];

// map() lets you chain!
const result = numbers1
  .map(num => num * 2)      // [2, 4, 6, 8]
  .filter(num => num > 5);  // [6, 8]
console.log(result); 

// forEach() will throw an error if you try to chain
// numbers1.forEach(...).filter(...) => TypeError: Cannot read properties of undefined

//---------------------------------

// 3. Purpose: When to use which?
// Use map() when you want to transform data. If your goal is to take an array of data and convert it into a new array of different data (like extracting just the names from an array of user objects, or doing math on numbers), map() is your best friend.

// Use forEach() when you want to do something with the data (a "side effect"). If you want to save things to a database, log things to the console, modify an external variable, or update the DOM, use forEach().

//---------------------------------------map

var oldArr = [1,2,3,4,5]

var newArr = oldArr.map((element) =>{
    return element*element
})

console.log(oldArr)
console.log(newArr) //[1,4,9,16,25]

//----------------------------------filter

var filteredArray = newArr.filter((number)=>{
    return number>4
})

console.log(filteredArray)

//--------------------------------reduce

var reducedArr = newArr.reduce((res,cur)=>{ //(1,4)
    return res+cur //res = 5
}) 

console.log(reducedArr)


//--------------------------
//lets practice 1
var marks = [23,45,90,67,101,120,45,65,117]
var filteredMark = marks.filter((mark)=>{
    return mark>90;
})
console.log(filteredMark)

//---------------------------
//lets practice 2
var userInput = prompt("Enter n : ")
var userArray = []
for(let n=0; n<userInput; n++){
    userArray[n] = n+1
}
console.log(userArray)

var reducedUserArray = userArray.reduce((res,cur)=>{
    return res*cur
})

console.log(reducedUserArray)