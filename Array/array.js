//Array -> Collections of elements in linear way and mutable
//length,mutable,loop,push,pop,tostring,toreversed,concat,unshift,shift,slice

let arr1 = [17,18,45,7,100]
console.log(arr1)

console.log(arr1.length) //5
console.log(typeof(arr1)) //object
console.log(arr1[0]) //17
console.log(arr1[10]) //undefined

//arrays are mutable
arr1[3] = 333
console.log(arr1) //[17,18,45,333,100]

//looping in array
for(var i of arr1){
    console.log(i)
}

for(var i in arr1){
    console.log(arr1[i])
}

//lets practice 1
var studentMarks = [85,97,44,37,76,60]
var avgMarks = 0
for(let mark of studentMarks){
    avgMarks = avgMarks + mark
}
console.log("Average Marks: "+avgMarks/studentMarks.length)

//lets practice 2
var itemPrice = [250,645,300,900,50]
console.log("Item price before discount: ",itemPrice)

for(var i in itemPrice){
    afterDiscount = itemPrice[i]*90/100
    itemPrice[i] = afterDiscount
}
console.log("Item price after 10% discount: ",itemPrice)

//push() -> add item at the end in existing array
var playerName = ["Chiku","Rajat Bhai","Venki","DDP","Bhuvi","Josh"]
console.log(playerName)
console.log(playerName.push("Clutcher Kunal","David Bhai","Shepherd Bhaiya")) //9 because it return the updated length
console.log(playerName)

//pop() -> remove item from end of existing array and return it 
console.log(playerName.pop()) // shepherd bhaiya
console.log(playerName)

//toString() -> convert the existing array into the string without affecting the original one
console.log(playerName.toString())

//toReversed() -> reverse the array without affecting the original one
console.log(playerName.toReversed())
console.log(playerName)

//conact() ->joins multiple arrays and return result
var arr2 = [1,2,3,4,5]
var arr3 = [6,7,8,9,10]
console.log(arr2.concat(arr3))

//unshift() -> add item at start in the existing array
var chapionCaption = ["Rohit Sharma","Ms Dhoni"]
console.log(chapionCaption)
console.log(chapionCaption.unshift("Rajat Patidar")) // 3
console.log(chapionCaption)

//shift() -> remove the item from the start of existing array
console.log(chapionCaption.shift()) //Rajat Patidar
console.log(chapionCaption)

//slice() ->reurn the piece of array without affecting tha original one
console.log(playerName.slice(-3,7))
console.log(playerName.slice()) //same duplicate of real array

//splice() ->changes the original array(add,remove,replace)
//splice(startidx,noofelement,newelement)
var arr4 = [1,2,3,4,5]
console.log(arr4.splice(4,1,500)) //5
console.log(arr4) //1,2,3,4,500
console.log(arr4.splice(5,0,600))
console.log(arr4)
console.log(arr4.splice(5,0,0))
console.log(arr4)