// In simple terms, forEach is a built-in JavaScript method used specifically for arrays. It is a clean and readable way to tell JavaScript, "Go through this list one by one, and do this specific action to every single item

// The Syntax
// yourArray.forEach(function(element, index, array) {
//   // Your code here
// });
// Here is what those parameters mean:

// element (Required): The current item being processed in the array.

// index (Optional): The position (index number) of the current item.

// array (Optional): The entire array that forEach is iterating over.

var arr1 = ["RCB","CSK","MI","LSG","PBKS","GT","KKR","SRH","DC","RR"]

arr1.forEach((team,index)=>{
    console.log(`Number ${index+1} team : ${team}`)
})

//Callback function are the function that passed as a parameter in the forEach loop

//-------------------------------

//lets practice 1
var arr2 = [1,2,3,4,5,6,7,8,9,10]

arr2.forEach((value)=>{
    console.log(`Square of ${value} : ${value*value}`)
})