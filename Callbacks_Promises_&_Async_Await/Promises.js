//------------------------------------
/*
-->Promises
Promise is for eventual completion of task. It is an object in js. It is a solution to callback hell.

-->Its three states:
1.Pending-the result is undefined
2.Resolve(Fullfilled)-the result is value 
3.Rejected-the result is error

-->Syntax:
let promise = new Promise((resolve,reject)=>{...})

-->Note:resolve and reject are callbacks provided by js.
*/

//------------------------------------
//Syntax:
/*
let promise = new Promise((resolve,reject)=>{
    console.log("I am promise.")
    //resolve("Adarsh")
    reject("Rony")
})
*/

//-------------------------------------
//fullfilled case

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Data: "+dataId)
//         resolve("Success")
//         if(getNextData){
//            getNextData() 
//         }
//     },8000)
//     })
// }

// var result = getData(123)


//----------------------------------------
//reject case

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         //console.log("Data: "+dataId)
//         reject("Failed")
//         if(getNextData){
//            getNextData() 
//         }
//     },8000)
//     })
// }

// var result = getData(123)


//--------------------------------------------
//for handling resolve case
const getPromise = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I am promise.")
            resolve("Success ho gya bhai")
        },8000)
    })
}

let promise = getPromise()
promise.then((result)=>{
    console.log("Promise successfully fullfilled:",result)
})

//-----------------------------------------------
//for handling reject case
// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am promise.")
//         reject("Failed to fetch dataaaa")
//     })
// }

// let promise = getPromise()
// promise.catch((error)=>{
//     console.log("Promise successfully rejected:",error)
// })