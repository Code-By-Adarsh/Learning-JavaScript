//Array -> Collections of elements in linear way

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



